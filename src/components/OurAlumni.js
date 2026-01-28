"use client";

import { Star, Quote } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const OurAlumni = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const testimonials = [
        {
            name: "Amit Kumar",
            role: "Software Engineer, Infosys",
            batch: "BCA 2019-22",
            text: "The BCA program gave me a strong foundation in programming and problem-solving. Practical labs and supportive faculty helped me crack my first IT job.",
            gradient: "from-blue-600 to-cyan-600",
        },
        {
            name: "Neha Gupta",
            role: "Frontend Developer, Wipro",
            batch: "BCA 2020-23",
            text: "Hands-on projects in HTML, CSS, JavaScript, and React made learning exciting. The exposure to real-world projects boosted my confidence.",
            gradient: "from-purple-600 to-pink-600",
        },
        {
            name: "Rohit Singh",
            role: "System Analyst, HCL",
            batch: "BCA 2018-21",
            text: "The curriculum balanced theory and practical knowledge perfectly. Database management and software engineering subjects helped me grow professionally.",
            gradient: "from-emerald-600 to-teal-600",
        },
        {
            name: "Pooja Verma",
            role: "QA Engineer, Tech Mahindra",
            batch: "BCA 2019-22",
            text: "Regular assessments, coding sessions, and mock interviews prepared me well for corporate challenges. Faculty support was exceptional.",
            gradient: "from-orange-600 to-red-600",
        },
        {
            name: "Kunal Mehta",
            role: "Backend Developer, Startup Ecosystem",
            batch: "BCA 2020-23",
            text: "Learning Java, Python, and database concepts during BCA helped me build scalable backend systems. The project-based learning was a big plus.",
            gradient: "from-indigo-600 to-violet-600",
        },
        {
            name: "Sneha Patel",
            role: "UI/UX Designer, Freelance",
            batch: "BCA 2021-24",
            text: "The BCA program encouraged creativity along with technical skills. Design thinking and web development subjects shaped my career path.",
            gradient: "from-pink-600 to-rose-600",
        },
        {
            name: "Arjun Malhotra",
            role: "IT Support Executive, IBM",
            batch: "BCA 2018-21",
            text: "Strong fundamentals in computer networks and operating systems helped me transition smoothly into the IT industry.",
            gradient: "from-sky-600 to-blue-700",
        },
        {
            name: "Nidhi Saxena",
            role: "Data Analyst, Analytics Firm",
            batch: "BCA 2020-23",
            text: "The exposure to data handling, SQL, and basic data analytics during BCA motivated me to pursue a career in data analysis.",
            gradient: "from-green-600 to-lime-600",
        },
        {
            name: "Vikas Yadav",
            role: "Full Stack Developer, MNC",
            batch: "BCA 2019-22",
            text: "From frontend to backend, the course covered everything I needed. Capstone projects helped me build a strong portfolio.",
            gradient: "from-fuchsia-600 to-purple-700",
        },
        {
            name: "Riya Choudhary",
            role: "MCA Student",
            batch: "BCA 2021-24",
            text: "The academic environment and mentorship during BCA inspired me to pursue higher studies. The fundamentals I learned still help me every day.",
            gradient: "from-yellow-500 to-orange-600",
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
                        className="mb-5 text-center"
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
                    <div className="pause-on-hover overflow-hidden py-10">
                        <div className="flex w-max animate-marquee gap-5 px-4">
                            {[...testimonials, ...testimonials].map((testimonial, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50, rotateY: -15 }}
                                    animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
                                    transition={{ delay: index * 0.2, duration: 0.8 }}
                                    whileHover={{ y: -15, rotateY: 5 }}
                                    className="group relative w-90 shrink-0"
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

                                        <div className="relative p-5">
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
                                                    className={`mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br ${testimonial.gradient} shadow-lg`}
                                                >
                                                    <Quote className="h-8 w-8 text-white" />
                                                </div>
                                            </motion.div>

                                            {/* Stars */}
                                            <div className="mb-3 flex gap-1">
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
                                            <p className="mb-6 italic leading-relaxed text-gray-700">
                                                "{testimonial.text}"
                                            </p>

                                            {/* Author */}
                                            <div className="flex items-center border-t border-gray-100 pt-4">
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
                </div>
            </section>
        </>
    );
};

export default OurAlumni;
