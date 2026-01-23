"use client";

import { useState, useRef } from "react";
import { ChevronDown, ChevronUp, HelpCircle, Search } from "lucide-react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const FAQ = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const [openIndex, setOpenIndex] = useState(null);
    const [search, setSearch] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = ["All", "Admissions", "Fees", "Placements", "Campus"];

    const faqs = [
        {
            category: "Admissions",
            popular: true,
            question: "What is the duration of the MBA program?",
            answer: "The MBA program is a 2-year full-time course divided into 4 semesters, each lasting approximately 6 months including examinations.",
        },
        {
            category: "Admissions",
            question: "Which entrance exams are accepted?",
            answer: "We accept CAT, MAT, CMAT, XAT, and ATMA scores. Candidates without these can appear for our institutional entrance test.",
        },
        {
            category: "Admissions",
            question: "Is work experience mandatory for admission?",
            answer: "Work experience is not mandatory. Fresh graduates are welcome, though candidates with experience may get preference in certain specializations.",
        },
        {
            category: "Fees",
            popular: true,
            question: "What is the fee structure?",
            answer: "The program fee is competitive and payable in installments. Scholarships and education loan assistance are also available.",
        },
        {
            category: "Placements",
            popular: true,
            question: "What are the placement opportunities?",
            answer: "We have a dedicated placement cell with a 95%+ placement rate. Average packages go up to 12 LPA with recruiters like TCS, Infosys, Amazon, and HDFC Bank.",
        },
        {
            category: "Admissions",
            question: "Can I pursue MBA while working?",
            answer: "This is a full-time MBA requiring regular attendance. However, executive and weekend MBA options are available for working professionals.",
        },
        {
            category: "Campus",
            question: "Are hostel facilities available?",
            answer: "Yes, separate hostels for boys and girls are available with Wi-Fi, mess, gym, and recreational facilities.",
        },
        {
            category: "Admissions",
            question: "How is specialization selected?",
            answer: "Specializations are chosen after the first semester based on interest, performance, and career counseling sessions.",
        },
    ];

    const filteredFaqs = faqs.filter((faq) => {
        const matchesSearch =
            faq.question.toLowerCase().includes(search.toLowerCase()) ||
            faq.answer.toLowerCase().includes(search.toLowerCase());

        const matchesCategory = activeCategory === "All" || faq.category === activeCategory;

        return matchesSearch && matchesCategory;
    });

    return (
        <section
            ref={ref}
            id="faq"
            className="relative overflow-hidden bg-linear-to-br from-gray-50 via-white to-blue-50 py-20"
        >
            {/* Background Glow */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-linear-to-r from-blue-300 to-purple-300 blur-3xl" />
                <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-linear-to-r from-purple-300 to-pink-300 blur-3xl" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-4">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-14 text-center"
                >
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-blue-600 to-purple-600 px-6 py-2 text-sm text-white">
                        <HelpCircle className="h-4 w-4" />
                        Got Questions?
                    </div>

                    <h2 className="mb-4 text-4xl md:text-5xl text-gray-900">
                        Frequently Asked{" "}
                        <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Questions
                        </span>
                    </h2>

                    <p className="text-xl text-gray-600">Everything you need to know about our MBA program</p>
                </motion.div>

                <div className="mb-12 flex flex-col items-center gap-6">
                    {/* Search */}
                    <div className="relative w-full max-w-2xl">
                        <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search questions..."
                            className="w-full rounded-2xl border border-gray-200 py-4 pl-12 pr-6 text-lg"
                        />
                    </div>

                    {/* Categories */}
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`rounded-full px-5 py-2 text-sm transition ${
                                    activeCategory === cat
                                        ? "bg-blue-600 text-white"
                                        : "border bg-white text-gray-600 hover:bg-gray-50"
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Expand / Collapse */}
                <div className="mb-6 text-right">
                    <button
                        onClick={() => setOpenIndex(openIndex === "all" ? null : "all")}
                        className="text-sm text-blue-600 underline"
                    >
                        {openIndex === "all" ? "Collapse all" : "Expand all"}
                    </button>
                </div>

                {/* FAQ List */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredFaqs.map((faq, index) => {
                        const isOpen = openIndex === index || openIndex === "all";

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -30 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: index * 0.05 }}
                                className="rounded-2xl bg-white shadow-md hover:shadow-xl transition"
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="flex w-full items-center justify-between px-6 py-5 text-left"
                                >
                                    <div className="flex items-center gap-3 text-lg text-gray-900">
                                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-blue-600 to-purple-600 text-sm text-white">
                                            {index + 1}
                                        </span>
                                        {faq.question}
                                        {faq.popular && (
                                            <span className="ml-2 rounded-full bg-yellow-100 px-3 py-1 text-xs text-yellow-700">
                                                Most Asked
                                            </span>
                                        )}
                                    </div>

                                    {isOpen ? (
                                        <ChevronUp className="h-6 w-6 text-blue-600" />
                                    ) : (
                                        <ChevronDown className="h-6 w-6 text-gray-400" />
                                    )}
                                </button>

                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="relative px-6 pb-6 text-gray-600 leading-relaxed">
                                                <div className="absolute left-0 top-0 h-full w-1 bg-linear-to-b from-blue-600 to-purple-600" />
                                                <div className="pl-6">{faq.answer}</div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
