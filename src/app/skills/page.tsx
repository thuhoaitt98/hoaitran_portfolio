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
import cplus from "../../../public/c++.jpeg";
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
        { alt: "cplus", img: cplus },
    ];
    const framework = [
        { alt: "react", img: react },
        { alt: "nextjs", img: nextjs },
        { alt: "scss", img: scss },
        { alt: "tailwind", img: tailwind },
        { alt: "github", img: github },
        { alt: "vscode", img: vscode },
    ];

    return (
        // SKILLS PAGE
        <div className="relative flex h-full w-full flex-col items-start gap-5 overflow-hidden">
            <Badge className="gap-2">
                <Lightbulb className="h-5 w-5" />
                My Skills
            </Badge>
            <div className="flex flex-col gap-3">
                <Heading>My Technical Experience/Skills.</Heading>
                <FramerWrapper y={0} x={200}>
                    <p className="w-full font-poppins text-xl text-primary max-sm:text-lg">
                        Currently i am a fresher and i have a solid understand
                        of HTML5, CSS3, JS, TS and React, including responsive
                        design principles. I specialize in building web
                        applications and sites using Javascript, Typescript,
                        React, Nextjs & Node.
                    </p>
                </FramerWrapper>
                <FramerWrapper y={100} delay={0.3} className="block">
                    <h1 className="text_underline relative flex gap-2 font-poppins text-2xl font-semibold text-primary max-sm:text-xl">
                        Programming Languages
                    </h1>
                    <div className="flex h-fit w-full flex-row items-center justify-between">
                        <SkillsFooter items={language} />
                    </div>
                </FramerWrapper>
                <FramerWrapper className="block" y={100} delay={0.32}>
                    <h1 className="text_underline relative flex gap-2 font-poppins text-2xl font-semibold text-primary max-sm:text-xl">
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
