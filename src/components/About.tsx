"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";

const cards = [
    {
        icon: "🖥️",
        title: "IT Lab Assistant",
        description:
            "Membimbing dan memfasilitasi mahasiswa dalam mengeksplorasi teknologi di laboratorium.",
    },
    {
        icon: "🎤",
        title: "Event Chairman",
        description:
            "Mengorkestrasi ide dan memimpin eksekusi acara sebagai Ketua Pelaksana Seminar Edukasi.",
    },
    {
        icon: "🌐",
        title: "Event Participation",
        description:
            "Membantu dan berpartisipasi aktif sebagai panitia ICANDIT 2025.",
    },
    {
        icon: "📝",
        title: "UKM Kertas",
        description:
            "Aktif berorganisasi, mengasah komunikasi, dan membangun relasi lintas disiplin.",
    },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
    },
};

/* ─── Spotlight Card with cursor-tracking glow ───── */
function SpotlightCard({ card }: { card: (typeof cards)[0] }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }, []);

    return (
        <motion.div
            ref={cardRef}
            variants={cardVariants}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ scale: 1.03, y: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
            className="group relative overflow-hidden rounded-2xl border border-white/5 bg-navy-900/80 p-5 backdrop-blur-sm transition-colors duration-300 hover:border-cyan-400/20 hover:bg-navy-800/60 sm:p-6"
        >
            {/* Radial spotlight glow */}
            <div
                className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
                style={{
                    opacity: isHovered ? 1 : 0,
                    background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 212, 255, 0.10), transparent 70%)`,
                }}
            />
            {/* Spotlight border glow */}
            <div
                className="pointer-events-none absolute inset-0 z-0 rounded-2xl transition-opacity duration-300"
                style={{
                    opacity: isHovered ? 1 : 0,
                    background: `radial-gradient(250px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 212, 255, 0.15), transparent 60%)`,
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "exclude",
                    WebkitMaskComposite: "xor",
                    padding: "1px",
                }}
            />

            {/* Card content */}
            <div className="relative z-10 flex h-full flex-col">
                <motion.span
                    className="inline-block text-3xl"
                    animate={isHovered ? { scale: 1.15, rotate: [0, -5, 5, 0] } : { scale: 1, rotate: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    {card.icon}
                </motion.span>
                <h3 className="mt-3 text-base font-semibold text-white sm:mt-4 sm:text-lg">{card.title}</h3>
                <p className="mt-2 flex-grow text-xs leading-relaxed text-gray-400 sm:text-sm">{card.description}</p>
                <motion.div
                    className="mt-4 h-px bg-gradient-to-r from-cyan-400/50 to-transparent"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.4 }}
                    style={{ transformOrigin: "left" }}
                />
            </div>
        </motion.div>
    );
}

/* ─── About Section ───────────────────────────────── */
export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <section id="about" className="relative py-20 lg:py-36">
            {/* Background accent */}
            <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 h-[600px] w-[400px] rounded-full bg-cyan-500/3 blur-[150px]" />

            <div className="relative mx-auto max-w-6xl px-5 sm:px-8" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-3"
                >
                    <span className="text-xs font-medium tracking-widest text-cyan-400 uppercase">The Identity</span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
                    animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="text-2xl font-bold text-white sm:text-3xl lg:text-5xl"
                    style={{ fontFamily: "var(--font-heading)" }}
                >
                    About Me
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-400 sm:text-base lg:text-lg"
                >
                    Bagi saya, teknologi harus berdampak langsung. Di luar melatih model
                    AI, saya aktif membangun komunitas dan memimpin kolaborasi.
                </motion.p>

                {/* Bento Grid — 1 col mobile → 2 col md → 4 col lg */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:mt-14 lg:grid-cols-4"
                >
                    {cards.map((card) => (
                        <SpotlightCard key={card.title} card={card} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
