import { Github } from "lucide-react";
import Link from "next/link";

const GithubBtn = () => {
    return (
        <Link
            href={"https://github.com/taqui-786"}
            target="blank"
            className="absolute bottom-5 left-0 z-50 flex h-fit w-fit animate-pulse items-center justify-center gap-2 rounded-r-full border-y border-r border-black p-2 shadow-md hover:animate-none hover:bg-primary hover:text-white"
        >
            <Github />
            <span className="font-rubik text-2xl max-sm:text-xl">Github</span>
        </Link>
    );
};

export default GithubBtn;
