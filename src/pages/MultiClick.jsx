import React, { useState } from "react";

import multic6 from "../assets/Images/multic6.png"; // WhatsApp
import multic7 from "../assets/Images/multic7.png"; // RCS
import multic8 from "../assets/Images/multic8.png"; // SMS

const MultiClick = () => {
    const [activeTab, setActiveTab] = useState("whatsapp");

    const channels = {
        whatsapp: {
            image: multic6,
            title: "Reach your audience instantly on WhatsApp",
            points: [
                {
                    heading: "Broadcasting",
                    text: "Send personalised promotional messages, alerts, and updates to thousands of customers on WhatsApp in one go.",
                },
                {
                    heading: "Chatbot",
                    text: "Automate replies on WhatsApp for tasks like order updates, appointment bookings, FAQs, and lead capture. Build smart chat flows with buttons, inputs, and conditions—no coding needed.",
                },
                {
                    heading: "Team Inbox",
                    text: "Manage all customer conversations in one shared WhatsApp inbox. Assign chats to team members, add internal notes, and reply faster.",
                },
                {
                    heading: "Developer API",
                    text: "Easily integrate WhatsApp into your website, app, CRM, or any existing system with our developer-friendly API.",
                },
            ],
        },

        rcs: {
            image: multic7,
            title: "Send rich, interactive messages via the native SMS inbox",
            points: [
                {
                    heading: "Rich Media Campaigns",
                    text: "Deliver visually engaging messages with high-quality images, carousels, and videos—directly inside your customer's SMS inbox.",
                },
                {
                    heading: "Google Verification Badge",
                    text: "Give your brand instant credibility with the Google-verified sender badge. Customers can trust your messages, knowing they come from an authenticated business.",
                },
                {
                    heading: "Trusted Branding",
                    text: "With RCS, your brand name, logo, and colours appear on every message—no random numbers, just trusted communication.",
                },
                {
                    heading: "Analytics",
                    text: "Track deliveries, reads, clicks, and actions in real-time. Optimise engagement with advanced analytics.",
                },
            ],
        },

        sms: {
            image: multic8,
            title: "The most trusted channel for delivering critical business messages",
            points: [
                {
                    heading: "Instant Delivery",
                    text: "Deliver your messages within seconds, no matter the scale. Our SMS gateway is optimised for speed and reliability.",
                },
                {
                    heading: "Promotional, Transactional & OTP Messages",
                    text: "Send promotional offers, OTPs, and alerts with ease. Our DLT-compliant platform supports all message types across telecom networks.",
                },
                {
                    heading: "Multiple Operator Connectivity",
                    text: "BSNL, Airtel, Vi, Jio",
                },
                {
                    heading: "Real Time Delivery Reports",
                    text: "Get real-time delivery insights with detailed reports. Track delivered and failed messages and optimise campaigns.",
                },
            ],
        },
    };

    const current = channels[activeTab];

    return (
        <section className="bg-white py-9 lg:py-14">
            <div className="max-w-8xl mx-15 px-2 lg:px-8">

                {/* Tabs */}
                <div className="flex justify-center lg:justify-start mb-4">
                    <div className="flex bg-white border border-gray-200 rounded-xl overflow-hidden">
                        <button
                            onClick={() => setActiveTab("whatsapp")}
                            className={`px-6 py-3 font-semibold transition-all duration-300 ${activeTab === "whatsapp"
                                ? "bg-[#0f587a] text-white"
                                : "bg-white text-gray-700 hover:bg-gray-50"
                                }`}
                        >
                            WhatsApp
                        </button>

                        <button
                            onClick={() => setActiveTab("rcs")}
                            className={`px-6 py-3 font-semibold transition-all duration-300 ${activeTab === "rcs"
                                ? "bg-[#0f587a] text-white"
                                : "bg-white text-gray-700 hover:bg-gray-50"
                                }`}
                        >
                            RCS
                        </button>

                        <button
                            onClick={() => setActiveTab("sms")}
                            className={`px-6 py-3 font-semibold transition-all duration-300 ${activeTab === "sms"
                                ? "bg-[#0f587a] text-white"
                                : "bg-white text-gray-700 hover:bg-gray-50"
                                }`}
                        >
                            SMS
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side */}
                    <div>
                        <h2 className="text-4xl md:text-4xl font-semibold text-[#0f587a] leading-tight mb-10">
                            {current.title}
                        </h2>

                        <div className="space-y-4">
                            {current.points.map((item, index) => (
                                <div key={index}>
                                    <h3 className="text-xl font-semibold text-[#515254c9] mb-2">
                                        ➤ {item.heading}
                                    </h3>

                                    <p className="text-gray-600 text-m leading-relaxed">
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side Image */}
                    <div className="flex justify-center">
                        <img
                            src={current.image}
                            alt={activeTab}
                            className="w-full max-w-[650px] object-contain transition-all duration-500"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default MultiClick;