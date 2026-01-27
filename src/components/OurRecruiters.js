"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const recruiters = [
    { name: "Deloitte", image: "/image/our-recuiters/deloitte.webp" },
    { name: "HDFC Bank", image: "/image/our-recuiters/hdfc-bank.webp" },
    { name: "KPMG", image: "/image/our-recuiters/kpmg.webp" },
    { name: "ICICI", image: "/image/our-recuiters/icici.webp" },
    { name: "Amazon", image: "/image/our-recuiters/amazon.webp" },
    { name: "Airtel", image: "/image/our-recuiters/airtel.webp" },
    { name: "EY", image: "/image/our-recuiters/ey.webp" },
    { name: "ITC", image: "/image/our-recuiters/itc.webp" },
    { name: "Infosys", image: "/image/our-recuiters/infosys.webp" },
    { name: "TCS", image: "/image/our-recuiters/tcs.webp" },
    { name: "Wipro", image: "/image/our-recuiters/wipro.webp" },
    { name: "Accenture", image: "/image/our-recuiters/accenture.webp" },
    { name: "Cognizant", image: "/image/our-recuiters/cognizant.webp" },
    { name: "PwC", image: "/image/our-recuiters/pwc.webp" },
    { name: "Gartner", image: "/image/our-recuiters/gartner.webp" },
    { name: "bajaj-capital", image: "/image/our-recuiters/bajaj-capital.webp" },
    { name: "bajaj-finserv", image: "/image/our-recuiters/bajaj-finserv.webp" },
    { name: "bank-of-maharashtra", image: "/image/our-recuiters/bank-of-maharashtra.webp" },
    { name: "capgemini-Logo", image: "/image/our-recuiters/capgemini-Logo.webp" },
    { name: "capitalboon-logo", image: "/image/our-recuiters/capitalboon-logo.webp" },
    { name: "citi-bank", image: "/image/our-recuiters/citi-bank.webp" },
    { name: "cq-logo", image: "/image/our-recuiters/cq-logo.webp" },
    { name: "d-mart", image: "/image/our-recuiters/d-mart.webp" },
    { name: "first-point-creations", image: "/image/our-recuiters/first-point-creations.webp" },
    { name: "genpact_logo", image: "/image/our-recuiters/genpact_logo.webp" },
    { name: "hdfc", image: "/image/our-recuiters/hdfc.webp" },
    { name: "icici-bank-logo", image: "/image/our-recuiters/icici-bank-logo.webp" },
    { name: "idbi-bank", image: "/image/our-recuiters/idbi-bank.webp" },
    { name: "infotech", image: "/image/our-recuiters/infotech.webp" },
    { name: "kotak-bank", image: "/image/our-recuiters/kotak-bank.webp" },
];

const OurRecruiters = () => {
    const [images, setImages] = useState(recruiters);

    useEffect(() => {
        const interval = setInterval(() => {
            setImages((prevImages) => {
                const updated = [...prevImages];

                // Pick two different random indexes
                const i1 = Math.floor(Math.random() * updated.length);
                let i2 = Math.floor(Math.random() * updated.length);

                while (i2 === i1) {
                    i2 = Math.floor(Math.random() * updated.length);
                }

                // Swap ONLY two images (keeps uniqueness)
                const temp = updated[i1];
                updated[i1] = updated[i2];
                updated[i2] = temp;

                console.log(
                    `%cShuffled → Swapped: ${updated[i1].name} ↔ ${updated[i2].name}`,
                    "color: green; font-weight: bold;"
                );

                return updated;
            });
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    // Pyramid Pattern: [1, 3, 5, 7]
    const rows = [1, 3, 5, 7];

    let i = 0;
    return (
        <>
            <section className="bg-linear-to-br from-blue-50 to-indigo-50 p-8 md:p-12 border border-blue-100">
                <div className="text-center mb-8">
                    <h3 className="text-3xl font-semibold text-gray-900 mb-2">Our Esteemed Recruiters</h3>
                    <p className="text-gray-600">Leading companies trust Accurate graduates</p>
                </div>

                <div className="flex flex-col items-center gap-4 max-sm:hidden max-md:hidden">
                    {rows.map((count, rowIndex) => (
                        <div
                            key={rowIndex}
                            className="grid gap-4"
                            style={{
                                gridTemplateColumns: `repeat(${count}, minmax(0, 1fr))`,
                            }}
                        >
                            {[...Array(count)].map((_, col) => {
                                const recruiter = images[i % images.length];
                                i++;

                                return (
                                    <div
                                        key={col}
                                        className="bg-white rounded-xl p-3 shadow-sm border border-gray-100 flex justify-center items-center h-28 w-28 hover:shadow-md transition"
                                    >
                                        <Image
                                            src={recruiter.image}
                                            alt={recruiter.name}
                                            width={120}
                                            height={120}
                                            className="object-contain transition duration-300"
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
                {/* MOBILE + TABLET VIEW (sm & md) */}
                <div className="block lg:hidden">
                    <Swiper
                        modules={[Autoplay]}
                        autoplay={{ delay: 2000 }}
                        slidesPerView={3}
                        spaceBetween={20}
                        loop
                        breakpoints={{
                            0: { slidesPerView: 2 },
                            640: { slidesPerView: 3 },
                            768: { slidesPerView: 4 },
                        }}
                    >
                        {recruiters.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100 flex justify-center items-center h-24">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        width={90}
                                        height={90}
                                        className="object-contain"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </>
    );
};

export default OurRecruiters;
