import React from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";

// TODO: Will need to add emoji's for LinkedIn, Github, and Twitter (also, start twitter account)
function Footer() {
    return (
        <div className="bg-gradient-to-r from-slate-300 to-slate-400 p-6">
            <div className="flex justify-center space-x-10">
                <a href="https://www.linkedin.com/in/joaqsala/"
                    className=""
                    target="_blank"
                    rel="noopener noreferrer">
                    <FaLinkedin className="text-4xl mx-8"/>
                </a>
                <a href="https://github.com/joaqsala"
                    className=""
                    target="_blank"
                    rel="noopener noreferrer">
                    <FaGithub className="text-4xl mx-8"/>
                </a>
            </div>
        </div>
    );
}

export default Footer;