import type { Metadata } from "next";
import { Poppins, Rubik } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-poppins",
});
const rubik = Rubik({
    subsets: ["latin"],
    weight: "600",
    variable: "--font-rubik",
});

const siteConfig = {
    name: "Patrick - hung.thai",
    description: "I am a Passionate Software Developer",
    ogImage: "https://portfolio.hungthai.site/og-image.png",
    url: "https://portfolio.hungthai.site",
};

export const metadata: Metadata = {
    metadataBase: new URL("https://portfolio.hungthai.site"),
    title: {
        default: siteConfig.name,
        template: `%s - Software Engineer`,
    },
    description: siteConfig.description,
    keywords: [
        "Patrick",
        "portfolio",
        "web developer",
        "web",
        "web dev",
        "developer",
        "PROGRAMMER ",
        "programmer ",
        "website",
    ],
    authors: [
        {
            name: "Patrick",
            url: "https://github.com/hungdhv97",
        },
    ],
    creator: "Patrick",

    openGraph: {
        type: "website",
        locale: "en_US",
        url: siteConfig.url,
        title: siteConfig.name,
        description: siteConfig.description,
        images: [`${siteConfig.url}/og-image.png`],
        siteName: siteConfig.name,
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.name,
        description: siteConfig.description,
        images: [`${siteConfig.url}/og-image.png`],
        creator: "Patrick",
    },
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${poppins.variable} ${rubik.variable}`}>
                <main
                    className={cn(
                        "screen relative flex min-h-screen items-center justify-between break-words bg-transparent bg-[radial-gradient(#2f7df4_1px,transparent_1px)] px-40 pb-4 pt-14 [background-size:16px_16px] max-md:p-4 max-sm:pt-20",
                        { "bg-white": "#E6E7EB" },
                    )}
                >
                    <Navbar />
                    {children}
                </main>
            </body>
        </html>
    );
}
