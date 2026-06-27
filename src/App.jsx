import Navbar from "#components/Navbar.jsx";
import Welcome from "#components/Welcome.jsx";
import Dock from "#components/Dock.jsx";
import Home from "#components/Home.jsx";
import {Terminal, Safari, Resume, Finder, Text, Img, Contact, Photos} from "#windows";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);

const App = () => {
    return (
        <main>
            <Navbar/>
            <Welcome/>
            <Dock/>

            <Terminal/>
            <Safari/>
            <Resume/>
            <Finder/>
            <Text/>
            <Img/>
            <Contact/>
            <Home/>
            <Photos/>
        </main>
    )
}
export default App
