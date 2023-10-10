import { useState } from 'react';
import { useCollapse } from 'react-collapsed';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';

import { ReactComponent as TriangleIcon } from '../assets/icons/triangle.svg';
import { ReactComponent as CircleIcon } from '../assets/icons/circle.svg';
import { ReactComponent as GithubIcon } from '../assets/icons/github.svg';
import { ReactComponent as UserIcon } from '../assets/icons/user.svg';
import { ReactComponent as GradCapIcon } from '../assets/icons/graduation-cap.svg';
import { ReactComponent as DownloadIcon } from '../assets/icons/download.svg';
import { ReactComponent as MenuIcon } from '../assets/icons/menu.svg';
import { ReactComponent as ASIcon } from '../assets/icons/taecon.svg';
import text from '../assets/text/resume.json';

import PDFResume from './PDFResume';

// feather icons https://feathericons.com/
// graduation cap fromhttps://iconoir.com/

export default function Resume() {
    return <div className=''>
        <NavHeader />
        <div className='mt-8 mb-4 flex items-center flex-col text-center'>
            <div>
                <h1 className='font-heading font-bold mt-4 inline-block'>{text.author}</h1>
                <div>
                    <span>{text.address}</span>
                    <span className='mx-2'>|</span>
                    <StyledLink href={`mailto:${text.email}`}>{text.email}</StyledLink>
                </div>
            </div>
        </div>
        <div className='mb-8 mb-16 sm:mb-8 md:mb-4 flex justify-center'>
            <PDFDownloadLink document={<PDFResume />} fileName="resume.pdf">
                {({ blob, url, loading, error }) => (loading ? 'Loading document...' : <button className={`badge ${highlightBadgeClasses} ${highlightClasses} px-4 py-4`}>
                    <DownloadIcon className='w-4 h-4 mr-2' />
                    <span className='font-bold'>{text.downloadPDF}</span>
                </button>)}
            </PDFDownloadLink>
        </div>
        <ResumeSection title="professional experience">
            <Job company="wasabi" open />
            <Job company="motifSoftware" />
            <Job company="tandemSeven" />
            <Job company="ca" />
        </ResumeSection>
        <ResumeSection title="technical expertise">
            <div className='grid grid-cols sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {Object.keys(text.skills).map(skillSection =>
                    <SkillsList title={skillSection} skills={text.skills[skillSection]} />
                )}
            </div>
        </ResumeSection>
        <ResumeSection title="portfolio">
            <div className='mb-2'>
                <GithubIcon className='inline font-bold w-4 h-4 mr-2 stroke-black dark:stroke-white' />
                <span className='font-bold inline'>Github</span>
                <span className='mx-2'>|</span>
                <StyledLink href={text.portfolioLinks.github} target="_blank" rel="noopener noreferrer">aventide</StyledLink>
            </div>
            <div className='mb-2'>
                <UserIcon className='inline font-bold w-4 h-4 mr-2 stroke-black dark:stroke-white' />
                <span className='font-bold inline'>Site</span>
                <span className='mx-2'>|</span>
                <StyledLink href={text.portfolioLinks.site} target="_blank" rel="noopener noreferrer">alexstaples.dev</StyledLink>
            </div>
        </ResumeSection>
        <ResumeSection title="education">
            <ResumeEntry label={
                <>
                    <GradCapIcon className='inline font-bold w-4 h-4 mr-2 stroke-black dark:stroke-white' />
                    <span>{text.college}</span>
                </>
            } sublabel={text.degree} time={text.graduationYear} />
        </ResumeSection>
        <PDFViewer>
<           PDFResume />
        </PDFViewer>
    </div>
}

function ResumeSection({ children, title }) {
    return <div className='mt-4 mb-8'>
        <h2 className='uppercase font-heading font-bold text-lg'>{title}</h2>
        <div className="divider brightness-200 mt-0 mb-4" />
        <div className='ml-0 sm:ml-4'>
            {children}
        </div>
    </div>
}

function SkillsList({ title, skills }) {
    return <div className='mb-4'>
        <span className='font-bold'>{title}</span>
        <ul className='mt-4'>
            {skills && skills.map(skill =>
                <li className='badge mr-2 border-black dark:text-white dark:border-white' key={skill}>
                    {skill}
                </li>
            )}
        </ul>
    </div>
}


function ResumeEntry({ children, label, sublabel, time, open = false }) {

    const [isExpanded, setExpanded] = useState(open);
    const { getCollapseProps, getToggleProps } = useCollapse({
        duration: 200,
        isExpanded
    });

    return (
        <div className='mb-4'>
            <div className={`flex justify-between select-none ${children ? 'cursor-pointer' : 'cursor-default'}`} {...getToggleProps({
                disabled: !children, onClick: () => setExpanded((prevExpanded) => !prevExpanded),
            })}>
                <div className='sm:flex'>
                    <span className='font-bold flex sm:inline-flex items-center'>
                        {children ? (
                            <label className={`cursor-pointer transition-all duration-200 ease-in-out mr-2 ${isExpanded ? 'rotate-90' : 'rotate-0'}`}>
                                <TriangleIcon className='rotate-90 w-4 h-4 stroke-black dark:stroke-white' />
                            </label>
                        ) : null}
                        {label}
                    </span>
                    <span className='mx-2 hidden sm:inline'>|</span>
                    <span className={`inline-block ml-6 sm:ml-0`}>{sublabel}</span>
                </div>
                <span>{time}</span>
            </div>
            <div className={'ml-6 max-w-3xl text-sm'} {...getCollapseProps()}>
                <div className='mt-4 pb-4'>{children}</div>
            </div>
        </div>
    )
}

function Job({ company, ...rest }) {
    const companyKey = text.jobs[company];
    const { label, sublabel, time, bullets, clients, tech } = companyKey;
    return <ResumeEntry label={label} sublabel={sublabel} time={time} {...rest}>
        <ul className='list-disc'>
            {bullets.map(bullet => <li className='mb-0'>{bullet}</li>)}
        </ul>
        <br />
        {
            clients ? (
                <p className='mb-0'>
                    <span className='font-bold'>{text.clients}: </span>
                    {clients}
                </p>
            ) : null
        }
        <p>
            <span className='font-bold'>{text.keyTechnologies}: </span>
            {tech}
        </p>
    </ResumeEntry>
}

const highlightClasses = "text-indigo-600 hover:text-indigo-400 dark:text-indigo-400 dark:hover:text-indigo-300";
const highlightBadgeClasses = "border-indigo-600 hover:border-indigo-400 dark:border-indigo-400 dark:hover:border-indigo-300";

function StyledLink({ children, ...rest }) {
    return <a className={`cursor-pointer ${highlightClasses}`} {...rest}>
        {children}
    </a>
}

function StyledNavLink({ active, children, ...rest }) {
    return <span className={`text-sm md:text-lg font-heading font-bold inline-block cursor-pointer ${active ? 'underline decoration-2 underline-offset-4' : 'hover:opacity-70'}`} {...rest}>
        {children}
    </span>
}

function NavHeader() {
    return <div className='flex justify-between'>
        <div className='items-center cursor-pointer hidden md:flex'>
            <StyledNavLink>HOME</StyledNavLink>
            <CircleIcon className='w-2 h-2 mx-2 fill-black dark:fill-white' />
            <StyledNavLink active>RESUME</StyledNavLink>
        </div>
        <div className='flex-1 flex justify-between md:hidden'>
            <button className=''>
                <ASIcon className='w-8 h-8' />
            </button>
            <button className='flex justify-end'>
                <MenuIcon className='w-8 h-8' />
            </button>
        </div>
        <ASIcon className='hidden md:inline w-8 h-8' />
    </div>
}