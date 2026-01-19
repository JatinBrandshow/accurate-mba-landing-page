"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/AccurateGrp/", label: "Facebook" },
    { icon: Twitter, href: "https://www.twitter.com/AccurateGrp", label: "Twitter" },
    { icon: Instagram, href: "https://www.instagram.com/AccurateCollege/", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/accurate-group-of-institutions", label: "LinkedIn" },
    { icon: Youtube, href: "https://www.youtube.com/user/AccurateInstitute1", label: "YouTube" },
];

const Footer = () => {
    return (
        <>
            <footer className="bg-linear-to-br from-[#003056] via-[#01406E] to-[#003056] text-white border-t-4 border-[#FDC800]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Main Footer Content */}
                    <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {/* About Section */}
                        <div className="lg:col-span-1">
                            <div className="mb-4">
                                <div className="mb-2">
                                    <Image
                                        src="/image/accurate-logo.webp"
                                        alt="Accurate Institute Logo"
                                        width={180}
                                        height={60}
                                        className="object-contain mx-auto sm:mx-0"
                                    />
                                </div>
                                <p className="text-sm text-gray-400">Shaping Tomorrow&apos;s Leaders</p>
                            </div>

                            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                                Accurate Group of Institutions, established in 2006, is a leading educational
                                institution offering world-class programs in Engineering, Management, Pharmacy,
                                Architecture, Polytechnic, and Law. With a strong focus on innovation, industry
                                relevance, and holistic development, Accurate continues to set benchmarks in higher
                                education at both national and international levels.
                            </p>

                            {/* Accreditation Badges */}
                            {/* <div className="flex flex-wrap gap-3">
                                <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 flex items-center justify-center">
                                    <Image
                                        src="/image/accreditations/aicte-logo.webp"
                                        alt="AICTE Approved"
                                        width={60}
                                        height={40}
                                        className="object-contain w-auto h-12"
                                    />
                                </div>

                                <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 flex items-center justify-center">
                                    <Image
                                        src="/image/accreditations/iso.webp"
                                        alt="ISO Certified"
                                        width={60}
                                        height={40}
                                        className="object-contain w-auto h-12"
                                    />
                                </div>
                            </div> */}
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h4 className="text-white mb-4 font-semibold">Contact Us</h4>
                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        49, Knowledge Park II,
                                        <br />
                                        Greater Noida, UP 201306
                                    </p>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Phone className="w-5 h-5 text-yellow-400 shrink-0" />
                                    <a
                                        href="tel:+919999999999"
                                        className="text-gray-400 hover:text-yellow-400 transition-colors text-sm"
                                    >
                                        +91-98995 69090
                                    </a>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Mail className="w-5 h-5 text-yellow-400 shrink-0" />
                                    <a
                                        href="mailto:admissions@accurate.in"
                                        className="text-gray-400 hover:text-yellow-400 transition-colors text-sm"
                                    >
                                        admissions@accurate.in
                                    </a>
                                </div>
                            </div>

                            {/* Social Media */}
                            <div className="mt-6">
                                <h5 className="text-white text-sm mb-3 font-medium">Follow Us</h5>
                                <div className="flex gap-2">
                                    {socialLinks.map((social, index) => {
                                        const Icon = social.icon;
                                        return (
                                            <a
                                                key={index}
                                                href={social.href}
                                                aria-label={social.label}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-9 h-9 bg-white/10 hover:bg-yellow-500 rounded-lg flex items-center justify-center transition-all duration-300 border border-white/20 hover:border-yellow-500 group"
                                            >
                                                <Icon className="w-4 h-4 text-gray-400 group-hover:text-gray-900" />
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-gray-700 py-6">
                        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 px-4 gap-4">
                            {/* Left Section */}
                            <div className="text-center md:text-left">
                                <p>© 2025 Accurate Group of Institutions. All rights reserved.</p>
                            </div>

                            {/* Center Section – Designed by Brandshow */}
                            <div className="text-center">
                                <Link
                                    href="https://brandshow.in/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-yellow-400 transition-colors font-medium"
                                >
                                    Designed by{" "}
                                    <span className="text-yellow-400 font-semibold hover:underline">Brandshow</span>
                                </Link>
                            </div>

                            {/* Right Section — removed per request */}
                            <div className="hidden"></div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
