import React from "react";
import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Layout() {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Header />
                <div className="bg-gradient-to-r from-slate-200 to-slate-400 flex-grow">
                    <div className="px-3 md:px-6 lg:px-10 xl:px-15 py-4 mx-auto max-w-screen-xl ">
                        <Outlet />
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    );
}