import ContactForm from "@/components/ContactForm";
import FramerWrapper from "@/components/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Phone } from "lucide-react";

const contactPage = () => {
    return (
        <div className="relative flex h-full w-full flex-col items-start gap-5 overflow-hidden">
            <Badge className="gap-2">
                <Phone className="h-5 w-5" />
                Contact
            </Badge>
            <div className="flex w-full flex-col gap-3">
                <Heading>Contact Me!</Heading>
                <div className="flex h-auto w-full items-center justify-center">
                    <FramerWrapper y={0} scale={0.8}>
                        <ContactForm />
                    </FramerWrapper>
                </div>
                <p className="w-full font-poppins text-lg text-primary max-sm:text-base"></p>
            </div>
        </div>
    );
};

export default contactPage;
