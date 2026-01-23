"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BookOpen, Briefcase, TrendingUp, Globe2, Users2, GraduationCap } from "lucide-react";

const highlights = [
    {
        icon: BookOpen,
        title: "Industry-Relevant Curriculum",
        description: "Comprehensive course structure covering all aspects of modern business management",
        color: "from-cyan-500 via-blue-500 to-indigo-600",
        delay: 0.1,
    },
    {
        icon: Briefcase,
        title: "Corporate Internships",
        description: "Hands-on experience with leading companies across various industries",
        color: "from-emerald-500 via-teal-500 to-green-600",
        delay: 0.2,
    },
    {
        icon: TrendingUp,
        title: "Career Growth",
        description: "Access to exclusive placement opportunities and career development programs",
        color: "from-amber-500 via-orange-500 to-red-600",
        delay: 0.3,
    },
    {
        icon: Globe2,
        title: "Global Exposure",
        description: "International study tours and collaborations with global institutions",
        color: "from-purple-500 via-pink-500 to-rose-600",
        delay: 0.4,
    },
    {
        icon: Users2,
        title: "Expert Faculty",
        description: "Learn from industry veterans and renowned academicians",
        color: "from-indigo-500 via-purple-500 to-pink-600",
        delay: 0.5,
    },
    {
        icon: GraduationCap,
        title: "UGC Approved",
        description: "Recognized degree with AICTE approval and NBA accreditation",
        color: "from-teal-500 via-cyan-500 to-blue-600",
        delay: 0.6,
    },
];

const WhyChooseUs = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <section id="why-choose-us" ref={ref} className="relative overflow-hidden bg-white py-24">
            {/* Animated Background */}
            <div className="absolute inset-0">
                <motion.div
                    className="absolute top-0 right-0 h-150 w-150 rounded-full bg-linear-to-br from-cyan-100 via-emerald-100 to-amber-100 blur-3xl opacity-40"
                    animate={{ x: [0, 100, 0], y: [0, -100, 0], scale: [1, 1.2, 1] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-0 left-0 h-125 w-125 rounded-full bg-linear-to-br from-purple-100 via-pink-100 to-rose-100 blur-3xl opacity-40"
                    animate={{ x: [0, -80, 0], y: [0, 80, 0], scale: [1, 1.3, 1] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, type: "spring" }}
                        className="relative mb-4 inline-block"
                    >
                        <motion.div
                            className="absolute inset-0 rounded-full bg-linear-to-r from-cyan-500 via-emerald-500 to-amber-500 blur-xl opacity-50"
                            animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                        />
                        <div className="relative rounded-full bg-linear-to-r from-cyan-500 via-emerald-500 to-amber-500 px-6 py-2 text-sm font-medium text-white">
                            Why Choose Us
                        </div>
                    </motion.div>

                    <h2 className="mb-6 text-5xl md:text-6xl">
                        <span className="text-gray-900">Program </span>
                        <span className="bg-linear-to-r from-cyan-600 via-emerald-600 to-amber-600 bg-clip-text font-bold text-transparent">
                            Highlights
                        </span>
                    </h2>

                    <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
                        Our MBA program is designed to equip you with the skills and knowledge needed to excel in
                        today&apos;s dynamic business environment
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {highlights.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50, rotateX: -20 }}
                            animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                            transition={{ delay: item.delay, duration: 0.6, type: "spring" }}
                            whileHover={{ y: -15, scale: 1.03 }}
                            className="group relative"
                            style={{ perspective: "1000px" }}
                        >
                            <div className="relative h-full overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-xl transition-all duration-500 hover:shadow-2xl">
                                {/* Hover Gradient */}
                                <motion.div
                                    className={`absolute inset-0 bg-linear-to-br ${item.color} opacity-0 transition-opacity duration-500 group-hover:opacity-10`}
                                />

                                {/* Animated Border */}
                                <div
                                    className={`absolute inset-0 rounded-3xl bg-linear-to-r ${item.color} opacity-0 group-hover:opacity-100`}
                                >
                                    <div className="h-full rounded-3xl bg-white p-0.5" />
                                </div>

                                <div className="relative">
                                    {/* Icon */}
                                    <div className="relative mb-6 h-20 w-20">
                                        <motion.div
                                            className={`absolute inset-0 rounded-2xl bg-linear-to-br ${item.color}`}
                                            animate={{ rotate: 360 }}
                                            transition={{
                                                duration: 4,
                                                repeat: Infinity,
                                                ease: "linear",
                                            }}
                                        />
                                        <motion.div
                                            className={`absolute inset-0 flex items-center justify-center rounded-2xl bg-linear-to-br ${item.color} shadow-lg`}
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            <item.icon className="h-10 w-10 text-white" />
                                        </motion.div>
                                        <motion.div
                                            className={`absolute inset-0 rounded-2xl bg-linear-to-br ${item.color} blur-xl opacity-0 group-hover:opacity-50`}
                                        />
                                    </div>

                                    <h3 className="mb-3 text-2xl font-semibold text-gray-900">{item.title}</h3>
                                    <p className="leading-relaxed text-gray-600">{item.description}</p>
                                </div>

                                {/* Bottom Accent */}
                                <motion.div
                                    className={`absolute bottom-0 left-0 right-0 h-1.5 bg-linear-to-r ${item.color}`}
                                    initial={{ scaleX: 0 }}
                                    whileHover={{ scaleX: 1 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
