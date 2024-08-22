import Heading from "@/components/Heading";
import SkillsFooter from "@/components/SkillsFotter";
import { Badge } from "@/components/ui/badge";
import { Lightbulb } from "lucide-react";
import html from "../../../public/html.png";
import css from "../../../public/css.png";
import scss from "../../../public/scss.png";
import js from "../../../public/js.png";
import ts from "../../../public/ts.png";
import react from "../../../public/react.png";
import nextjs from "../../../public/nextjs.jpeg";
import cplusplus from "../../../public/cplusplus.png";
import python from "../../../public/python.png";
import java from "../../../public/java.png";
import kotlin from "../../../public/kotlin.png";
import postgresql from "../../../public/postgresql.png";
import redis from "../../../public/redis.png";
import mongodb from "../../../public/mongodb.png";
import githubactions from "../../../public/github-actions.png";
import django from "../../../public/django.png";
import fastapi from "../../../public/fast-api.png";
import springboot from "../../../public/spring-boot.png";
import csharp from "../../../public/csharp.png";
import datadog from "../../../public/datadog.png";
import tailwind from "../../../public/tailwindcss.png";
import github from "../../../public/github.png";
import vscode from "../../../public/vscode.png";
import FramerWrapper from "@/components/FramerWrapper";

const skillPage = () => {
    const language = [
        { alt: "html", img: html },
        { alt: "css", img: css },
        { alt: "js", img: js },
        { alt: "ts", img: ts },
        { alt: "cplusplus", img: cplusplus },
        { alt: "python", img: python },
        { alt: "java", img: java },
        { alt: "kotlin", img: kotlin },
        { alt: "c#", img: csharp },
    ];
    const framework = [
        { alt: "react", img: react },
        { alt: "nextjs", img: nextjs },
        { alt: "scss", img: scss },
        { alt: "tailwind", img: tailwind },
        { alt: "github", img: github },
        { alt: "vscode", img: vscode },
        { alt: "postgresql", img: postgresql },
        { alt: "redis", img: redis },
        { alt: "mongodb", img: mongodb },
        { alt: "spring-boot", img: springboot },
        { alt: "fast-api", img: fastapi },
        { alt: "django", img: django },
        { alt: "datadog", img: datadog },
        { alt: "github-actions", img: githubactions },
    ];

    return (
        <div className="relative flex h-full w-full flex-col items-start gap-5 overflow-hidden">
            <Badge className="gap-2">
                <Lightbulb className="h-5 w-5" />
                My Skills
            </Badge>
            <div className="flex flex-col gap-3">
                <Heading>My Technical Experience/Skills.</Heading>
                <FramerWrapper y={0} x={200}>
                    <p className="w-full font-poppins text-xl text-primary max-sm:text-lg">
                        I am an experienced full-stack developer with a strong
                        foundation in HTML5, CSS3, JavaScript, and TypeScript. I
                        have deep expertise in building scalable and
                        high-performance web applications using modern
                        frameworks and libraries, including React, Next.js, and
                        Node.js. My skill set encompasses both front-end and
                        back-end development, with a particular emphasis on
                        responsive design, user experience, and seamless
                        integration of server-side logic with client-side
                        functionality. I am proficient in designing and
                        implementing complex web architectures that meet the
                        demands of today&#x27;s dynamic digital landscape.
                    </p>
                </FramerWrapper>
                <FramerWrapper y={100} delay={0.3} className="block">
                    <h1
                        className="text_underline relative flex gap-2 font-poppins text-2xl font-semibold
                            text-primary max-sm:text-xl"
                    >
                        Programming Languages
                    </h1>
                    <div className="flex h-fit w-full flex-row items-center justify-between">
                        <SkillsFooter items={language} />
                    </div>
                </FramerWrapper>
                <FramerWrapper className="block" y={100} delay={0.32}>
                    <h1
                        className="text_underline relative flex gap-2 font-poppins text-2xl font-semibold
                            text-primary max-sm:text-xl"
                    >
                        Framework/Libraries and Version Control
                    </h1>
                    <div className="flex h-fit w-full flex-row items-center justify-between">
                        <SkillsFooter items={framework} />
                    </div>
                </FramerWrapper>
            </div>
        </div>
    );
};

export default skillPage;
