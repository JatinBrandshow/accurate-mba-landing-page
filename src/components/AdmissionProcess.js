"use client";

import { FileText, PenTool, ClipboardCheck, UserCheck, Calendar, IndianRupee } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AdmissionProcess = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const steps = [
        {
            icon: FileText,
            title: "Apply Online",
            description:
                "Fill out the online application form with your academic details and upload required documents",
            color: "from-blue-600 to-cyan-600",
        },
        {
            icon: PenTool,
            title: "Entrance Exam",
            description: "Appear for CAT/MAT/CMAT/XAT or our institutional entrance test",
            color: "from-purple-600 to-pink-600",
        },
        {
            icon: ClipboardCheck,
            title: "Group Discussion & Interview",
            description: "Participate in GD/PI round to showcase your communication and analytical skills",
            color: "from-orange-600 to-red-600",
        },
        {
            icon: UserCheck,
            title: "Final Selection",
            description: "Receive your admission offer and complete the enrollment process",
            color: "from-green-600 to-emerald-600",
        },
    ];

    const eligibility = [
        "Bachelor's degree in any discipline from a recognized university",
        "Minimum 50% aggregate marks (45% for SC/ST candidates)",
        "Valid score in CAT/MAT/CMAT/XAT or institutional entrance test",
        "Work experience is preferred but not mandatory",
    ];

    return (
        <>
            <section
                id="admission"
                ref={ref}
                className="relative overflow-hidden bg-linear-to-br from-gray-50 via-blue-50 to-purple-50 py-20"
            >
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-30">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage:
                                "radial-gradient(circle at 1px 1px, rgb(59 130 246 / 0.2) 1px, transparent 0)",
                            backgroundSize: "40px 40px",
                        }}
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
                            transition={{ duration: 0.5 }}
                            className="mb-4 inline-block rounded-full bg-linear-to-r from-orange-600 to-red-600 px-6 py-2 text-sm text-white"
                        >
                            Join Us
                        </motion.div>

                        <h2 className="mb-4 text-4xl md:text-5xl text-gray-900">
                            Admission{" "}
                            <span className="bg-linear-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                                Process
                            </span>
                        </h2>

                        <p className="mx-auto max-w-3xl text-xl text-gray-600">
                            Your journey to becoming a business leader starts here. Follow these simple steps to join
                            our MBA program
                        </p>
                    </motion.div>

                    {/* Process Steps */}
                    <div className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: index * 0.15, duration: 0.6 }}
                                className="relative"
                            >
                                <motion.div
                                    className="group relative h-full overflow-hidden rounded-3xl bg-white p-8 shadow-xl"
                                    whileHover={{ y: -10, scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {/* Hover Background */}
                                    <motion.div
                                        className={`absolute inset-0 bg-linear-to-br ${step.color} opacity-0 transition-opacity duration-300 group-hover:opacity-5`}
                                    />

                                    {/* Step Number */}
                                    <motion.div
                                        className="absolute right-6 top-6 text-6xl font-bold opacity-5"
                                        initial={{ scale: 0 }}
                                        animate={isInView ? { scale: 1 } : {}}
                                        transition={{
                                            delay: index * 0.15 + 0.3,
                                            duration: 0.5,
                                        }}
                                    >
                                        {index + 1}
                                    </motion.div>

                                    {/* Icon */}
                                    <motion.div
                                        className={`relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br ${step.color} shadow-lg`}
                                        whileHover={{ rotate: 360, scale: 1.1 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <step.icon className="h-8 w-8 text-white" />
                                        <div
                                            className={`absolute inset-0 rounded-2xl bg-linear-to-br ${step.color} blur-xl opacity-50`}
                                        />
                                    </motion.div>

                                    <h3 className="relative mb-3 text-xl text-gray-900">{step.title}</h3>
                                    <p className="relative text-sm text-gray-600">{step.description}</p>

                                    {/* Bottom Bar */}
                                    <motion.div
                                        className={`absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r ${step.color}`}
                                        initial={{ scaleX: 0 }}
                                        whileHover={{ scaleX: 1 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </motion.div>

                                {/* Connector Arrow */}
                                {index < steps.length - 1 && (
                                    <motion.div
                                        className="absolute top-1/2 -right-4 z-10 hidden -translate-y-1/2 lg:block"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{
                                            delay: index * 0.15 + 0.5,
                                            duration: 0.5,
                                        }}
                                    >
                                        <div className="h-0.5 w-8 bg-linear-to-r from-gray-300 to-gray-400" />
                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 border-b-4 border-l-4 border-t-4 border-b-transparent border-t-transparent border-l-gray-400" />
                                    </motion.div>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    {/* Eligibility */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        <div className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-2xl md:p-12">
                            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-linear-to-br from-blue-100 to-purple-100 blur-3xl opacity-30" />

                            <h3 className="mb-8 text-3xl md:text-4xl text-gray-900">
                                Eligibility{" "}
                                <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    Criteria
                                </span>
                            </h3>

                            <div className="mb-10 grid gap-6 md:grid-cols-2">
                                {eligibility.map((criterion, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{
                                            delay: 0.8 + index * 0.1,
                                            duration: 0.5,
                                        }}
                                        whileHover={{ x: 10 }}
                                        className="group flex items-start"
                                    >
                                        <motion.div
                                            className="mr-4 mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-blue-600 to-purple-600 text-white shadow-lg"
                                            whileHover={{ rotate: 360, scale: 1.2 }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            {index + 1}
                                        </motion.div>
                                        <p className="text-gray-700 transition-colors duration-200 group-hover:text-gray-900">
                                            {criterion}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="border-t border-gray-200 pt-8">
                                <div className="grid gap-8 md:grid-cols-2">
                                    {/* Dates */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ delay: 1.2, duration: 0.5 }}
                                        className="rounded-2xl bg-linear-to-br from-blue-50 to-purple-50 p-6"
                                    >
                                        <div className="mb-4 flex items-center gap-3">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-blue-600 to-purple-600">
                                                <Calendar className="h-6 w-6 text-white" />
                                            </div>
                                            <h4 className="text-lg text-gray-900">Important Dates</h4>
                                        </div>
                                        <ul className="space-y-2 text-gray-600">
                                            <li className="flex justify-between">
                                                <span>Application Start:</span>
                                                <span className="font-semibold">Jan 15, 2026</span>
                                            </li>
                                            <li className="flex justify-between">
                                                <span>Application Deadline:</span>
                                                <span className="font-semibold">Jun 30, 2026</span>
                                            </li>
                                            <li className="flex justify-between">
                                                <span>Program Start:</span>
                                                <span className="font-semibold">Aug 2026</span>
                                            </li>
                                        </ul>
                                    </motion.div>

                                    {/* Fee */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ delay: 1.3, duration: 0.5 }}
                                        className="rounded-2xl bg-linear-to-br from-green-50 to-emerald-50 p-6"
                                    >
                                        <div className="mb-4 flex items-center gap-3">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-green-600 to-emerald-600">
                                                <IndianRupee className="h-6 w-6 text-white" />
                                            </div>
                                            <h4 className="text-lg text-gray-900">Application Fee</h4>
                                        </div>

                                        <p className="mb-2 bg-linear-to-r from-green-600 to-emerald-600 bg-clip-text text-3xl text-transparent">
                                            ₹1,500
                                        </p>
                                        <p className="mb-4 text-sm text-gray-600">(Non-refundable)</p>

                                        <motion.button
                                            onClick={() => {
                                                const el = document.getElementById("apply");
                                                if (el) el.scrollIntoView({ behavior: "smooth" });
                                            }}
                                            className="w-full rounded-xl bg-linear-to-r from-green-600 to-emerald-600 px-6 py-3 text-white transition-all duration-300 hover:shadow-lg"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            Start Your Application
                                        </motion.button>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default AdmissionProcess;
