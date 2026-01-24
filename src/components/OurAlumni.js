"use client";

import { Star, Quote } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const OurAlumni = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const testimonials = [
    {
      name: "Aman Gupta",
      role: "Software Developer, Infosys",
      batch: "BCA 2021-24",
      text: "The BCA program at Accurate gave me a strong foundation in programming and problem-solving. Practical labs and faculty support helped me crack my first IT job.",
      gradient: "from-blue-600 to-blue-400",
    },
    {
      name: "Neha Verma",
      role: "Web Developer, TCS",
      batch: "BCA 2020-23",
      text: "I learned web technologies like HTML, CSS, JavaScript, and React during my BCA. The learning environment at Accurate boosted my confidence immensely.",
      gradient: "from-yellow-500 to-yellow-400",
    },
    {
      name: "Rohit Sharma",
      role: "Data Analyst, Accenture",
      batch: "BCA 2019-22",
      text: "The mix of theory and practical exposure in data handling and analytics prepared me well for the corporate world. Accurate truly focuses on industry readiness.",
      gradient: "from-blue-700 to-blue-500",
    },
    {
      name: "Simran Kaur",
      role: "System Administrator, Wipro",
      batch: "BCA 2021-24",
      text: "Subjects like computer networks and operating systems were taught with real-world examples. Placement support helped me secure a reputed organization.",
      gradient: "from-yellow-600 to-yellow-400",
    },
    {
      name: "Kunal Mehta",
      role: "Junior Software Engineer, Capgemini",
      batch: "BCA 2020-23",
      text: "Accurate Institute helped me build strong logical thinking and coding skills. The faculty mentorship was a key factor in my professional growth.",
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      name: "Pooja Singh",
      role: "MCA Student",
      batch: "BCA 2018-21",
      text: "The BCA program motivated me to pursue higher studies. My conceptual clarity helped me excel in MCA entrance exams and advanced coursework.",
      gradient: "from-yellow-400 to-amber-400",
    },
  ];

  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section ref={ref} className="relative overflow-hidden bg-white py-24">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-linear-to-r from-blue-100 to-blue-200 blur-3xl opacity-30" />
        <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-linear-to-r from-yellow-100 to-yellow-200 blur-3xl opacity-30" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center px-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-block rounded-full bg-linear-to-r from-blue-600 to-blue-800 px-6 py-2 text-sm text-white font-semibold"
          >
            Success Stories
          </motion.div>

          <h2 className="mb-4 text-4xl md:text-5xl font-bold text-gray-900">
            What Our{" "}
            <span className="bg-linear-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Alumni Say
            </span>
          </h2>

          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Hear from our alumni who have transformed their careers through our
            BCA program
          </p>
        </motion.div>

        {/* Slider Container */}
        <div className="pause-on-hover overflow-hidden py-10">
          <div className="flex animate-marquee gap-8 w-max px-4">
            {duplicatedTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateY: -15 }}
                animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
                transition={{
                  delay: (index % testimonials.length) * 0.1,
                  duration: 0.8,
                }}
                whileHover={{ y: -15, rotateY: 5 }}
                className="group relative w-[320px] md:w-[400px] flex-shrink-0"
                style={{ perspective: "1000px" }}
              >
                <div className="relative h-full overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-500 hover:shadow-2xl border border-gray-100">
                  {/* Gradient Border */}
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${testimonial.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                    style={{ padding: "2px" }}
                  >
                    <div className="h-full rounded-3xl bg-white" />
                  </div>

                  <div className="relative p-8">
                    {/* Quote Icon */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={isInView ? { scale: 1, rotate: 0 } : {}}
                      transition={{
                        delay: (index % testimonials.length) * 0.1 + 0.3,
                        duration: 0.6,
                      }}
                    >
                      <div
                        className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br ${testimonial.gradient} shadow-lg`}
                      >
                        <Quote className="h-8 w-8 text-white" />
                      </div>
                    </motion.div>

                    {/* Stars */}
                    <div className="mb-4 flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{
                            delay:
                              (index % testimonials.length) * 0.1 +
                              0.4 +
                              i * 0.05,
                            duration: 0.3,
                          }}
                        >
                          <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Text */}
                    <p className="mb-8 italic leading-relaxed text-gray-700 min-h-[100px]">
                      "{testimonial.text}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center border-t border-gray-100 pt-6">
                      <motion.div
                        className={`mr-4 flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-br ${testimonial.gradient} text-lg text-white font-bold shadow-lg`}
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </motion.div>
                      <div className="min-w-0">
                        <p className="text-gray-900 font-bold truncate">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-gray-600 truncate">
                          {testimonial.role}
                        </p>
                        <p className="text-xs text-blue-600 font-semibold">
                          {testimonial.batch}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Floating Particles */}
                  <motion.div
                    className={`absolute right-10 top-10 h-3 w-3 rounded-full bg-linear-to-r ${testimonial.gradient}`}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: (index % testimonials.length) * 0.5,
                    }}
                  />
                  <motion.div
                    className={`absolute bottom-20 left-10 h-2 w-2 rounded-full bg-linear-to-r ${testimonial.gradient}`}
                    animate={{
                      y: [0, 15, 0],
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: (index % testimonials.length) * 0.3,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurAlumni;
