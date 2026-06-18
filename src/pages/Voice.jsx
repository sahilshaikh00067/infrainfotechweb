import React, { useEffect, useRef, useState } from 'react'
import { Link } from "react-router-dom";
import voice1 from "../assets/Images/voice1.png";
import voice2 from "../assets/Images/voice2.png";
import voice3 from "../assets/Images/voice3.png";
import voice4 from "../assets/Images/voice4.png";
import voice5 from "../assets/Images/voice5.png";
import voice6 from "../assets/Images/voice6.png";
import voice7 from "../assets/Images/voice7.png";
import voice8 from "../assets/Images/voice8.png";
import voice9 from "../assets/Images/voice9.png";
import voice10 from "../assets/Images/voice10.png";
import voice11 from "../assets/Images/voice11.png";
import voice12 from "../assets/Images/voice12.png";
import voice13 from "../assets/Images/voice13.png";
import voice14 from "../assets/Images/voice14.png";
import voice15 from "../assets/Images/voice15.png";
import voice16 from "../assets/Images/voice16.png";
import voice17 from "../assets/Images/voice17.png";
import voice18 from "../assets/Images/voice18.png";
import voice19 from "../assets/Images/voice19.png";
import bulksms17 from "../assets/Images/bulksms17.png";
import bulksms18 from "../assets/Images/bulksms18.png";
import bulksms19 from "../assets/Images/bulksms19.png";
import bulksms20 from "../assets/Images/bulksms20.png";
import bulksms21 from "../assets/Images/bulksms21.png";
import bulksms22 from "../assets/Images/bulksms22.png";
import BookMeeting from './Bookmeeting';

const features = [
    { title: "Voice Broadcast Service", image: voice7 },
    { title: "User-Friendly Panel", image: voice8 },
    { title: "Multiple Languages", image: voice9 },
    { title: "24/7 Support Team", image: voice10 },
    { title: "Easy to Configure", image: voice11 },
    { title: "Fast Onboarding", image: voice12 },
    { title: "Pay Only for Answered Calls", image: voice13 },
    { title: "Schedule Voice Campaign", image: voice14 },
    { title: "24/7 Support Team", image: voice15 },
    { title: "Quick tracking", image: voice16 },
    { title: "High delivery rate", image: voice17 },
    { title: "Personalized messages", image: voice18 },
];

const solutions = [
    { title: "Voice Call Campaigns", image: voice3 },
    { title: "DTMF Voice Call", image: voice4 },
    { title: "IVR Solutions", image: voice5 },
    { title: "Voice Call API", image: voice6 },
];

const industries = [
    {
        image: bulksms17,
        title: "Retail",
        description:
            "Enhance customer engagement with promotional offers, booking confirmations, payment alerts, login verifications, order status updates, and loyalty campaigns—all via instant SMS.",
    },
    {
        image: bulksms18,
        title: "Finance",
        description:
            "Securely communicate OTPs, due reminders, payment confirmations, transaction alerts, policy updates, and customer service notifications for banks, NBFCs, and fintech platforms.",
    },
    {
        image: bulksms19,
        title: "HR",
        description:
            "Simplify internal communication with SMS reminders for interviews, meeting schedules, HR announcements, staff updates, onboarding steps, and employee engagement initiatives.",
    },
    {
        image: bulksms20,
        title: "Education",
        description:
            "Keep parents, students, and staff informed with exam notifications, fee reminders, class schedules, result updates, and emergency alerts via reliable SMS broadcasts.",
    },
    {
        image: bulksms21,
        title: "Associations",
        description:
            "Send timely updates on meetings, event invites, member announcements, reminders, voting info, and general notices to all members in seconds—ensuring active engagement.",
    },
    {
        image: bulksms22,
        title: "Sporting Clubs",
        description:
            "Manage events and communication with updates on match schedules, training sessions, announcements, membership renewals, and alerts—all through automated SMS flows.",
    },
];

const loopedSolutions = [...solutions, ...solutions, ...solutions];

export default function Voice() {
    const [hovered, setHovered] = useState(null);
    const trackRef = useRef(null);
    const [openIndex, setOpenIndex] = useState(0);

    const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;
        const pause = () => track.style.animationPlayState = "paused";
        const resume = () => track.style.animationPlayState = "running";
        track.addEventListener("mouseenter", pause);
        track.addEventListener("mouseleave", resume);
        track.addEventListener("touchstart", pause);
        track.addEventListener("touchend", resume);
        return () => {
            track.removeEventListener("mouseenter", pause);
            track.removeEventListener("mouseleave", resume);
            track.removeEventListener("touchstart", pause);
            track.removeEventListener("touchend", resume);
        };
    }, []);

    return (
        <>
            <style>{`
                @keyframes marquee {
                    0%   { transform: translateX(0); }
                    100% { transform: translateX(-33.333%); }
                }
                .marquee-track {
                    animation: marquee 30s linear infinite;
                }
            `}</style>

            {/* ===== HERO ===== */}
            <section className="px-2 md:px-6 py-6 md:py-11">
                <div className="max-w-7xl mx-15 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-[42px] font-semibold text-black leading-tight mb-4">
                            Bulk Voice Call Service Provider
                        </h1>
                        <p className="text-gray-700 text-lg leading-relaxed mb-8">
                            As a leading Bulk Voice Call Service Provider, we help you easily create and deliver automated voice calls for alerts, reminders, promotions, election campaigns, special offers, and customer surveys — all through a simple, user-friendly platform.
                        </p>
                        <div className="mt-5">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-3 px-6 py-2 rounded-sm bg-[#307eba] text-white font-semibold hover:bg-blue-500 transition-all duration-300 shadow-lg"
                            >
                                Schedule a Meeting
                                <span className="text-xl">→</span>
                            </Link>
                        </div>
                    </div>
                    <div className="w-full">
                        <img
                            src={voice1}
                            alt="Bulk Voice Call Service Provider"
                            className="w-full h-[400px] md:h-[400px] object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* ===== HOW BUSINESSES USE AUTOMATED VOICE CALLS ===== */}
            <section className="bg-[#e5f0f7] px-6 md:px-16 py-16 md:py-24">
                <div className="max-w-7xl mx-15 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="w-full flex justify-center">
                        <img
                            src={voice2}
                            alt="Automated Voice Calls"
                            className="w-full max-w-[520px] h-auto object-contain"
                        />
                    </div>
                    <div>
                        <h2 className="text-[35px] font-semibold text-gray-900 leading-tight mb-6">
                            How Businesses Use Automated Voice Calls
                        </h2>
                        <p className="text-gray-700 text-[17px] mb-8">
                            Bulk voice call service help businesses engage customers through surveys, offers, reminders, lead
                            generation, and confirmations. They are also ideal for election campaigns and sending personalised
                            greetings—delivering a human touch that boosts response and retention.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 px-7 py-3 rounded-md bg-[#307eba] text-white font-semibold hover:bg-blue-900 transition-all duration-300"
                        >
                            Know More
                            <span className="text-lg">›</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* ===== AUTO SLIDER ===== */}
            <section className="py-6 md:py-12 overflow-hidden bg-white">
                <div className="max-w-9xl mx-15 mb-10 px-2 md:px-11">
                    <h2 className="text-2xl md:text-4xl pb-10 font-semibold text-center">
                        How Brands Use Voice Calls to Engage Customers
                    </h2>
                </div>

                <div className="relative">
                    <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
                    <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

                    <div className="overflow-hidden">
                        <div
                            ref={trackRef}
                            className="flex gap-8 w-max marquee-track"
                        >
                            {loopedSolutions.map((solution, index) => (
                                <div
                                    key={`${solution.title}-${index}`}
                                    className="shrink-0 w-[450px] md:w-[440px] bg-gradient-to-br from-[#daebf5] via-[#badcee] to-[#81aec8] rounded-2xl p-20 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                                >
                                    <h3 className="text-[29px] text-center font-semibold text-gray-900 mb-5">
                                        {solution.title}
                                    </h3>
                                    <div className=" ml-[-55px] flex justify-center w-99">
                                        <img
                                            src={solution.image}
                                            alt={solution.title}
                                            className="w-full max-w-[5000px] h-[420px] object-contain"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white px-2 md:px-6 py-6 md:py-11">
                <div className="max-w-8xl mx-15">
                    <h2 className="text-2xl md:text-4xl font-semibold text-gray-500 text-center mb-14">
                        Features of Our Bulk Voice Call Service
                    </h2>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                        {features.map((feature, i) => (
                            <div
                                key={i}
                                onMouseEnter={() => setHovered(i)}
                                onMouseLeave={() => setHovered(null)}
                                className={`flex flex-col items-center text-center px-3 py-6 rounded-2xl cursor-pointer transition-all duration-300 ${hovered === i
                                    ? "bg-white shadow-2xl scale-105"
                                    : "bg-transparent hover:bg-white hover:shadow-lg"
                                    }`}
                            >
                                {/* Green circle icon */}
                                <div className="rounded-full bg-blue-100 flex items-center justify-center mb-5 flex-shrink-0">
                                    <img
                                        src={feature.image}
                                        alt={feature.title}
                                        className="w-23 h-23 object-contain"
                                    />
                                </div>
                                <p className="text-gray-700 text-[15px] font-medium leading-snug">
                                    {feature.title}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-[#d3e2f0] px-6 md:px-16 py-16 md:py-24">
                <div className="max-w-7xl mx-15 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* ===== LEFT: TEXT ===== */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight mb-8">
                            How Voice Calls Benefit Your Business
                        </h2>
                        <p className="text-gray-700 text-[17px] leading-relaxed mb-8">
                            Automated voice calls help you connect with customers in real-time for reminders,
                            promotions, confirmations, and feedback. They improve engagement, reduce manual
                            work, and ensure your message is delivered clearly and instantly.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#1c7eaf] text-white font-semibold hover:bg-[#116894] transition-all duration-300"
                        >
                            Know More
                            <span className="text-lg">›</span>
                        </Link>
                    </div>

                    {/* ===== RIGHT: IMAGE with green shadow card ===== */}
                    <div className="relative flex justify-center items-center">
                        {/* green shadow/border behind image */}
                        <div className="absolute top-4 right-4 w-full h-full rounded-2xl" />
                        <img
                            src={voice19}
                            alt="How Voice Calls Benefit Your Business"
                            className="relative z-10 w-full max-w-[580px] h-[420px] object-cover rounded-2xl shadow-lg"
                        />
                    </div>

                </div>
            </section>

            <section className="bg-white py-16">
                <div className="max-w-8xl mx-15 px-6 lg:px-8">

                    {/* Heading */}
                    <h2 className="text-4xl md:text-3xl font-medium text-center text-black mb-16">

                        Industries Leveraging Our Bulk Voice Call Solutions
                    </h2>

                    {/* Cards Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {industries.map((item, index) => (
                            <div
                                key={index}
                                className="bg-[#eef7fc] rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300"
                            >
                                {/* Image */}
                                <div className="mb-6">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-17 h-17 object-contain"
                                    />
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-semibold text-[#0f172a] mb-4">
                                    {item.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
            <BookMeeting />





        </>
    );
}