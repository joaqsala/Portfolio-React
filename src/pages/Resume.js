import React from 'react';
import { FaHtml5, FaCss3, FaJs, FaBootstrap, FaReact, FaNodeJs, FaMobileAlt } from "react-icons/fa";
import { SiJquery, SiTailwindcss, SiExpress, SiMysql, SiSequelize, SiMongodb, SiMongoose, SiGraphql } from "react-icons/si";
import { TbApi } from "react-icons/tb";

export default function Resume() {

    const resumePath = process.env.PUBLIC_URL + "/Joaqsala-portfolio-resume.pdf"
    return (
        <main>
            <div className="flex flex-col items-center">
                <h1 className="text-2xl mb-10">Resume</h1>
                <div className="mt-6 flex flex-col md:flex-row md:space-x-24 w-full md:w-3/4 lg:w-1/2">
                    {/* Front-End Proficiencies */}
                    <div className="w-full md:w-1/2">
                        <p className="text-xl mb-8">Front-End Proficiencies</p>
                        {/* <ul className="pl-6 mt-2 text-lg"> */}
                            <span className="flex items-center mb-4"><FaHtml5 className="text-3xl mx-8"/>HTML</span>
                            <span className="flex items-center mb-4"><FaCss3 className="text-3xl mx-8"/>CSS </span>
                            <span className="flex items-center mb-4"><FaJs className="text-3xl mx-8"/>Javascript</span>
                            <span className="flex items-center mb-4"><SiJquery className="text-3xl mx-8"/>JQuery</span>
                            <span className="flex items-center mb-4"><FaBootstrap className="text-3xl mx-8"/>Bootstrap</span>
                            <span className="flex items-center mb-4"><SiTailwindcss className="text-3xl mx-8"/>Tailwind</span>
                            <span className="flex items-center mb-4"><FaReact className="text-3xl mx-8"/>React </span>
                            <span className="flex items-center mb-4"><FaMobileAlt className="text-3xl mx-8"/>Responsive design</span>
                        {/* </ul> */}
                    </div>

                    {/* Back-End Proficiencies */}
                    <div className="w-full md:w-1/2 mt-8 md:mt-0">
                        <p className="text-xl mb-8">Back-End Proficiencies</p>
                        <ul className="list-disc pl-6 mt-2 text-lg">
                            <span className="flex items-center mb-4">API's <TbApi className="text-3xl mx-8"/></span>
                            <span className="flex items-center mb-4">Node JS <FaNodeJs className="text-3xl mx-8"/></span>
                            <span className="flex items-center mb-4">Express <SiExpress className="text-3xl mx-8"/></span>
                            <span className="flex items-center mb-4">MySQL <SiMysql className="text-3xl mx-8"/></span>
                            <span className="flex items-center mb-4">Sequelize <SiSequelize className="text-3xl mx-8"/></span>
                            <span className="flex items-center mb-4">MongoDB <SiMongodb className="text-3xl mx-8"/></span>
                            <span className="flex items-center mb-4">Mongoose <SiMongoose className="text-3xl mx-8"/></span>
                            <span className="flex items-center mb-4">GraphQL <SiGraphql className="text-3xl mx-8"/></span>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <p className="text-sm mt-16 ml-16">Download my <a href={resumePath} download className="font-bold">resume</a>.</p>
            </div>
        </main>
    );
}