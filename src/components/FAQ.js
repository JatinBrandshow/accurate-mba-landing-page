"use client";

import { useState, useRef } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const FAQ = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "What is the duration of the MBA program?",
            answer: "The MBA program is a 2-year full-time course divided into 4 semesters. Each semester is approximately 6 months long, including examinations.",
        },
        {
            question: "Which entrance exams are accepted?",
            answer: "We accept scores from CAT, MAT, CMAT, XAT, and ATMA. Additionally, we conduct our own institutional entrance test for candidates who haven't appeared for these exams.",
        },
        {
            question: "Is work experience mandatory for admission?",
            answer: "Work experience is not mandatory but is considered during the selection process. Fresh graduates are welcome to apply, and working professionals with experience are given preference in certain specializations.",
        },
        {
            question: "What is the fee structure?",
            answer: "The total program fee is competitive and can be paid in installments. Detailed fee structure is provided during the admission process. We also offer scholarships and education loan assistance.",
        },
        {
            question: "What are the placement opportunities?",
            answer: "We have a dedicated placement cell with strong industry connections. Our placement rate is 95%+ with an average package of 12 LPA. Top recruiters include TCS, Infosys, HDFC Bank, Amazon, and many more.",
        },
        {
            question: "Can I pursue MBA while working?",
            answer: "This is a full-time program that requires regular attendance. However, we also offer weekend and executive MBA programs for working professionals. Please contact our admissions office for more details.",
        },
        {
            question: "Are hostel facilities available?",
            answer: "Yes, we provide separate hostel facilities for boys and girls with all modern amenities including Wi-Fi, mess, gymnasium, and recreation facilities.",
        },
        {
            question: "What is the specialization selection process?",
            answer: "Students can choose their specialization at the end of the first semester based on their interests and career goals. We offer counseling sessions to help students make informed decisions.",
        },
    ];

    return (
        <>
            <section
                id="faq"
                ref={ref}
                className="relative overflow-hidden bg-linear-to-br from-gray-50 via-white to-blue-50 py-20"
            >
                {/* Background Decoration */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-linear-to-r from-blue-300 to-purple-300 blur-3xl" />
                    <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-linear-to-r from-purple-300 to-pink-300 blur-3xl" />
                </div>

                <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
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
                            className="mb-4 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-blue-600 to-purple-600 px-6 py-2 text-sm text-white"
                        >
                            <HelpCircle className="h-4 w-4" />
                            <span>Got Questions?</span>
                        </motion.div>

                        <h2 className="mb-4 text-4xl md:text-5xl text-gray-900">
                            Frequently Asked{" "}
                            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Questions
                            </span>
                        </h2>

                        <p className="text-xl text-gray-600">Find answers to common questions about our MBA program</p>
                    </motion.div>

                    {/* FAQ List */}
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -30 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: index * 0.08, duration: 0.5 }}
                                whileHover={{ scale: 1.02 }}
                                className="group relative"
                            >
                                <div className="overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-xl">
                                    {/* Gradient Border */}
                                    <motion.div
                                        className="absolute inset-0 bg-linear-to-r from-blue-600 to-purple-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                        style={{ padding: "2px" }}
                                    >
                                        <div className="h-full rounded-2xl bg-white" />
                                    </motion.div>

                                    <div className="relative">
                                        <button
                                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                            className="flex w-full items-center justify-between rounded-2xl px-6 py-5 text-left transition-all duration-300 hover:bg-linear-to-r hover:from-blue-50 hover:to-purple-50"
                                        >
                                            <span className="flex items-center gap-3 pr-4 text-lg text-gray-900">
                                                <motion.div
                                                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-blue-600 to-purple-600 text-sm text-white shadow-lg"
                                                    animate={{
                                                        rotate: openIndex === index ? 180 : 0,
                                                    }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    {index + 1}
                                                </motion.div>
                                                {faq.question}
                                            </span>

                                            <motion.div
                                                animate={{
                                                    rotate: openIndex === index ? 180 : 0,
                                                }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                {openIndex === index ? (
                                                    <ChevronUp className="h-6 w-6 text-blue-600" />
                                                ) : (
                                                    <ChevronDown className="h-6 w-6 text-gray-400" />
                                                )}
                                            </motion.div>
                                        </button>

                                        <AnimatePresence>
                                            {openIndex === index && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{
                                                        height: "auto",
                                                        opacity: 1,
                                                    }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="overflow-hidden"
                                                >
                                                    <motion.div
                                                        initial={{ y: -10 }}
                                                        animate={{ y: 0 }}
                                                        exit={{ y: -10 }}
                                                        className="px-6 pb-6 text-gray-600 leading-relaxed"
                                                    >
                                                        <div className="border-l-2 border-linear-to-b from-blue-600 to-purple-600 pl-11 pt-2">
                                                            {faq.answer}
                                                        </div>
                                                    </motion.div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        className="mt-12 text-center"
                    >
                        <div className="rounded-2xl border border-blue-100 bg-linear-to-r from-blue-50 to-purple-50 p-8">
                            <p className="mb-4 text-lg text-gray-700">Still have questions?</p>

                            <motion.button
                                onClick={() => {
                                    const el = document.getElementById("apply");
                                    if (el) el.scrollIntoView({ behavior: "smooth" });
                                }}
                                className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-blue-600 to-purple-600 px-8 py-3 text-white transition-all duration-300 hover:shadow-lg"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Contact our admissions team
                                <motion.span
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                    }}
                                >
                                    →
                                </motion.span>
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default FAQ;
