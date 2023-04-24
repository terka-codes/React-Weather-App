import "./App.css"
import UilReact from "@iconscout/react-unicons/icons/uil-react"
import TopButtons from "./components/TopBUttons"
import Inputs from "./components/Inputs"
import TimeAndLocation from "./components/TimeAndLocation"
import TemperatureAndDetails from "./components/TemperatureAndDetails"
import Forecast from "./components/Forecast"
import getFormattedWeatherData from "./services/weatherService"
import { useEffect, useState } from "react"

function App() {

	const [query, setQuery] = useState({ q: "prague" })
	const [units, setUnits] = useState("metric")
	const [weather, setWeather] = useState(null)

	useEffect(() => {
		const fetchWeather = async () => {
			await getFormattedWeatherData({ ...query, units })
				.then((data) => setWeather(data))

		}

		fetchWeather()
	}, [query, units]) // chnage on location or units change

	const [backgroundImage, setBackgroundImage] = useState("")

	useEffect(() => {
		setBackground().then((url) => setBackgroundImage(url))
	}, [weather, units])

	const setBackground = async () => {
		try {
			const response = await fetch(
				`https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=${weather.details}`
			)
			const data = await response.json()
			const backgroundImageUrl = data.urls.regular;
			return backgroundImageUrl;
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<div
			className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-cover bg-center`}
			style={{
				background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat"
			}}
		>
			<TopButtons
				setQuery={setQuery}
			/>
			<Inputs
				setQuery={setQuery}
				units={units}
				setUnits={setUnits}
			/>

			{
				weather && (
					<div>
						<TimeAndLocation weather={weather} />
						<TemperatureAndDetails weather={weather} />
						<Forecast
							title="hourly forecast"
							items={weather.hourly}
						/>
						<Forecast
							title="daily forecast"
							items={weather.daily}
						/>
					</div>
				)
			}
		</div >
	)
}

export default App
