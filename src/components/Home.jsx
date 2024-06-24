import UnderConstruction from "./UnderConstruction";

export default function Home() {
	return (
		<div>
			<div className="mt-24 md:mt-48 mx-4 md:mx-10 pb-16 md:pb-48 text-center border-b-2">
				<h1 className="font-heading">Hi. I'm Alex.</h1>
				<p className="mt-6 font-body text-md md:text-lg lg:mx-32">
					I'm a software developer from Northborough, Massachusetts. I've been
					writing code professionally since 2015, with the majority of my career
					focused on full stack web technology. I'm especially fond of the React
					and NodeJS ecosystems, and I've worked on a range of different project
					types including eCommerce, data management, and biotechnology.
				</p>
			</div>
			<div className="mt-16 md:mt-8">
				<h2 className="mb-4 md:mb-6 font-bold text-xl mx-4 md:mx-8 font-heading">
					PROJECTS
				</h2>
				<div className="grid grid-cols:1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-20 mx-4 md:mx-10">
					<UnderConstruction small />
					<UnderConstruction small />
					<UnderConstruction small />
				</div>
			</div>
			<div className="mt-16 md:mt-8">
				<h2 className="mb-4 md:mb-6 font-bold text-xl mx-4 md:mx-8 font-heading">
					EXPERIENCE
				</h2>
				<div className="grid mx-4 md:mx-10">
					<div className="border-white border-2 flex-1 h-72 under-construction-small">
						<div className="h-full flex justify-center items-center ">
							<div className={"bg-yellow-300 text-black text-xl font-bold p-2"}>
								UNDER CONSTRUCTION
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
