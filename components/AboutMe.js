import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircleCheck} from '@fortawesome/free-solid-svg-icons'
import Image from "next/image";

export default function AboutMe() {
    const technologies = ['Javascript / Typescript', 'React', 'Ruby (On Rails)', 'PostgreSQL']
    return (<div className="max-w-[1240px] w-full mx-auto py-10 px-2">
        <a name="about"/>
        <div className={`full-w mx-auto py-20 md:grid md:grid-cols-2 gap-10`}>
            <div className={`text-center`}
                 style={{lineHeight: 0}}>
                <div className='shadow inline-block rounded-full overflow-hidden	'>
                    <Image src={'/me.png'} width={320}
                           objectFit={'cover'} objectPosition={'top center'}
                           height={320}/>
                </div>
            </div>
            <div className='md:text-left text-center'>
                <h2 className='py-4 text-gray-700'>{`That's`} <span
                    className='text-[#C91041]'>me</span></h2>
                <p className='mb-5'>
                    {`👨🏻‍💻 I've been coding since I was 16. I am a senior developer who
                    loves to build full-stack web applications and learning new
                    technologies. I like to work in small teams on new challenges that help me grow as a person and as a developer.`}
                </p>
                <p className={'mb-5'}>
                    I am also passionate about surfing 🏄🏻‍♂️, playing soccer ⚽️ and
                    cooking 🧑‍🍳.
                </p>
                <p className={'mb-5'}>
                    My preferred weapons of choice 👇
                </p>
                <ul className='columns-2 text-left mx-auto max-w-[420px] md:max-w-none'>
                    {technologies.map((name) => (
                        <li key={name} className='leading-relaxed flex items-center'>
                            <FontAwesomeIcon icon={faCircleCheck} color={"#C91041"}/>
                            <span className="ml-2">{name}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>)
}
