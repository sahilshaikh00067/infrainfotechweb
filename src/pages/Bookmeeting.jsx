import React from "react";
import { Link } from "react-router-dom";
import meeting from "../assets/Images/meeting.png";

export default function BookMeeting() {
    return (
        <section
            className="w-full overflow-hidden relative"
            style={{ background: "#1a2b6b" }}
        >
            {/* GRID DOT PATTERN OVERLAY */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage:
                        "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* LEFT CONTENT */}
                <div>
                    <h2 className="text-4xl md:text-4xl font-semibold text-white leading-tight">
                        Book a One-to-One Meeting With Our Product Expert
                    </h2>

                    <p className="mt-6 text-gray-300 text-[17px] leading-relaxed max-w-lg">
                        Have questions? We have got answers! Connect with our product expert for a personalized
                        demo session and discover the best messaging solutions for your business.
                    </p>

                    {/* BUTTON */}
                    <div className="mt-10">
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-3 px-6 py-3 rounded-md bg-white text-gray-800 font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg text-sm"
                        >
                            {/* Microsoft Teams icon */}
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 7h-4V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2H4a1 1 0 00-1 1v10a1 1 0 001 1h16a1 1 0 001-1V8a1 1 0 00-1-1z" fill="#5059C9"/>
                                <circle cx="17" cy="5" r="3" fill="#7B83EB"/>
                                <path d="M10 7H8V5a2 2 0 012-2h2a2 2 0 012 2v2h-2" fill="#5059C9"/>
                                <rect x="9" y="11" width="6" height="5" rx="1" fill="#4B53BC"/>
                            </svg>
                            Book a Meeting
                        </Link>
                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="relative flex justify-center items-center">
                    <img
                        src={meeting}
                        alt="Book a Meeting"
                        className="w-full object-contain"
                        style={{ maxHeight: "500px" }}
                    />
                </div>

            </div>
        </section>
    );
}