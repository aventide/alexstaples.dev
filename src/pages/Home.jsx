import { Link } from "wouter";
import Headshot from "../assets/images/headshot.jpg";
import text from "../assets/text/resume.json";
import DividerSection from "../components/DividerSection";
import Job from "../components/Job";
import Project from "../components/Project";
import ResumeDownloadButton from "../components/ResumeDownloadButton";
import projects from "../data/projects";

import { ReactComponent as RightArrowIcon } from "../assets/icons/arrow-right.svg";
import { ReactComponent as GithubIcon } from "../assets/icons/github.svg";
import { ReactComponent as MailIcon } from "../assets/icons/mail.svg";

// jobs in resume.json are listed newest first
const latestJobs = Object.keys(text.jobs).slice(0, 3);
const featuredProjects = projects.slice(0, 3);

export default function Home() {
	return (
		<div>
			<div className="mt-16 md:mt-20 mx-4 md:mx-10 pb-16 md:pb-24 text-center">
				<img
					src={Headshot}
					alt="Alex Staples"
					className="mx-auto mb-8 w-32 h-32 md:w-40 md:h-40 rounded-full object-cover ring-4 ring-indigo-500 ring-offset-4 ring-offset-[#0f172a]"
				/>
				<h1 className="font-heading">Alex Staples</h1>
				<p className="mt-3 font-heading font-bold text-sm md:text-base uppercase tracking-widest text-indigo-300">
					<span className="block sm:inline whitespace-nowrap">
						Senior Front End Engineer
					</span>
					<span className="hidden sm:inline"> · </span>
					<span className="block sm:inline mt-1 sm:mt-0 whitespace-nowrap">
						Greater Boston Area
					</span>
				</p>
				<div className="mt-8 max-w-2xl mx-auto font-body text-base md:text-lg leading-relaxed text-slate-300 space-y-5 text-pretty text-left">
					<p>
						I've been building for the web professionally since 2015, mostly in
						React and TypeScript. These days I'm at{" "}
						<a
							href="https://trivelta.com"
							target="_blank"
							rel="noreferrer noopener"
							className="text-indigo-300 underline underline-offset-4 hover:text-indigo-100"
						>
							Trivelta
						</a>
						, building the sportsbook for their white-label iGaming platform.
						Before that I built cloud storage operations tools at{" "}
						<a
							href="https://wasabi.com"
							target="_blank"
							rel="noreferrer noopener"
							className="text-indigo-300 underline underline-offset-4 hover:text-indigo-100"
						>
							Wasabi
						</a>
						, spent a few years in UX consulting, and got my start in enterprise
						network performance management.
					</p>
					<p>
						Developer experience is my favorite kind of problem. I love making
						codebases faster and friendlier to work in. Outside of work I make
						2D games with PixiJS, and I'm into hockey, cooking, and nature
						walks.
					</p>
				</div>
				<div className="mt-8 mx-auto max-w-md grid grid-cols-3 gap-2 sm:gap-3">
					<a
						href="https://github.com/aventide"
						target="_blank"
						rel="noreferrer noopener"
						className="badge w-full px-2 py-4 whitespace-nowrap bg-slate-800 border-slate-700 text-slate-200 hover:brightness-125"
					>
						<GithubIcon className="w-4 h-4 mr-2" />
						<span className="font-bold font-heading">GitHub</span>
					</a>
					<ResumeDownloadButton
						label="Resume"
						className="w-full px-2 py-4 bg-slate-800 border-slate-700 text-slate-200 hover:brightness-125"
					/>
					<a
						href="mailto:ajstaples@gmail.com"
						className="badge w-full px-2 py-4 whitespace-nowrap bg-slate-800 border-slate-700 text-slate-200 hover:brightness-125"
					>
						<MailIcon className="w-4 h-4 mr-2" />
						<span className="font-bold font-heading">Email</span>
					</a>
				</div>
			</div>
			<DividerSection title="projects" doubleSpaced>
				<ul className="mt-4 mb-8 md:mx-4 grid grid-cols-1 gap-4 md:gap-8">
					{featuredProjects.map((project) => (
						<Project key={project.name} {...project} />
					))}
				</ul>
				<div className="mt-8 mb-8 flex justify-center">
					<Link
						to="/projects"
						className="badge px-5 py-4 bg-slate-800 border-slate-700 text-slate-200 hover:brightness-125"
					>
						<span className="font-bold font-heading">View all projects</span>
						<RightArrowIcon className="w-4 h-4 ml-2" />
					</Link>
				</div>
			</DividerSection>
			<DividerSection title="experience" doubleSpaced className="mt-24">
				<div className="mt-4 mb-8 md:mx-4 grid grid-cols-1 gap-4 md:gap-8">
					{latestJobs.map((company) => (
						<Job key={company} company={company} />
					))}
				</div>
				<div className="mt-8 mb-8 flex justify-center">
					<Link
						to="/experience"
						className="badge px-5 py-4 bg-slate-800 border-slate-700 text-slate-200 hover:brightness-125"
					>
						<span className="font-bold font-heading">View all experience</span>
						<RightArrowIcon className="w-4 h-4 ml-2" />
					</Link>
				</div>
			</DividerSection>
		</div>
	);
}
