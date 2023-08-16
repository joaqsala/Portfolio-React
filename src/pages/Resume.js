import React from 'react';
import { FaHtml5, FaCss3, FaJs, FaBootstrap, FaReact, FaNodeJs, FaMobileAlt } from "react-icons/fa";
import { SiJquery, SiTailwindcss, SiExpress, SiMysql, SiSequelize, SiMongodb, SiMongoose, SiGraphql } from "react-icons/si";
import { TbApi } from "react-icons/tb";

export default function Resume() {

    const resumePath = process.env.PUBLIC_URL + "/Joaqsala-portfolio-resume.pdf"
    return (
        <main>
            <div className="flex flex-col items-center">
                <h1 className="text-2xl mb-8">Resume</h1>
                <div className="flex flex-col md:flex-row md:space-x-24 w-full md:w-3/4 lg:w-1/2">
                {/* Front-End Proficiencies */}
                <div className="flex flex-col mb-8 items-center">
                    <p className="text-xl mb-8">Front-End Proficiencies</p>
                    <div className="flex flex-col">
                        <span className="flex mb-4 mx-8"><FaHtml5 className="text-3xl mr-8" />HTML</span>
                        <span className="flex mb-4 mx-8"><FaCss3 className="text-3xl mr-8" />CSS </span>
                        <span className="flex mb-4 mx-8"><FaJs className="text-3xl mr-8" />Javascript</span>
                        <span className="flex mb-4 mx-8"><SiJquery className="text-3xl mr-8" />JQuery</span>
                        <span className="flex mb-4 mx-8"><FaBootstrap className="text-3xl mr-8" />Bootstrap</span>
                        <span className="flex mb-4 mx-8"><SiTailwindcss className="text-3xl mr-8" />Tailwind</span>
                        <span className="flex mb-4 mx-8"><FaReact className="text-3xl mr-8" />React </span>
                        <span className="flex mb-4 mx-8"><FaMobileAlt className="text-3xl mr-8" />Responsive design</span>
                    </div>
                </div>

                {/* Back-End Proficiencies */}
                <div className="flex flex-col mb-8 items-center">
                    <p className="text-xl mb-8">Back-End Proficiencies</p>
                    <div className="flex flex-col">
                        <span className="flex mb-4 mx-8">API's <TbApi className="text-3xl ml-8" /></span>
                        <span className="flex mb-4 mx-8">Node JS <FaNodeJs className="text-3xl ml-8" /></span>
                        <span className="flex mb-4 mx-8">Express <SiExpress className="text-3xl ml-8" /></span>
                        <span className="flex mb-4 mx-8">MySQL <SiMysql className="text-3xl ml-8" /></span>
                        <span className="flex mb-4 mx-8">Sequelize <SiSequelize className="text-3xl ml-8" /></span>
                        <span className="flex mb-4 mx-8">MongoDB <SiMongodb className="text-3xl ml-8" /></span>
                        <span className="flex mb-4 mx-8">Mongoose <SiMongoose className="text-3xl ml-8" /></span>
                        <span className="flex mb-4 mx-8">GraphQL <SiGraphql className="text-3xl ml-8" /></span>
                    </div>
                </div>
                </div>
            </div>
            <div>
                <p className="text-sm mt-4 ml-16">Download my <a href={resumePath} download className="font-bold">resume</a>.</p>
            </div>
        </main>
    );
}