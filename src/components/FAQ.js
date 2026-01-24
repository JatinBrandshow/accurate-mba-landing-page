"use client";

import { useState, useRef, useMemo } from "react";
import { ChevronDown, HelpCircle, Search, Sparkles } from "lucide-react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const [openId, setOpenId] = useState(null);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Admissions",
    "Fees",
    "Curriculum",
    "Placements",
    "Campus",
  ];

  const faqs = useMemo(
    () => [
      {
        category: "Admissions",
        popular: true,
        question: "What is the duration of the BCA program?",
        answer:
          "The BCA program is a 3-year full-time undergraduate course divided into 6 semesters, with each semester lasting approximately 6 months including examinations.",
      },
      {
        category: "Admissions",
        question: "What are the eligibility criteria for BCA admission?",
        answer:
          "Candidates must have passed intermediate (10+2) examination from recognized board with minimum 50% marks. Students from any stream are eligible to apply.",
      },
      {
        category: "Admissions",
        question: "Is there an entrance exam for BCA?",
        answer:
          "No entrance exam required. Admission is merit-based on 10+2 marks. Students can apply online or visit the college for guidance and support.",
      },
      {
        category: "Fees",
        popular: true,
        question: "What is the fee structure for the BCA program?",
        answer:
          "Total course fee is ₹2,90,000 for 3 years. 1st year: ₹1,00,000, 2nd year: ₹95,000, 3rd year: ₹95,000. Flexible payment options available.",
      },
      {
        category: "Curriculum",
        question: "What subjects are covered in the BCA course?",
        answer:
          "The curriculum includes Mathematics, Programming Principles & Algorithm (PPA), Computer Fundamentals & Office Automation (CFOA), and various programming languages.",
      },
      {
        category: "Placements",
        popular: true,
        question: "What is the placement record for BCA students?",
        answer:
          "We have 100% placement record with average package of ₹4 LPA. Students are placed in leading IT companies as Software Developers, Web Developers, and System Analysts.",
      },
      {
        category: "Placements",
        question: "Which companies recruit BCA graduates?",
        answer:
          "Leading IT companies like TCS, Wipro, Infosys, HCL, Tech Mahindra, and many startups actively recruit our BCA graduates for various technical roles.",
      },
      {
        category: "Curriculum",
        question: "Does the BCA program include practical training?",
        answer:
          "Yes, the program emphasizes instructor-led learning with practical technology applications, computer labs, live projects, and industry-oriented workshops.",
      },
      {
        category: "Campus",
        question: "What facilities are available at the campus?",
        answer:
          "Modern computer labs, libraries, classrooms with latest technology infrastructure, Wi-Fi connectivity, and all necessary amenities for quality education.",
      },
      {
        category: "Curriculum",
        question: "Can I pursue higher studies after BCA?",
        answer:
          "Yes, after BCA you can pursue MCA, MBA, M.Sc. IT, or specialized certifications. The program builds a strong foundation for advanced computer studies.",
      },
      {
        category: "Admissions",
        question: "What is the affiliation of the BCA program?",
        answer:
          "The BCA program is affiliated with CCS University, Meerut, ensuring industry recognition and quality education standards.",
      },
      {
        category: "Fees",
        question: "Are there any scholarship opportunities?",
        answer:
          "Yes, scholarships and education loan assistance are available for eligible students. Merit-based scholarships are also provided to deserving candidates.",
      },
    ],
    [],
  );

  const filteredFaqs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(search.toLowerCase()) ||
      faq.answer.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const leftColFaqs = filteredFaqs.filter((_, i) => i % 2 === 0);
  const rightColFaqs = filteredFaqs.filter((_, i) => i % 2 !== 0);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      ref={ref}
      id="faq"
      className="relative overflow-hidden bg-slate-50 py-24"
    >
      {/* Soft Ambient Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 h-[400px] w-[400px] rounded-full bg-blue-100/30 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-purple-100/30 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
            <HelpCircle className="h-4 w-4" />
            Support Center
          </div>
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Have <span className="text-blue-600">Questions?</span> We have
            Answers
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Explore our comprehensive FAQ to find everything you need to know
            about the BCA program, admissions, and campus life.
          </p>
        </motion.div>

        <div className="mb-12 space-y-8">
          <div className="mx-auto max-w-2xl">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search questions..."
                className="w-full rounded-2xl border border-slate-200 bg-white py-4 pl-12 pr-6 text-slate-900 shadow-sm transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-hidden"
              />
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-xl px-6 py-2.5 text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:text-blue-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div className="flex flex-col gap-6">
            {leftColFaqs.map((faq) => {
              const faqId = `faq-${faq.question.replace(/\s+/g, "-").toLowerCase()}`;
              return (
                <FAQCard
                  key={faqId}
                  faq={faq}
                  isOpen={openId === faqId}
                  toggleAccordion={() => toggleAccordion(faqId)}
                  isInView={isInView}
                />
              );
            })}
          </div>
          <div className="flex flex-col gap-6">
            {rightColFaqs.map((faq) => {
              const faqId = `faq-${faq.question.replace(/\s+/g, "-").toLowerCase()}`;
              return (
                <FAQCard
                  key={faqId}
                  faq={faq}
                  isOpen={openId === faqId}
                  toggleAccordion={() => toggleAccordion(faqId)}
                  isInView={isInView}
                />
              );
            })}
          </div>
        </div>

        {filteredFaqs.length === 0 && (
          <div className="mt-12 text-center py-20 bg-white rounded-3xl border border-dashed border-slate-300">
            <p className="text-slate-500 text-lg">No results found.</p>
            <button
              onClick={() => {
                setSearch("");
                setActiveCategory("All");
              }}
              className="mt-4 text-blue-600 font-semibold hover:underline"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

const FAQCard = ({ faq, isOpen, toggleAccordion, isInView }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 15 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        opacity: { duration: 0.4 },
        layout: { duration: 0.3, ease: "easeOut" },
      }}
      className={`relative overflow-hidden rounded-2xl border bg-white transition-shadow duration-300 ${
        isOpen
          ? "border-blue-200 shadow-xl shadow-blue-500/5"
          : "border-slate-200/70 hover:border-blue-100 hover:shadow-md"
      }`}
    >
      <button
        onClick={toggleAccordion}
        className="flex w-full items-start justify-between gap-4 p-6 text-left focus:outline-none"
      >
        <div className="flex-1 space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600/60">
              {faq.category}
            </span>
            {faq.popular && (
              <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-0.5 text-[9px] font-bold text-amber-600 ring-1 ring-inset ring-amber-600/20">
                <Sparkles className="h-2.5 w-2.5" />
                POPULAR
              </span>
            )}
          </div>
          <h3
            className={`text-lg font-bold transition-colors duration-300 ${
              isOpen ? "text-blue-600" : "text-slate-900 group-hover:text-blue-600"
            }`}
          >
            {faq.question}
          </h3>
        </div>
        <div
          className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
            isOpen ? "bg-blue-600 text-white rotate-180" : "bg-slate-100 text-slate-400"
          }`}
        >
          <ChevronDown className="h-4 w-4" />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="px-6 pb-6 pt-0">
              <div className="relative rounded-xl bg-slate-50/70 p-5">
                <div className="absolute left-0 top-4 h-8 w-1 rounded-r-full bg-blue-600" />
                <p className="text-slate-600 leading-relaxed pl-2">
                  {faq.answer}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FAQ;
