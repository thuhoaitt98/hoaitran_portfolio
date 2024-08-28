import SocialLinks from "@/components/SocialLinks";
import HeroTexts from "@/components/HeroTexts";
import HeroImage from "@/components/HeroImage";
import GithubBtn from "@/components/GithubBtn";
import DownLoadResumeBtn from "@/components/DownLoadResumeBtn";
import FramerWrapper from "@/components/FramerWrapper";

export default function Home() {
    return (
        <>
            <FramerWrapper
                className="flex h-full w-auto flex-col justify-start gap-4"
                y={0}
                x={-100}
            >
                <HeroTexts />
                <div className="flex h-fit w-full gap-3 p-4">
                    <SocialLinks />
                </div>
                <DownLoadResumeBtn />
            </FramerWrapper>
            <FramerWrapper
                className="relative block w-1/3 mr-40 max-lg:hidden"
                y={0}
                x={100}
            >
                <HeroImage />
            </FramerWrapper>
            <GithubBtn />
        </>
    );
}
