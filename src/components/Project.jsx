import { ReactComponent as DownloadIcon } from "../assets/icons/download.svg";
import { ReactComponent as LinkIcon } from "../assets/icons/link.svg";

import SkillsList from "../components/SkillsList";

export default function Project({
  name,
  description,
  skills,
  image,
  actions = [],
}) {
  const primaryAction = actions[0];

  return (
    <li className="relative flex bg-slate-800 px-4 py-6 rounded-xl cursor-pointer md:hover:brightness-125 select-none pointer-events-none md:pointer-events-auto">
      {primaryAction && (
        <a
          href={primaryAction.href}
          target={primaryAction.download || primaryAction.newTab === false ? undefined : "_blank"}
          rel={primaryAction.download || primaryAction.newTab === false ? undefined : "noreferrer noopener"}
          download={primaryAction.download || undefined}
          aria-label={`${primaryAction.label}: ${name}`}
          className="absolute inset-0 z-0 hidden rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-300 md:block"
        >
          <span className="sr-only">
            {primaryAction.label}: {name}
          </span>
        </a>
      )}
      {image && (
        <img
          src={image}
          alt={name}
          className="relative z-10 h-36 aspect-square mr-6 pointer-events-none"
        />
      )}
      <div className="relative z-10 md:mr-6 pointer-events-none">
        <p className="text-lg font-bold mb-4">{name}</p>
        <p className="mb-4 text-sm text-slate-400">{description}</p>
        <SkillsList skills={skills} />
        {actions.length > 0 && (
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {actions.map((action) => {
              const ActionIcon = action.download ? DownloadIcon : LinkIcon;

              return (
                <a
                  key={action.href}
                  href={action.href}
                  target={action.download || action.newTab === false ? undefined : "_blank"}
                  rel={action.download || action.newTab === false ? undefined : "noreferrer noopener"}
                  download={action.download || undefined}
                  className="text-indigo-300 hover:md:text-indigo-100 text-sm pointer-events-auto"
                >
                  <span className="flex items-center">
                    {action.label} <ActionIcon className="ml-2" />
                  </span>
                </a>
              );
            })}
          </div>
        )}
      </div>
    </li>
  );
}
