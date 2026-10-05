import { Link } from "wouter";
import Headshot from "../assets/images/headshot.jpg";
import DevSiteScreenshot from "../assets/images/project-screenshots/dev-site-screenshot-app.svg";
import GetSchooledScreenshot from "../assets/images/project-screenshots/get-schooled-screenshot.jpg";
import text from "../assets/text/resume.json";
import DividerSection from "../components/DividerSection";
import Job from "../components/Job";
import Project from "../components/Project";

import { ReactComponent as RightArrowIcon } from "../assets/icons/arrow-right.svg";
import { ReactComponent as GithubIcon } from "../assets/icons/github.svg";
import { ReactComponent as MailIcon } from "../assets/icons/mail.svg";
import { ReactComponent as UserIcon } from "../assets/icons/user.svg";

// jobs in resume.json are listed newest first
const latestJobs = Object.keys(text.jobs).slice(0, 3);

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
          <Link
            to="/resume"
            className="badge w-full px-2 py-4 whitespace-nowrap bg-slate-800 border-slate-700 text-slate-200 hover:brightness-125"
          >
            <UserIcon className="w-4 h-4 mr-2" />
            <span className="font-bold font-heading">Resume</span>
          </Link>
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
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4 md:gap-8 md:mx-4">
          <Project
            name="Personal Website"
            description="My personal website, which displays my recent projects and past experiences as a developer."
            skills={[
              "JavaScript",
              "React",
              "Tailwind CSS",
              "Docker",
              "Digital Ocean",
            ]}
            image={DevSiteScreenshot}
            actions={[{ label: "View demo", href: "https://alexstaples.dev" }]}
          />
          <Project
            name="Get Schooled"
            description="Digital board game inspired by Aqualin, with multiple game modes. Built on web technologies!"
            skills={["JavaScript", "React", "Tailwind CSS", "DaisyUI", "Surge"]}
            image={GetSchooledScreenshot}
            actions={[
              { label: "View demo", href: "https://get-schooled.surge.sh" },
            ]}
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
                  "badge px-10 py-6 bg-slate-100 text-black hover:brightness-110 w-64 mx-4 my-2"
                }
              >
                <GithubIcon className="w-4 h-4 mr-2" />
                <span className="font-bold font-heading">Github</span>
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
          {latestJobs.map((company) => (
            <Job key={company} company={company} />
          ))}
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
