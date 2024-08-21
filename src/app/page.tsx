"use client";

import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import Services from "@/views/Services";
import Projects from "@/views/Projects";
import Contact from "@/views/Contact";
import LoadingScreen from "@/components/LoadingScreen";
import About from "@/views/About";

export default function Home() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => setLoading(false), 1000);
    }, []);

    return (
        <>
            {!loading ? (
                <div>
                    <Navbar />
                    <About />
                    <Services />
                    <Projects />
                    <Contact />
                </div>
            ) : (
                <LoadingScreen />
            )}
        </>
    );
}
