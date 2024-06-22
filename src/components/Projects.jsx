import UnderConstruction from "./UnderConstruction";

export default function Projects() {
	return (
		<div>
			<div className="mt-8 mb-2 flex items-center flex-col text-center">
				<h1 className="font-heading font-bold my-4 inline-block text-2xl underline underline-offset-2">
					PROJECTS
				</h1>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 mt-12 mx-4 md:mx-10">
				<UnderConstruction />
				<UnderConstruction />
			</div>
		</div>
	);
}
