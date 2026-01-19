"use client";

import React from "react";
import { ArrowRight, Award, TrendingUp, Zap, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const MainSection = () => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    const scrollToApply = () => {
        const element = document.getElementById("apply");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <>
            <section ref={ref} className="relative pt-32 pb-20 min-h-screen flex items-center overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-purple-900 to-slate-900">
                    <motion.div
                        className="absolute inset-0 opacity-20"
                        style={{
                            backgroundImage: `
                                linear-gradient(to right, rgba(6,182,212,0.3) 1px, transparent 1px),
                                linear-gradient(to bottom, rgba(6,182,212,0.3) 1px, transparent 1px)
                            `,
                            backgroundSize: "60px 60px",
                            y,
                        }}
                    />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <motion.div style={{ opacity }}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="inline-flex items-center gap-2 mb-6"
                            >
                                <Sparkles className="text-cyan-400 w-4 h-4" />
                                <span className="text-sm text-cyan-200">Admissions Open for 2026</span>
                            </motion.div>

                            <h1 className="text-5xl lg:text-7xl text-white font-bold mb-6">
                                Master of <br />
                                <span className="bg-linear-to-r from-cyan-400 via-emerald-400 to-amber-400 bg-clip-text text-transparent">
                                    Business Administration
                                </span>
                            </h1>

                            <p className="text-xl text-gray-300 mb-8">
                                Transform your career with leadership skills and global perspectives.
                            </p>

                            <div className="flex gap-4 mb-10">
                                <button
                                    onClick={scrollToApply}
                                    className="px-8 py-4 rounded-full bg-linear-to-r from-cyan-500 to-emerald-500 text-white font-semibold flex items-center gap-2"
                                >
                                    Apply Now <ArrowRight />
                                </button>

                                <button
                                    onClick={() =>
                                        document.getElementById("program")?.scrollIntoView({ behavior: "smooth" })
                                    }
                                    className="px-8 py-4 rounded-full border border-cyan-400 text-white"
                                >
                                    Explore Program
                                </button>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-4">
                                {[
                                    { icon: Award, value: "2 Years", label: "Duration" },
                                    { icon: TrendingUp, value: "95%+", label: "Placement" },
                                    { icon: Zap, value: "UGC", label: "Approved" },
                                ].map((item, i) => (
                                    <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4">
                                        <item.icon className="text-cyan-400 mb-2" />
                                        <div className="text-white font-bold">{item.value}</div>
                                        <div className="text-sm text-gray-400">{item.label}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="rounded-3xl overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1557734864-c78b6dfef1b1"
                                    alt="MBA Students"
                                    width={1080}
                                    height={720}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Gradient Animation */}
                <style jsx>{`
                    @keyframes gradient {
                        0% {
                            background-position: 0% 50%;
                        }
                        50% {
                            background-position: 100% 50%;
                        }
                        100% {
                            background-position: 0% 50%;
                        }
                    }
                `}</style>
            </section>
        </>
    );
};

export default MainSection;
