"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const cards = [
    {
        icon: "🖥️",
        title: "IT Lab Assistant",
        description:
            "Membimbing dan memfasilitasi mahasiswa dalam mengeksplorasi teknologi di laboratorium.",
        span: "col-span-1",
    },
    {
        icon: "🎤",
        title: "Event Chairman",
        description:
            "Mengorkestrasi ide dan memimpin eksekusi acara sebagai Ketua Pelaksana Seminar Edukasi.",
        span: "col-span-1",
    },
    {
        icon: "🌐",
        title: "Event Participation",
        description:
            "Membantu dan berpartisipasi aktif sebagai panitia ICANDIT 2025.",
        span: "col-span-1",
    },
    {
        icon: "📝",
        title: "UKM Kertas",
        description:
            "Aktif berorganisasi, mengasah komunikasi, dan membangun relasi lintas disiplin.",
        span: "col-span-1",
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
        },
    },
};

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="about" className="relative py-28 sm:py-36">
            {/* Background accent */}
            <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 h-[600px] w-[400px] rounded-full bg-cyan-500/3 blur-[150px]" />

            <div className="relative mx-auto max-w-6xl px-6" ref={ref}>
                {/* Section label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-4"
                >
                    <span className="text-xs font-medium tracking-widest text-cyan-400 uppercase">
                        The Identity
                    </span>
                </motion.div>

                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
                    style={{ fontFamily: "var(--font-heading)" }}
                >
                    About Me
                </motion.h2>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-5 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg"
                >
                    Bagi saya, teknologi harus berdampak langsung. Di luar melatih model AI,
                    saya aktif membangun komunitas dan memimpin kolaborasi.
                </motion.p>

                {/* Bento Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
                >
                    {cards.map((card) => (
                        <motion.div
                            key={card.title}
                            variants={cardVariants}
                            whileHover={{ scale: 1.03, y: -4 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className={`group relative overflow-hidden rounded-2xl border border-white/5 bg-navy-900/80 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-cyan-400/20 hover:bg-navy-800/60 ${card.span}`}
                        >
                            {/* Hover glow effect */}
                            <div className="pointer-events-none absolute -right-4 -top-4 h-24 w-24 rounded-full bg-cyan-400/0 blur-2xl transition-all duration-500 group-hover:bg-cyan-400/10" />

                            <div className="relative z-10">
                                <span className="text-3xl">{card.icon}</span>
                                <h3 className="mt-4 text-lg font-semibold text-white">
                                    {card.title}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                                    {card.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
