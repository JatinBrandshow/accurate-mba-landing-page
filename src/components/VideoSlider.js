"use client";

import React, { useState, useEffect } from "react";
import { Play, X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const shortsLinks = [
    "https://youtube.com/shorts/MfaVrr8KrPg",
    "https://youtube.com/shorts/xf9z1-RJaYI",
    "https://youtube.com/shorts/wwIxxmHOjHk",
    "https://youtube.com/shorts/SFUSa-q0Cnc",
    "https://youtube.com/shorts/VuGbpla3-zE",
    "https://youtube.com/shorts/stKZC8zAXw0",
    "https://youtube.com/shorts/v9Uv3al-Jvg",
    "https://youtu.be/6Rr4wHVSnf4?si=0fDKPYs373B0IvgH",
];

const videos = shortsLinks.map((url, index) => {
    let id;
    if (url.includes("/shorts/")) {
        id = url.split("/shorts/")[1].split("?")[0];
    } else if (url.includes("youtu.be/")) {
        id = url.split("youtu.be/")[1].split("?")[0];
    }
    return {
        id: index,
        link: `https://www.youtube.com/embed/${id}`,
        thumbnail: `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
    };
});

const VideoSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [activeVideo, setActiveVideo] = useState(null);
    const [direction, setDirection] = useState(0);

    useEffect(() => {
        if (activeVideo) return;

        const interval = setInterval(() => {
            setDirection(1);
            setCurrentSlide((prev) => (prev + 1) % videos.length);
        }, 5000); // Increased to 5s for better experience

        return () => clearInterval(interval);
    }, [activeVideo, currentSlide]); // Reset timer when slide changes manually

    const paginate = (newDirection) => {
        setDirection(newDirection);
        if (newDirection === 1) {
            setCurrentSlide((prev) => (prev + 1) % videos.length);
        } else {
            setCurrentSlide((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
        }
    };

    const SIDE_COUNT = 4;
    const leftVideos = videos.slice(0, SIDE_COUNT);
    const rightVideos = videos.slice(SIDE_COUNT, SIDE_COUNT * 2);

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? "100%" : "-100%",
            opacity: 0,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? "100%" : "-100%",
            opacity: 0,
        }),
    };
    return (
        <>
            {/* VIDEO MODAL */}
            <AnimatePresence>
                {activeVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
                    >
                        <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            className="relative"
                        >
                            <iframe
                                className="w-75 h-133 md:w-200 md:h-112 rounded-2xl shadow-2xl"
                                src={`${activeVideo}?autoplay=1`}
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                            />
                            <button
                                onClick={() => setActiveVideo(null)}
                                className="absolute -top-10 right-0 md:-right-10 bg-white p-2 rounded-full"
                            >
                                <X />
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <section className="py-20 bg-linear-to-br from-slate-950 via-blue-950 to-slate-950 overflow-hidden">
                <h2 className="text-center text-5xl font-bold text-white mb-14">Life at Accurate</h2>

                <div className="max-w-7xl mx-auto flex items-center gap-6 px-4">
                    {/* LEFT THUMBNAILS */}
                    <div className="hidden md:flex w-56 h-87.5 flex-col justify-center gap-4">
                        {leftVideos.map((video, index) => {
                            const isActive = currentSlide === index;
                            return (
                                <button
                                    key={video.id}
                                    onClick={() => {
                                        setDirection(index > currentSlide ? 1 : -1);
                                        setCurrentSlide(index);
                                    }}
                                    className={`relative h-20 rounded-xl overflow-hidden transition-all duration-300
                    ${isActive ? "ring-4 ring-blue-500 scale-105" : "opacity-60 hover:opacity-100"}`}
                                >
                                    <img src={video.thumbnail} className="w-full h-full object-cover" alt="" />
                                </button>
                            );
                        })}
                    </div>

                    {/* MAIN SLIDER */}
                    <div className="relative w-full max-w-4xl h-87.5 rounded-3xl overflow-hidden shadow-2xl bg-black">
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.div
                                key={currentSlide}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 200, damping: 30 },
                                    opacity: { duration: 0.4 },
                                }}
                                className="absolute inset-0"
                            >
                                <img
                                    src={videos[currentSlide].thumbnail}
                                    className="w-full h-full object-cover"
                                    alt=""
                                />

                                <div
                                    onClick={() => setActiveVideo(videos[currentSlide].link)}
                                    className="absolute inset-0 flex items-center justify-center cursor-pointer"
                                >
                                    <div className="bg-white rounded-full p-6 shadow-xl hover:scale-110 transition-transform">
                                        <Play className="w-10 h-10 text-blue-600 fill-blue-600 ml-1" />
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* ARROWS */}
                        <button
                            onClick={() => paginate(-1)}
                            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-colors border border-white/20"
                        >
                            <ChevronLeft />
                        </button>

                        <button
                            onClick={() => paginate(1)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-colors border border-white/20"
                        >
                            <ChevronRight />
                        </button>
                    </div>

                    {/* RIGHT THUMBNAILS */}
                    <div className="hidden md:flex w-56 h-87.5 flex-col justify-center gap-4">
                        {rightVideos.map((video, index) => {
                            const actualIndex = index + SIDE_COUNT;
                            const isActive = currentSlide === actualIndex;

                            return (
                                <button
                                    key={video.id}
                                    onClick={() => {
                                        setDirection(actualIndex > currentSlide ? 1 : -1);
                                        setCurrentSlide(actualIndex);
                                    }}
                                    className={`relative h-20 rounded-xl overflow-hidden transition-all duration-300
                    ${isActive ? "ring-4 ring-blue-500 scale-105" : "opacity-60 hover:opacity-100"}`}
                                >
                                    <img src={video.thumbnail} className="w-full h-full object-cover" alt="" />
                                </button>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};

export default VideoSlider;
