import Image from "next/image";
import React from "react";

interface MyComponentProps {
    items: Array<{ alt: string; img: any }>;
}

const SkillsFooter: React.FC<MyComponentProps> = ({ items }) => {
    return (
        <>
            {items &&
                items.map((val, indx) => {
                    return (
                        <div className="p-4" key={indx}>
                            <Image
                                src={val?.img}
                                alt={val?.alt}
                                className="max-h-20 w-auto rounded-full"
                            />
                        </div>
                    );
                })}
        </>
    );
};

export default SkillsFooter;
