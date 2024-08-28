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
    name: "Farah - Hoai.Tran",
    description: "I am a quality control",
    ogImage: "https://portfolio.hoaitran.site/og-image.png",
    url: "https://portfolio.hoaitran.site",
};

export const metadata: Metadata = {
    metadataBase: new URL("https://portfolio.hoaitran.site"),
    title: {
        default: siteConfig.name,
        template: `%s - Software Engineer`,
    },
    description: siteConfig.description,
    keywords: [
        "farah",
        "Farah",
        "hung",
        "thai",
        "hung.thai",
        "full stack developer",
        "full stack",
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
            name: "Farah",
            url: "https://github.com/thuhoaitt98",
        },
    ],
    creator: "Farah",

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
        creator: "Farah",
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
                        `screen relative flex min-h-screen items-center justify-between break-words
                        px-40 pb-4 pt-14 max-md:p-4 max-sm:pt-20`,
                    )}
                >
                    <Navbar />
                    {children}
                </main>
            </body>
        </html>
    );
}
