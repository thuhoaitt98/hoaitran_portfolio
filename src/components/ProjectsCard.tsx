import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import FramerWrapper from "./FramerWrapper";
import { ArrowUpRight } from "lucide-react";

interface projectcardprops {
    value: any;
    num: number;
}

const ProjectCards: React.FC<projectcardprops> = ({ value, num }) => {
    return (
        <FramerWrapper
            className={"min-h-[345px] max-w-[32%] max-lg:max-w-full"}
            y={0}
            scale={0.8}
            delay={num / 4}
            duration={0.15}
        >
            <Card className="h-full w-full">
                <CardHeader>
                    <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="font-poppins text-base">
                        {value.description}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                        {value.tags.map((itm: string, indx: number) => {
                            return (
                                <Button
                                    className={
                                        "px-3 py-1.5 text-xs font-medium"
                                    }
                                    key={indx}
                                >
                                    {itm}
                                </Button>
                            );
                        })}
                    </div>
                </CardContent>
                <CardFooter className="flex items-center justify-center">
                    <Link
                        href={value.link}
                        target="blank"
                        className={cn(
                            buttonVariants({ variant: "default", size: "lg" }),
                            "flex",
                        )}
                    >
                        Visit Project <ArrowUpRight className="ml-1 h-5 w-5" />
                    </Link>
                </CardFooter>
            </Card>
        </FramerWrapper>
    );
};

export default ProjectCards;
