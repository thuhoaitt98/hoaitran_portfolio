import FramerWrapper from "@/components/FramerWrapper";
import Heading from "@/components/Heading";
import ProjectCards from "@/components/ProjectsCard";
import { Badge } from "@/components/ui/badge";
import { Layers } from "lucide-react";

const projectsPage = () => {
    const Projects = [
        {
            title: "Play to earn",
            description:
                "Play to earn is an online gaming platform that specializes in " +
                "providing a variety of betting and gambling options, including sports betting, eSports, and casino games. " +
                "The platform allows users to place bets on a wide range of events and games, offering an engaging and interactive " +
                "experience for both casual and serious bettors. Play to earn emphasizes security, user experience, and a seamless betting process, " +
                "making it a popular choice for users looking to participate in online gaming and betting activities.",
            tags: [
                "Jira",
                "Postman",
                "Swagger",
                "Kafka",
                "AWS",
                "Mongodb",
                "MySQL",
                "Rudderstack",
                "Jmeter ",
                "Intercom",
                "Contenful",
                "Oddin",
                "MTS",
                "Betradar",
                "Console log",
            ],
            link: "https://ubet.io/",
        },
        {
            title: "Xoai Shop - A comprehensive ecommerce shopping website",
            description:
                "Xoai Shop is a fully-featured ecommerce platform built using Django and Postgresql on the backend, with a modern frontend powered by Next.js and TypeScript. The site is styled with TailwindCSS for responsive design and uses Redis for caching to improve performance. The development and deployment process is streamlined with Docker and CI/CD integration via Github Actions, ensuring reliability and scalability.",
            tags: [
                "Django",
                "Postgresql",
                "Nextjs",
                "Typescript",
                "Tailwindcss",
                "Redis",
                "Docker",
                "CI/CD (Github Actions)",
            ],
            link: "https://github.com/hungdhv97/xoai_shop",
        },
        {
            title: "Patrick Portfolio - Personal portfolio website",
            description:
                "Patrick Portfolio is a personal portfolio website showcasing a developer's skills, projects, and experiences. Built with Next.js and TypeScript, the site features a clean and modern design using Shadcn UI components. The portfolio is designed to be responsive and user-friendly, making it easy for potential employers and collaborators to explore the developer's work.",
            tags: ["Nextjs", "Typescript", "Shadcn Ui"],
            link: "https://github.com/hungdhv97/hungthai_portfolio",
        },
        {
            title: "FNFBot - Automation tool for the Friday Night Funkin game",
            description:
                "FNFBot is a specialized tool designed to assist players of the popular rhythm game Friday Night Funkin. " +
                "The tool provides automated gameplay assistance, allowing users " +
                "to improve their performance. The application is user-friendly, with an intuitive interface" +
                " that makes it accessible even to those with limited technical experience.",
            tags: ["FunctionalTesting", "IntegrationTesting","PerformanceTesting","SecurityTesting","CompatibilityTesting","UsabilityTesting", "ErrorHandling",
            "RegressionTesting","UserInteractionTesting","LoadTesting"],
            link: "https://github.com/hungdhv97/FNFNewBot",
        },
        {
            title: "HH Story - Backend and admin panel for a story reading website",
            description:
                "HH Story is a backend service and admin panel for a website dedicated to reading and managing stories. It is built with Django, utilizing Scrapy for web scraping and Celery for task management. The platform enables efficient management of large volumes of stories, providing administrators with the tools they need to maintain and update content effortlessly.",
            tags: ["Django", "Scrapy", "Celery"],
            link: "https://github.com/hungdhv97/story-django",
        },
        {
            title: "HH Story Frontend - Frontend for a story reading website",
            description:
                "The HH Story Frontend is the user-facing part of a story reading website, designed with Next.js and styled using TailwindCSS and Shadcn UI. The frontend is optimized for performance and accessibility, providing a seamless reading experience for users. It is fully responsive, ensuring that the website looks great and functions well on all devices.",
            tags: ["Nextjs", "Tailwindcss", "Shadcn-ui", "Typescript"],
            link: "https://github.com/hungdhv97/story-frontend",
        },
        {
            title: "Crypto Airdrop Tool - Automation tool for crypto airdrops",
            description:
                "The Crypto Airdrop Tool is an automation tool designed to simplify the process of participating in cryptocurrency airdrops. Developed with C# and Selenium, it automates the tedious tasks involved in claiming airdrops, saving users time and effort. The tool is user-friendly and can handle multiple airdrops simultaneously, making it a valuable asset for crypto enthusiasts.",
            tags: ["C#", "Selenium"],
            link: "https://github.com/hungdhv97/AirdropToolV2.1",
        },
        {
            title: "Covid-19 Tracking App - Realtime tracking of Covid-19 cases",
            description:
                "The Covid-19 Tracking App is a real-time website designed to track Covid-19 cases across different regions. Built with React.js and JavaScript, the app fetches and displays the latest data on Covid-19 cases, recoveries, and deaths. The application features an intuitive interface, making it easy for users to stay informed about the pandemic's progress in their area.",
            tags: ["Reactjs", "Javascript"],
            link: "https://github.com/hungdhv97/covid-19-tracker-app",
        },
        {
            title: "Virtual Voice Assistant - A Vietnamese voice assistant",
            description:
                "The Virtual Voice Assistant is an AI-powered tool designed to assist Vietnamese speakers with various tasks. Developed in Python using Jupyter Notebook, the assistant leverages voice models and Shadcn UI to interact with users in a natural and intuitive manner. It supports a wide range of commands, helping users perform daily tasks efficiently.",
            tags: ["Python", "JupiterNotebook", "VoiceModel", "Shadcn Ui"],
            link: "https://github.com/taqui-786/crousal-maker",
        },
        {
            title: "Tetris Game - A simple yet engaging Tetris game",
            description:
                "This Tetris Game is a Java-based application that brings the classic Tetris experience to modern platforms. The game features smooth gameplay and intuitive controls, offering players of all ages an enjoyable and nostalgic gaming experience. The application is lightweight and designed to run efficiently on a wide range of devices.",
            tags: ["Java"],
            link: "https://github.com/taqui-786/crousal-maker",
        },
        {
            title: "Self Driving Car - Simulation of an autonomous driving car",
            description:
                "The Self Driving Car project is a Python-based simulation that demonstrates the principles of autonomous driving. The application models a self-driving car navigating various road conditions and obstacles, showcasing AI's potential in revolutionizing transportation. It serves as a valuable learning tool for those interested in autonomous vehicles.",
            tags: ["Python"],
            link: "https://github.com/hungdhv97/Self-Driving-Cars",
        },
        {
            title: "Crime Scene - A demo of a 3D crime scene simulation",
            description:
                "Crime Scene is a Unity3D-based project that simulates a 3D crime scene, providing users with an interactive environment to explore and investigate. The demo is designed to demonstrate the capabilities of Unity3D in creating realistic simulations for training or entertainment purposes. Users can navigate the scene, gather clues, and solve the mystery.",
            tags: ["Unity3D"],
            link: "https://github.com/hungdhv97/Crime-Scene-Demo",
        },
    ];

    return (
        <div className="relative flex h-full w-full flex-col items-start gap-5 overflow-hidden">
            <Badge className="gap-2">
                <Layers className="h-5 w-5" />
                Projects
            </Badge>
            <div className="flex flex-col gap-3">
                <Heading>My Projects</Heading>
                <FramerWrapper y={0} x={200}>
                    <p className="w-full font-nunito text-xl text-justify text-primary max-sm:text-base">
                        I have participated in various projects across gaming platforms, blockchain, e-commerce,
                        and information management. I tested and developed features for online gaming platforms, ensured security and performance for
                        blockchain platforms and smart contracts, optimized online shopping processes on e-commerce systems,
                        and built large-scale data management systems to help businesses manage information efficiently.
                    </p>
                </FramerWrapper>
            </div>
            <div className="flex w-full flex-row flex-wrap gap-3 max-lg:flex-col text-justify">
                {Projects.map((val, indx) => {
                    return <ProjectCards key={indx} value={val} num={indx} />;
                })}
            </div>
        </div>
    );
};

export default projectsPage;
