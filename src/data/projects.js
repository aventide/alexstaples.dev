import AgentSkillsImage from "../assets/images/project-screenshots/agent-skills.webp";
import GetSchooledImage from "../assets/images/project-screenshots/get-schooled.webp";
import KEMMCareImage from "../assets/images/project-screenshots/kemm-care.webp";
import MeteorBlocksImage from "../assets/images/project-screenshots/meteor-blocks.webp";
import PersonalWebsiteImage from "../assets/images/project-screenshots/personal-website.webp";
import ResumeTailorRaycastImage from "../assets/images/project-screenshots/resume-tailor-raycast.webp";
import StillroomImage from "../assets/images/project-screenshots/stillroom.webp";

// listed in display order; the home page shows the first three
const projects = [
	{
		name: "Meteor Blocks",
		description:
			"A falling-block puzzle game on an engine I wrote by hand in PixiJS and TypeScript: block descent, selection, swapping, and launching are all mine. For the demo, I used AI to build the interface and five themed worlds on top of it, each with its own art, gravity, and launch goal, while changing the engine as little as possible.",
		skills: ["TypeScript", "PixiJS", "HTML Canvas", "Vite", "Surge"],
		image: MeteorBlocksImage,
		actions: [
			{ label: "View demo", href: "https://meteor-blocks-demo.surge.sh" },
			{
				label: "Source",
				href: "https://github.com/aventide/pixi-meteor-blocks/tree/demo",
			},
		],
	},
	{
		name: "Stillroom",
		description:
			"A cozy, mobile-first background noise app for sleep and focus. White, pink, brown, grey, and blue noise, plus six nature scenes like rain and a night train, are all synthesized live in the browser with Web Audio worklets. No recordings, downloads, or accounts, and no framework or build step either.",
		skills: ["JavaScript", "Web Audio API", "AudioWorklet", "CSS", "Surge"],
		image: StillroomImage,
		actions: [
			{ label: "View demo", href: "https://stillroom.surge.sh" },
			{ label: "Source", href: "https://github.com/aventide/stillroom" },
		],
	},
	{
		name: "Resume Tailor for Raycast",
		description:
			"A Raycast extension that tailors my resume and cover letter to the job post open in my browser. It drives the Claude Code and Codex CLIs over a markdown knowledge base of my career, with grounding checks that reject any employer, date, metric, or skill the knowledge base can't back up, then scores the PDF against the post's ATS keywords. Covered by about 480 tests.",
		skills: ["TypeScript", "React", "Raycast", "Claude Code", "Vitest"],
		image: ResumeTailorRaycastImage,
	},
	{
		name: "agent-skills",
		description:
			"My own skills for AI coding agents like Claude Code. The first, build-booklet, turns a project or feature into a LEGO-manual-style booklet for building it by hand, then coaches you through it with next steps, hints, and checks on your work.",
		skills: ["Claude Code", "Agent Skills", "Shell Scripting"],
		image: AgentSkillsImage,
		actions: [
			{ label: "Source", href: "https://github.com/aventide/agent-skills" },
		],
	},
	{
		name: "Personal Website",
		description:
			"The site you're on right now. My work history lives in a single JSON file that feeds both these pages and the downloadable PDF resume, so the two never drift apart. It's built with React, Vite, and Tailwind, and ships as a Docker container served by nginx on DigitalOcean.",
		skills: ["JavaScript", "React", "Tailwind CSS", "Docker", "Digital Ocean"],
		image: PersonalWebsiteImage,
		actions: [{ label: "View demo", href: "https://alexstaples.dev" }],
	},
	{
		name: "Get Schooled",
		description:
			"A mobile-first take on the board game Aqualin. One player scores by grouping sea creatures of the same color, the other by grouping the same animal. Play solo against a computer opponent, or pass one phone back and forth in tabletop mode.",
		skills: ["JavaScript", "React", "Tailwind CSS", "DaisyUI", "Surge"],
		image: GetSchooledImage,
		actions: [{ label: "View demo", href: "https://get-schooled.surge.sh" }],
	},
	{
		name: "KEMM Care Website",
		description:
			"Website for KEMM Care, a staffing agency that places nurses and allied health professionals in travel and per diem assignments across the US. Alongside the marketing pages, it includes a searchable job board, an online application with resume upload, and a password-protected admin area where staff post openings and review applicants.",
		skills: ["HTML", "CSS", "JavaScript", "JQuery", "Node.js", "MySQL"],
		image: KEMMCareImage,
	},
];

export default projects;
