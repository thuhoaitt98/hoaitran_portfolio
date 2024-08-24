import FramerWrapper from "@/components/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const educationPage = () => {
    const awards = [
        {
            year: "2018",
            title: "School-level Five Good Student",
        },
        {
            year: "2018",
            title: "Volunteer of the 'Warm Winter, Loving Tet' Program in Lang Son Province",
        },
        {
            year: "2019",
            title: "Volunteer of the 'Together with Children to School' Campaign in Hoa Binh Province",
        },
        {
            year: "2019",
            title: "Volunteer of the 'Spreading Love' Campaign at the Nursing Home",
        },
    ];
    return (
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
                        September 2017 - 2021
                    </FramerWrapper>
                    <FramerWrapper
                        y={0}
                        x={100}
                        delay={0.35}
                        className="education_point relative w-3/4 gap-3 border-l-4 border-l-[#3c3c3c] p-4"
                    >
                        <div className="font-rubik text-2xl max-sm:text-xl">
                            International Economics, <br /> Foreign Trade University
                        </div>
                        <p className="w-full font-poppins text-base text-primary max-sm:text-xs"></p>
                    </FramerWrapper>
                </div>
                <div className="flex h-fit w-full">
                    <FramerWrapper
                        y={0}
                        x={-100}
                        delay={0.35}
                        className="flex w-1/4 items-center justify-evenly font-rubik text-lg max-sm:text-base"
                    >
                        Jan 2021 - April 2021
                    </FramerWrapper>
                    <FramerWrapper
                        y={0}
                        x={100}
                        delay={0.35}
                        className="education_point relative w-3/4 gap-3 border-l-4 border-l-[#3c3c3c] p-4"
                    >
                        <div className="font-rubik text-2xl max-sm:text-xl">
                            Tester Training Course, <br /> TesterTop Center
                        </div>
                        <p className="w-full font-poppins text-base text-primary max-sm:text-xs"></p>
                    </FramerWrapper>
                </div>
            </div>

    <div className="flex flex-col gap-3">
        <Heading>Awards and Activities</Heading>
    </div>
    <div className="flex h-fit w-full flex-col">
        {awards.map((award, index) => (
            <div className="flex h-fit w-full" key={index}>
                <FramerWrapper
                    y={0}
                    x={-100}
                    delay={0.35 + index * 0.05}
                    className="flex w-1/4 items-center justify-evenly font-rubik text-lg max-sm:text-base"
                >
                    {award.year}
                </FramerWrapper>
                <FramerWrapper
                    y={0}
                    x={100}
                    delay={0.35 + index * 0.05}
                            className="education_point relative w-3/4 gap-3 border-l-4 border-l-[#3c3c3c] p-4"
                        >
                            <div className="font-rubik text-2xl max-sm:text-xl">
                                {award.title}
                            </div>
                            <p className="w-full font-poppins text-base text-primary max-sm:text-xs"></p>
                        </FramerWrapper>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default educationPage;
