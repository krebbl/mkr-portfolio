import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck} from '@fortawesome/free-solid-svg-icons'

function Project({
                     title,
                     text,
                     technologies = [],
                     image,
                     company,
                     companyLink,
                     demoLink,
                     creationYear,
                     reverse
                 }) {
    const companyText = companyLink ?
        <a href={companyLink} className={""}>@{company}</a> : `@${company}`;
    return (<div className={`full-w mx-auto py-20 md:grid md:grid-cols-2 gap-10`}>
        <div className={`text-center ${reverse ? 'order-1' : ''} pb-10`}
             style={{lineHeight: 0}}>
            <div className='shadow-xl inline-block'>
                <Image src={image} width={500}
                       objectFit={'cover'} objectPosition={'top left'}
                       height={300}/>
            </div>
        </div>
        <div className='leading-relaxed text-center md:text-left'>
            <div className='mb-5'>
                <h3>{title}</h3>
                <span className={'text-gray-500 font-bold'}>
                    {companyText}
                    {creationYear ? <span> ({creationYear})</span> : null}
                </span>
            </div>
            <p className='mb-5'>
                {text}
            </p>
            {demoLink ? <p className='mb-6'>
                <a href={demoLink} className='font-bold text-gray-600'>🔗 See more
                    here</a>
            </p> : null}
            <ul className='columns-2 text-left mx-auto max-w-[420px] md:max-w-none'>
                {technologies.map((name) => (
                    <li key={name} className='leading-relaxed flex items-center'>
                        <FontAwesomeIcon icon={faCircleCheck} color={"#C91041"}
                                         className={"mr-2"}/>
                        {name}
                    </li>
                ))}
            </ul>
        </div>
    </div>)
}

export default function Projects() {
    return (<div
        className="max-w-[1240px] w-full mx-auto px-2 py-20">
        <a name="projects"/>

        <div className='text-center'>
            <div className='uppercase text-sm tracking-widest text-gray-600'>
                {`What I've built`}
            </div>
            <h2 className='py-4 text-gray-700'>
                Coding Projects
            </h2>
        </div>
        <div>
            <Project title={"Health-Care Monitoring Platform"}
                     company={"ProCarement"}
                     companyLink={"https://procarement.com"}
                     image={"/projects/procarement.png"}
                     text={'Currently, I am working at ProCarement as Head of Development on the development of a remote health care system for monitoring chronically ill patients. The system consists of a web portal based on Ruby On Rails and a mobile application written with Ionic. '
                         + 'My main task in this project is to create the software architecture, specify clean development processes and to lead the development of the backend / web portal.'}
                     creationYear={"since 2018"}
                     technologies={[
                         "Ruby On Rails", "PostgreSQL", "Redis", "FHIR", "Javascript"
                     ]}/>
            <Project title={"Portfolio Platform for Styles and Themes"}
                     reverse={true}
                     company={"Ulysses"}
                     companyLink={'https://ulysses.app'}
                     demoLink={'https://styles.ulysses.app'}
                     text={'My main project at Ulysses (the company of the famous writing app for Mac and iOs) was to migrate the legacy platform for sharing export styles and editor themes to a new architecture based on PostgreSQL and Ruby On Rails. To make the hunt for new themes and styles as convenient as possible, the system uses Solr to provide a facet oriented full text search. Another big part of this project was to create a CSS style guide based on Bootstrap to lay out the foundation for other company websites and services.'}
                     creationYear={"2017 - 2018"}
                     technologies={[
                         "Ruby On Rails", "PostgreSQL", "Solr", "Bootstrap"
                     ]}
                     image={"/projects/ulysses_styles.png"}/>
            <Project title={"Interactive Diagram Editor"} company="Vizzlo"
                     companyLink={"https://www.vizzlo.com"}
                     creationYear={"2015 - 2017"}
                     text={"At Vizzlo I worked as lead frontend developer implementing the foundation for the interactive SVG-based chart editor which included a library of drag and drop components and an inline text editing system."}
                     technologies={[
                         "React", "Go", "SASS", "d3.js"
                     ]}
                     image={"/projects/vizzlo.png"}/>
            <Project title={"T-Shirt Configurator / Designer"}
                     reverse={true}
                     text={"At Spreadgroup a colleague and I migrated the existing T-Shirt Configurator written for Adobe Flash to Javascript " +
                         "and HTML with our self developed JS frontend framework (rAppid.js) and implemented a whole new experience for mobile users. Although the original web application is not live anymore the code base is still used in the current T-Shirt configurator at Spreadshirt."}
                     company={"Spreadgroup"} companyLink={"https://spreadshirt.de"}
                     demoLink={'https://www.spreadshirt.de/selbst-gestalten'}
                     creationYear={2013}
                     image={"/projects/tablomat.png"}
                     technologies={["Javascript", "SASS",
                         "rAppid.js"
                     ]}/>
        </div>
    </div>)
}
