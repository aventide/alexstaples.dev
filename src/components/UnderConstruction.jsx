export default function UnderConstruction({ small }) {
	return (
		<div
			className={`border-white border-2 aspect-square ${
				small ? "under-construction-small" : "under-construction-large"
			}`}
		>
			<div className="h-full flex justify-center items-center ">
				<div
					className={`bg-yellow-300 text-black ${
						small ? "text-xl" : "text-2xl"
					} font-bold ${small ? "p-2" : "p-4"}`}
				>
					UNDER CONSTRUCTION
				</div>
			</div>
		</div>
	);
}
