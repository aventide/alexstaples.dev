import { useCollapse } from 'react-collapsed';

import LightDarkModeSwitch from './LightDarkModeSwitch';

import { ReactComponent as TriangleIcon } from '../assets/triangle.svg';
import { ReactComponent as TriangleFilledIcon } from '../assets/triangle-filled.svg';
import { ReactComponent as GithubIcon } from '../assets/github.svg';
import { ReactComponent as UserIcon } from '../assets/user.svg';

// feather icons https://feathericons.com/?query=cir

export default function Resume() {
    return <div className=''>
        <div className='flex justify-between'>
            <div className='flex items-center cursor-pointer'>
                <TriangleFilledIcon className='rotate-[-90deg] w-4 h-4 mr-2 fill-black dark:fill-white' />
                <span className='font-heading font-bold inline-block text-lg'>HOME</span>
            </div>
            {/* <LightDarkModeSwitch /> */}
        </div>
        <div className='mb-12 flex items-center flex-col'>
            <div className=''>
                <h1 className='font-heading font-bold mt-4 inline-block'>Alex Staples</h1>
                <div className=''>
                    <span>Northborough, MA</span>
                    {/* <span className='mx-2 hidden sm:inline'>|</span>
            <span className='block sm:inline'>ajstaples@gmail.com</span> */}
                    <span className='mx-2'>|</span>
                    <span className=''>ajstaples@gmail.com</span>
                </div>
            </div>
        </div>
        <ResumeSection title="professional history">
            <ResumeEntry label="Wasabi Technologies" sublabel="Senior Software Engineer" time="2020 - Present">
                {/* <p>Senior engineer for the applications team at a cloud storage startup. Creates React-powered web tools for internal use by our operations teams, designing core architectural components in company codebases. Key contributor to the development of the customer-facing Wasabi Console application. Supervises the daily creation and deployment of service images for testing, working closely with the infrastructure team.</p> */}
                <ul className='list-disc'>
                    <li>Senior engineer for the applications team at a cloud storage startup</li>
                    <li>Creates React-powered web tools for internal use by our operations teams, designing core architectural components in company codebases</li>
                    <li>Key contributor to the development of the customer-facing Wasabi Console application</li>
                    <li>Supervises the daily creation and deployment of service images for testing, working closely with the infrastructure team</li>
                </ul>
                <br />
                <p><span className='font-bold'>Key Technologies: </span>React, Node, Material-UI, Highcharts, Containers, Custom CICD Workflows, GitHub Actions</p>
            </ResumeEntry>
            <ResumeEntry label="Motif Software" sublabel="Senior Software Engineer" time="2019 - 2020" >
                <ul className='list-disc'>
                    <li>Front end developer as a contractor working with Motif Software</li>
                    <li>Developed major features for React applications for a variety of clients</li>
                    <li>Interacted with .NET framework for backend, EpiServer, and AI chatbots</li>
                    <li>Wrote extensive technical documentation for digital cytology software</li>
                </ul>
                <br />
                <p><span className='font-bold'>Clients: </span>Hologic, Samsung, Orbita, Lew's Fishing</p>
                <p><span className='font-bold'>Key Technologies: </span>Javascript, React, CSS Modules, SVG, .NET Core, EpiServer</p>
            </ResumeEntry>
            <ResumeEntry label="TandemSeven, Inc." sublabel="Senior Front End Developer" time="2018 - 2019">
                {/* <p>Front end engineer for digital customer experience consulting firm. Worked with clients based in Boston and Chicago on web development for their eCommerce platforms. Projects centered on the React ecosystem and required special emphasis on internationalization and accessibility. Additionally, conducted internal research pertaining to vector graphics and the Elm language.</p> */}
                <ul className='list-disc'>
                    <li>Front end engineer for digital customer experience consulting firm</li>
                    <li>Worked with clients based in Boston and Chicago on web development for their eCommerce platforms</li>
                    <li>Projects centered on the React ecosystem and required special emphasis on internationalization and accessibility</li>
                    <li>Conducted internal research pertaining to vector graphics and the Elm language</li>
                </ul>
                <br />
                <p><span className='font-bold'>Clients: </span>Redbox, United Airlines</p>
                <p><span className='font-bold'>Key Technologies: </span>Javascript, React, Custom CSS Utilities, Browser Geolocation API, Bing Maps, Elm</p>
            </ResumeEntry>
            <ResumeEntry label="CA Technologies" sublabel="Associate Software Engineer" time="2015 - 2018">
                {/* <p>Supporting role for development of CA Performance Management - a network infrastructure analysis and management product. Focused on the construction of internal tooling, including a visual API query builder, as well as a vendor certification search tool. Also wrote a suite of network metrics calculation tests, and began the conversion of existing tools to React and Electron. Assisted the sustaining team with resolving issues reported by customers.</p> */}
                <ul className='list-disc'>
                    <li>Developer for CA Performance Management - a network infrastructure analysis and management product</li>
                    <li>Constructed internal tooling, including a visual API query builder, and a vendor certification search tool</li>
                    <li>Wrote test suite for verifying network metrics calculations</li>
                    <li>Assisted the sustaining team with resolving issues reported by customers</li>
                </ul>
                <br />
                <p><span className='font-bold'>Key Technologies: </span>Java, Python, Javascript, React, Sencha Ext JS, OData, HP Vertica, RHEL</p>
            </ResumeEntry>
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
        <ResumeSection title="portfolio">
            <div>
                <GithubIcon className='inline font-bold w-4 h-4 mr-2 stroke-black dark:stroke-white' />
                <span className='font-bold inline'>Github</span>
                <span className='mx-2'>|</span>
                <a className='cursor-pointer' href='https://github.com/aventide' target="_blank" rel="noopener noreferrer">github.com/aventide</a>
            </div>
            <div>
                <UserIcon className='inline font-bold w-4 h-4 mr-2 stroke-black dark:stroke-white' />
                <span className='font-bold inline'>Site</span>
                <span className='mx-2'>|</span>
                <a className='cursor-pointer' href='https://alexstaples.dev' target="_blank" rel="noopener noreferrer">alexstaples.dev</a>
            </div>
        </ResumeSection>
        <ResumeSection title="education">
            <ResumeEntry label="University of Massachusetts Lowell" sublabel="B.S. in Information Technology" time="2015" />
        </ResumeSection>
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
                <li className='badge mr-2 border-black dark:text-white dark:border-white'>
                    {skill}
                </li>
            )}
        </ul>
    </div>
}


function ResumeEntry({ children, label, sublabel, time }) {

    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse({
        duration: 200
    });

    return (
        <div className='mb-4'>
            <div className={`flex justify-between select-none ${children ? 'cursor-pointer' : 'cursor-default'}`} {...getToggleProps({ disabled: !children })}>
                <div className='sm:flex'>
                    <span className='font-bold flex sm:inline-flex items-center'>
                        {children ? (
                            <label className={`cursor-pointer transition-all duration-200 ease-in-out mx-2 ${isExpanded ? 'rotate-90' : 'rotate-0'}`}>
                                <TriangleIcon className='rotate-90 w-4 h-4 stroke-black dark:stroke-white' />
                            </label>
                        ) : null}
                        {label}
                    </span>
                    <span className='mx-2 hidden sm:inline'>|</span>
                    <span className={`inline-block ${children ? 'ml-8' : 'ml:0'} sm:ml-0`}>{sublabel}</span>
                </div>
                <span>{time}</span>
            </div>
            <div className={'ml-8 max-w-3xl text-sm'} {...getCollapseProps()}>
                <div className='mt-4 pb-4'>{children}</div>
            </div>
        </div>
    )
}