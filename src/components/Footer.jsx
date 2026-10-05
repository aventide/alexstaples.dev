import { ReactComponent as GithubIcon } from "../assets/icons/github.svg";
import { ReactComponent as MailIcon } from "../assets/icons/mail.svg";

export default function Footer() {
	return (
		<footer className="mt-32 mb-8 flex flex-col items-center gap-4 text-sm text-slate-400">
			<div className="flex gap-6">
				<a
					href="https://github.com/aventide"
					target="_blank"
					rel="noreferrer noopener"
					className="flex items-center hover:text-slate-200"
				>
					<GithubIcon className="w-4 h-4 mr-2" />
					GitHub
				</a>
				<a
					href="mailto:ajstaples@gmail.com"
					className="flex items-center hover:text-slate-200"
				>
					<MailIcon className="w-4 h-4 mr-2" />
					Email
				</a>
			</div>
			<p>{`© ${new Date().getFullYear()} Alex Staples`}</p>
		</footer>
	);
}
