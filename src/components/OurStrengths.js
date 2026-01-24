"use client";

import { Check, Sparkles } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const OurStrengths = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const reasons = [
    "AICTE approved and UGC recognized BCA degree",
    "Strong foundation in programming, data structures, and computer fundamentals",
    "Industry-oriented curriculum covering Web, Mobile, and Software Development",
    "Hands-on practical labs with real-world projects",
    "Experienced faculty with strong academic and technical background",
    "Training in modern technologies like React, Node.js, and Databases",
    "Career-focused skill development and coding workshops",
    "Internship and placement support with IT companies",
    "Active alumni network working in top tech organizations",
    "Guidance for higher studies like MCA and competitive exams",
  ];

  return (
    <>
      <section ref={ref} className="relative overflow-hidden bg-white py-20">
        {/* Background Decoration */}
        <div className="absolute inset-0">
          <div className="absolute left-0 top-1/4 h-72 w-72 rounded-full bg-linear-to-r from-blue-200 to-purple-200 blur-3xl opacity-30" />
          <div className="absolute bottom-1/4 right-0 h-96 w-96 rounded-full bg-linear-to-r from-pink-200 to-orange-200 blur-3xl opacity-30" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="order-2 relative md:order-1"
            >
              <div className="relative">
                {/* Main Image */}
                <motion.div
                  className="relative z-10 h-180 w-full overflow-hidden rounded-3xl shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1685456891912-c09f9cd252eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Campus"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-blue-900/30 to-transparent" />
                </motion.div>

                {/* Floating Sparkle */}
                <motion.div
                  className="absolute -right-6 -top-6 rounded-2xl bg-linear-to-br from-blue-600 to-purple-600 p-4 text-white shadow-xl z-20"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Sparkles className="h-8 w-8" />
                </motion.div>

                {/* Experience Badge */}
                <motion.div
                  className="absolute -bottom-6 -left-6 rounded-2xl border border-gray-100 bg-white p-6 shadow-2xl z-20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="mb-1 bg-linear-to-r from-green-600 to-emerald-600 bg-clip-text text-4xl text-transparent">
                    25+
                  </div>
                  <div className="text-sm text-gray-600">
                    Years of Excellence
                  </div>
                </motion.div>

                {/* Decorative Border */}
                <motion.div
                  className="absolute -inset-4 rounded-3xl border-2 border-dashed border-blue-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3, duration: 0.8 }}
                />
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="order-1 md:order-2"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5 }}
                className="mb-6 inline-block rounded-full bg-linear-to-r from-blue-600 to-purple-600 px-6 py-2 text-sm text-white"
              >
                Our Strengths
              </motion.div>

              <h2 className="mb-6 text-4xl md:text-5xl leading-tight text-gray-900">
                Why Choose <br />
                <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Accurate BCA?
                </span>
              </h2>

              <p className="mb-8 text-lg text-gray-600">
                Our BCA program is designed to build strong technical
                foundations, practical skills, and industry readiness. Here's
                what makes us different:
              </p>

              <div className="space-y-4">
                {reasons.map((reason, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      delay: index * 0.05 + 0.3,
                      duration: 0.5,
                    }}
                    whileHover={{ x: 10 }}
                    className="group flex items-start"
                  >
                    <motion.div
                      className="relative mr-3 mt-1 shrink-0"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="rounded-full bg-linear-to-br from-green-400 to-emerald-600 p-1">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <div className="absolute inset-0 rounded-full bg-linear-to-br from-green-400 to-emerald-600 blur-md opacity-0 transition-opacity duration-300 group-hover:opacity-50" />
                    </motion.div>

                    <p className="text-gray-700 transition-colors duration-200 group-hover:text-gray-900">
                      {reason}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurStrengths;
