"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  TrendingUp,
  DollarSign,
  Users,
  Smartphone,
  Factory,
  Heart,
} from "lucide-react";

const Specialization = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const specializations = [
    {
      icon: Smartphone,
      name: "Software Development",
      description:
        "Learn programming fundamentals, software design, and application development skills.",
      courses: [
        "C Programming",
        "Java Programming",
        "Python Basics",
        "Software Engineering",
      ],
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100",
    },
    {
      icon: TrendingUp,
      name: "Web Development",
      description:
        "Build dynamic and responsive websites using modern web technologies.",
      courses: ["HTML & CSS", "JavaScript", "React Basics", "PHP & MySQL"],
      color: "from-yellow-400 to-yellow-500",
      bgColor: "from-yellow-50 to-yellow-100",
    },
    {
      icon: Users,
      name: "Database Management",
      description:
        "Understand database design, data handling, and information security.",
      courses: ["DBMS", "SQL", "Data Modeling", "Database Security"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-100",
    },
    {
      icon: Factory,
      name: "Networking & Security",
      description:
        "Learn computer networks, cybersecurity fundamentals, and system protection.",
      courses: [
        "Computer Networks",
        "Cyber Security",
        "Operating Systems",
        "Network Security",
      ],
      color: "from-yellow-500 to-amber-500",
      bgColor: "from-yellow-50 to-amber-100",
    },
    {
      icon: DollarSign,
      name: "Data Analytics",
      description:
        "Analyze data to extract meaningful insights using analytical tools.",
      courses: [
        "Data Analytics Basics",
        "Statistics",
        "Excel for Data",
        "Data Visualization",
      ],
      color: "from-blue-600 to-indigo-600",
      bgColor: "from-blue-50 to-indigo-100",
    },
    {
      icon: Heart,
      name: "Advanced Computing",
      description:
        "Prepare for higher studies like MCA, MSc IT, or research in computer science.",
      courses: [
        "Artificial Intelligence",
        "Machine Learning Basics",
        "Cloud Computing",
        "Advanced Algorithms",
      ],
      color: "from-yellow-400 to-orange-400",
      bgColor: "from-yellow-50 to-orange-100",
    },
  ];

  return (
    <>
      <section
        id="specializations"
        ref={ref}
        className="relative overflow-hidden bg-linear-to-br from-gray-50 to-blue-50 py-20"
      >
        {/* Animated Background */}
        <motion.div
          className="absolute top-0 right-0 h-96 w-96 rounded-full bg-purple-300 blur-3xl opacity-20"
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

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
              Specializations
            </motion.span>

            <h2 className="mb-6 text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              Choose Your{" "}
              <span className="relative">
                <span className="relative z-10 text-blue-600">Path</span>
              </span>
            </h2>

            <p className="mx-auto max-w-2xl text-lg text-slate-600 leading-relaxed">
              Select from our diverse range of specializations to align your MBA
              with your career goals and industry demands.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {specializations.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                whileHover={{ y: -15 }}
                className="group relative"
              >
                <div className="relative h-full overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-500 hover:shadow-2xl">
                  {/* Hover Background */}
                  <motion.div
                    className={`absolute inset-0 bg-linear-to-br ${spec.bgColor} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                  />

                  <div className="relative p-8">
                    {/* Icon */}
                    <div className="relative mb-6">
                      <motion.div
                        className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br ${spec.color} shadow-lg`}
                        animate={{
                          scale: hoveredIndex === index ? 1.1 : 1,
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        <spec.icon className="h-8 w-8 text-white" />
                      </motion.div>

                      <motion.div
                        className={`absolute inset-0 rounded-2xl bg-linear-to-br ${spec.color} blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-0`}
                      />
                    </div>

                    <h3 className="mb-3 text-2xl text-gray-900">{spec.name}</h3>
                    <p className="mb-6 text-gray-600">{spec.description}</p>

                    {/* Courses */}
                    <div className="border-t border-gray-200 pt-6">
                      <p className="mb-3 text-sm text-gray-500">Key Courses:</p>
                      <div className="flex flex-wrap gap-2">
                        {spec.courses.map((course, idx) => (
                          <motion.span
                            key={idx}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{
                              delay: index * 0.1 + idx * 0.05,
                            }}
                            whileHover={{ scale: 1.1 }}
                            className={`rounded-full bg-linear-to-r ${spec.color} px-3 py-1.5 text-xs text-white`}
                          >
                            {course}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Accent */}
                    <motion.div
                      className={`absolute bottom-0 left-0 right-0 h-1.5 bg-linear-to-r ${spec.color}`}
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  {/* Floating Particles */}
                  {hoveredIndex === index &&
                    [...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute h-2 w-2 rounded-full bg-linear-to-r ${spec.color}`}
                        initial={{ opacity: 0, x: 0, y: 0 }}
                        animate={{
                          opacity: [0, 1, 0],
                          x: Math.random() * 100 - 50,
                          y: Math.random() * -100,
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: "50%",
                        }}
                      />
                    ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Specialization;
