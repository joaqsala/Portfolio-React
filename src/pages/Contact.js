import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
    const [visitorName, setVisitorName] = useState("");
    const [visitorEmail, setVisitorEmail] = useState("");
    const [visitorMessage, setVisitorMessage] = useState("");
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [messageError, setMessageError] = useState("");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const [state, handleSubmit] = useForm("xjvqgnpb");

    const handleBlurName = () => {
        if (visitorName.trim() === "") {
            setNameError("Name cannot be left blank.");
        } else {
            setNameError("");
        }
    };

    const handleBlurEmail = () => {
        if (visitorEmail.trim() === "") {
            setEmailError("Email cannot be left blank.");
        } else if (!emailRegex.test(visitorEmail)) {
            setEmailError("Invalid email format.")
        } else {
            setEmailError("");
        }
    };

    const handleBlurMessage = () => {
        if (visitorMessage.trim() === "") {
            setMessageError("Message cannot be left blank.");
        } else {
            setMessageError("");
        }
    };

    const handleSubmitMessage = async (e) => {
        e.preventDefault();

        // Check for email validation error
        if (emailError) {
            alert("Invalid email format. Please enter a valid email.");
            return; // Return early to prevent form submission
        }

        if (visitorName && visitorEmail && visitorMessage) {

            // Formspree submission
            handleSubmit(e);
            // clear the form
            setVisitorName("");
            setVisitorEmail("");
            setVisitorMessage("");
        } else {
            alert("Please complete the form before sending.")
        }
    };

    return (
        <main className="flex flex-col items-center">
            <h1 className="text-2xl mb-10">Contact Page</h1>
            <section className="py-6 bg-gray-800 text-gray-50">
                <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                    <div className="py-6 md:py-0 md:px-6">
                        <h1 className="text-2xl mb-4">Get in touch</h1>
                        <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
                        <div className="space-y-4">
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                                </svg>
                                <span>Austin, TX  78747</span>
                            </p>
                            {/* <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                </svg>
                                <span>123456789</span>
                            </p> */}
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                </svg>
                                <span>joaqsala@gmail.com</span>
                            </p>
                        </div>
                    </div>
                    <form className="flex flex-col py-6 space-y-6 md:py-0 md:px-6" onSubmit={handleSubmitMessage}>
                        <label className="block">
                            <span className="mb-1">Full name:</span>
                            <input type="text" placeholder="Enter name" id="name" name="name" value={visitorName} className="block p-1 w-full shadow-sm focus:ring focus:ri focus:ri bg-white text text-black"
                                onChange={(e) => setVisitorName(e.target.value)}
                                onBlur={handleBlurName} required />
                            {nameError && <div className="error text-red-600">{nameError}</div>}
                        </label>
                        <label className="block">
                            <span className="mb-1">Email address:</span>
                            <input type="email" placeholder="Enter email" id="email" name="email" value={visitorEmail} className="block p-1 w-full shadow-sm focus:ring focus:ri focus:ri bg-white text text-black"
                                onChange={(e) => setVisitorEmail(e.target.value)}
                                onBlur={handleBlurEmail} required />
                            {emailError && <div className="error  text-red-600">{emailError}</div>}
                        </label>
                        <label className="block">
                            <span className="mb-1">Message:</span>
                            <textarea rows="5" type="text" value={visitorMessage} id="message" name="message" className="block p-1 w-full focus:ring focus:ri focus:ri bg-white text text-black"
                                onChange={(e) => setVisitorMessage(e.target.value)}
                                onBlur={handleBlurMessage} required></textarea>
                            {messageError && <div className="error text-red-600">{messageError}</div>}
                        </label>
                        <button type="submit" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ri bg-violet-400 text-gray-900 focus:ri hover:ri"
                            disabled={state.submitting}>Submit</button>
                    </form>
                </div>
            </section>
        </main>
    )
}