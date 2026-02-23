"use client";

import { motion } from "framer-motion";
import ParticleBackground from "./ParticleBackground";

export default function Hero() {
    const scrollToAbout = () => {
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="hero"
            className="relative flex min-h-screen items-center justify-center overflow-hidden"
        >
            <ParticleBackground />

            {/* Gradient overlays */}
            <div className="pointer-events-none absolute inset-0 z-[1]">
                <div className="absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[120px]" />
                <div className="absolute right-1/4 bottom-1/4 h-[300px] w-[300px] rounded-full bg-cyan-400/5 blur-[100px]" />
            </div>

            <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    <span className="mb-6 inline-block rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-1.5 text-xs font-medium tracking-widest text-cyan-400 uppercase">
                        Medical Informatics · AI · Machine Learning
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="mt-4 font-heading text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
                    style={{ fontFamily: "var(--font-heading)" }}
                >
                    Bridging Healthcare
                    <br />
                    <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">
                        & Artificial Intelligence.
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg"
                >
                    Hi, I&apos;m <span className="font-semibold text-white">Ranu Kumbolo</span>.
                    Medical Informatics Student &amp; IT Lab Assistant | Web Dev, AI, &amp; ML Enthusiast.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="mt-10"
                >
                    <button
                        onClick={scrollToAbout}
                        className="group relative inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-8 py-3.5 text-sm font-semibold text-cyan-400 transition-all duration-300 hover:border-cyan-400/60 hover:bg-cyan-400/20 hover:shadow-[0_0_30px_rgba(0,212,255,0.3)]"
                    >
                        Explore My Journey
                        <svg
                            className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        className="flex h-10 w-6 items-start justify-center rounded-full border border-gray-500/30 pt-2"
                    >
                        <div className="h-1.5 w-1 rounded-full bg-cyan-400/60" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
