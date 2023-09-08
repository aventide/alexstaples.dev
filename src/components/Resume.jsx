import { useCollapse } from 'react-collapsed';

import Triangle from '../assets/triangle.svg';
import Circle from '../assets/circle.svg';

// feather icons https://feathericons.com/?query=cir

export default function Resume() {
    return <div className=''>
        <h1 className='font-heading font-bold mb-4 inline-block'>RESUME</h1>
        <ResumeSection title="professional history">
           <div className='mb-8'>
            <ResumeEntry label="Wasabi Technologies" sublabel="Senior Software Engineer" time="2020 - Present" />
                <ResumeEntry label="Motif Software" sublabel="Senior Software Engineer" time="2019 - 2020" />
                <ResumeEntry label="TandemSeven, Inc." sublabel="Senior Front End Developer" time="2018 - 2019" />
                <ResumeEntry label="CA Technologies" sublabel="Associate Software Engineer" time="2015 - 2018">
                    <p>Supporting role for development of CA Performance Management - a network infrastructure analysis and management product. Focused on the construction of internal tooling, including a visual API query builder, as well as a vendor certification search tool. Also wrote a suite of network metrics calculation tests, and began the conversion of existing tools to React and Electron. Assisted the sustaining team with resolving issues reported by customers.</p>
                    <br />
                    <p><span className='font-bold'>Key Technologies: </span>Java, Python, Javascript, React, Sencha Ext JS, OData, HP Vertica, RHEL</p>
                </ResumeEntry>
           </div>
        </ResumeSection>
        <ResumeSection title="technical expertise">
            <div className='grid grid-cols sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <SkillsList title='Web' skills={['React Ecosystem', 'Node', 'Canvas', 'CSS', 'AWS S3', 'Networking', 'TC39']} />
                <SkillsList title='Libraries' skills={['React', 'Redux', 'React Router', 'Material UI', 'Tailwind', 'Highcharts', 'Jest']} />
                <SkillsList title='Concepts' skills={['Agile', 'DevOps', 'Microservices', 'Accessibility', 'Linux Administration', 'Open Source']} />
                <SkillsList title='Tools' skills={['GPT-4', 'Webpack', 'Git', 'Docker', 'Kubernetes', 'ESLint']} />
                <SkillsList title='Programming Languages' skills={['Javascript', 'Elm', 'C', 'C#', 'Python']} />
            </div>
        </ResumeSection>
        <ResumeSection title="education">
            <ResumeEntry label="University of Massachusetts Lowell" sublabel="B.S. in Information Technology" time="2015" />
        </ResumeSection>
    </div>
}

function ResumeSection({ children, title }) {
    return <div className='mt-4'>
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
                <li className='badge mr-2 text-white border-white'>
                    {skill}
                </li>
            )}
        </ul>
    </div>
}


function ResumeEntry({ children, label, sublabel, time }) {

    const {getCollapseProps, getToggleProps, isExpanded} = useCollapse({
        duration: 200
    });

    return (
        <div className='mb-4'>
            <div className={`flex justify-between select-none ${children ? 'cursor-pointer' : 'cursor-default'}`} {...getToggleProps({disabled: !children})}>
                <div className='flex items-center'>
                    {children ? <label className={`cursor-pointer transition-all duration-200 ease-in-out mx-2 ${isExpanded ? 'rotate-90' : 'rotate-0'}`}>
                        <img src={Triangle} className='rotate-90 w-4 h-4' />
                    </label> : <img src={Circle} className='rotate-90 w-4 h-4 mx-2' />}
                    <p>
                        <span className='font-bold block sm:inline'>{label}</span>
                        <span className='mx-2 hidden sm:inline'>|</span>
                        <span className=' block sm:inline'>{sublabel}</span>
                    </p>
                </div>
                <span>{time}</span>
            </div>
            <div className={'ml-8 max-w-3xl text-sm'} {...getCollapseProps()}>
                <div className='mt-4'>{children}</div>
            </div>
        </div>
    )
}