"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const timeline = [
    {
        year: "2024 - Present",
        title: "Educational Seminars",
        description:
            "Actively organizing and participating in academic seminars to bridge health and tech. Leading discussions on AI applications in healthcare and medical data analysis.",
        icon: "🎓",
        color: "from-cyan-400 to-blue-500",
    },
    {
        year: "2023 - Present",
        title: "Tech Projects",
        description:
            "Exploring Web Dev, Computer Vision, and AI. Building real-world solutions that combine medical knowledge with cutting-edge technology.",
        icon: "💻",
        color: "from-cyan-500 to-teal-500",
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
    },
];

/* ─── 3D Tilt Timeline Card ──────────────────────── */
function TimelineItem({
    item,
    index,
}: {
    item: (typeof timeline)[0];
    index: number;
}) {
    const ref = useRef(null);
    const cardRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            if (!cardRef.current) return;
            const rect = cardRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            // Subtle 3D tilt: max ±6 degrees
            const rotateY = ((x - centerX) / centerX) * 6;
            const rotateX = ((centerY - y) / centerY) * 6;

            setTilt({ rotateX, rotateY });
            setMousePos({ x, y });
        },
        []
    );

    const handleMouseLeave = useCallback(() => {
        setTilt({ rotateX: 0, rotateY: 0 });
        setIsHovered(false);
    }, []);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
                duration: 0.7,
                delay: 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className={`relative flex w-full items-start gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
        >
            {/* Content card with 3D tilt */}
            <div className="w-full md:w-[calc(50%-2rem)]" style={{ perspective: "800px" }}>
                <motion.div
                    ref={cardRef}
                    onMouseMove={handleMouseMove}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={handleMouseLeave}
                    animate={{
                        rotateX: tilt.rotateX,
                        rotateY: tilt.rotateY,
                        scale: isHovered ? 1.02 : 1,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="group relative overflow-hidden rounded-2xl border border-white/5 bg-navy-900/60 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-cyan-400/20"
                    style={{ transformStyle: "preserve-3d" }}
                >
                    {/* Mouse spotlight glow */}
                    <div
                        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
                        style={{
                            opacity: isHovered ? 1 : 0,
                            background: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 212, 255, 0.08), transparent 70%)`,
                        }}
                    />

                    {/* Shine reflection effect */}
                    <div
                        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500"
                        style={{
                            opacity: isHovered ? 0.6 : 0,
                            background: `linear-gradient(105deg, transparent 40%, rgba(0, 212, 255, 0.03) 45%, rgba(0, 212, 255, 0.06) 50%, rgba(0, 212, 255, 0.03) 55%, transparent 60%)`,
                            transform: `translateX(${isHovered ? mousePos.x * 0.1 - 20 : -100}px)`,
                        }}
                    />

                    <div className="relative z-10">
                        <span className="text-xs font-medium tracking-wider text-cyan-400 uppercase">
                            {item.year}
                        </span>
                        <div className="mt-3 flex items-center gap-3">
                            <motion.span
                                className="text-2xl"
                                animate={isHovered ? { scale: 1.2, rotate: [0, -8, 8, 0] } : { scale: 1 }}
                                transition={{ duration: 0.4 }}
                            >
                                {item.icon}
                            </motion.span>
                            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                        </div>
                        <p className="mt-3 text-sm leading-relaxed text-gray-400">
                            {item.description}
                        </p>
                        {item.link && (
                            <a
                                href={item.link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-cyan-400 transition-colors hover:text-cyan-300"
                            >
                                {item.link.text}
                            </a>
                        )}
                    </div>
                </motion.div>
            </div>

            {/* Timeline node (hidden on mobile) */}
            <div className="absolute left-0 top-6 hidden h-4 w-4 -translate-x-1/2 md:left-1/2 md:block">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.3, type: "spring", stiffness: 400 }}
                    className={`h-4 w-4 rounded-full bg-gradient-to-br ${item.color} shadow-lg shadow-cyan-500/25`}
                />
            </div>

            {/* Spacer */}
            <div className="hidden w-[calc(50%-2rem)] md:block" />
        </motion.div>
    );
}

/* ─── Journey Section ─────────────────────────────── */
export default function Journey() {
    const containerRef = useRef(null);
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const lineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

    // Parallax: background glows scroll slower than content
    const glowY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
    const glowScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.9]);

    return (
        <section id="journey" className="relative py-28 sm:py-36" ref={sectionRef}>
            {/* Parallax background glow — moves at a different rate */}
            <motion.div
                style={{ y: glowY, scale: glowScale }}
                className="pointer-events-none absolute right-0 top-1/4 h-[600px] w-[400px] rounded-full bg-cyan-500/3 blur-[150px]"
            />
            <motion.div
                style={{
                    y: useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]),
                    scale: useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.3, 0.85]),
                }}
                className="pointer-events-none absolute left-0 bottom-1/4 h-[400px] w-[300px] rounded-full bg-blue-500/3 blur-[120px]"
            />

            <div className="relative mx-auto max-w-5xl px-6">
                {/* Section label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-4 text-center"
                >
                    <span className="text-xs font-medium tracking-widest text-cyan-400 uppercase">
                        The Journey
                    </span>
                </motion.div>

                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
                    animate={
                        isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}
                    }
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="text-center text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
                    style={{ fontFamily: "var(--font-heading)" }}
                >
                    Experience & Activities
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mx-auto mt-5 max-w-xl text-center text-base text-gray-400 sm:text-lg"
                >
                    A timeline of learning, building, and giving back.
                </motion.p>

                {/* Timeline */}
                <div ref={containerRef} className="relative mt-16">
                    {/* Vertical line */}
                    <div className="absolute left-0 top-0 hidden h-full w-px bg-white/5 md:left-1/2 md:block">
                        <motion.div
                            style={{ height: lineHeight }}
                            className="w-full bg-gradient-to-b from-cyan-400/60 to-cyan-600/20"
                        />
                    </div>

                    {/* Mobile left border */}
                    <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-cyan-400/40 to-transparent md:hidden" />

                    <div className="flex flex-col gap-12 pl-8 md:gap-16 md:pl-0">
                        {timeline.map((item, index) => (
                            <TimelineItem key={item.title} item={item} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
