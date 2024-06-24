import { useState } from "react";
import { Link, useLocation } from "wouter";

import { ReactComponent as CircleIcon } from "../assets/icons/circle.svg";
import { ReactComponent as MenuIcon } from "../assets/icons/menu.svg";
import { ReactComponent as ASIcon } from "../assets/icons/taecon.svg";
import { ReactComponent as CloseIcon } from "../assets/icons/x.svg";

export default function NavHeader() {
	const [location] = useLocation();

	const isHome = location === "/";
	const isProjects = location === "/projects";
	const isResume = location === "/resume" || location === "/experience";

	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<div>
			<div className="flex justify-between w-full">
				<div className="items-center cursor-pointer hidden md:flex">
					<StyledNavLink to={"/"} active={isHome}>
						HOME
					</StyledNavLink>
					<CircleIcon className="w-2 h-2 mx-2 fill-white" />
					<StyledNavLink to={"/projects"} active={isProjects}>
						PROJECTS
					</StyledNavLink>
					<CircleIcon className="w-2 h-2 mx-2 fill-white" />
					<StyledNavLink to={"/resume"} active={isResume}>
						EXPERIENCE
					</StyledNavLink>
				</div>
				<div className="flex-1 flex justify-between md:hidden">
					<ASIcon className="w-8 h-8 fill-black" />
					<button
						type="button"
						className="flex justify-end"
						onClick={() => setMenuOpen(true)}
					>
						<MenuIcon className="w-8 h-8" />
					</button>
				</div>
				<ASIcon className="hidden md:inline w-8 h-8 " />
			</div>
			{menuOpen && (
				<div className="fixed md:hidden top-0 left-0 bg-black w-screen h-screen z-50 p-4 opacity-90">
					<div className="flex justify-between">
						<ASIcon className="w-8 h-8 fill-black" />
						<button
							type="button"
							className="flex justify-end"
							onClick={() => setMenuOpen(false)}
						>
							<CloseIcon className="w-8 h-8" />
						</button>
					</div>
					<div className="flex flex-1 flex-col items-center py-8">
						<StyledNavLink
							to={"/"}
							active={isHome}
							onClick={() => setMenuOpen(false)}
						>
							HOME
						</StyledNavLink>
						<StyledNavLink
							to={"/projects"}
							active={isProjects}
							onClick={() => setMenuOpen(false)}
						>
							PROJECTS
						</StyledNavLink>
						<StyledNavLink
							to={"/resume"}
							active={isResume}
							onClick={() => setMenuOpen(false)}
						>
							EXPERIENCE
						</StyledNavLink>
						<div className="border-white border-2 my-16 w-full" />
					</div>
				</div>
			)}
		</div>
	);
}

function StyledNavLink({ active, children, to, onClick, ...rest }) {
	return (
		<Link to={to} asChild onClick={onClick}>
			<span
				className={`text-xl md:text-lg my-2 md:my-0 uppercase select-none font-heading font-bold inline-block cursor-pointer ${
					active
						? "underline decoration-2 underline-offset-4 text-indigo-400 sm:text-white"
						: "hover:opacity-70"
				}`}
				{...rest}
			>
				{children}
			</span>
		</Link>
	);
}
