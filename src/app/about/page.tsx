import AboutFooter from "@/components/AboutFooter";
import FramerWrapper from "@/components/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Circle, Heart, User2 } from "lucide-react";

const page = () => {
    const items = [
        { hobby: "Designing" },
        { hobby: "Playing badminton" },
        { hobby: "Watching Netflix" },
        { hobby: "Painting" },
        { hobby: "Writing Blog" },
    ];

    return (
        <div className="relative flex h-full w-full flex-col items-start gap-5 overflow-hidden">
            <Badge className="gap-2">
                <User2 className="h-5 w-5" />
                About me
            </Badge>
            <div className="flex flex-col gap-3">
                <Heading>
                    Software Engineer And Web <br /> Quality Control, Based In Viet
                    Nam.
                </Heading>
                <FramerWrapper y={0} x={100}>
                    <p className="w-full font-nunito text-justify text-0.5xl text-primary max-sm:text-lg">
                        With 3+ years of experience in Quality
                        Control, I’ve built strong skills in product
                        quality. My short-term goal is to
                        become a Test Leader while my long
                        term aim is to advance to a Senior
                        tester role to deepen my expertise and
                        take on greater responsibilities.
                    </p>
                </FramerWrapper>
            </div>
            <FramerWrapper
                className="flex w-full flex-row justify-between max-lg:flex-col"
                y={100}
                delay={0.3}
            >
                <AboutFooter />
            </FramerWrapper>
            <FramerWrapper className="block" y={100} delay={0.31}>
                <h1
                    className="icon_underline relative flex gap-2 font-poppins text-3xl font-semibold
                        text-primary max-sm:text-2xl"
                >
                    {" "}
                    <Heart className="h-8 w-8" /> Hobbies
                </h1>
                <div className="flex h-fit w-full flex-row justify-between gap-7 p-2 max-lg:flex-col">
                    {items.map((val, indx) => {
                        return (
                            <div
                                key={indx}
                                className="flex flex-row items-center justify-center gap-2 pt-3 text-xl text-primary
                                    max-lg:justify-start"
                            >
                                <Circle className="h-3 w-3" /> {val.hobby}
                            </div>
                        );
                    })}
                </div>
            </FramerWrapper>
        </div>
    );
};

export default page;
