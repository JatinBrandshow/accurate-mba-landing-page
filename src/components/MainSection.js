"use client";

import React from "react";
import { ArrowRight, Award, TrendingUp, Zap, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const MainSection = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const scrollToApply = () => {
    const element = document.getElementById("apply");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <section
        ref={ref}
        className="relative pt-32 pb-20 min-h-screen flex items-center overflow-hidden bg-white"
      >
        {/* Layered Background System */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Base Layer: Mesh Gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(at_0%_0%,rgba(37,99,235,0.08)_0,transparent_50%),radial-gradient(at_100%_0%,rgba(99,102,241,0.05)_0,transparent_50%),radial-gradient(at_50%_100%,rgba(234,179,8,0.05)_0,transparent_50%)]" />

          {/* Middle Layer: Animated Grid */}
          <motion.div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: `linear-gradient(#2563eb 1.5px, transparent 1.5px), linear-gradient(90deg, #2563eb 1.5px, transparent 1.5px)`,
              backgroundSize: "100px 100px",
              y,
            }}
          />

          {/* Upper Layer: Floating Glass Orbs */}
          <motion.div
            animate={{ x: [0, 40, 0], y: [0, 60, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-24 -left-24 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-[120px]"
          />
          <motion.div
            animate={{ x: [0, -40, 0], y: [0, -60, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 -right-24 w-[500px] h-[500px] bg-indigo-100/20 rounded-full blur-[100px]"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div style={{ opacity }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100"
              >
                <Sparkles className="text-blue-600 w-4 h-4" />
                <span className="text-sm font-bold text-blue-700">
                  Admissions Open for 2026
                </span>
              </motion.div>

              <h1 className="text-5xl lg:text-7xl text-slate-900 font-black mb-6 leading-tight">
                Bachelor in <br />
                <span className="bg-linear-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                  Computer Application
                </span>
              </h1>

              <p className="text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">
                Transform your career with leadership skills and global
                perspectives. Join India's premier tech program.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <button
                  onClick={scrollToApply}
                  className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold flex items-center gap-2 shadow-lg shadow-blue-200 transition-all hover:-translate-y-1"
                >
                  Apply Now <ArrowRight className="w-5 h-5" />
                </button>

                <button
                  onClick={() =>
                    document
                      .getElementById("program")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="px-8 py-4 rounded-full border-2 border-slate-200 text-slate-700 font-bold hover:bg-slate-50 transition-all"
                >
                  Explore Program
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: Award, value: "2 Years", label: "Duration", color: "text-blue-600" },
                  { icon: TrendingUp, value: "95%+", label: "Placement", color: "text-amber-600" },
                  { icon: Zap, value: "UGC", label: "Approved", color: "text-blue-600" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all group"
                  >
                    <item.icon className={`${item.color} mb-2 w-6 h-6 transition-transform group-hover:scale-110`} />
                    <div className="text-slate-900 font-bold text-lg">{item.value}</div>
                    <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">{item.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-blue-600 rounded-3xl rotate-3 scale-95 opacity-10" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1557734864-c78b6dfef1b1"
                  alt="MBA Students"
                  width={1080}
                  height={720}
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-50 hidden md:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                    <Sparkles className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-slate-900 font-bold">Top Ranked</div>
                    <div className="text-xs text-slate-500">Industry Excellence</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Gradient Animation */}
        <style jsx>{`
          @keyframes gradient {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}</style>
      </section>
    </>
  );
};

export default MainSection;
