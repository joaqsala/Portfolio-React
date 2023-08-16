import React from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-gradient-to-r from-slate-300 to-slate-400 mt-auto p-4">
            <div className="flex justify-center space-x-10">
                <a href="https://www.linkedin.com/in/joaqsala/"
                    className="icon-link"
                    target="_blank"
                    rel="noopener noreferrer">
                    <FaLinkedin className="text-3xl mx-8"/>
                </a>
                <a href="https://github.com/joaqsala"
                    className="icon-link"
                    target="_blank"
                    rel="noopener noreferrer">
                    <FaGithub className="text-3xl mx-8"/>
                </a>
            </div>
        </footer>
    );
}

export default Footer;