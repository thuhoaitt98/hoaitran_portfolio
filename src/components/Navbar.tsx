"use client";
import { cn } from "@/lib/utils";
import {
    Briefcase,
    Home,
    Layers,
    Lightbulb,
    PackagePlus,
    Phone,
    User2,
} from "lucide-react";
import { buttonVariants } from "./ui/button";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { useEffect, useState } from "react";
import FramerWrapper from "./FramerWrapper";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const items = [
        { name: "Home", icon: <Home />, link: "/" },
        { name: "About", icon: <User2 />, link: "/about" },
        { name: "Skills", icon: <Lightbulb />, link: "/skills" },
        { name: "Projects", icon: <Layers />, link: "/projects" },
        { name: "Work", icon: <Briefcase />, link: "/education" },
        { name: "More", icon: <PackagePlus />, link: "/more" },
        { name: "Contact", icon: <Phone />, link: "/contact" },
    ];

    const [scrolling, setScrolling] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <FramerWrapper
            className={`fixed left-0 right-0 top-5 m-auto h-fit w-fit flex-row gap-3 rounded-full border border-black bg-transparent p-2 px-5 transition delay-150 ease-in-out hover:-translate-y-1 hover:scale-100 max-sm:gap-1 ${scrolling ? "hidden" : "flex"}`}
            y={-100}
        >
            {items.map(itm => {
                return (
                    <TooltipProvider key={itm.name}>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href={itm.link}
                                    className={cn(
                                        buttonVariants({
                                            variant: "ghost",
                                            size: "sm",
                                        }),
                                        "hover:text-[#2f7df4]",
                                        pathname === itm.link &&
                                            "bg-zinc-100 text-[#2f7df4]",
                                    )}
                                >
                                    {itm.icon}
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{itm.name}</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                );
            })}
        </FramerWrapper>
    );
};

export default Navbar;
