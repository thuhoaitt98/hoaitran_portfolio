import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, PackagePlus } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import FramerWrapper from "@/components/FramerWrapper";

const morePage = () => {
    const morelink = [
        {
            title: "Xoai Shop-A comprehensive ecommerce shopping website",
            description:
                "Xoai Shop is a fully-featured ecommerce platform built using Django and Postgresql on the backend, with a modern frontend powered by Next.js and TypeScript. " +
                "The site is styled with TailwindCSS for responsive design and uses Redis for caching to improve performance. " +
                "The development and deployment process is streamlined with Docker and CI/CD integration via Github Actions, ensuring reliability and scalability.",
            link: "https://www.xoai.shop/",
        },
    ];

    return (
        <div className="relative flex h-full w-full flex-col items-start gap-5 overflow-hidden">
            <Badge className="gap-2">
                <PackagePlus className="h-5 w-5" />
                More
            </Badge>
            <div className="flex flex-col gap-3">
                <Heading>More</Heading>
            </div>
            <div className="flex h-auto w-full flex-wrap gap-3 p-2">
                {morelink.map((value, indx) => {
                    return (
                        <FramerWrapper
                            key={indx}
                            className="max-w-[100%] max-lg:max-w-full"
                            y={0}
                            scale={0.8}
                            delay={indx / 4}
                            duration={0.15}
                        >
                            <Card className="w-full">
                                <CardHeader>
                                    <CardTitle>{value.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="font-poppins text-base text-justify">
                                        {value.description}
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <Link
                                        href={value.link}
                                        target="blank"
                                        className={cn(
                                            buttonVariants({
                                                variant: "default",
                                                size: "lg",
                                            }),
                                            "w-full gap-3",
                                        )}
                                    >
                                        {" "}
                                        <ExternalLink />
                                        Visit here
                                    </Link>
                                </CardFooter>
                            </Card>
                        </FramerWrapper>
                    );
                })}
            </div>
        </div>
    );
};

export default morePage;
