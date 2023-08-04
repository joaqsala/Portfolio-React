import React from 'react';
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './pages/layout';
// import PortfolioContainer from './components/PortfolioContainer';
import About from './pages/About';
import Contact from './pages/Contact';
// import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import NotFound from './pages/NotFound';

function App() {
    return (
        <BrowserRouter basename="/Portfolio-React">
            <Routes>
                <Route path="/" element={<Layout />}>
                    {/* <Route index element={<Home />} /> */}
                    <Route path="/" element={<About />} />
                    <Route path="/contact" element={<Contact/>} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/resume" element={<Resume />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;