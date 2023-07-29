import React from "react";
import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
// import About from "./About";
// import Contact from "./Contact";
// import Home from "./Home";
// import Portfolio from "./Portfolio";
// import Resume from "./Resume";
// import NotFound from './pages/NotFound';


export default function Layout() {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Header />
                <div className="bg-gradient-to-r from-slate-300 to-slate-400">
                    <div className="flex-grow">
                        <Outlet />
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    );
}