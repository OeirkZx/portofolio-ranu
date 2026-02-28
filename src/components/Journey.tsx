"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";

const timeline = [
    {
        year: "2024 - Present",
        title: "Educational Seminars",
        description:
            "Actively organizing and participating in academic seminars to bridge health and tech. Leading discussions on AI applications in healthcare and medical data analysis.",
        icon: "🎓",
        color: "from-cyan-400 to-blue-500",
        image: "/seminar.jpg",
    },
    {
        year: "2023 - Present",
        title: "Tech Projects",
        description:
            "Exploring Web Dev, Computer Vision, and AI. Building real-world solutions that combine medical knowledge with cutting-edge technology.",
        icon: "💻",
        color: "from-cyan-500 to-teal-500",
        image: "/project.jpg",
        link: {
            text: "Explore my repositories on GitHub →",
            url: "https://github.com",
        },
    },
    {
        year: "2023 - Present",
        title: "Community Service",
        description:
            "Pengabdian Masyarakat — Sharing knowledge and implementing technology for the broader community. Bridging the digital divide through hands-on workshops and mentoring.",
        icon: "🤝",
        color: "from-blue-400 to-indigo-500",
        image: "/pengamas.jpg",
    },
];

/* ─── 3D Tilt Timeline Card ──────────────────────── */
function TimelineItem({ item, index }: { item: (typeof timeline)[0]; index: number }) {
    const ref = useRef(null);
    const cardRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });
    const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setTilt({
            rotateY: ((x - rect.width / 2) / (rect.width / 2)) * 4,
            rotateX: ((rect.height / 2 - y) / (rect.height / 2)) * 4,
        });
        setMousePos({ x, y });
    }, []);

    const handleMouseLeave = useCallback(() => {
        setTilt({ rotateX: 0, rotateY: 0 });
        setIsHovered(false);
    }, []);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={`relative flex w-full flex-col items-start gap-6 md:flex-row ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
        >
            {/* Card */}
            <div className="w-full md:w-[calc(50%-2rem)]" style={{ perspective: "1000px" }}>
                <motion.div
                    ref={cardRef}
                    onMouseMove={handleMouseMove}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={handleMouseLeave}
                    animate={{ rotateX: tilt.rotateX, rotateY: tilt.rotateY, scale: isHovered ? 1.02 : 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="group relative overflow-hidden rounded-2xl border border-white/5 bg-navy-900/60 p-4 backdrop-blur-sm transition-colors duration-300 hover:border-cyan-400/25 sm:p-6"
                    style={{ transformStyle: "preserve-3d" }}
                >
                    {/* Event documentation image — grayscale → color on hover */}
                    <div className="relative mb-4 aspect-[16/9] w-full overflow-hidden rounded-xl bg-navy-950/50">
                        <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 45vw"
                            className="object-cover grayscale transition-all duration-500 ease-out group-hover:scale-105 group-hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 to-transparent opacity-100 transition-opacity duration-500 group-hover:opacity-0" />
                    </div>

                    {/* Mouse spotlight */}
                    <div
                        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
                        style={{
                            opacity: isHovered ? 1 : 0,
                            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 212, 255, 0.07), transparent 70%)`,
                        }}
                    />

                    <div className="relative z-10">
                        <span className="text-[10px] font-medium tracking-wider text-cyan-400 uppercase sm:text-xs">
                            {item.year}
                        </span>
                        <div className="mt-2 flex items-center gap-2 sm:mt-3 sm:gap-3">
                            <motion.span
                                className="text-xl sm:text-2xl"
                                animate={isHovered ? { scale: 1.15, rotate: [0, -8, 8, 0] } : { scale: 1 }}
                                transition={{ duration: 0.4 }}
                            >
                                {item.icon}
                            </motion.span>
                            <h3 className="text-lg font-semibold text-white sm:text-xl">{item.title}</h3>
                        </div>
                        <p className="mt-2 text-xs leading-relaxed text-gray-400 sm:mt-3 sm:text-sm">
                            {item.description}
                        </p>
                        {item.link && (
                            <a
                                href={item.link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-cyan-400 transition-colors hover:text-cyan-300 sm:mt-4 sm:text-sm"
                            >
                                {item.link.text}
                            </a>
                        )}
                    </div>
                </motion.div>
            </div>

            {/* Timeline node */}
            <div className="absolute left-0 top-8 hidden h-4 w-4 -translate-x-1/2 md:left-1/2 md:block">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.3, type: "spring", stiffness: 400 }}
                    className={`h-4 w-4 rounded-full bg-gradient-to-br ${item.color} shadow-lg shadow-cyan-500/25`}
                />
            </div>

            {/* Spacer for alternating layout */}
            <div className="hidden w-[calc(50%-2rem)] md:block" />
        </motion.div>
    );
}

/* ─── Journey Section ─────────────────────────────── */
export default function Journey() {
    const containerRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-60px" });

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const lineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

    // True parallax: background glows move at different speed
    const glowY1 = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
    const glowY2 = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
    const glowScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.9]);

    return (
        <section id="journey" className="relative py-20 lg:py-36" ref={sectionRef}>
            {/* Parallax background glows */}
            <motion.div
                style={{ y: glowY1, scale: glowScale }}
                className="pointer-events-none absolute right-0 top-1/4 h-[600px] w-[400px] rounded-full bg-cyan-500/3 blur-[150px]"
            />
            <motion.div
                style={{ y: glowY2, scale: glowScale }}
                className="pointer-events-none absolute left-0 bottom-1/4 h-[400px] w-[300px] rounded-full bg-blue-500/3 blur-[120px]"
            />

            <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-3 text-center md:text-left"
                >
                    <span className="text-xs font-medium tracking-widest text-cyan-400 uppercase">The Journey</span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
                    animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="text-center text-2xl font-bold text-white sm:text-3xl md:text-left lg:text-5xl"
                    style={{ fontFamily: "var(--font-heading)" }}
                >
                    Experience & Activities
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mx-auto mt-4 max-w-xl text-center text-sm text-gray-400 sm:text-base md:mx-0 md:text-left lg:text-lg"
                >
                    A timeline of learning, building, and giving back.
                </motion.p>

                {/* Timeline */}
                <div ref={containerRef} className="relative mt-14 md:mt-20">
                    {/* Animated vertical line (desktop) */}
                    <div className="absolute left-0 top-0 hidden h-full w-px bg-white/5 md:left-1/2 md:block">
                        <motion.div style={{ height: lineHeight }} className="w-full bg-gradient-to-b from-cyan-400/60 to-cyan-600/20" />
                    </div>
                    {/* Static line (mobile) */}
                    <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-cyan-400/40 to-transparent md:hidden" />

                    <div className="flex flex-col gap-10 pl-6 md:gap-20 md:pl-0">
                        {timeline.map((item, index) => (
                            <TimelineItem key={item.title} item={item} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
