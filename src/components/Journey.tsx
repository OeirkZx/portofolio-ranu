"use client";

import { useRef } from "react";
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

function TimelineItem({
    item,
    index,
}: {
    item: (typeof timeline)[0];
    index: number;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            {/* Content card */}
            <div className="w-full md:w-[calc(50%-2rem)]">
                <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="group rounded-2xl border border-white/5 bg-navy-900/60 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-cyan-400/20"
                >
                    <span className="text-xs font-medium tracking-wider text-cyan-400 uppercase">
                        {item.year}
                    </span>
                    <div className="mt-3 flex items-center gap-3">
                        <span className="text-2xl">{item.icon}</span>
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
                </motion.div>
            </div>

            {/* Timeline node (hidden on mobile) */}
            <div className="absolute left-0 top-6 hidden h-4 w-4 -translate-x-1/2 md:left-1/2 md:block">
                <div
                    className={`h-4 w-4 rounded-full bg-gradient-to-br ${item.color} shadow-lg shadow-cyan-500/25`}
                />
            </div>

            {/* Spacer for the other side */}
            <div className="hidden w-[calc(50%-2rem)] md:block" />
        </motion.div>
    );
}

export default function Journey() {
    const containerRef = useRef(null);
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const lineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

    return (
        <section id="journey" className="relative py-28 sm:py-36" ref={sectionRef}>
            {/* Background accent */}
            <div className="pointer-events-none absolute right-0 top-1/4 h-[600px] w-[400px] rounded-full bg-cyan-500/3 blur-[150px]" />

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
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 }}
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
