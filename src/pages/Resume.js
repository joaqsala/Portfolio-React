import React from 'react';

export default function Resume() {

    const resumePath = process.env.PUBLIC_URL + "/Joaqsala-portfolio-resume.pdf"
    return (
        <main>
            <div className="flex flex-col items-center">
                <h1 className="text-2xl mb-10">Resume</h1>
                <div className="mt-6 flex flex-col md:flex-row md:space-x-24 w-full md:w-3/4 lg:w-1/2">
                    {/* Front-End Proficiencies */}
                    <div className="w-full md:w-1/2">
                        <p className="text-xl">Front-End Proficiencies</p>
                        <ul className="list-disc pl-6 mt-2 text-lg">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                            <li>JQuery</li>
                            <li>Bootstrap</li>
                            <li>Tailwind</li>
                            <li>React</li>
                            <li>Responsive design</li>
                        </ul>
                    </div>

                    {/* Back-End Proficiencies */}
                    <div className="w-full md:w-1/2 mt-8 md:mt-0">
                        <p className="text-xl">Back-End Proficiencies</p>
                        <ul className="list-disc pl-6 mt-2 text-lg">
                            <li>API's</li>
                            <li>Node JS</li>
                            <li>Express</li>
                            <li>MySQL</li>
                            <li>Sequelize</li>
                            <li>MongoDB</li>
                            <li>Mongoose</li>
                            <li>GraphQL</li>
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