import { ReactComponent as LinkIcon } from "../assets/icons/link.svg";

import SkillsList from "../components/SkillsList";

export default function Project({
  name,
  description,
  skills,
  image,
  demoLink = "",
}) {
  const handleNavigate = (link) => {
    if (link) {
      window.open(link, "_blank", "noopener, noreferrer");
    }
  };

  return (
    <li
      className="flex bg-slate-800 px-4 py-6 rounded-xl cursor-pointer md:hover:brightness-125 select-none pointer-events-none md:pointer-events-auto"
      onClick={() => handleNavigate(demoLink)}
    >
      {image && (
        <img src={image} alt={name} className="h-36 aspect-square mr-6" />
      )}
      <div className="md:mr-6">
        <p className="text-lg font-bold mb-4">{name}</p>
        <p className="mb-4 text-sm text-slate-400">{description}</p>
        <SkillsList skills={skills} />
        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noreferrer noopener"
            className="text-indigo-300 hover:md:text-indigo-100 text-sm pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="flex items-center">
              View demo <LinkIcon className="ml-2" />
            </span>
          </a>
        )}
      </div>
    </li>
  );
}
