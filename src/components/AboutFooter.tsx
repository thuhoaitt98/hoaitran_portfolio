import { Circle, Dna, Globe2, Languages } from "lucide-react";

const AboutFooter = () => {
    const items = [
        {
            name: "Language",
            answer: "Vietnamese/English US",
            icon: <Languages className="h-11 w-11" />,
        },
        {
            name: "Nationality",
            answer: "Viet Nam",
            icon: <Globe2 className="h-8 w-8" />,
        },
        { name: "Gender", answer: "Male", icon: <Dna className="h-8 w-8" /> },
    ];

    return (
        <>
            {items.map((val, indx) => {
                return (
                    <div className="relative w-fit p-1" key={indx}>
                        <h1
                            className="icon_underline relative flex gap-2 font-poppins text-3xl font-semibold
                                text-primary max-sm:text-2xl"
                        >
                            {val.icon}
                            {val.name}
                        </h1>
                        <div
                            className="flex flex-row items-center justify-center gap-2 pt-3 text-xl text-primary
                                max-lg:justify-start"
                        >
                            <Circle className="h-3 w-3" /> {val.answer}
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default AboutFooter;
