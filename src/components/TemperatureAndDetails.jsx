import {
	UilArrowUp,
	UilArrowDown,
	UilTemperature,
	UilTear,
	UilWind,
	UilSun,
	UilSunset,
} from '@iconscout/react-unicons';
import { formatToLocalTime, iconUrlFromCode } from "../services/weatherService";

function TemperatureAndDetails({ weather: {
	details, icon, temp, temp_min, temp_max, sunrise, sunset, speed,
	humidity, feels_like, timezone
} }) {
	return (
		<div>
			<div className="flex items-center justify-center py-6 text-xl text-cyan-300/90">
				<p>{details}</p>
			</div>

			<div className="flex items-center justify-between py-3 text-white">
				<img
					src={iconUrlFromCode(icon)}
					alt="clouds"
					className="w-30"
				/>
				<p className="text-5xl">{temp.toFixed()}°</p>

				<div className="flex flex-col space-y-2">
					<div className="flex font-light text-sm items-center justify-center">
						<UilTemperature size={18} className="mr-1" />
						<p>Real feel:</p>
						<span className="font-medium ml-1">{feels_like.toFixed()}°</span>
					</div>
					<div className="flex font-light text-sm items-center justify-center">
						<UilTear size={18} className="mr-1" />
						<p>Humididy:</p>
						<span className="font-medium ml-1">{humidity.toFixed()}%</span>
					</div>
					<div className="flex font-light text-sm items-center justify-center">
						<UilWind size={18} className="mr-1" />
						<p>Wind:</p>
						<span className="font-medium ml-1">{speed.toFixed(1)}km/h</span>
					</div>
				</div>
			</div>

			<div className="flex items-center justify-between space-x-2 text-white text-sm py-3 gap-0.5 w-full">
				<UilSun size={18} />
				<p className="font-extralight whitespace-nowrap">
					Sunrise: <span className="font-normal">{formatToLocalTime(sunrise, timezone).slice(-5)}</span>
				</p>
				<p className="font-extralight whitespace-nowrap">|</p>
				<UilSunset size={18} />
				<p className="font-extralight">
					Sunset: <span className="font-normal">{formatToLocalTime(sunset, timezone).slice(-5)}</span>
				</p>
				<p className="font-extralight">|</p>
				<UilSun size={18} />
				<p className="font-extralight whitespace-nowrap">
					High: <span className="font-normal">{temp_max.toFixed()}°</span>
				</p>
				<p className="font-extralight">|</p>
				<UilSun size={18} />
				<p className="font-extralight whitespace-nowrap">
					Low: <span className="font-normal">{temp_min.toFixed()}°</span>
				</p>
			</div>
		</div>
	);
}

export default TemperatureAndDetails;
