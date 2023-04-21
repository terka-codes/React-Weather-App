import {
	UilArrowUp,
	UilArrowDown,
	UilTemperature,
	UilTear,
	UilWind,
	UilSun,
	UilSunset,
} from '@iconscout/react-unicons';

function TemperatureAndDetails() {
	return (
		<div>
			<div className="flex items-center justify-center py-6 text-xl text-cyan-300/90">
				<p>Cloudy or whatever</p>
			</div>

			<div className="flex items-center justify-between py-3 text-white">
				<img
					src="https://img.icons8.com/ios/50/000000/clouds.png"
					alt="clouds"
					className="w-20"
				/>
				<p className="text-5xl">34°</p>

				<div className="flex flex-col space-y-2">
					<div className="flex font-light text-sm items-center justify-center">
						<UilTemperature size={18} className="mr-1" />
						<p>Real feel:</p>
						<span className="font-medium ml-1">32°</span>
					</div>
					<div className="flex font-light text-sm items-center justify-center">
						<UilTear size={18} className="mr-1" />
						<p>Humididy:</p>
						<span className="font-medium ml-1">65%</span>
					</div>
					<div className="flex font-light text-sm items-center justify-center">
						<UilWind size={18} className="mr-1" />
						<p>Wind:</p>
						<span className="font-medium ml-1">11km/h</span>
					</div>
				</div>
			</div>

			<div className="flex items-center justify-between space-x-2 text-white text-sm py-3 gap-0.5 w-full">
				<UilSun size={18} />
				<p className="font-extralight whitespace-nowrap">
					Sunrise: <span className="font-normal">6:00</span>
				</p>
				<p className="font-extralight whitespace-nowrap">|</p>
				<UilSunset size={18} />
				<p className="font-extralight">
					Sunset: <span className="font-normal">18:00</span>
				</p>
				<p className="font-extralight">|</p>
				<UilSun size={18} />
				<p className="font-extralight whitespace-nowrap">
					Sunrise: <span className="font-normal">20°</span>
				</p>
				<p className="font-extralight">|</p>
				<UilSun size={18} />
				<p className="font-extralight whitespace-nowrap">
					Sunrise: <span className="font-normal">13°</span>
				</p>
			</div>
		</div>
	);
}

export default TemperatureAndDetails;
