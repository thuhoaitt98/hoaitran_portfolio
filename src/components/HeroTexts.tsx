import TextRotator from "./TextRotator";

const HeroTexts = () => {
    return (
        <>
            <h3 className="font-poppins text-2xl max-sm:text-xl">My Name is</h3>
            <h1 className="name_underline font-rubik text-8xl text-primary max-sm:text-6xl">
                Farah
            </h1>
            <TextRotator />
        </>
    );
};
export default HeroTexts;
