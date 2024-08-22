import Image from "next/image";
import React from "react";

interface MyComponentProps {
    items: Array<{ alt: string; img: any }>;
}

const SkillsFooter: React.FC<MyComponentProps> = ({ items }) => {
    return (
        <div className="flex h-fit w-full flex-wrap items-center">
            {items &&
                items.map((val, indx) => {
                    return (
                        <div className="p-4" key={indx}>
                            <div className="relative size-20 hover:scale-125 transition duration-200 ease-in-out">
                                <Image
                                    src={val?.img}
                                    alt={val?.alt}
                                    fill
                                    objectFit="cover"
                                    className="rounded-2xl"
                                />
                            </div>
                        </div>
                    );
                })}
        </div>
    );
};

export default SkillsFooter;
