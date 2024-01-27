import React from "react";
//AboutSection
export const SKILLS = [
    'JavaScript',
    'React',
    'Redux toolkit',
    'RTK query',
    'TailwindCSS',
    'MySQL',
    'NodeJS',
    'ExpressJS',
    'Laravel',
    'Git',
];

export const EDUCATION = [
    'Vinnytsia National Technical University',
];
//ContactSection
export const CONTACT_TEXT_BIG = "I'm more than happy to discuss potential collaborations, or even just exchange a friendly 'hello'. Your messages are a source of inspiration and learning for me, so feel free to drop a line anytime."
export const CONTACT_TEXT_GRADIENT = "Let's connect! "

//HeroSection
export const HERO_ABOUT = "Welcome to my portfolio page!\nHere, you can get to know me better, delve into my projects, and easily reach out to me.\nI'm looking forward to the opportunity of working together with you!"
export const HERO_HIRE = "Hire me";
export const HERO_DOWNLOAD_CV = "Download CV";
export const HERO_GRADIENT_TEXT = "Hello, I'm "

export const HERO_CAROUSEL_NAME= "Bohdan"
export const HERO_CAROUSEL_WEB_DEVELOPER = "Web developer"
export const HERO_CAROUSEL_FRONTEND_DEVELOPER = "Frontend developer"

//Header
export const HEADER_NAVLINK_ABOUT = "About";
export const HEADER_NAVLINK_CONTACT = "Contact";
export const HEADER_NAVLINK_PROJECTS = "Projects";

//AboutSection
export const ABOUT_SKILLS_TAB_TITLE = "Skills";
export const ABOUT_EDUCATION_TAB_TITLE = "Education";
export const ABOUT_ABOUT_ME = "About me";
export const ABOUT_ABOUT_ME_LONG = () =>{
    return(
        <>
            <p>
                I&apos;m a passionate and self-motivated React developer. With a strong foundation in JavaScript and React, I bring a problem-solving mindset to every project.
            </p>
            <p>I have experience with <span className="font-semibold text-[#e33211]">Redux, RTK query, ExpressJS, Rest API, Axios, Bootstrap, TailwindCSS</span> and more, ensuring I&apos;m equipped to build sleek and efficient web applications.
            </p>
            <p>
                I thrive on challenges, and my determination to learn and grow drives me forward. Let&apos;s work together to bring ideas to life and create seamless, user-friendly web solutions!
            </p>
        </>
    );
}

// ProjectsSection
export const PROJECTS_POMODORO_DESCRIPTION = 'Pomodoro Timer App, a tool designed to enhance focus and efficiency. As a training project, it features work and break modes with customizable timers, coupled with a basic to-do list.'
export const PROJECTS_PORTFOLIO_DESCRIPTION = 'A personal portfolio website showcasing my skills and projects. It serves as a hub for my work as a React developer, offering insights into my expertise in frontend technologies and project accomplishments.'
export const PROJECTS_QUOTES_DESCRIPTION = 'Using a public API, Quote Generator randomly selects and presents a new quote. The website features a minimalist and user-friendly design, allowing users to easily navigate and enjoy a moment of reflection'
export const PROJECTS_BLOG_APP_DESCRIPTION = "Blog Application with a custom-built backend and a frontend supporting user registration, authentication, and content management functionalities. It allows users to create, edit, and publish posts."
