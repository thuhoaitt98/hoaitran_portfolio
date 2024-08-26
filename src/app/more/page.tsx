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
                "Xoai Shop an e-commerce website that offers a variety of products and services online. The site likely focuses on providing" +
                " a convenient and easy shopping experience for users by offering a wide range of goods. With a user-friendly interface," +
                " xoai.shop makes it simple for customers to search, select, and purchase products that meet their needs." +
                " The website may also offer customer support services, promotions, and secure, flexible payment options.",
            link: "https://www.xoai.shop/",
        },
        {
            title: "Xoai Shop - Ba & Designer",
            description:
                "In my role as both Business Analyst (BA) and Designer for Xoaishop, I am responsible for gathering" +
                " and defining business requirements, creating user-centric designs, and ensuring that the development team has clear," +
                " actionable insights to build an effective and visually appealing e-commerce platform. " +
                "My work bridges the gap between business needs and technical implementation, " +
                "helping to shape the overall user experience and functionality of the site.",
            link: "https://docs.google.com/document/d/1-oy_NDJ4v6wAmP_mFeTGAL_BvIjCqERC6QKVqZeHTvE/edit#heading=h.dhm5o7m1cvv5",
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
