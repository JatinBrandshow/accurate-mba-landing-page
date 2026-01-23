"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, DollarSign, Users, Smartphone, Factory, Heart } from "lucide-react";

const Specialization = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const specializations = [
        {
            icon: TrendingUp,
            name: "Marketing Management",
            description: "Master digital marketing, brand management, and consumer behavior",
            courses: ["Digital Marketing", "Brand Management", "Market Research", "Sales Management"],
            color: "from-blue-600 to-cyan-600",
            bgColor: "from-blue-50 to-cyan-50",
        },
        {
            icon: DollarSign,
            name: "Finance Management",
            description: "Expertise in financial planning, investment analysis, and corporate finance",
            courses: ["Investment Banking", "Financial Markets", "Risk Management", "Portfolio Management"],
            color: "from-green-600 to-emerald-600",
            bgColor: "from-green-50 to-emerald-50",
        },
        {
            icon: Users,
            name: "Human Resource Management",
            description: "Learn talent acquisition, organizational development, and HR analytics",
            courses: ["Talent Management", "Organizational Behavior", "HR Analytics", "Labor Laws"],
            color: "from-purple-600 to-pink-600",
            bgColor: "from-purple-50 to-pink-50",
        },
        {
            icon: Smartphone,
            name: "Information Technology",
            description: "Blend of technology and business management for digital transformation",
            courses: ["IT Strategy", "Digital Transformation", "Data Analytics", "Cybersecurity Management"],
            color: "from-indigo-600 to-blue-600",
            bgColor: "from-indigo-50 to-blue-50",
        },
        {
            icon: Factory,
            name: "Operations Management",
            description: "Focus on supply chain, logistics, and operational excellence",
            courses: ["Supply Chain Management", "Quality Management", "Project Management", "Lean Operations"],
            color: "from-orange-600 to-red-600",
            bgColor: "from-orange-50 to-red-50",
        },
        {
            icon: Heart,
            name: "Healthcare Management",
            description: "Specialized training in healthcare administration and hospital management",
            courses: ["Hospital Administration", "Healthcare Policy", "Medical Law", "Healthcare Economics"],
            color: "from-pink-600 to-rose-600",
            bgColor: "from-pink-50 to-rose-50",
        },
    ];
    return (
        <>
            <section
                id="specializations"
                ref={ref}
                className="relative overflow-hidden bg-linear-to-br from-gray-50 to-blue-50 py-20"
            >
                {/* Animated Background */}
                <motion.div
                    className="absolute top-0 right-0 h-96 w-96 rounded-full bg-purple-300 blur-3xl opacity-20"
                    animate={{
                        x: [0, 50, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

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
                            transition={{ duration: 0.5 }}
                            className="mb-4 inline-block rounded-full bg-linear-to-r from-purple-600 to-pink-600 px-6 py-2 text-sm text-white"
                        >
                            Specializations
                        </motion.div>

                        <h2 className="mb-4 text-4xl md:text-5xl text-gray-900">
                            Choose Your{" "}
                            <span className="bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                Path
                            </span>
                        </h2>

                        <p className="mx-auto max-w-3xl text-xl text-gray-600">
                            Select from our diverse range of specializations to align your MBA with your career goals
                        </p>
                    </motion.div>

                    {/* Cards */}
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {specializations.map((spec, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                onHoverStart={() => setHoveredIndex(index)}
                                onHoverEnd={() => setHoveredIndex(null)}
                                whileHover={{ y: -15 }}
                                className="group relative"
                            >
                                <div className="relative h-full overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-500 hover:shadow-2xl">
                                    {/* Hover Background */}
                                    <motion.div
                                        className={`absolute inset-0 bg-linear-to-br ${spec.bgColor} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                                    />

                                    <div className="relative p-8">
                                        {/* Icon */}
                                        <div className="relative mb-6">
                                            <motion.div
                                                className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br ${spec.color} shadow-lg`}
                                                animate={{
                                                    rotate: hoveredIndex === index ? 360 : 0,
                                                    scale: hoveredIndex === index ? 1.1 : 1,
                                                }}
                                                transition={{ duration: 0.6 }}
                                            >
                                                <spec.icon className="h-8 w-8 text-white" />
                                            </motion.div>

                                            <motion.div
                                                className={`absolute inset-0 rounded-2xl bg-linear-to-br ${spec.color} blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-50`}
                                            />
                                        </div>

                                        <h3 className="mb-3 text-2xl text-gray-900">{spec.name}</h3>
                                        <p className="mb-6 text-gray-600">{spec.description}</p>

                                        {/* Courses */}
                                        <div className="border-t border-gray-200 pt-6">
                                            <p className="mb-3 text-sm text-gray-500">Key Courses:</p>
                                            <div className="flex flex-wrap gap-2">
                                                {spec.courses.map((course, idx) => (
                                                    <motion.span
                                                        key={idx}
                                                        initial={{ opacity: 0, scale: 0 }}
                                                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                                        transition={{
                                                            delay: index * 0.1 + idx * 0.05,
                                                        }}
                                                        whileHover={{ scale: 1.1 }}
                                                        className={`rounded-full bg-linear-to-r ${spec.color} px-3 py-1.5 text-xs text-white`}
                                                    >
                                                        {course}
                                                    </motion.span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Bottom Accent */}
                                        <motion.div
                                            className={`absolute bottom-0 left-0 right-0 h-1.5 bg-linear-to-r ${spec.color}`}
                                            initial={{ scaleX: 0 }}
                                            whileHover={{ scaleX: 1 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </div>

                                    {/* Floating Particles */}
                                    {hoveredIndex === index &&
                                        [...Array(3)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                className={`absolute h-2 w-2 rounded-full bg-linear-to-r ${spec.color}`}
                                                initial={{ opacity: 0, x: 0, y: 0 }}
                                                animate={{
                                                    opacity: [0, 1, 0],
                                                    x: Math.random() * 100 - 50,
                                                    y: Math.random() * -100,
                                                }}
                                                transition={{
                                                    duration: 1.5,
                                                    repeat: Infinity,
                                                    delay: i * 0.2,
                                                }}
                                                style={{
                                                    left: `${Math.random() * 100}%`,
                                                    top: "50%",
                                                }}
                                            />
                                        ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Specialization;
