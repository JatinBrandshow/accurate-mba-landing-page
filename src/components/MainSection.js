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
            <section ref={ref} className="relative pt-32 pb-20 min-h-screen flex items-center overflow-hidden bg-primary">
                {/* Background Pattern */}
                <div className="absolute inset-0">
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-linear-to-br from-primary via-primary/90 to-primary/80"></div>
 
                    {/* Texture Pattern */}
                    <div
                        className="absolute inset-0 opacity-100 mix-blend-overlay"
                        style={{
                            backgroundImage: `url("https://www.transparenttextures.com/patterns/cubes.png")`,
                            backgroundRepeat: "repeat",
                            filter: "invert(1)",
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
                                <Sparkles className="text-secondary w-5 h-5" />
                                <span className="text-sm font-bold text-secondary uppercase tracking-wider">Admissions Open for 2026</span>
                            </motion.div>
 
                            <h1 className="text-5xl lg:text-7xl text-white font-bold mb-6">
                                Master of <br />
                                <span className="text-secondary">
                                    Business Administration
                                </span>
                            </h1>
 
                            <p className="text-xl text-gray-200 mb-8 max-w-lg">
                                Transform your career with leadership skills and global perspectives.
                                Join a community of innovators and achievers.
                            </p>
 
                            <div className="flex flex-wrap gap-4 mb-10">
                                <button
                                    onClick={scrollToApply}
                                    className="px-8 py-4 rounded-full bg-secondary text-primary font-bold flex items-center gap-2 hover:bg-yellow-400 transition-colors shadow-lg"
                                >
                                    Apply Now <ArrowRight className="w-5 h-5" />
                                </button>
 
                                <button
                                    onClick={() =>
                                        document.getElementById("program")?.scrollIntoView({ behavior: "smooth" })
                                    }
                                    className="px-8 py-4 rounded-full border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
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
                                    <div key={i} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 shadow-sm hover:bg-white/20 transition-all">
                                        <item.icon className="text-secondary mb-2 w-6 h-6" />
                                        <div className="text-white font-bold text-lg">{item.value}</div>
                                        <div className="text-xs text-gray-300 font-medium uppercase tracking-wide">{item.label}</div>
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
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
                                <Image
                                    src="https://images.unsplash.com/photo-1557734864-c78b6dfef1b1"
                                    alt="MBA Students"
                                    width={1080}
                                    height={720}
                                    className="w-full h-auto object-cover"
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-linear-to-t from-primary/60 to-transparent pointer-events-none"></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};
 
export default MainSection;
 
 