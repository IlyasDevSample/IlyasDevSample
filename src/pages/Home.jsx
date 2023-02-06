import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Projects from "../components/Projects"
import Services from "../components/Services"
import Skills from "../components/Skills"

const Home = () => {
    return (
        <div>
            <Header />
            <div className="bg-secondary">
                <Services />
            </div>
            <Skills />
            <div className="cbg bg-secondary">
                <Projects />
            </div>
            <Contact />
            <Footer />
        </div>
    )
}

export default Home