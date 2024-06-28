import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Home from "./routes/home/Home";
import Projects from "./routes/projects/Projects";
import Kub from "./routes/kub/Kub";
import Koza from "./routes/koza/Koza";
import Cofe from "./routes/cofe/Cofe";
import Contact from "./routes/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <>
            <div className="wrapper">
                <Nav />
                <div className="main">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/kub" element={<Kub />} />
                        <Route path="/koza" element={<Koza />} />
                        <Route path="/cofe" element={<Cofe />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default App;
