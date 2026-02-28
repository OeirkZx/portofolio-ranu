"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import ParticleBackground from "./ParticleBackground";

export default function Hero() {
    const sectionRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"],
    });

    // Parallax speeds — blobs lag behind content
    const blobY1 = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
    const blobY2 = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
    const blobScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.3]);

    // Content moves faster on scroll
    const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
    const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

    const scrollToAbout = () => {
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="hero"
            ref={sectionRef}
            className="relative flex min-h-screen items-center justify-center overflow-hidden py-20 sm:py-28"
        >
            <ParticleBackground />

            {/* Parallax gradient blobs with continuous organic floating */}
            <div className="pointer-events-none absolute inset-0 z-[1]">
                <motion.div
                    style={{ y: blobY1, scale: blobScale }}
                    animate={{ y: [0, -20, 0, 15, 0], x: [0, 10, -5, 8, 0] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute left-[30%] top-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[120px]"
                />
                <motion.div
                    style={{ y: blobY2, scale: blobScale }}
                    animate={{ y: [0, 15, -10, 20, 0], x: [0, -12, 8, -6, 0] }}
                    transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute right-[20%] bottom-1/4 h-[300px] w-[300px] rounded-full bg-cyan-400/5 blur-[100px]"
                />
            </div>

            {/* Main content — side-by-side on desktop, stacked on mobile */}
            <motion.div
                style={{ y: contentY, opacity: contentOpacity }}
                className="relative z-10 mx-auto flex w-full max-w-6xl flex-col-reverse items-center gap-12 px-6 lg:flex-row lg:items-center lg:gap-16"
            >
                {/* ─── Text Column ─── */}
                <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        <span className="mb-6 inline-block rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-1.5 text-[10px] font-medium tracking-widest text-cyan-400 uppercase sm:text-xs">
                            Medical Informatics · AI · Machine Learning
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 1, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="mt-2 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.75rem]"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        Bridging Healthcare
                        <br className="hidden sm:block" />
                        <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">
                            {" "}& Artificial Intelligence.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="mt-5 max-w-lg text-sm leading-relaxed text-gray-400 sm:text-base lg:text-lg"
                    >
                        Hi, I&apos;m{" "}
                        <span className="font-semibold text-white">Ranu Kumbolo</span>.
                        Medical Informatics Student &amp; IT Lab Assistant | Web Dev, AI,
                        &amp; ML Enthusiast.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 1, delay: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="mt-8"
                    >
                        <button
                            onClick={scrollToAbout}
                            className="group relative inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-7 py-3 text-sm font-semibold text-cyan-400 transition-all duration-300 hover:border-cyan-400/60 hover:bg-cyan-400/20 hover:shadow-[0_0_30px_rgba(0,212,255,0.3)]"
                        >
                            Explore My Journey
                            <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </motion.div>
                </div>

                {/* ─── Profile Image Column ─── */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, filter: "blur(12px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="relative flex w-full max-w-[260px] justify-center sm:max-w-[320px] lg:max-w-[380px] lg:flex-none"
                >
                    {/* Floating animation wrapper */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="relative aspect-[3/4] w-full"
                    >
                        {/* Layered glow effects */}
                        <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-b from-cyan-400/30 via-cyan-500/10 to-transparent blur-lg" />
                        <div className="absolute -inset-[3px] rounded-2xl bg-gradient-to-br from-cyan-400/40 via-transparent to-cyan-600/20 opacity-60" />

                        {/* Image container */}
                        <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-navy-900/80 p-1.5">
                            <div className="relative h-full w-full overflow-hidden rounded-xl bg-navy-950">
                                <Image
                                    src="/profile.jpg"
                                    alt="Ranu Kumbolo"
                                    fill
                                    priority
                                    sizes="(max-width: 640px) 260px, (max-width: 1024px) 320px, 380px"
                                    className="object-cover transition-transform duration-700 hover:scale-105"
                                />
                            </div>
                        </div>

                        {/* Decorative rotating ring */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            className="absolute -right-5 -top-5 h-16 w-16 rounded-full border border-dashed border-cyan-400/25 sm:-right-6 sm:-top-6 sm:h-20 sm:w-20"
                        />
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Scroll indicator — hidden on very small screens */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 sm:block"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="flex h-10 w-6 items-start justify-center rounded-full border border-gray-500/30 pt-2"
                >
                    <div className="h-1.5 w-1 rounded-full bg-cyan-400/60" />
                </motion.div>
            </motion.div>
        </section>
    );
}
