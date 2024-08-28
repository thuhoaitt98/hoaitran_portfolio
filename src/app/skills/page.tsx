import Heading from "@/components/Heading";
import SkillsFooter from "@/components/SkillsFooter";
import { Badge } from "@/components/ui/badge";
import { Lightbulb } from "lucide-react";
import jmeter from "../../../public/jmeter.png";
import postman from "../../../public/postman.png";
import mongodb from "../../../public/mongodb.png";
import firebase from "../../../public/github-actions.png";
import smart_contract from "../../../public/smart-contract.png";
import kafka from "../../../public/kafka.png";
import jira from "../../../public/jira.png";
import mysql from "../../../public/mysql.png";
import vscode from "../../../public/vscode.png";
import FramerWrapper from "@/components/FramerWrapper";

const skillPage = () => {
    const toolsAndPlatforms = [
        { alt: "vscode", img: vscode },
        { alt: "jmeter", img: jmeter },
        { alt: "postman", img: postman },
        { alt: "mongodb", img: mongodb },
        { alt: "jira", img: jira },
        { alt: "kafka", img: kafka },
        { alt: "smart_contract", img: smart_contract },
        { alt: "mysql", img: mysql },
        { alt: "firebase", img: firebase },
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
                        Throughout my career, I have developed advanced skills
                        such as testing web applications, mobile apps, or tools
                        to identify and report bugs and issues. I have
                        experience working in an Agile environment, as well as
                        proficiency in working with SQL, MySQL, and APIs. I also
                        possess design skills in Figma and have a basic
                        understanding of processes, techniques, and the software
                        development cycle.
                        <br />
                        <br />
                        Additionally, I have strong soft skills, including
                        fluent English reading and writing abilities, good
                        teamwork skills, independent working capabilities,
                        excellent problem-solving, analytical, and critical
                        thinking skills, and effective team and task management
                        abilities.
                    </p>
                </FramerWrapper>
                <FramerWrapper className="block" y={100} delay={0.34}>
                    <h1
                        className="text_underline relative flex gap-2 font-nunito text-2xl font-semibold
                            text-primary max-sm:text-xl"
                    >
                        Tools and Platforms
                    </h1>
                    <SkillsFooter items={toolsAndPlatforms} />
                </FramerWrapper>
            </div>
        </div>
    );
};

export default skillPage;
