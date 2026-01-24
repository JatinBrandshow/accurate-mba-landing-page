"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { GraduationCap, Building2, Trophy, Globe } from "lucide-react";

const OurAchievement = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    {
      icon: GraduationCap,
      end: 5000,
      suffix: "+",
      label: "Alumni Network",
      color: "from-blue-600 to-blue-400",
    },
    {
      icon: Building2,
      end: 250,
      suffix: "+",
      label: "Corporate Partners",
      color: "from-yellow-500 to-yellow-400",
    },
    {
      icon: Trophy,
      end: 98,
      suffix: "%",
      label: "Success Rate",
      color: "from-blue-600 to-blue-400",
    },
    {
      icon: Globe,
      end: 15,
      suffix: "+",
      label: "Countries Reached",
      color: "from-yellow-500 to-yellow-400",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative py-24 bg-white overflow-hidden border-y border-slate-100"
    >
      {/* Layered Background System */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Base: Radial Gradient Tint */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.03)_0,transparent_70%)]" />

        {/* Middle: Geometric Hexagon Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill-rule='evenodd' fill='none' stroke='%232563eb' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Top: Animated Glass Orbs */}
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 right-1/4 w-[400px] h-[400px] bg-blue-100/30 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 50, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-20 left-1/4 w-[500px] h-[500px] bg-indigo-100/20 rounded-full blur-[120px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
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
            className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-blue-700 uppercase bg-blue-50 rounded-full border border-blue-100"
          >
            Our Achievements
          </motion.span>

          <h2 className="mb-6 text-4xl md:text-5xl font-black text-slate-900 leading-tight">
            Our Impact in <span className="text-blue-600">Numbers</span>
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-slate-600 leading-relaxed">
            Building tomorrow&apos;s business leaders with proven excellence
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <CounterCard
              key={index}
              {...stat}
              delay={index * 0.15}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

/* COUNTER CARD */

function CounterCard({
  icon: Icon,
  end,
  suffix,
  label,
  color,
  delay,
  isInView,
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    const duration = 2500;

    const animate = (time) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 4);

      setCount(Math.floor(easeOut * end));

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isInView, end]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.8, type: "spring" }}
      whileHover={{ y: -10 }}
      className="relative group"
    >
      <div className="relative bg-white border border-slate-200/60 rounded-3xl p-8 h-full shadow-sm group-hover:shadow-xl group-hover:border-blue-200 transition-all duration-500">
        {/* Rotating Icon Box */}
        <div className="relative mb-6 h-20 w-20">
          {/* Rotating Border */}
          <motion.div
            className="absolute inset-0 rounded-2xl border-2 border-black/20"
            animate={{ rotate: 360 }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Main Icon Box */}
          <motion.div
            className={`absolute inset-0 flex items-center justify-center rounded-2xl bg-linear-to-br ${color} shadow-lg`}
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <Icon className="h-10 w-10 text-white" />
          </motion.div>

          {/* Glow Effect */}
          <motion.div
            className={`absolute inset-0 rounded-2xl bg-linear-to-br ${color} blur-xl opacity-0 group-hover:opacity-40`}
          />
        </div>

        {/* Counter */}
        <div>
          <div className="text-4xl md:text-5xl font-bold mb-2">
            <span
              className={`bg-linear-to-r ${color} bg-clip-text text-transparent`}
            >
              {count}
              {suffix}
            </span>
          </div>
          <div className="text-slate-500 font-semibold tracking-wide uppercase text-xs">
            {label}
          </div>
        </div>

        {/* Decorative Line */}
        <div
          className={`absolute bottom-0 left-8 right-8 h-1 bg-linear-to-r ${color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        />
      </div>
    </motion.div>
  );
}

export default OurAchievement;
