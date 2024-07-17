import { Link } from "wouter";
import DevSiteScreenshot from "../assets/images/project-screenshots/dev-site-screenshot-app.svg";
import GetSchooledScreenshot from "../assets/images/project-screenshots/get-schooled-screenshot.jpg";
import DividerSection from "../components/DividerSection";
import Job from "../components/Job";
import Project from "../components/Project";

import { ReactComponent as RightArrowIcon } from "../assets/icons/arrow-right.svg";
import { ReactComponent as GithubIcon } from "../assets/icons/github.svg";

export default function Home() {
	return (
		<div>
			<div className="mt-24 md:mt-24 mx-4 md:mx-10 pb-16 md:pb-24 text-center">
				<h1 className="font-heading">Hi. I'm Alex.</h1>
				<p className="mt-6 font-body text-md md:text-lg lg:mx-32">
					I'm a software developer from Northborough, Massachusetts. I've been
					writing code professionally since 2015, with the majority of my career
					focused on full stack web technology. I'm especially fond of the React
					and NodeJS ecosystems, and I've worked on a range of different project
					types including eCommerce, data management, and biotechnology.
				</p>
			</div>
			<DividerSection title="projects" doubleSpaced>
				<div className="grid grid-cols-1 md:grid-cols-1 gap-4 md:gap-8 md:mx-4">
					<Project
						name="Personal Website"
						description="My personal development website, which displays my past experience and projects."
						skills={[
							"JavaScript",
							"React",
							"Tailwind CSS",
							"Docker",
							"Digital Ocean",
						]}
						image={DevSiteScreenshot}
					/>
					<Project
						name="Get Schooled"
						description="Digital board game inspired by Aqualin, built on web tech!"
						skills={["JavaScript", "React", "Tailwind CSS"]}
						image={GetSchooledScreenshot}
					/>
					<div className="my-4 flex flex-col md:flex-row justify-center items-center">
						<a
							href="https://github.com/aventide"
							target="_blank"
							rel="noreferrer noopener"
						>
							<button
								type="button"
								className={
									"badge px-10 py-6 text-slate-200 border-white border-4 bg-transparent hover:brightness-110 w-64 mx-4 my-2"
								}
							>
								<GithubIcon className="w-4 h-4 mr-2" />
								<span className="font-bold font-heading">View on Github</span>
								<RightArrowIcon className="w-4 h-4 ml-2" />
							</button>
						</a>
						<Link to="/projects">
							<button
								type="button"
								className={
									"badge px-10 py-6 bg-indigo-500 text-slate-200 border-indigo-500 border-4 hover:brightness-110 w-64 mx-4 my-2"
								}
							>
								<span className="font-bold font-heading">
									View all projects
								</span>
								<RightArrowIcon className="w-4 h-4 ml-2" />
							</button>
						</Link>
					</div>
				</div>
			</DividerSection>
			<DividerSection title="experience" doubleSpaced className="mt-24">
				<div className="mt-4 mb-8 md:mx-4">
					<Job company="wasabi" open />
					<Job company="motifSoftware" />
				</div>
				<div className="mt-8 mb-8 flex flex-col md:flex-row justify-center items-center">
					<Link to="/experience">
						<button
							type="button"
							className={
								"badge px-10 py-6 bg-indigo-500 text-slate-200 border-indigo-500 border-4 hover:brightness-110 w-64 mx-4 my-2"
							}
						>
							<span className="font-bold font-heading">
								View all experience
							</span>
							<RightArrowIcon className="w-4 h-4 ml-2" />
						</button>
					</Link>
				</div>
			</DividerSection>
		</div>
	);
}
