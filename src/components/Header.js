"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-md py-2" : "bg-white py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        {/* Left: Logos */}
        <div className="flex items-center gap-4 lg:gap-8">
          <Link href="/" className="shrink-0">
            <Image
              src="/image/accurate-logo.webp"
              alt="Accurate Logo"
              width={200}
              height={40}
              className="object-contain w-32 sm:w-48 lg:w-56"
            />
          </Link>

          {/* Accreditation Logos - Desktop */}
          <div className="hidden lg:flex items-center gap-3 border-l pl-6 border-slate-200">
            {[
              { src: "/image/accreditations/aicte-logo.webp", alt: "AICTE" },
              { src: "/image/accreditations/ccsu-logo.webp", alt: "CCSU" },
              { src: "/image/accreditations/naac-logo.webp", alt: "NAAC" },
            ].map((logo, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -2 }}
                className="bg-white p-1 rounded shadow-sm border border-slate-100"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={35}
                  height={35}
                  className="object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop Contact Info & CTA */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex flex-col items-end">
            <a
              href="tel:+919899569090"
              className="flex items-center gap-2 text-slate-700 hover:text-blue-600 transition-colors font-medium text-sm"
            >
              <Phone className="w-3.5 h-3.5 text-blue-600" />
              +91-98995 69090
            </a>
            <a
              href="mailto:admissions@accurate.in"
              className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors text-xs"
            >
              <Mail className="w-3.5 h-3.5 text-blue-600" />
              admissions@accurate.in
            </a>
          </div>
          <Link
            href="#apply"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-all shadow-lg shadow-blue-200 active:scale-95"
          >
            Apply Now
          </Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden p-2 text-slate-600 hover:text-blue-600 transition-colors"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden shadow-xl"
          >
            <div className="px-6 py-8 space-y-6">
              <div className="space-y-4">
                <a
                  href="tel:+919899569090"
                  className="flex items-center gap-3 text-slate-700 font-medium p-3 rounded-xl bg-slate-50"
                >
                  <Phone className="w-5 h-5 text-blue-600" />
                  +91-98995 69090
                </a>
                <a
                  href="mailto:admissions@accurate.in"
                  className="flex items-center gap-3 text-slate-700 font-medium p-3 rounded-xl bg-slate-50"
                >
                  <Mail className="w-5 h-5 text-blue-600" />
                  admissions@accurate.in
                </a>
              </div>

              <div className="flex items-center justify-center gap-4 pt-4 border-t border-slate-100">
                <Image src="/image/accreditations/aicte-logo.webp" alt="AICTE" width={40} height={40} className="grayscale hover:grayscale-0 transition-all" />
                <Image src="/image/accreditations/ccsu-logo.webp" alt="CCSU" width={40} height={40} className="grayscale hover:grayscale-0 transition-all" />
                <Image src="/image/accreditations/naac-logo.webp" alt="NAAC" width={40} height={40} className="grayscale hover:grayscale-0 transition-all" />
              </div>

              <Link
                href="#apply"
                onClick={() => setOpen(false)}
                className="block w-full text-center bg-blue-600 text-white py-4 rounded-xl font-bold shadow-lg shadow-blue-200"
              >
                Apply for Admission 2026
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
