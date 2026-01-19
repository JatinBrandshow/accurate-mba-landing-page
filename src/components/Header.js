"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="absolute top-0 left-0 w-full z-50 bg-white shadow-sm">
            <div className="max-w-375 mx-auto px-6 py-3 flex justify-between items-center">
                {/* Left: Logos */}
                <div className="flex items-center gap-5 flex-wrap">
                    <Link href="/">
                        <Image
                            src="/image/accurate-logo.webp"
                            alt="Accurate Logo"
                            width={320}
                            height={60}
                            className="object-contain cursor-pointer max-sm:w-40"
                        />
                    </Link>

                    {/* Accreditation Logos (visible on all screens now) */}
                    <div className="flex items-center gap-3">
                        <Image
                            src="/image/accreditations/aicte-logo.webp"
                            alt="AICTE Logo"
                            width={50}
                            height={50}
                            className="object-contain shadow-md rounded max-sm:w-8"
                        />
                        <Image
                            src="/image/accreditations/ccsu-logo.webp"
                            alt="CCSU Logo"
                            width={50}
                            height={50}
                            className="object-contain shadow-md rounded max-sm:w-8"
                        />
                        <Image
                            src="/image/accreditations/naac-logo.webp"
                            alt="NAAC Logo"
                            width={50}
                            height={50}
                            className="object-contain shadow-md rounded max-sm:w-8"
                        />
                    </div>
                </div>

                {/* Desktop Contact Info */}
                <div className="hidden md:flex text-right text-base leading-tight text-black gap-5">
                    <p>
                        <strong>Phone:</strong> +91-98995 69090
                    </p>
                    <p>
                        <strong>Email:</strong> admissions@accurate.in
                    </p>
                </div>

                {/* Hamburger Icon for Mobile */}
                <button className="md:hidden flex flex-col gap-1" onClick={() => setOpen(!open)}>
                    <span className="w-6 h-1 bg-black rounded"></span>
                    <span className="w-6 h-1 bg-black rounded"></span>
                    <span className="w-6 h-1 bg-black rounded"></span>
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {open && (
                <div className="md:hidden bg-white px-6 py-3 shadow-inner border-t">
                    <div className="flex flex-wrap items-center gap-2 text-sm text-black">
                        <span>
                            <strong>Phone:</strong> +91-98995 69090
                        </span>
                        <span>|</span>
                        <span>
                            <strong>Email:</strong> admissions@accurate.in
                        </span>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
