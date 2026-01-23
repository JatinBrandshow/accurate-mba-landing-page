"use client";

import React, { useState } from "react";
import { Phone, Mail, MessageSquare, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import { submitLeadConversion } from "@/lib/googleAdsConversion";
import { useRouter } from "next/navigation";

const specialisations = [
    "Marketing Management",
    "Finance Management",
    "Business Analytics",
    "Human Resource Management",
    "International Business",
    "Operations & Supply Chain Management",
    "Banking & Financial Services",
];

const ContactUs = () => {
    const router = useRouter();

    const [formData, setFormData] = useState({
        fullName: "",
        mobile: "",
        email: "",
        program: "",
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.fullName || !formData.mobile || !formData.email || !formData.program) {
            toast.error("Please fill in all required fields");
            return;
        }

        try {
            const res = await fetch("/api/submit-lead", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: formData.fullName,
                    mobile: formData.mobile,
                    email: formData.email,
                    course: formData.program,
                    utm_medium: "",
                    utm_campaign: "",
                }),
            });

            const data = await res.json();

            if (data.status === "success") {
                // ✅ FIRE GOOGLE ADS CONVERSION
                submitLeadConversion();

                toast.success("Enquiry submitted successfully! Our team will contact you soon.");

                // ✅ Redirect to thank-you page
                router.push("/thank-you");
            } else {
                toast.error(data.error || "Something went wrong");
            }
        } catch (error) {
            toast.error("Failed to submit enquiry");
            console.error(error);
        }
    };

    const handleChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    return (
        <>
            <section className="py-20 bg-linear-to-r from-blue-600 via-indigo-600 to-blue-700 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        }}
                    ></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Section */}
                        <div className="text-white space-y-8">
                            <div>
                                <div className="inline-block bg-yellow-500 text-gray-900 px-4 py-2 rounded-full mb-4">
                                    🎓 Take the First Step
                                </div>
                                <h2 className="text-white mb-4 text-3xl font-semibold">
                                    Ready to Take the Next Step?
                                </h2>
                                <p className="text-blue-100 text-lg">
                                    Fill out the enquiry form and our admission counselors will get in touch with you to
                                    guide you through the admission process.
                                </p>
                            </div>

                            {/* Contact Info */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                                        <Phone className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-blue-200">Helpline</div>
                                        <a
                                            href="tel:+919899569090"
                                            className="text-white hover:text-yellow-400 transition-colors"
                                        >
                                            +91-98995 69090
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                                        <MessageSquare className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-blue-200">WhatsApp</div>
                                        <a
                                            href="https://wa.me/919220508941"
                                            className="text-white hover:text-yellow-400 transition-colors"
                                        >
                                            +91-92205 08941
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                                        <Mail className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-blue-200">Email</div>
                                        <a
                                            href="mailto:admissions@accurate.in"
                                            className="text-white hover:text-yellow-400 transition-colors"
                                        >
                                            admissions@accurate.in
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Section (Form) */}
                        <div id="enquiry-form-card" className="bg-white rounded-2xl p-8 shadow-2xl scroll-mt-24">
                            {!isSubmitted ? (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <h3 className="text-gray-900 text-2xl font-semibold mb-2">Enquire Now</h3>
                                        <p className="text-gray-600 text-sm">
                                            Fill in your details and we'll get back to you within 24 hours.
                                        </p>
                                    </div>

                                    <div className="space-y-4">
                                        {/* Full Name */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Enter your full name"
                                                value={formData.fullName}
                                                onChange={(e) => handleChange("fullName", e.target.value)}
                                                required
                                                className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none text-black placeholder-gray-600"
                                            />
                                        </div>

                                        {/* Mobile */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">
                                                Mobile Number *
                                            </label>
                                            <input
                                                type="tel"
                                                placeholder="Enter your mobile number"
                                                value={formData.mobile}
                                                onChange={(e) => handleChange("mobile", e.target.value)}
                                                required
                                                className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none text-black placeholder-gray-600"
                                            />
                                        </div>

                                        {/* Email */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">
                                                Email ID *
                                            </label>
                                            <input
                                                type="email"
                                                placeholder="Enter your email"
                                                value={formData.email}
                                                onChange={(e) => handleChange("email", e.target.value)}
                                                required
                                                className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none text-black placeholder-gray-600"
                                            />
                                        </div>

                                        {/* Program */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">
                                                Program Interested *
                                            </label>
                                            <select
                                                value={formData.program}
                                                onChange={(e) => handleChange("program", e.target.value)}
                                                required
                                                className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none text-black"
                                            >
                                                <option value="">Select Program</option>
                                                <option value="MBA">MBA</option>
                                                <option value="PGDM">PGDM</option>
                                            </select>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full flex items-center justify-center gap-2 bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 rounded-md shadow-lg transition"
                                    >
                                        <Send className="w-5 h-5" />
                                        Submit Enquiry
                                    </button>

                                    <p className="text-xs text-gray-500 text-center">
                                        By submitting this form, you agree to our terms and privacy policy.
                                    </p>
                                </form>
                            ) : (
                                <div className="py-12 text-center space-y-4">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                                        <CheckCircle className="w-10 h-10 text-green-600" />
                                    </div>
                                    <h3 className="text-gray-900 text-2xl font-semibold">Thank You!</h3>
                                    <p className="text-gray-600">
                                        Your enquiry has been submitted successfully. Our team will contact you shortly.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactUs;