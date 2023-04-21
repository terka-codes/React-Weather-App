function Forecast({ title }) {
	return (
		<div>
			<div className="flex items-center justify-start mt-6">
				<p className="text-white font-medium uppercase">{title}</p>
			</div>
			<hr className="my-2" />

			<div className="flex items-center justify-between text-white">
				<div className="flex flex-col items-center justify-center">
					<p className="font-light text-sm">12:01</p>
					<img
						src="https://img.icons8.com/ios/50/000000/clouds.png"
						alt="clouds"
						className="w-10"
					/>
					<p className="font-medium">22°</p>
				</div>

				<div className="flex flex-col items-center justify-center">
					<p className="font-light text-sm">12:01</p>
					<img
						src="https://img.icons8.com/ios/50/000000/clouds.png"
						alt="clouds"
						className="w-10"
					/>
					<p className="font-medium">22°</p>
				</div>

				<div className="flex flex-col items-center justify-center">
					<p className="font-light text-sm">12:01</p>
					<img
						src="https://img.icons8.com/ios/50/000000/clouds.png"
						alt="clouds"
						className="w-10"
					/>
					<p className="font-medium">22°</p>
				</div>

				<div className="flex flex-col items-center justify-center">
					<p className="font-light text-sm">12:01</p>
					<img
						src="https://img.icons8.com/ios/50/000000/clouds.png"
						alt="clouds"
						className="w-10"
					/>
					<p className="font-medium">22°</p>
				</div>

				<div className="flex flex-col items-center justify-center">
					<p className="font-light text-sm">12:01</p>
					<img
						src="https://img.icons8.com/ios/50/000000/clouds.png"
						alt="clouds"
						className="w-10"
					/>
					<p className="font-medium">22°</p>
				</div>
			</div>
		</div>
	);
}

export default Forecast;
