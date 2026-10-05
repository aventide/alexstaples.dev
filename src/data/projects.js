import GetSchooledImage from "../assets/images/project-screenshots/get-schooled.webp";
import KEMMCareImage from "../assets/images/project-screenshots/kemm-care.webp";
import PersonalWebsiteImage from "../assets/images/project-screenshots/personal-website.webp";
import ResumeTailorImage from "../assets/images/project-screenshots/resume-tailor.webp";

// listed in display order; the home page shows the first three
const projects = [
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
	{
		name: "Resume Tailor",
		description:
			"A desktop app I built to tailor my resume and cover letter to every job I apply for. I keep a plain-text knowledge base of my career, and for each posting an OpenAI pipeline selects and phrases only what that knowledge base can back up, then renders it into one of five PDF templates. Everything runs locally, packaged with Tauri for macOS and Windows.",
		skills: ["TypeScript", "React", "Tauri", "OpenAI", "PDF"],
		image: ResumeTailorImage,
		actions: [{ label: "Downloads", href: "/resume-tailor", newTab: false }],
	},
];

export default projects;
