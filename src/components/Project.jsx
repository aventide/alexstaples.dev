import SkillsList from "../components/SkillsList";

export default function Project({ name, description, skills, image }) {
	return (
		<div className="flex bg-slate-800 px-4 py-6 rounded-xl">
			{image && (
				<img src={image} alt={name} className="h-36 aspect-square mr-6" />
			)}
			<div className="md:mr-6">
				<p className="text-lg font-bold mb-4">{name}</p>
				<p className="mb-4 text-sm text-slate-400">{description}</p>
				<SkillsList skills={skills} />
			</div>
		</div>
	);
}
