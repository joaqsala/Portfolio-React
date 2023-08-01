import React from 'react';
import circleImage from "../assets/JoaqSala-profile-img.png"

export default function About() {
    return (
        <>
        <div className="flex flex-col items-center">
            <h1 className="text-2xl mb-10">About me</h1>
            <div className="h-48 w-48 rounded-md overflow-hidden mb-10">
                <img src={circleImage} alt="Joaquin Salazar" />
            </div>
            </div>
            <div className="row align-items-center">
                <p>
                    My name is Joaquin. I'm a mathematics content specialist transitioning into the world of programming.

                    I recently completed an intensive coding bootcamp through the University of Texas at Austin where I acquired a diverse skill set in programming languages and methodologies.</p><br />

                <p>I am actively seeking opportunities that allow me to merge my mathematical knowledge and programming skills. My strong analytical mindset and problem-solving abilities make me well-suited for collaborative environments that demand attention to detail.

                    Let's connect and discuss how we can make a positive impact together.</p>
            </div>
        </>
    );
}
