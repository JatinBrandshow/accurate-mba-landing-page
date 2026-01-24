"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  BookOpen,
  Briefcase,
  TrendingUp,
  Globe,
  Users2,
  GraduationCap,
} from "lucide-react";

const highlights = [
  {
    icon: BookOpen,
    title: "Comprehensive BCA Curriculum",
    description:
      "Strong foundation in computer applications with a perfect balance of theoretical concepts and practical exposure.",
    color: "from-blue-600 to-blue-400",
    delay: 0.1,
  },
  {
    icon: Briefcase,
    title: "Placement Assistance",
    description:
      "BCA program has facilitated 100% placements with an average package of ₹4 LPA for placed students.",
    color: "from-yellow-500 to-yellow-400",
    delay: 0.2,
  },
  {
    icon: TrendingUp,
    title: "High Career Growth",
    description:
      "Excellent career opportunities in software development, web development, database management, and IT services.",
    color: "from-blue-600 to-blue-400",
    delay: 0.3,
  },
  {
    icon: Globe,
    title: "Industry-Oriented Learning",
    description:
      "Program designed to meet current IT industry demands with real-world projects and practical learning.",
     color: "from-yellow-500 to-yellow-400",
    delay: 0.4,
  },
  {
    icon: Users2,
    title: "Expert Faculty",
    description:
      "Instructor-led learning by experienced faculty members from academic and industry backgrounds.",
    color: "from-blue-600 to-blue-400",
    delay: 0.5,
  },
  {
    icon: GraduationCap,
    title: "UGC & CCS University Approved",
    description:
      "Affiliated with CCS University, Meerut — a recognized and accredited 3-year BCA degree program.",
     color: "from-yellow-500 to-yellow-400",
    delay: 0.6,
  },
];


const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="why-choose-us"
      ref={ref}
      className="relative overflow-hidden bg-white py-24"
    >
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
          className="mb-20 text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full border border-blue-100"
          >
            Why Choose Us
          </motion.span>

          <h2 className="mb-6 text-4xl md:text-5xl font-black text-slate-900 leading-tight">
            Program{" "}
            <span className="relative">
              <span className="relative z-10 text-blue-600">Highlights</span>
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-slate-600 leading-relaxed">
            Our BCA program is designed to equip you with the skills and
            knowledge needed to excel in today&apos;s dynamic business
            environment
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
                      className={`absolute inset-0 rounded-2xl border-2 border-black/20`}
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

                  <h3 className="mb-3 text-2xl font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="leading-relaxed text-gray-600">
                    {item.description}
                  </p>
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
