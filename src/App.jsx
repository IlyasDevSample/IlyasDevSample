import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import NotFound from "./pages/404"
import Project from "./components/Project"


const App = () => {

    return (
        <Routes>
            <Route path="/">
                <Route index element={<Home />} />
                <Route path="/project/:projectName" element={<Project />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    )
}

export default App