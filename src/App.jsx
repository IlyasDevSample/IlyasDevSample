import Header from "./components/Header"
import Services from "./components/Services"
import Skills from "./components/Skills"


const App = () => {

    return (
        <div>
            <Header />
            <div className="bg-secondary">
                <Services />
            </div>
            <Skills />
        </div>
    )
}

export default App