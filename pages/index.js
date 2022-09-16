import {config} from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import AboutMe from "../components/AboutMe";
import Layout from "../components/Layout";
import Contact from "../components/Contact";

export default function Home() {
    return (
        <Layout>
            <Hero/>
            <hr/>
            <AboutMe />
            <hr/>
            <Projects/>
            <hr/>
            <Contact />
            <hr/>
        </Layout>
    )
}
