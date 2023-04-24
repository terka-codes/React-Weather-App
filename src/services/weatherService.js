import { DateTime } from "luxon"

const API_KEY = "bf0773e82df31940afd1d14248aa832b"
const BASE_URL = "https://api.openweathermap.org/data/2.5"

// infoType: weather, forecast, onecall, current...
// searchParams: {q: "London,uk", lat: 35, lon: 139}...
const getWeatherData = (infoType, searchParams) => {
    // We create a new "URL" object and store it in a variable called "url". 
    const url = new URL(BASE_URL + "/" + infoType)
    // sets url.serch property to something like this:
    // city=New+York&country=US&units=imperial&appid=abc123
    // searchParams is an object with key value pairs and appids just adds the key
    url.search = new URLSearchParams({ ...searchParams, appid: API_KEY })

    return fetch(url)
        .then(response => response.json())
}

const formatForecastWeather = (data) => {
    let { timezone, daily, hourly } = data
    daily = daily.slice(1, 6).map(day => {
        return {
            title: formatToLocalTime(day.dt, timezone, "ccc"),
            temp: day.temp.day,
            icon: day.weather[0].icon,
        }
    })
    hourly = hourly.slice(1, 6).map(hour => {
        return {
            title: formatToLocalTime(hour.dt, timezone, "hh:mm a"),
            temp: hour.temp.day,
            icon: hour.weather[0].icon,
        }
    })

    return { timezone, daily, hourly }
}

const formattedCurrentWeather = (data) => {
    // destructuring info from data from the API call json
    const {
        coord: { lat, lon },
        main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
        name,
        dt, // current date
        sys: { country, sunrise, sunset },
        wind: { speed },
    } = data

    // destructuring info from data.weather array
    const { main: details, icon } = data.weather[0]

    return { lat, lon, temp, feels_like, temp_min, temp_max, pressure, humidity, name, dt, country, sunrise, sunset, speed, details, icon }
}

/* const getFormattedWeatherData = async (searchParams) => {
    const formattedWeather = await getWeatherData("weather", searchParams)
        .then(data => formattedCurrentWeather(data))

    const { lat, lon } = formattedWeather

    // Calls "onecall" endpoint and an object containing latitude, longitude, and the string "exclude: 'current,minutely,alerts'" and units.
    // The "onecall" property in Openweather stops working sometimes
    const formattedForecastWeather = await getWeatherData("onecall",
        { lat, lon, exclude: "current,minutely,alerts", units: searchParams.units })
        .then(formatForecastWeather)


    return { ...formattedWeather, ...formattedForecastWeather }
} */

// Define function to get weather data
const getFormattedWeatherData = async (searchParams) => {
    // Get current weather data
    const formattedWeather = await getWeatherData("weather", searchParams).then(
        (data) => formattedCurrentWeather(data)
    )

    // Extract latitude and longitude from current weather data
    const { lat, lon } = formattedWeather

    // Try calling "onecall" endpoint first, but it isn't working every time
    let formattedForecastWeather
    try {
        formattedForecastWeather = await getWeatherData("onecall", {
            lat,
            lon,
            exclude: "current,minutely,alerts",
            units: searchParams.units,
        }).then(formatForecastWeather)
    } catch (error) {
        // If "onecall" endpoint fails, use "forecast" endpoint instead
        console.log("onecall API endpoint failed, using forecast endpoint instead")
        formattedForecastWeather = await getWeatherData("forecast", {
            lat,
            lon,
            units: searchParams.units,
        }).then((data) => {
            const timezone = data.city.timezone

            // Get daily weather data from "forecast" endpoint
            const daily = data.list
                .filter((item) => item.dt_txt.includes("12:00:00"))
                .slice(0, 5)
                .map((day) => ({
                    title: formatToLocalTime(day.dt, timezone, "cccc, LLL dd"),
                    temp: day.main.temp,
                    icon: day.weather[0].icon,
                }))

            // Get hourly weather data from "forecast" endpoint
            const hourly = data.list
                .filter((item) => !item.dt_txt.includes("12:00:00"))
                .slice(0, 5)
                .map((hour) => ({
                    title: formatToLocalTime(hour.dt, timezone, "cccc, LLL dd | HH:mm"),
                    temp: hour.main.temp,
                    icon: hour.weather[0].icon,
                }))

            return { timezone, daily, hourly }
        })
    }

    return { ...formattedWeather, ...formattedForecastWeather }
}



const formatToLocalTime = (secs, zone) => {
    // using the Luxon library for the DateTime object
    const dt = DateTime.fromSeconds(secs).setZone(zone)
    const day = dt.toFormat("cccc") // get day name (e.g. Monday)
    const date = dt.toFormat("dd LLL yyyy") // get date (e.g. 24 Apr 2023)
    const time = dt.toFormat("HH:mm") // get time in 24-hour format (e.g. 18:40)

    return `${day}, ${date} | Local time: ${time}`
}



const iconUrlFromCode = (code) => `https://openweathermap.org/img/wn/${code}@2x.png`

export default getFormattedWeatherData

export { formatToLocalTime, iconUrlFromCode }
