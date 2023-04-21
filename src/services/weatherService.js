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

const getFormattedWeatherData = async (searchParams) => {
    const formattedWeather = await getWeatherData("weather", searchParams)
        .then(data => formattedCurrentWeather(data))

    const { lat, lon } = formattedWeather

    // Calls "onecall" endpoint and an object containing latitude, longitude, and the string "exclude: 'current,minutely,alerts'".
    const formattedForecastWeather = await getWeatherData("onecall",
        { lat, lon, exclude: "current,minutely,alerts" })

    return formattedWeather


}

export default getFormattedWeatherData
