"use client";

import {
  FileText,
  PenTool,
  ClipboardCheck,
  UserCheck,
  Calendar,
  IndianRupee,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AdmissionProcess = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const steps = [
    {
      icon: FileText,
      title: "Fill Online Application Form",
      description:
        "Complete your application with academic details and upload required documents",
      color: "from-blue-600 to-blue-400",
      accent: "blue",
    },
    {
      icon: PenTool,
      title: "Connect to Counsellor",
      description:
        "Our counsellor will guide you through the process and clear all your doubts",
      color: "from-yellow-500 to-yellow-400",
      accent: "yellow",
    },
    {
      icon: ClipboardCheck,
      title: "Appear for GD-PI",
      description:
        "Participate in Group Discussion and Personal Interview (Online/Offline)",
      color: "from-blue-600 to-blue-400",
      accent: "blue",
    },
    {
      icon: UserCheck,
      title: "Performance Report",
      description:
        "Receive your performance evaluation and next steps towards admission",
      color: "from-yellow-500 to-yellow-400",
      accent: "yellow",
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
        {/* Background Decorations */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50 rounded-full blur-[120px] -mr-20 -mt-20 opacity-60" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-yellow-50 rounded-full blur-[120px] -ml-20 -mb-20 opacity-60" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Heading Section - Brand Updated */}
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
              Step-by-Step Guide
            </motion.span>

            <h2 className="mb-6 text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              Admission{" "}
              <span className="relative">
                <span className="relative z-10 text-blue-600">Process</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-yellow-400/30 -z-10 rounded-full" />
              </span>
            </h2>

            <p className="mx-auto max-w-2xl text-lg text-slate-600 leading-relaxed">
              Your journey to becoming a business leader starts here. Follow
              these simple steps to join our prestigious MBA program.
            </p>
          </motion.div>

          {/* Process Steps Section */}
          <div className="mb-24 grid gap-8 md:grid-cols-2 lg:grid-cols-4 relative">
            {/* Connection Line Desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-[100px] z-0" />

            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative z-10"
              >
                <motion.div
                  className="group relative h-full rounded-3xl bg-white p-8 border-2 border-slate-50 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-500"
                  whileHover={{ y: -10 }}
                >
                  {/* Step Number Badge */}
                  <div
                    className={`absolute -top-4 -left-4 w-12 h-12 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg bg-linear-to-br ${step.color}`}
                  >
                    {index + 1}
                  </div>

                  {/* Icon - No 360 rotation as requested */}
                  <motion.div
                    className={`mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50 text-slate-900 group-hover:bg-linear-to-br ${step.color} group-hover:text-white transition-all duration-500 shadow-inner`}
                    whileHover={{ scale: 1.1 }}
                  >
                    <step.icon className="h-8 w-8" />
                  </motion.div>

                  <h3 className="mb-4 text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Enhanced Hover Indicator */}
                  <div
                    className={`absolute bottom-6 right-8 w-8 h-1 rounded-full bg-slate-100 group-hover:w-16 group-hover:bg-yellow-400 transition-all duration-500`}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Eligibility Criteria Section - AS REQUESTED, UNTOUCHED LOGIC BUT WRAPPED IN PROPER SPACING */}
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="lg:col-span-2 rounded-[2.5rem] bg-slate-900 p-8 md:p-12 text-white shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[80px] -mr-32 -mt-32" />

              <h3 className="mb-10 text-3xl font-bold">
                Eligibility <span className="text-blue-400">Criteria</span>
              </h3>

              <div className="grid gap-6 md:grid-cols-2 mb-10">
                {eligibility.map((criterion, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
                      <div className="h-2 w-2 rounded-full bg-blue-400" />
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {criterion}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-10 border-t border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">
                      Last Date to Apply
                    </div>
                    <div className="text-sm font-bold">30th June 2026</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-yellow-500/10 flex items-center justify-center">
                    <IndianRupee className="h-5 w-5 text-yellow-500" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">
                      Application Fee
                    </div>
                    <div className="text-sm font-bold">₹1,100/-</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="rounded-[2.5rem] bg-blue-600 p-8 md:p-10 text-white shadow-xl shadow-blue-500/20 flex flex-col justify-between h-full min-h-[400px]"
            >
              <div>
                <h4 className="text-2xl font-bold mb-4">Start Your Journey</h4>
                <p className="text-blue-100 text-sm leading-relaxed mb-8">
                  Take the first step towards a successful career in Computer
                  Applications. Our admissions team is here to guide you.
                </p>
              </div>

              <motion.button
                onClick={() => {
                  const el = document.getElementById("apply");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                whileHover={{
                  scale: 1.02,
                  backgroundColor: "#facc15",
                  color: "#0f172a",
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full rounded-2xl bg-white py-4 px-6 text-blue-600 font-bold text-center transition-all shadow-lg"
              >
                Apply Online Now
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdmissionProcess;
