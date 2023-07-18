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
        <div className="h-full w-full flex">
            <Header />
            <Outlet />
        </div>
            <Footer />
        </>
    );
}