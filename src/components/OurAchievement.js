"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { GraduationCap, Building2, Trophy, Globe2 } from "lucide-react";

const OurAchievement = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    const stats = [
        {
            icon: GraduationCap,
            end: 5000,
            suffix: "+",
            label: "Alumni Network",
            color: "from-cyan-500 via-blue-500 to-indigo-600",
        },
        {
            icon: Building2,
            end: 250,
            suffix: "+",
            label: "Corporate Partners",
            color: "from-emerald-500 via-teal-500 to-green-600",
        },
        {
            icon: Trophy,
            end: 98,
            suffix: "%",
            label: "Success Rate",
            color: "from-amber-500 via-orange-500 to-red-600",
        },
        {
            icon: Globe2,
            end: 15,
            suffix: "+",
            label: "Countries Reached",
            color: "from-purple-500 via-pink-500 to-rose-600",
        },
    ];

    return (
        <section
            ref={ref}
            className="relative py-24 bg-linear-to-br from-slate-900 via-indigo-900 to-slate-900 overflow-hidden"
        >
            {/* Animated Background */}
            <motion.div
                className="absolute inset-0"
                style={{
                    backgroundImage: "radial-gradient(circle at 1px 1px, rgba(6,182,212,0.15) 1px, transparent 0)",
                    backgroundSize: "50px 50px",
                }}
                animate={{ backgroundPosition: ["0px 0px", "50px 50px"] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />

            {/* Glowing Orbs */}
            <motion.div
                className="absolute top-0 left-1/4 w-96 h-96 bg-linear-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
                className="absolute bottom-0 right-1/4 w-96 h-96 bg-linear-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl"
                animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, type: "spring" }}
                        className="inline-block relative mb-4"
                    >
                        <motion.div
                            className="absolute inset-0 bg-linear-to-r from-cyan-500 via-emerald-500 to-amber-500 blur-xl opacity-50"
                            animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                        />
                        <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-2 rounded-full text-sm">
                            Our Achievements
                        </div>
                    </motion.div>

                    <h2 className="text-5xl md:text-6xl mb-6">
                        <span className="text-white">Our Impact in</span>
                        <br />
                        <span className="bg-linear-to-r from-cyan-400 via-emerald-400 to-amber-400 bg-clip-text text-transparent font-bold">
                            Numbers
                        </span>
                    </h2>

                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Building tomorrow&apos;s business leaders with proven excellence
                    </p>
                </motion.div>

                {/* Stats Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {stats.map((stat, index) => (
                        <CounterCard key={index} {...stat} delay={index * 0.15} isInView={isInView} />
                    ))}
                </div>
            </div>
        </section>
    );
};

/* COUNTER CARD */

function CounterCard({ icon: Icon, end, suffix, label, color, delay, isInView }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isInView) return;

        let startTime;
        const duration = 2500;

        const animate = (time) => {
            if (!startTime) startTime = time;
            const progress = Math.min((time - startTime) / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 4);

            setCount(Math.floor(easeOut * end));

            if (progress < 1) requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
    }, [isInView, end]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50, rotateX: -30 }}
            animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{ delay, duration: 0.8, type: "spring" }}
            whileHover={{ y: -15, scale: 1.05 }}
            className="relative group"
            style={{ perspective: "1000px" }}
        >
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500">
                {/* Icon */}
                <div
                    className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-linear-to-br ${color} flex items-center justify-center`}
                >
                    <Icon className="w-10 h-10 text-white" />
                </div>

                {/* Counter */}
                <div className="text-center">
                    <motion.div
                        key={count}
                        initial={{ scale: 1.2, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className={`text-5xl md:text-6xl font-bold bg-linear-to-r ${color} bg-clip-text text-transparent`}
                    >
                        {count}
                        {suffix}
                    </motion.div>
                    <div className="text-gray-300 mt-2 font-medium">{label}</div>
                </div>
            </div>
        </motion.div>
    );
}

export default OurAchievement;
