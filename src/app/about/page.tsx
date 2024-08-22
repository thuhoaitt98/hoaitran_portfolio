import Aboutfooter from "@/components/Aboutfooter";
import FramerWrapper from "@/components/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Circle, Heart, User2 } from "lucide-react";

const page = () => {
    const items = [
        { hobby: "coding" },
        { hobby: "playing games" },
        { hobby: "Watching Anima" },
        { hobby: "Tech Blog writing" },
        { hobby: "creating Cool Projects" },
    ];

    return (
        <div className="relative flex h-full w-full flex-col items-start gap-5 overflow-hidden">
            <Badge className="gap-2">
                <User2 className="h-5 w-5" />
                About me
            </Badge>
            <div className="flex flex-col gap-3">
                <Heading>
                    Software Engineer And Web <br /> Developer, Based In India.
                </Heading>
                <FramerWrapper y={0} x={100}>
                    <p className="w-full font-poppins text-xl text-primary max-sm:text-lg">
                        I am a Full Stack Web Developer from Ramgarh cantt,
                        Jharkhand, India. I love crafting cool web projects and
                        also open-source contribuitions. My biggest achievement
                        lies in my mastery of JavaScript and CSS, ensuring
                        pixel-perfect designs that captivate users. With a keen
                        eye for detail and a commitment to delivery speed, I
                        excel at creating seamless and responsive interfaces
                        that leave a lasting impression.
                    </p>
                </FramerWrapper>
            </div>
            <FramerWrapper
                className="flex w-full flex-row justify-between max-lg:flex-col"
                y={100}
                delay={0.3}
            >
                <Aboutfooter />
            </FramerWrapper>
            <FramerWrapper className="block" y={100} delay={0.31}>
                <h1 className="icon_underline relative flex gap-2 font-poppins text-3xl font-semibold text-primary max-sm:text-2xl">
                    {" "}
                    <Heart className="h-8 w-8" /> Hobbies
                </h1>
                <div className="flex h-fit w-full flex-row justify-between gap-7 p-2 max-lg:flex-col">
                    {items.map((val, indx) => {
                        return (
                            <div
                                key={indx}
                                className="flex flex-row items-center justify-center gap-2 pt-3 text-xl text-primary max-lg:justify-start"
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
