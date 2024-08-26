import Heading from "@/components/Heading";
import SkillsFooter from "@/components/SkillsFooter";
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
    const programmingLanguages = [
        { alt: "js", img: js },
        { alt: "ts", img: ts },
        { alt: "cplusplus", img: cplusplus },
        { alt: "python", img: python },
        { alt: "java", img: java },
        { alt: "kotlin", img: kotlin },
        { alt: "c#", img: csharp },
    ];

    const webTechnologies = [
        { alt: "html", img: html },
        { alt: "css", img: css },
        { alt: "scss", img: scss },
        { alt: "react", img: react },
        { alt: "nextjs", img: nextjs },
        { alt: "tailwind", img: tailwind },
    ];

    const toolsAndPlatforms = [
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
                    <p className="w-full text-justify font-nunito text-xl text-primary max-sm:text-lg">
                        Throughout my career, I have developed advanced skills such as testing web applications,
                        mobile
                        apps,
                        or tools to identify and report bugs and issues. I have experience working in an Agile
                        environment,
                        as well as proficiency in working with SQL, MySQL, and APIs. I also possess design skills in
                        Figma and
                        have a basic understanding of processes, techniques, and the software development cycle.
                        <br />
                        <br />
                        Additionally, I have strong soft skills, including fluent English reading and writing
                        abilities,
                        good teamwork skills, independent working capabilities, excellent problem-solving,
                        analytical,
                        and critical
                        thinking skills, and effective team and task management abilities.
                    </p>
                </FramerWrapper>
                <FramerWrapper className="block" y={100} delay={0.34}>
                    <h1 className="text_underline relative flex gap-2 font-nunito text-2xl font-semibold text-primary max-sm:text-xl">
                        Tools and Platforms
                    </h1>
                    <SkillsFooter items={toolsAndPlatforms} />
                </FramerWrapper>
            </div>
        </div>
    );
};

export default skillPage;
