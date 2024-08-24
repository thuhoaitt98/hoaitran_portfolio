"use client";
import { useEffect, useState } from "react";
import { buttonVariants } from "./ui/button";
import { Send } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const HackerBtn = ({ label }: { label: string }) => {
    const [displayText, setDisplayText] = useState(label);
    const charset = "abcdefghijklmnopqrstuvwxyz";

    const randomChars = (length: number) => {
        return Array.from(
            { length },
            () => charset[Math.floor(Math.random() * charset.length)],
        ).join("");
    };

    const scramble = async (input: string) => {
        let prefix = "";
        for (let index = 0; index < input.length; index++) {
            await new Promise(resolve => setTimeout(resolve, 50));
            prefix += input.charAt(index);
            setDisplayText(prefix + randomChars(input.length - prefix.length));
        }
    };

    const startScrambling = () => {
        scramble(label);
        setTimeout(() => console.log("Submitted"), label.length * 50);
    };

    useEffect(() => {
        setDisplayText(label);
    }, [label]);

    return (
        <Link
            href="https://t.me/thuhoaitt98"
            target="blank"
            className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "flex",
            )}
            onMouseEnter={startScrambling}
        >
            <Send className="mx-1" />
            {displayText}
        </Link>
    );
};

export default HackerBtn;
