"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const techs = [
    {
        name: "Python",
        icon: (
            <svg viewBox="0 0 128 128" className="h-10 w-10">
                <linearGradient id="python-a" x1="70.252" x2="170.659" y1="1237.476" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#5A9FD4" /><stop offset="1" stopColor="#306998" /></linearGradient>
                <linearGradient id="python-b" x1="209.474" x2="298.722" y1="1098.811" y2="1024.973" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#FFD43B" /><stop offset="1" stopColor="#FFE873" /></linearGradient>
                <path fill="url(#python-a)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z" />
                <path fill="url(#python-b)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z" />
            </svg>
        ),
    },
    {
        name: "PyTorch",
        icon: (
            <svg viewBox="0 0 128 128" className="h-10 w-10">
                <path fill="#EE4C2C" d="M64.1 13.2L37.1 40.2c-14.9 14.9-14.9 39.1 0 54 14.9 14.9 39.1 14.9 54 0 14.9-14.9 14.9-39.1 0-54l-6.7 6.7c11.2 11.2 11.2 29.4 0 40.6s-29.4 11.2-40.6 0-11.2-29.4 0-40.6l20.3-20.3 3.7-3.7V13.2z" />
                <circle cx="80.4" cy="32.6" r="6.2" fill="#EE4C2C" />
            </svg>
        ),
    },
    {
        name: "OpenCV",
        icon: (
            <svg viewBox="0 0 128 128" className="h-10 w-10">
                <circle cx="44" cy="38" r="20" fill="#FF0000" opacity="0.9" />
                <circle cx="84" cy="38" r="20" fill="#00FF00" opacity="0.9" />
                <circle cx="64" cy="72" r="20" fill="#0000FF" opacity="0.9" />
            </svg>
        ),
    },
    {
        name: "TensorFlow",
        icon: (
            <svg viewBox="0 0 128 128" className="h-10 w-10">
                <path fill="#FF6F00" d="M64 4L16 28v56l16 8V44l32-16v96l16 8V36l16 8v56l16-8V28z" />
            </svg>
        ),
    },
    {
        name: "Node.js",
        icon: (
            <svg viewBox="0 0 128 128" className="h-10 w-10">
                <path fill="#8CC84B" d="M64 5.1c-2 0-3.9.5-5.6 1.5L14.8 32.3c-3.5 2-5.6 5.6-5.6 9.6v51.4c0 3.9 2.1 7.6 5.6 9.6l43.6 25.7c3.5 2 7.7 2 11.2 0l43.6-25.7c3.5-2 5.6-5.6 5.6-9.6V41.9c0-3.9-2.1-7.6-5.6-9.6L69.6 6.6c-1.7-1-3.6-1.5-5.6-1.5z" />
                <path fill="#fff" d="M64 112c-1.5 0-3-.4-4.3-1.1L45.2 102c-2-.9-1-.4-3.7.2-6.4 3.5.4 6.3 7.2 7.5l17 9.8c2.6 1.5 6.2 1.5 8.8 0l17-9.8c2.7-1.5 4.3-4.4 4.3-7.5V74.8c0-3.1-1.6-6-4.3-7.5L74 58.3c-2.7-1.5-6-1.5-8.8 0L48.2 67.3c-2.7 1.5-4.3 4.4-4.3 7.5v22.5c0 3.1 1.6 6 4.3 7.5l5.5 3.2" />
            </svg>
        ),
    },
    {
        name: "Next.js",
        icon: (
            <svg viewBox="0 0 128 128" className="h-10 w-10">
                <circle cx="64" cy="64" r="60" fill="white" />
                <path fill="#0B132B" d="M50 40v48l38-48H68l-18 22.5V40z" />
                <circle cx="88" cy="40" r="5" fill="#0B132B" />
            </svg>
        ),
    },
    {
        name: "React",
        icon: (
            <svg viewBox="0 0 128 128" className="h-10 w-10">
                <g fill="#61DAFB">
                    <circle cx="64" cy="64" r="11.4" />
                    <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C5.6 51.6 0 59 0 64s5.6 12.4 20.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 14.7-6.4 20.3-13.8 20.3-18.8s-5.6-12.4-20.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2s4.6-.1 6.9-.2c-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-6.5-7.1-13.5-9.7-20.9 3.1-.6 6.4-1.1 9.8-1.4 1.7 3 3.6 6 5.5 8.9-1.9 3-3.8 5.9-5.6 8.9 0 .2 0 .3 0 .5zm-4.5-37.3c3.4-.3 6.7-.8 9.8-1.4 2.6-7.4 5.9-14.4 9.7-20.9.1.2.1.3.1.5-1.9 3-3.8 5.9-5.5 8.9-1.9 3-3.6 6-5.5 8.9-3.4-.3-6.4-.8-8.6-1zm18.6-33.5c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2s-4.6.1-6.9.2c2.2-2.9 4.5-5.7 6.9-8.3zM103.4 64c-3.3 2.9-7.2 5.7-11.5 8.2-1.5-5.6-3.5-11.3-6-17 2.5-5.7 4.5-11.4 6-17 4.3 2.5 8.2 5.3 11.5 8.2 3.2 2.8 5.4 5.5 6.3 7.6-.9 2.1-3.1 4.8-6.3 7.6zM35.5 14.7c.9-.6 2.1-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1.1-4.5-1.4-6.6-1.7-10.5-.3-17.9 3.8-20.3zM24.6 72.1c-4.3-2.5-8.2-5.3-11.5-8.2-3.2-2.8-5.4-5.5-6.3-7.6.9-2.1 3.1-4.8 6.3-7.6 3.3-2.9 7.2-5.7 11.5-8.2 1.5 5.6 3.5 11.3 6 17-2.5 5.7-4.5 11.4-6 17zm10.9 37.6c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zm56.6-20.3c1.7 10.5.3 17.9-3.8 20.3-.9.6-2.1.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1.1 4.5 1.4 6.6z" />
                </g>
            </svg>
        ),
    },
    {
        name: "Tailwind CSS",
        icon: (
            <svg viewBox="0 0 128 128" className="h-10 w-10">
                <path fill="#38BDF8" d="M64 29.3C47.1 29.3 36.7 37.7 33 54.5c6.3-8.4 13.7-11.6 22-9.4 4.8 1.2 8.2 4.7 12 8.5 6.1 6.3 13.2 13.6 28.7 13.6 16.9 0 27.3-8.4 31-25.2-6.3 8.4-13.7 11.6-22 9.4-4.8-1.2-8.2-4.7-12-8.5-6.1-6.3-13.2-13.6-28.7-13.6zM33 67.2C16.1 67.2 5.7 75.6 2 92.5c6.3-8.4 13.7-11.6 22-9.4 4.8 1.2 8.2 4.7 12 8.5 6.1 6.3 13.2 13.6 28.7 13.6 16.9 0 27.3-8.4 31-25.2-6.3 8.4-13.7 11.6-22 9.4-4.8-1.2-8.2-4.7-12-8.5-6.1-6.3-13.2-13.6-28.7-13.7z" />
            </svg>
        ),
    },
];

export default function TechArsenal() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="tech" className="relative overflow-hidden py-28 sm:py-36" ref={ref}>
            {/* Background */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.02] to-transparent" />

            <div className="relative mx-auto max-w-6xl px-6">
                {/* Section label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-4 text-center"
                >
                    <span className="text-xs font-medium tracking-widest text-cyan-400 uppercase">
                        Tech Arsenal
                    </span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-center text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
                    style={{ fontFamily: "var(--font-heading)" }}
                >
                    My Skillset
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mx-auto mt-5 max-w-lg text-center text-base text-gray-400 sm:text-lg"
                >
                    Technologies I work with to bring ideas to life.
                </motion.p>
            </div>

            {/* Marquee */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative mt-16"
            >
                {/* Gradient masks */}
                <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-navy-950 to-transparent" />
                <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-navy-950 to-transparent" />

                <div className="animate-marquee flex w-max gap-8">
                    {[...techs, ...techs].map((tech, index) => (
                        <div
                            key={`${tech.name}-${index}`}
                            className="group flex flex-col items-center gap-3 rounded-2xl border border-white/5 bg-navy-900/40 px-8 py-6 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/30 hover:bg-navy-800/60 hover:shadow-[0_0_30px_rgba(0,212,255,0.15)]"
                        >
                            <div className="transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_rgba(0,212,255,0.5)]">
                                {tech.icon}
                            </div>
                            <span className="text-sm font-medium text-gray-400 transition-colors duration-300 group-hover:text-cyan-400">
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
