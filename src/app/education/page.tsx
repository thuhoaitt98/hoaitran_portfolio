import FramerWrapper from "@/components/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const educationPage = () => {
    return (
        // ABOUT PAGE
        <div className="relative flex h-full w-full flex-col items-start gap-5 overflow-hidden">
            <Badge className="gap-2">
                <Briefcase className="h-5 w-5" />
                Education
            </Badge>
            <div className="flex flex-col gap-3">
                <Heading>My Education</Heading>
            </div>
            <div className="flex h-fit w-full flex-col">
                <div className="flex h-fit w-full">
                    <FramerWrapper
                        y={0}
                        x={-100}
                        delay={0.35}
                        className="flex w-1/4 items-center justify-evenly font-rubik text-lg max-sm:text-base"
                    >
                        July 2023 - 2026
                    </FramerWrapper>
                    <FramerWrapper
                        y={0}
                        x={100}
                        delay={0.35}
                        className="education_point relative w-3/4 gap-3 border-l-4 border-l-[#3c3c3c] p-4"
                    >
                        <div className="font-rubik text-2xl max-sm:text-xl">
                            Bachelor of Computer Application, <br /> Ranchi
                            University Jharkhand
                        </div>
                        <p className="w-full font-poppins text-base text-primary max-sm:text-xs">
                            I am currently Studying Bachelor of Computer
                            Application form Doranda College Ranchi a Goverment
                            College of Ranchi. The program has provided me with
                            a well-rounded education, covering both theoretical
                            foundations and practical applications of computer
                            science.
                        </p>
                    </FramerWrapper>
                </div>
            </div>
        </div>
    );
};

export default educationPage;
