import React from "react";
import { FaGithub } from "react-icons/fa";

export default function Projects({ project }) {
    return (
        <div className="project-card">
            <img src={project.img} alt={project.title} className="project-image" />
            <div className="project-details">
                <a href={project.websiteLink} target="_blank" rel="noopener noreferrer">
                <h3 className="project-title">{project.title}</h3>
                </a>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="github-icon" />
                </a>
                <p className="project-description">{project.description}</p>
            </div>
        </div>
    );
}