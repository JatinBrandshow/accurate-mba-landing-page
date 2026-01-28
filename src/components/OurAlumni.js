"use client";

import { Star, Quote } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const OurAlumni = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const testimonials = [
        {
            name: "Priya Sharma",
            role: "Marketing Manager, TCS",
            batch: "MBA 2022-24",
            text: "The MBA program at Accurate transformed my career trajectory. The practical approach to learning and industry exposure helped me secure my dream job in digital marketing.",
            gradient: "from-blue-600 to-cyan-600",
        },
        {
            name: "Rahul Verma",
            role: "Financial Analyst, HDFC Bank",
            batch: "MBA 2021-23",
            text: "The finance specialization provided me with deep insights into financial markets and corporate finance. The faculty's guidance was instrumental in my success.",
            gradient: "from-purple-600 to-pink-600",
        },
        {
            name: "Anjali Desai",
            role: "HR Business Partner, Infosys",
            batch: "MBA 2020-22",
            text: "The holistic development approach at Accurate helped me not just academically but also in building leadership skills. The alumni network is incredibly supportive.",
            gradient: "from-orange-600 to-red-600",
        },
    ];

    return (
        <>
            <section ref={ref} className="relative overflow-hidden bg-white py-10">
                {/* Background Elements */}
                <div className="absolute inset-0">
                    <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-linear-to-r from-blue-200 to-purple-200 blur-3xl opacity-20" />
                    <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-linear-to-r from-pink-200 to-orange-200 blur-3xl opacity-20" />
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
                            transition={{ duration: 0.5 }}
                            className="mb-3 inline-block rounded-full bg-linear-to-r from-purple-600 to-pink-600 px-6 py-2 text-sm text-white"
                        >
                            Success Stories
                        </motion.div>

                        <h2 className="mb-3 text-5xl text-gray-900 max-lg:text-3xl max-md:text-2xl max-sm:text-xl">
                            What Our{" "}
                            <span className="bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                Alumni Say
                            </span>
                        </h2>

                        <p className="mx-auto max-w-3xl text-lg text-gray-600 max-lg:text-base max-md:text-base max-sm:text-sm">
                            Hear from our alumni who have transformed their careers through our MBA program
                        </p>
                    </motion.div>

                    {/* Testimonials */}
                    <div className="grid gap-8 md:grid-cols-3">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50, rotateY: -15 }}
                                animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
                                transition={{ delay: index * 0.2, duration: 0.8 }}
                                whileHover={{ y: -15, rotateY: 5 }}
                                className="group relative"
                                style={{ perspective: "1000px" }}
                            >
                                <div className="relative h-full overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-500 hover:shadow-2xl">
                                    {/* Gradient Border */}
                                    <div
                                        className={`absolute inset-0 bg-linear-to-br ${testimonial.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                                        style={{ padding: "2px" }}
                                    >
                                        <div className="h-full rounded-3xl bg-white" />
                                    </div>

                                    <div className="relative p-8">
                                        {/* Quote Icon */}
                                        <motion.div
                                            initial={{ scale: 0, rotate: -180 }}
                                            animate={isInView ? { scale: 1, rotate: 0 } : {}}
                                            transition={{
                                                delay: index * 0.2 + 0.3,
                                                duration: 0.6,
                                            }}
                                        >
                                            <div
                                                className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br ${testimonial.gradient} shadow-lg`}
                                            >
                                                <Quote className="h-8 w-8 text-white" />
                                            </div>
                                        </motion.div>

                                        {/* Stars */}
                                        <div className="mb-4 flex gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, scale: 0 }}
                                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                                    transition={{
                                                        delay: index * 0.2 + 0.4 + i * 0.05,
                                                        duration: 0.3,
                                                    }}
                                                >
                                                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                                </motion.div>
                                            ))}
                                        </div>

                                        {/* Text */}
                                        <p className="mb-8 italic leading-relaxed text-gray-700">
                                            "{testimonial.text}"
                                        </p>

                                        {/* Author */}
                                        <div className="flex items-center border-t border-gray-100 pt-6">
                                            <motion.div
                                                className={`mr-4 flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-br ${testimonial.gradient} text-lg text-white shadow-lg`}
                                                whileHover={{ scale: 1.2, rotate: 360 }}
                                                transition={{ duration: 0.6 }}
                                            >
                                                {testimonial.name
                                                    .split(" ")
                                                    .map((n) => n[0])
                                                    .join("")}
                                            </motion.div>
                                            <div>
                                                <p className="text-gray-900">{testimonial.name}</p>
                                                <p className="text-sm text-gray-600">{testimonial.role}</p>
                                                <p className="text-xs text-gray-500">{testimonial.batch}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Floating Particles */}
                                    <motion.div
                                        className={`absolute right-10 top-10 h-3 w-3 rounded-full bg-linear-to-r ${testimonial.gradient}`}
                                        animate={{
                                            y: [0, -20, 0],
                                            opacity: [0.5, 1, 0.5],
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            delay: index * 0.5,
                                        }}
                                    />
                                    <motion.div
                                        className={`absolute bottom-20 left-10 h-2 w-2 rounded-full bg-linear-to-r ${testimonial.gradient}`}
                                        animate={{
                                            y: [0, 15, 0],
                                            opacity: [0.3, 0.8, 0.3],
                                        }}
                                        transition={{
                                            duration: 2.5,
                                            repeat: Infinity,
                                            delay: index * 0.3,
                                        }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default OurAlumni;
