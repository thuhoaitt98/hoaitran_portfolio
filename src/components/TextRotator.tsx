import React from "react";

function TextRotator() {
    return (
        <div className="flex flex-col items-center justify-center overflow-hidden rounded-md py-4">
            <div className="font-poppins text-base text-gray-700 [text-wrap:balance] sm:text-2xl">
                I am a Full Stack Developer &
                <span className="ml-2 inline-flex h-[calc(theme(fontSize.lg)*theme(lineHeight.tight))] flex-col overflow-hidden sm:h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))]">
                    <ul className="animate-text-slide block text-left font-rubik text-lg leading-tight sm:text-3xl [&_li]:block">
                        <li className="text-[#2f7df4]">Freelancer</li>
                        <li className="text-[#2f7df4]">Blogger</li>
                        <li className="text-[#2f7df4]">Gamer</li>
                        <li className="text-[#2f7df4]">Contributor</li>
                    </ul>
                </span>
            </div>
        </div>
    );
}

export default TextRotator;
