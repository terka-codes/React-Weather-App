import { iconUrlFromCode } from "../services/weatherService";

function Forecast(props) {
	const { title, items } = props
	return (
		<div className="mb-10">
			<div className="flex items-center justify-start mt-6">
				<p className="text-white font-medium uppercase">{title}</p>
			</div>
			<hr className="my-2" />

			<div className="flex items-center justify-between text-white">
				{items.map(item => {
					return (
						<div className="flex flex-col items-center justify-center" key={item.title}>
							<p className="font-light text-sm">{(item.title).slice(-5)}</p>
							<img
								src={iconUrlFromCode(item.icon)}
								alt="clouds"
								className="w-14"
							/>
							<p className="font-medium">{(item.temp).toFixed()}°</p>
						</div>
					)
				})}

			</div>
		</div>
	);
}

export default Forecast;
