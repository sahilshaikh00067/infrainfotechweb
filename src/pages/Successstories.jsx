import React, { useState, useEffect, useRef } from "react";

// Import your images
import ss1 from "../assets/Images/ss1.png";
import ss2 from "../assets/Images/ss2.png";
import ss3 from "../assets/Images/ss3.png";

const slides = [
    {
        logoText: "Apollo ADLUX HOSPITAL",
        logoColor: "#00b5ad",
        title: "Apollo Adlux Hospital: Building Patient Trust with Verified Messaging",
        desc: "Apollo Adlux Hospital enhanced patient communication using RCS Messaging to deliver appointment reminders and critical health alerts. Interactive reply buttons enabled patients to confirm or reschedule with a single tap, reducing no-shows and improving overall engagement and trust.",
        tags: ["Promotion", "HealthCare", "India"],
        image: ss1,
        stats: [
            { icon: "bar", value: "73%", label: "Open rate" },
            { icon: "donut", value: "3x", label: "Response Time for Rescheduling" },
            { icon: "curve", value: "40%", label: "Fewer Missed Appointments" },
        ],
    },
    {
        logoText: "◇ RENAULT",
        logoColor: "#0059db",
        title: "Renault: Boosting Engagement with Interactive RCS Campaigns",
        desc: "Renault leveraged RCS Messaging to promote new vehicle launches through immersive carousels featuring high-quality visuals and feature highlights. Integrated call-to-action buttons allowed customers to instantly book test drives or request more information, resulting in a noticeable increase in inquiries and showroom visits.",
        tags: ["Promotion", "Automobile", "India"],
        image: ss2,
        stats: [
            { icon: "bar", value: "45%", label: "Showroom visits" },
            { icon: "donut", value: "2.8x", label: "Engagement rate vs SMS" },
            { icon: "curve", value: "60%", label: "Test drive bookings" },
        ],
    },
    {
        logoText: "KALYAN SILKS",
        logoColor: "#c0392b",
        title: "Kalyan Silks: Personalized Shopping with RCS Messaging",
        desc: "Kalyan Silks used RCS Messaging to share personalized festive offers and style recommendations with their customer base. Rich media formats and instant purchase buttons created a seamless shopping experience, boosting conversions and encouraging repeat purchases.",
        tags: ["Promotion", "Retail", "India"],
        image: ss3,
        stats: [
            { icon: "bar", value: "73%", label: "Higher click-through rate" },
            { icon: "donut", value: "3.5x", label: "More conversions vs SMS" },
            { icon: "curve", value: "38%", label: "Repeat purchases" },
        ],
    },
];

// SVG stat icons
function BarIcon() {
    return (
        <svg width="76" height="70" viewBox="0 0 36 36" fill="none">
            <rect x="2" y="22" width="7" height="10" rx="1" fill="#7bb8e8" />
            <rect x="12" y="14" width="7" height="18" rx="1" fill="#56a1db" />
            <rect x="22" y="6" width="7" height="26" rx="1" fill="#388dcf" />
        </svg>
    );
}

function DonutIcon() {
    return (
        <svg width="76" height="66" viewBox="0 0 36 36" fill="none">
            <circle cx="18" cy="18" r="14" stroke="#83bae6" strokeWidth="6" fill="none" />
            <path
                d="M18 4 A14 14 0 0 1 32 18"
                stroke="#388dcf"
                strokeWidth="6"
                fill="none"
                strokeLinecap="round"
            />
        </svg>
    );
}

function CurveIcon() {
    return (
        <svg width="76" height="66" viewBox="0 0 36 36" fill="none">
            <path
                d="M4 28 C10 28, 12 18, 18 14 C24 10, 28 8, 32 4"
                stroke="#388dcf"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
            />
            <circle cx="32" cy="4" r="3" fill="#388dcf" />
        </svg>
    );
}

function StatIcon({ type }) {
    if (type === "bar") return <BarIcon />;
    if (type === "donut") return <DonutIcon />;
    return <CurveIcon />;
}

export default function SuccessStories() {
    const [current, setCurrent] = useState(0);
    const [animating, setAnimating] = useState(false);
    const [direction, setDirection] = useState("next");
    const timeoutRef = useRef(null);

    const goTo = (idx, dir = "next") => {
        if (animating) return;
        setDirection(dir);
        setAnimating(true);
        setTimeout(() => {
            setCurrent(idx);
            setAnimating(false);
        }, 400);
    };

    const prev = () => goTo((current - 1 + slides.length) % slides.length, "prev");
    const next = () => goTo((current + 1) % slides.length, "next");

    // Auto-play
    useEffect(() => {
        timeoutRef.current = setTimeout(() => next(), 4000);
        return () => clearTimeout(timeoutRef.current);
    }, [current]);

    const slide = slides[current];

    return (
        <section
            className="w-full overflow-hidden"
            style={{
                background: "linear-gradient(135deg, #f0f9ff 0%, #dbeafe 50%, #bfdbfe 100%)"
            }}        >
            {/* MAIN CONTENT */}
            <div
                className="max-w-7xl mx-auto px-8 md:px-16 pt-16 pb-8"
                style={{
                    opacity: animating ? 0 : 1,
                    transform: animating
                        ? direction === "next"
                            ? "translateX(-40px)"
                            : "translateX(40px)"
                        : "translateX(0)",
                    transition: "opacity 0.4s ease, transform 0.4s ease",
                }}
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* LEFT */}
                    <div>
                        {/* TAG */}
                        <span className="inline-block px-4 py-1.5 bg-[#dbe8f8] text-[#4079ad] font-semibold uppercase tracking-wide text-[15px] rounded-sm">
                            Success Stories
                        </span>

                        {/* LOGO TEXT */}
                        <div className="mt-5 mb-2">
                            <span
                                className="text-xl font-bold tracking-wide"
                                style={{ color: slide.logoColor }}
                            >
                                {slide.logoText}
                            </span>
                        </div>

                        {/* TITLE */}
                        <h2 className="text-3xl md:text-4xl font-semibold text-black leading-tight mt-4">
                            {slide.title}
                        </h2>

                        {/* DESC */}
                        <p className="mt-6 text-gray-800 text-[17px] leading-relaxed">
                            {slide.desc}
                        </p>

                        {/* TAGS */}
                        <div className="flex flex-wrap gap-3 mt-6">
                            {slide.tags.map((t, i) => (
                                <span
                                    key={i}
                                    className="px-4 py-1.5 rounded-full border border-gray-400 text-gray-700 text-sm font-medium bg-white/60"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="relative flex justify-center items-center">
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="w-full max-w-xl object-cover  shadow-xl"
                            style={{ maxHeight: "390px" }}
                        />
                    </div>
                </div>
            </div>

            {/* STATS BAR */}
            <div
                className="mx-8 md:mx-16 mt-5 rounded-3xl px-9 py-9"
                style={{
                    background: "#b3cbf2",
                    opacity: animating ? 0 : 1,
                    transition: "opacity 0.4s ease",
                }}
            >
                <div className="grid grid-cols-3 gap-4">
                    {slide.stats.map((stat, i) => (
                        <div key={i} className="flex items-center gap-4">
                            <StatIcon type={stat.icon} />
                            <div>
                                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                                <div className="text-gray-600 text-sm mt-0.5">{stat.label}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* NAVIGATION */}
            <div className="max-w-7xl mx-auto px-8 md:px-16 py-6 flex items-center justify-between">
                {/* DOTS */}
                <div className="flex gap-2">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => goTo(i, i > current ? "next" : "prev")}
                            className="rounded-full transition-all duration-300"
                            style={{
                                width: i === current ? "28px" : "10px",
                                height: "12px",
                                background: i === current ? "#177ec3" : "#ach8a0",
                            }}
                        />
                    ))}
                </div>

                {/* ARROWS */}
                <div className="flex gap-3">
                    <button
                        onClick={prev}
                        className="w-11 h-11 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:bg-gray-100 transition-all duration-200 shadow-sm"
                    >
                        <span className="text-gray-600 text-lg">←</span>
                    </button>
                    <button
                        onClick={next}
                        className="w-11 h-11 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:bg-gray-100 transition-all duration-200 shadow-sm"
                    >
                        <span className="text-gray-600 text-lg">→</span>
                    </button>
                </div>
            </div>
        </section>
    );
}