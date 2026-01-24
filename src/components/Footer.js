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
        <footer className="bg-slate-950 text-white border-t border-slate-900">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 gap-12 py-20 md:grid-cols-2 lg:grid-cols-3">
                    {/* About Section */}
                    <div className="lg:col-span-1">
                        <div className="mb-8">
                            <Image
                                src="/image/accurate-logo.webp"
                                alt="Accurate Institute Logo"
                                width={180}
                                height={60}
                                className="mb-4 object-contain brightness-0 invert"
                            />
                            <p className="text-sm font-medium tracking-widest uppercase text-blue-500">
                                Shaping Tomorrow's Leaders
                            </p>
                        </div>

                        <p className="mb-6 text-sm leading-relaxed text-slate-400">
                            Accurate Group of Institutions, established in 2006, is a leading educational
                            institution offering world-class programs in Engineering, Management, Pharmacy,
                            Architecture, Polytechnic, and Law.
                        </p>
                    </div>

                    {/* Quick Links / Contact Info */}
                    <div>
                        <h4 className="mb-8 text-lg font-bold text-white">Contact Us</h4>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-900 border border-slate-800">
                                    <MapPin className="h-5 w-5 text-blue-500" />
                                </div>
                                <p className="text-sm leading-relaxed text-slate-400">
                                    49, Knowledge Park II,
                                    <br />
                                    Greater Noida, UP 201306
                                </p>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-900 border border-slate-800">
                                    <Phone className="h-5 w-5 text-blue-500" />
                                </div>
                                <a
                                    href="tel:+919899569090"
                                    className="text-sm text-slate-400 transition-colors hover:text-white"
                                >
                                    +91-98995 69090
                                </a>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-900 border border-slate-800">
                                    <Mail className="h-5 w-5 text-blue-500" />
                                </div>
                                <a
                                    href="mailto:admissions@accurate.in"
                                    className="text-sm text-slate-400 transition-colors hover:text-white"
                                >
                                    admissions@accurate.in
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Social Media & Newsletter */}
                    <div>
                        <h4 className="mb-8 text-lg font-bold text-white">Follow Us</h4>
                        <p className="mb-6 text-sm text-slate-400">
                            Stay updated with our latest news and campus events.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {socialLinks.map((social, index) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={index}
                                        href={social.href}
                                        aria-label={social.label}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 border border-slate-800 transition-all duration-300 hover:bg-blue-600 hover:border-blue-600 group"
                                    >
                                        <Icon className="h-5 w-5 text-slate-400 group-hover:text-white" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-900 py-10">
                    <div className="flex flex-col items-center justify-between gap-6 md:flex-row text-sm text-slate-500">
                        <p>© 2025 Accurate Group of Institutions. All rights reserved.</p>

                        <div className="flex items-center gap-2">
                            <span>Designed by</span>
                            <Link
                                href="https://brandshow.in/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-semibold text-slate-300 transition-colors hover:text-blue-500"
                            >
                                Brandshow
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
