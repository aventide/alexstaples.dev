export default function SkillsList({ title, skills }) {
	return (
		<div>
			{title && <p className="mb-3 font-bold text-lg">{title}</p>}
			<ul className="flex flex-wrap gap-1.5">
				{skills?.map((skill) => (
					<li
						className="badge badge-sm px-2.5 py-2 border-indigo-400/40 bg-indigo-500/10 text-indigo-200"
						key={skill}
					>
						{skill}
					</li>
				))}
			</ul>
		</div>
	);
}
