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
            title: "codelearn.io",
            description:
                "Mastering Vietnamese Virtual Assistant: Comprehensive Programming with Python",
            link: "https://codelearn.io/sharing/post/1429199",
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
                            className="max-w-[32%] max-lg:max-w-full"
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
                                    <p className="font-poppins text-base">
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
