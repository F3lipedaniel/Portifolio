import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { AboutPage } from "../pages/About";
import { PortfolioPage } from "../pages/Portfolio";
import { ExperiencePage } from "../pages/Experience";

export function Router() { 
    return (
        <Routes>
            <Route path="/">
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<AboutPage/>} />
                <Route path="/portfolio" element={<PortfolioPage/>} />
                <Route path="/experience" element={<ExperiencePage/>} />
            </Route>
        </Routes>
    )
}