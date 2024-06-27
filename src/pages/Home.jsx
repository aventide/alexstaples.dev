import DividerSection from "../components/DividerSection";
import UnderConstruction from "../components/UnderConstruction";

import { Link } from "wouter";

export default function Home() {
	return (
		<div>
			<div className="mt-24 md:mt-48 mx-4 md:mx-10 pb-16 md:pb-24 text-center">
				<h1 className="font-heading">Hi. I'm Alex.</h1>
				<p className="mt-6 font-body text-md md:text-lg lg:mx-32">
					I'm a software developer from Northborough, Massachusetts. I've been
					writing code professionally since 2015, with the majority of my career
					focused on full stack web technology. I'm especially fond of the React
					and NodeJS ecosystems, and I've worked on a range of different project
					types including eCommerce, data management, and biotechnology.
				</p>
				<br />
				<br />
				<p>
					🚨 See my{" "}
					<Link to="/projects" className="text-indigo-400">
						projects
					</Link>{" "}
					and{" "}
					<Link to="/experience" className="text-indigo-400">
						experience
					</Link>{" "}
					pages while this page is getting built! 🚨
				</p>
			</div>
			<div className="flex justify-center">
				<div className="aspect-square h-96">
					<UnderConstruction small />
				</div>
			</div>
			{/* <DividerSection title="projects" />
			<DividerSection title="experience" /> */}
		</div>
	);
}
