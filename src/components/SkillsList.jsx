export default function SkillsList({ title, skills }) {
	return (
		<div className="mb-4">
			<span className="font-bold text-lg">{title}</span>
			<ul className="mt-4">
				{skills?.map((skill) => (
					<li
						className="badge mr-2 my-1 px-3 py-2.5 border-transparent bg-indigo-500 text-slate-200"
						key={skill}
					>
						{skill}
					</li>
				))}
			</ul>
		</div>
	);
}
