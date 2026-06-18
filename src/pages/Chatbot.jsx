import React, { useState } from "react";
import chatbot1 from "../assets/Images/chatbot1.webp";
import { Link } from "react-router-dom";
import chatbot2 from "../assets/Images/chatbot2.png";
import chatbot3 from "../assets/Images/chatbot3.svg";
import chatbot4 from "../assets/Images/chatbot4.svg";
import chatbot5 from "../assets/Images/chatbot5.svg";
import chatbot6 from "../assets/Images/chatbot6.svg";
import chatbot7 from "../assets/Images/chatbot7.svg";
import chatbot8 from "../assets/Images/chatbot8.svg";
import chatbot9 from "../assets/Images/chatbot9.webp";
import chatbot10 from "../assets/Images/chatbot10.png";
import chatbot11 from "../assets/Images/chatbot11.png";
import chatbot12 from "../assets/Images/chatbot12.png";
import chatbot13 from "../assets/Images/chatbot13.png";
import chatbot14 from "../assets/Images/chatbot14.png";
import chatbot15 from "../assets/Images/chatbot15.webp";
import chatbot16 from "../assets/Images/chatbot16.webp";
import BookMeeting from "./Bookmeeting";

/* ── BG COLOURS (blue theme) ─────── */
const BG_LIGHT = "#e9f7fc";   // section alternate bg
const BTN_COLOR = "#307eba";   // primary button

/* ── industries accordion data ──────────────────────────────────────── */
const industries = [
    {
        title: "E-commerce",
        image: chatbot14,
        desc: "Send personalised product recommendations, cart reminders, order confirmations, and shipping updates. Let customers browse catalogues, place orders, and make payments — all within WhatsApp.",
    },
    {
        title: "Sales and Marketing",
        image: chatbot10,
        desc: "Automate lead qualification, run drip campaigns, share offers, and follow up with prospects. Drive conversions through interactive WhatsApp conversations powered by your chatbot.",
    },
    {
        title: "Customer Service",
        image: chatbot11,
        desc: "Handle FAQs, raise support tickets, and resolve complaints 24/7. Seamlessly hand off complex queries from bot to live agent without losing conversation context.",
    },
    {
        title: "Booking and scheduling",
        image: chatbot12,
        desc: "Let customers book appointments, check availability, confirm slots, and receive reminders — all automated via WhatsApp without calling or visiting your website.",
    },
    {
        title: "Education and resources",
        image: chatbot13,
        desc: "Share study materials, course details, admission info, and exam schedules. Enroll students, send batch updates, and answer queries instantly through your WhatsApp chatbot.",
    },
];

const chatbotFeatures = [
    {
        image: chatbot3,
        title: "24/7 Customer Service",
        description:
            "A WhatsApp Chatbot offers instant, 24/7 customer support—helping users get the answers they need without delays or human involvement.",
    },
    {
        image: chatbot4,
        title: "Cost Savings & Operational Efficiency",
        description:
            "WhatsApp Chatbots cut costs by automating routine tasks and handling high volumes of queries, allowing your support team to focus on complex issues that truly need human attention.",
    },
    {
        image: chatbot5,
        title: "CRM Integration",
        description:
            "Easily sync chatbot data with your CRM or sales system for better lead tracking, follow-ups, and campaign automation.",
    },
    {
        image: chatbot6,
        title: "Personalization",
        description:
            "WhatsApp Chatbots can be programmed to provide personalized responses to customers based on their past behavior and preferences.",
    },
    {
        image: chatbot7,
        title: "Gathering Customer Insights",
        description:
            "By analyzing the queries and feedback received by chatbots, businesses can gather valuable insights about their customers.",
    },
    {
        image: chatbot8,
        title: "Multi-language Support",
        description:
            "Chatbots can converse in multiple languages, helping you reach a broader audience and serve diverse customer bases effortlessly.",
    },
];

/* ── craft checklist ─────────────────────────────────────────────────── */
const craftPoints = [
    "Drag-and-drop flow builder",
    "Multiple chatbots on a single number",
    "Fully or partially automated with agent handover after bot flow",
    "Ready-to-use templates for common use cases, industries, and more",
    "Integrate with ERP/Software using connect API",
    "Expanded AI capabilities on demand",
];

const CheckIcon = () => (
    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#307eba] flex items-center justify-center mt-0.5">
        <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
    </span>
);

export default function Chatbot() {
    const [activeIndustry, setActiveIndustry] = useState(0);

    return (
        <>
            <style>{`
        @keyframes chatFadeIn {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

            {/* ══ HERO ═══════════════════════════════════════════════════════════ */}
            <section className="bg-white px-2 md:px-15 py-6 md:py-11">
                <div className="max-w-8xl mx-15 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-3xl md:text-[42px] font-medium text-gray-900 leading-tight mb-6">
                            The Ultimate WhatsApp Chatbot for Your Business
                        </h1>
                        <p className="text-gray-700 text-[17px] leading-relaxed mb-6">
                            Looking to automate customer conversations on WhatsApp for your business? Our WhatsApp Chatbot is the perfect solution.
                            With GreenAds Global's no-code platform, you can build and launch a powerful WhatsApp Chatbot—within just 5 minutes.
                        </p>
                        <p className="text-gray-700 text-[19px] font-medium leading-relaxed mb-6">
                            ‍Start your free trial today and transform the way your business communicates.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-3 px-6 py-1 rounded-md text-white font-semibold hover:opacity-90 transition-all duration-300 w-fit"
                            style={{ backgroundColor: BTN_COLOR }}
                        >
                            <span className="text-lg">◆</span>
                            Start a free trial
                        </Link>
                    </div>
                    <div className="w-full max-w-[550px]">
                        <img
                            src={chatbot1}
                            alt="WhatsApp Chatbot"
                            className="w-full h-auto object-cover rounded-2xl"
                        />
                    </div>
                </div>
            </section>

            {/* ══ SECTION 1 — HOW TO BUILD ═══════════════════════════════════════ */}
            <section className="px-2 md:px-12 py-6 md:py-12" style={{ backgroundColor: BG_LIGHT }}>
                <div className="max-w-8xl mx-15 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* RIGHT steps */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                            What is a WhatsApp Chatbot
                        </h2>
                        <p className="text-gray-600 text-[14px] leading-relaxed mb-4">
                            A WhatsApp chatbot is a software application that uses rule-based logic and AI to simulate human
                            conversations with users on WhatsApp.
                            It operates through the official
                            <a href="/contact" className="underline underline-offset-1 text-[15px] hover:opacity-50" style={{ color: BTN_COLOR }}>
                                Whatsapp Business API,
                            </a>
                            allowing businesses to engage, support, and sell to their customers directly on their favorite messaging app.
                        </p>

                        <div className="text-gray-600 text-[14px] leading-relaxed mb-4">
                            <p>
                                At its core, the chatbot is designed to understand customer questions and provide instant, automated responses.
                                This can range from simple, pre-programmed answers for frequently asked questions (FAQs) to complex,
                                AI-driven conversations that use Natural Language Processing (NLP) to understand intent and context.
                                Think of it as a tireless digital support agent, lead qualifier, and salesperson working for you 24/7.
                            </p>




                            <p className="text-gray-600 text-[14px] leading-relaxed mb-2 mt-4">
                                By automating these interactions, businesses can reduce manual workload, improve response times,
                                and provide a seamless customer experience—all through the world’s most-used messaging app.
                            </p>
                        </div>

                        <div className="mt-8">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 px-5 py-1 font-normal rounded-md text-white hover:opacity-90 transition-all duration-300"
                                style={{ backgroundColor: BTN_COLOR }}
                            >
                                Start your free trial
                                <span className="text-lg">›</span>
                            </Link>
                        </div>
                    </div>
                    {/* LEFT image */}
                    <div className="w-full mt-12 ">
                        <img
                            src={chatbot2}
                            alt="WhatsApp Chatbot Builder"
                            className="w-full max-w-[540px] h-auto object-contain rounded-2xl"
                        />
                    </div>
                </div>
            </section>

            <section className="bg-white px-2 md:px-15 py-6 md:py-11">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">

                    {/* Badge */}
                    <div className="text-center mb-8">
                        <span className="inline-block bg-[#d9eaef] text-[#2d689f] px-2 py-1 text-[12px] font-medium uppercase tracking-wide">
                            No-Code WhatsApp Chatbot Building Platform
                        </span>
                    </div>

                    {/* Heading */}
                    <h2 className="text-4xl lg:text-4xl font-medium text-center text-black mb-20">
                        How WhatsApp Chatbots Help Your Business Grow
                    </h2>

                    {/* Features */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-5">
                        {chatbotFeatures.map((item, index) => (
                            <div
                                key={index}
                                className="text-center group"
                            >
                                {/* Image */}
                                <div className="flex justify-center mb-2">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-12 h-12 md:w-24 md:h-15 object-contain transition-transform duration-300 group-hover:scale-110"
                                    />
                                </div>

                                {/* Title */}
                                <h3 className="text-[15px] font-semibold text-[#111827] mb-5">
                                    {item.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 leading-relaxed text-[12px]">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* ══ SECTION 3 — MULTIPLE KEYWORDS ══════════════════════════════════ */}
            <section className="px-2 md:px-12 py-6 md:py-11" style={{ backgroundColor: BG_LIGHT }}>
                <div className="max-w-7xl mx-15 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* LEFT image */}
                    <div className="w-full flex justify-center mt-25">
                        <img
                            src={chatbot9}
                            alt="WhatsApp Chatbot Builder"
                            className="w-full max-w-[580px] h-auto object-contain rounded-2xl"
                        />
                    </div>

                    {/* RIGHT steps */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                            How to Build a WhatsApp Chatbot
                        </h2>
                        <p className="text-gray-600 text-[16px] leading-relaxed mb-6">
                            At GreenAds Global, we make it easy for you to build a powerful WhatsApp Chatbot using
                            our no-code{" "}
                            <a href="#" className="underline underline-offset-2 hover:opacity-80" style={{ color: BTN_COLOR }}>
                                Telinfy platform
                            </a>
                            . Whether you are collecting leads, sharing product info, or providing instant customer
                            support — you can do it all in minutes.
                        </p>
                        <p className="text-gray-700 font-medium mb-5">Here's how it works</p>

                        <div className="flex flex-col gap-5 text-[15px] leading-relaxed text-gray-700">
                            <div>
                                <span className="font-semibold text-gray-900">Step 1: Select Your WhatsApp Channel : </span>
                                Log in to the Telinfy Platform and go to the Channels tab. Pick the WhatsApp account you want to build the bot for.
                            </div>
                            <div>
                                <span className="font-semibold text-gray-900">Step 2: Create a New Chatbot : </span>
                                Navigate to the Chatbots section and click Create Chatbot. Give it a name, Add trigger keywords — these are the words your customers type to activate the bot.
                            </div>
                            <div>
                                <span className="font-semibold text-gray-900">Step 3: Design the Chat Flow : </span>
                                Use our drag-and-drop editor to build conversations.
                                <div className="mt-3 flex flex-col gap-2 text-gray-600">
                                    <p>Add multiple types of nodes:</p>
                                    <p><span className="font-semibold text-gray-800">Text/Media Node : </span>Ask questions and collect answers (like name, location, etc.) Supports text, images, PDFs, videos.</p>
                                    <p><span className="font-semibold text-gray-800">Button Node: </span>Show up to 3 response options (like Yes / No / Learn More). Add a media header, custom message, and track replies using Variables.</p>
                                    <p><span className="font-semibold text-gray-800">List Node : </span>Let users pick from a list of services or products. Add sections and up to 10 options with descriptions.</p>
                                    <p><span className="font-semibold text-gray-800">Message Node: </span>Send media-rich messages to explain or respond with documents, images, or links.</p>
                                </div>
                            </div>
                            <div>
                                <span className="font-semibold text-gray-900">Step 4: Set Variables for Reports</span>
                                <p className="text-gray-600 mt-1">Want to track customer responses?</p>
                                <p className="text-gray-600">Use Variable Names for each input (e.g. customer_name, location).</p>
                                <p className="text-gray-600">These appear as column headers in your chatbot reports (Excel export).</p>
                            </div>
                            <div>
                                <span className="font-semibold text-gray-900">Step 5: Save, Export & Activate</span>
                                <p className="text-gray-600 mt-1">Click Save to finalise your bot.</p>
                                <p className="text-gray-600">Export your chatbot flow for backup or team review.</p>
                                <p className="text-gray-600">Go back to the Chatbots section and Activate your bot.</p>
                            </div>
                            <p className="font-semibold text-gray-900">You can even run multiple chatbots at the same time!</p>
                        </div>

                        <div className="mt-8">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 px-7 py-2 rounded-md text-white font-semibold hover:opacity-90 transition-all duration-300"
                                style={{ backgroundColor: BTN_COLOR }}
                            >
                                Build Your First Chatbot
                                <span className="text-lg">›</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══ SECTION 2 — INDUSTRIES ACCORDION ══════════════════════════════ */}
            <section className="bg-white px-6 md:px-16 py-16 md:py-24">
                <div className="max-w-7xl mx-15 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* LEFT accordion */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-10">
                            Industries Using Our WhatsApp Chatbot
                        </h2>
                        <div className="flex flex-col divide-y divide-gray-200">
                            {industries.map((item, i) => {
                                const isOpen = activeIndustry === i;
                                return (
                                    <div key={i}>
                                        <button
                                            onClick={() => setActiveIndustry(i)}
                                            className="w-full flex items-center justify-between py-5 text-left"
                                        >
                                            <span
                                                className="text-lg font-semibold transition-colors duration-200"
                                                style={{ color: BTN_COLOR, opacity: isOpen ? 1 : 0.8 }}
                                            >
                                                {item.title}
                                            </span>
                                            <span className={`text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}>
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <polyline points="6 9 12 15 18 9" />
                                                </svg>
                                            </span>
                                        </button>
                                        <div className={`overflow-hidden transition-all duration-400 ease-in-out ${isOpen ? "max-h-[300px] opacity-100 pb-5" : "max-h-0 opacity-0"}`}>
                                            <p className="text-gray-600 text-[15px] leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* RIGHT image */}
                    <div className="sticky top-24 flex justify-center">
                        <img
                            key={activeIndustry}
                            src={industries[activeIndustry].image}
                            alt={industries[activeIndustry].title}
                            className="w-full max-w-[460px] h-auto object-contain rounded-2xl"
                            style={{ animation: "chatFadeIn 0.4s ease-out" }}
                        />
                    </div>
                </div>
            </section>

            {/* ══ SECTION 4 — CRAFT CONVERSATION FLOWS ═══════════════════════════ */}
            <section className="bg-white px-6 md:px-16 py-16 md:py-24">
                <div className="max-w-7xl mx-15">
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-10">
                        WhatsApp Chatbot – Craft Conversation Flows in Seconds
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <p className="text-gray-600 text-[16px] leading-relaxed mb-8">
                                Automate WhatsApp Conversations, From lead generations to customer support—
                                everything handled through one easy whatsApp chatbot building platform,{" "}
                                <a href="#" className="underline underline-offset-2 hover:opacity-80" style={{ color: BTN_COLOR }}>telinfy</a>.
                            </p>
                            <ul className="flex flex-col gap-4">
                                {craftPoints.map((point, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <CheckIcon />
                                        <span className="text-[16px] leading-relaxed" style={{ color: BTN_COLOR }}>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex justify-center">
                            <img
                                src={chatbot15}
                                alt="Chatbot Flow Builder"
                                className="w-full max-w-[560px] h-auto object-contain rounded-2xl shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>


            {/* ══ SECTION 6 — CTA BANNER ══════════════════════════════════════════ */}
            <section className="bg-white px-2 md:px-6 pb-6 md:pb-12">
                <div className="max-w-7xl mx-15">
                    <div
                        className="rounded-3xl px-8 md:px-16 py-16 text-center"
                        style={{ backgroundColor: "#c8dff0" }}
                    >
                        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3">
                            Start building smart chatbots!
                        </h2>
                        <p className="text-gray-600 text-[16px] mb-8">
                            Build your first chatbot in two minutes!
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md text-white font-semibold hover:opacity-90 transition-all duration-300"
                            style={{ backgroundColor: BTN_COLOR }}
                        >
                            Sign-up now
                            <span className="text-lg">›</span>
                        </Link>
                    </div>
                </div>
            </section>
            <BookMeeting />
        </>
    );
}