import { cn } from "@/lib/utils";
import { Instagram, Facebook, Linkedin, Twitter } from "lucide-react";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import FramerWrapper from "./FramerWrapper";

const SocialLinks = () => {
    const links = [
        {
            name: "Facebook",
            link: "https://www.facebook.com/tranthu.hoai.543/",
            icon: <Facebook />,
        },
        {
            name: "Twitter",
            link: "https://x.com/HoaiTranThiThu2",
            icon: <Twitter />,
        },
        {
            name: "Linkedin",
            link: "https://www.linkedin.com/in/hoaittt162/",
            icon: <Linkedin />,
        },
        {
            name: "Instagram",
            link: "https://www.instagram.com/thuhoai_tht/",
            icon: <Instagram />,
        },
    ];
    return (
        <>
            {links.map((itm, indx) => {
                const timing = 0.55 + indx * 0.125;

                return (
                    <FramerWrapper key={indx} delay={timing} y={50}>
                        <Link
                            target="blank"
                            href={itm.link}
                            className={cn(
                                buttonVariants({
                                    variant: "outline",
                                    size: "icon",
                                }),
                            )}
                        >
                            {itm.icon}
                        </Link>
                    </FramerWrapper>
                );
            })}
        </>
    );
};

export default SocialLinks;
