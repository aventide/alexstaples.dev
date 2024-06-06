import UnderConstruction from "./UnderConstruction";

export default function Home() {
	return (
		<div>
			<div className="mt-48 mx-10 pb-48 text-center border-b-2">
				<h1 className="font-heading">Hi. I'm Alex.</h1>
				<p className="mt-6 font-body text-lg lg:mx-32">
					I'm a software developer from Northborough, Massachusetts. I've been
					writing code professionally since 2015, with the majority of my career
					focused on full stack web technology. I'm especially fond of the React
					and NodeJS ecosystems, and I've worked on a range of different project
					types including eCommerce, data management, and biotechnology.
				</p>
			</div>
			<div className="mt-24">
				<h2 className="mb-6 font-bold text-xl mx-8 font-heading">PROJECTS</h2>
				<div className="grid grid-cols:1 md:grid-cols-2 lg:grid-cols-3 gap-20 mx-10">
					<UnderConstruction small />
					<UnderConstruction small />
					<UnderConstruction small />
				</div>
			</div>
			<div className="mt-24">
				<h2 className="mb-6 font-bold text-xl mx-8 font-heading">EXPERIENCE</h2>
				<div className="grid mx-10">
					<div className="border-black dark:border-white border-2 flex-1 h-72 under-construction-small" />
				</div>
			</div>
		</div>
	);
}
