import React from 'react';
import projectInfo from "../components/infoProjects"
import Projects from '../components/Projects';


// TODO: Need to add projects/layouts for Portfolio
export default function Portfolio() {
    return (
        <>
            <div>
                <h1 className="text-2xl mb-10">Portfolio</h1>

                <div className="grid grid-cols-1 md:grid-cols-2">
                    {projectInfo.map((project, index) => (
                        <div key={index} className="flex flex-row m-10 justify-center">
                            <Projects
                                key={index} project={project}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}