import React, { useEffect, useRef, useState } from 'react'
import { Link } from "react-router-dom";
import bulksms1 from "../assets/Images/bulksms1.png";
import bulksms2 from "../assets/Images/bulksms2.png";
import bulksms3 from "../assets/Images/bulksms3.png";
import bulksms4 from "../assets/Images/bulksms4.png";
import bulksms5 from "../assets/Images/bulksms5.png";
import bulksms6 from "../assets/Images/bulksms6.png";
import bulksms7 from "../assets/Images/bulksms7.png";
import bulksms8 from "../assets/Images/bulksms8.png";
import bulksms9 from "../assets/Images/bulksms9.png";
import bulksms10 from "../assets/Images/bulksms10.png";
import bulksms11 from "../assets/Images/bulksms11.png";
import bulksms12 from "../assets/Images/bulksms12.png";
import bulksms13 from "../assets/Images/bulksms13.png";
import bulksms14 from "../assets/Images/bulksms14.png";
import bulksms15 from "../assets/Images/bulksms15.png";
import bulksms16 from "../assets/Images/bulksms16.png";
import bulksms17 from "../assets/Images/bulksms17.png";
import bulksms18 from "../assets/Images/bulksms18.png";
import bulksms19 from "../assets/Images/bulksms19.png";
import bulksms20 from "../assets/Images/bulksms20.png";
import bulksms21 from "../assets/Images/bulksms21.png";
import bulksms22 from "../assets/Images/bulksms22.png";
import callIcon from "../assets/Images/call.png";
import mailIcon from "../assets/Images/mail.png";
import bulksms23 from "../assets/Images/bulksms23.png";
import BookMeeting from './Bookmeeting';
import FAQ from './FAQ';


// Solutions slider data
const solutions = [
    {
        title: "Promotional Messages",
        image: bulksms2,
    },
    {
        title: "Authentication & Verification Messages",
        image: bulksms3,
    },
    {
        title: "Transactional Messages",
        image: bulksms4,
    },
    {
        title: "SMS Reminders",
        image: bulksms5,
    },
    {
        title: "SMS Notifications",
        image: bulksms6,
    },
];

const features = [
    {
        image: bulksms7,
        title: "Multiple Operator Connectivity",
        subtitle: "Idea, BSNL, Airtel, Vodafone, Jio",
    },
    {
        image: bulksms8,
        title: "Advanced Rabbitmq Queuing",
        subtitle: "For Scalable & Consistent Performance",
    },
    {
        image: bulksms9,
        title: "Real-Time Delivery Reports",
        subtitle: "Track Every Message with Live Delivery Insights",
    },
    {
        image: bulksms10,
        title: "Multi-Channel Failover Routing",
        subtitle: "Auto-route failed SMS via WhatsApp or RCS",
    },
];

const featuressms = [
    {
        image: bulksms11,
        title: "15 years experience",
        description:
            "Over a decade of reliable, results driven SMS delivery",
    },
    {
        image: bulksms12,
        title: "No Monthly Fees or Hidden Charges",
        description:
            "Pay only for what you use. No contracts. No expiry on your credits.",
    },
    {
        image: bulksms13,
        title: "Simple & Fast Setup",
        description:
            "Get started within 24 hours — no complex onboarding or technical steps.",
    },
    {
        image: bulksms14,
        title: "White-Label & Reseller Platform",
        description:
            "Offer SMS services under your own brand with full white-label access and a dedicated reseller dashboard.",
    },
    {
        image: bulksms15,
        title: "Free Trial",
        description:
            "Start with a free trial and explore the features before you commit.",
    },
    {
        image: bulksms16,
        title: "24/7 Expert Support",
        description:
            "Round-the-clock assistance for everything from DLT compliance to platform troubleshooting.",
    },
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

const checkpoints = [
    "Easily integrate SMS capabilities into your website, CRM, or app with our robust APIs and ready-to-use plugins.",
    "From retail to finance, our platform is used by businesses of all sizes to drive engagement and results.",
    "Easily launch campaigns with our intuitive interface—no technical expertise needed.",
    "Our high-speed delivery system ensures your messages reach users instantly, with live status tracking.",
    "Cost-Effective Plans That Fit Any Budget",
    "DLT assistance and round-the-clock support are included",
    "If an SMS fails, our system automatically retries via RCS to ensure your message still reaches the user",
    "Worldwide SMS Routing with Built-In Compliance and Optimised Delivery",
];


const faqs = [
    {
        question: "What is Bulk SMS?",
        answer: `Bulk SMS is a messaging service that allows businesses to send large volumes of SMS messages to multiple recipients at once. It is commonly used for marketing campaigns, alerts, OTPs, reminders, and customer notifications.

Unlike regular one-to-one texting, Bulk SMS enables you to reach hundreds or thousands of customers instantly through a secure and scalable platform.

Key Features:
• Send messages to thousands of numbers in seconds
• Works for promotional and transactional messaging
• Delivers to all mobile devices, even without internet
• Easily integrated with websites, CRMs, or mobile apps

Bulk SMS is widely used by businesses in e-commerce, finance, education, healthcare, logistics, and more to improve customer engagement and deliver time-sensitive information effectively.`,
    },

    {
        question: "Can I send bulk SMS for free?",
        answer: `Technically, no. While some platforms offer free trial credits, sending bulk SMS at scale always involves costs, especially for promotional or transactional messages through operator-approved routes.

Free methods often violate telecom regulations and can lead to message blocking or penalties. Always choose a licensed Bulk SMS provider to ensure compliance, delivery, and data security.`,
    },

    {
        question: "How can businesses benefit from Bulk SMS?",
        answer: `Bulk SMS offers several powerful advantages:

1. Instant Delivery
Messages are delivered within seconds.

2. High Open Rates
SMS boasts open rates of over 90%.

3. Cost-Effective Marketing
Low cost per message and high ROI.

4. Direct & Personal
Messages go directly to the customer inbox.

5. Easy Automation & Scheduling
Automate campaigns and trigger-based communication.

6. Wide Reach
Works on all mobile devices without internet.

7. Measurable Results
Track delivery and campaign performance with detailed reports.`,
    },

    {
        question: "Is Bulk SMS legal?",
        answer: `Yes, Bulk SMS is legal when used in compliance with telecom regulations and data privacy laws.

In India, businesses must:

• Register on DLT
• Obtain recipient consent
• Use approved sender IDs and templates
• Respect DND regulations

When used responsibly, Bulk SMS is a highly effective and lawful communication channel.`,
    },

    {
        question: "What industries benefit from Bulk SMS?",
        answer: `Bulk SMS is widely used across many industries:

• E-commerce & Retail
• Banking & Finance
• Healthcare
• Education
• Logistics & Transport
• Real Estate
• Hospitality
• Government & NGOs

It helps improve customer engagement, reduce no-shows, and deliver important information instantly.`,
    },

    {
        question: "How can I get started with bulk SMS for my business?",
        answer: `Getting started is simple:

1. Choose a trusted Bulk SMS provider like Infra Infotech.
2. Complete DLT registration.
3. Recharge your account.
4. Create approved templates.
5. Start sending campaigns through web panel, mobile app, or API.

We provide complete DLT support, template approval, campaign tools, analytics, and API integration.`,
    },

    {
        question: "What is DLT registration?",
        answer: `DLT (Distributed Ledger Technology) registration is a mandatory process introduced by TRAI to regulate commercial SMS communication and prevent spam.

All businesses sending bulk SMS in India must complete DLT registration before sending promotional or transactional messages.`,
    },

    {
        question: "Why is DLT registration required?",
        answer: `DLT registration helps:

• Reduce spam messages
• Improve sender transparency
• Protect consumers
• Ensure compliance with TRAI regulations
• Improve SMS delivery reliability`,
    },

    {
        question: "Can I send SMS campaigns without DLT registration?",
        answer: `No. Sending commercial SMS without DLT registration is not permitted in India. Businesses must complete DLT registration before sending promotional or transactional SMS campaigns.`,
    },

    {
        question: "What are the DLT registration charges?",
        answer: `Approximate operator registration fees:

• Airtel – ₹5,000 + GST
• Jio – ₹5,000 + GST
• Vodafone Idea (VI) – ₹5,000 + GST
• Tata Tele – ₹5,000 + GST
• Videocon – ₹5,000 + GST
• BSNL – ₹3,000 + GST

Charges may change as per operator policies.`,
    },

    {
        question: "What are the types of Sender IDs (Header IDs)?",
        answer: `There are three major sender ID categories:

• Promotional – Marketing and advertising messages
• Service (Implicit/Explicit) – Information and updates
• Transactional – OTPs, alerts, and critical notifications`,
    },

    {
        question: "What is the purpose of a Sender ID?",
        answer: `A Sender ID (Header ID) helps identify the source and category of SMS messages. It ensures messages are delivered according to telecom regulations and improves recipient trust.`,
    },

    {
        question: "Which is the best operator for DLT registration?",
        answer: `All operators follow TRAI guidelines. The best choice depends on registration convenience, support quality, and portal experience. We help businesses select the most suitable DLT operator.`,
    },

    {
        question: "What documents are required for DLT registration?",
        answer: `Commonly required documents include:

• PAN Card
• Authorized person's ID proof
• Company address proof
• Company registration certificate
• GST / MSME / Trade License (where applicable)
• Email ID
• Mobile Number
• Authorization Letter on company letterhead`,
    },

    {
        question: "Is SMS integration with my CRM or application possible?",
        answer: `Yes. Infra Infotech provides SMS APIs that integrate easily with CRMs, websites, mobile applications, ERP systems, and custom software for automated messaging.`,
    },
];

// Duplicate for seamless infinite loop
const loopedSolutions = [...solutions, ...solutions];

export default function BulkSms() {
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
                    100% { transform: translateX(-50%); }
                }
                .marquee-track {
                    animation: marquee 35s linear infinite;
                }
            `}</style>

            {/* ===================== HERO SECTION ===================== */}
            <section className="bg-white px-2 md:px-11 py-6 md:py-11">
                <div className="max-w-7xl mx-15 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* LEFT SIDE */}
                    <div>
                        <h1 className="text-3xl md:text-[42px] font-medium text-gray-900 leading-tight mb-6">
                            Top Rated Bulk SMS Service Provider in India: <br />
                            Send Instant Alerts, Updates & Promotions
                        </h1>
                        <p className="text-gray-700 text-[17px] leading-relaxed mb-6">
                            Looking for a trusted bulk SMS service provider?
                            We can help you instantly connect with your customers through our powerful bulk SMS platform.
                            Deliver alerts, updates, and promotions at scale with high-speed delivery and real-time tracking—built for businesses of all sizes.
                        </p>
                        <p className="text-gray-700 text-[19px] font-medium leading-relaxed mb-6">
                            Your next customer is just one SMS away
                        </p>
                        <div className="flex flex-col gap-4">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-3 px-7 py-2 rounded-md bg-[#294d8f] text-white font-semibold hover:bg-blue-900 transition-all duration-300 w-fit"
                            >
                                <span className="text-lg">◆</span>
                                Schedule a Meeting
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT SIDE IMAGE */}
                    <div className="w-full">
                        <img
                            src={bulksms1}
                            alt="Bulk SMS Platform"
                            className="w-full h-auto object-cover rounded-2xl"
                        />
                    </div>
                </div>
            </section>

            {/* ===================== "HOW BRANDS USE BULK SMS" AUTO SLIDER ===================== */}
            <section className="py-6 md:py-12 overflow-hidden bg-white">
                <div className="max-w-9xl mx-15 mb-10 px-2 md:px-11">
                    <h2 className="text-2xl md:text-4xl pb-10 font-semibold text-center">
                        How Brands Use Bulk SMS to Engage Customers
                    </h2>
                </div>

                {/* Marquee wrapper */}
                <div className="relative">
                    {/* Fade edges */}
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
                                    className="shrink-0 w-[450px] md:w-[450px] bg-gradient-to-br from-[#eef7fc] via-[#d9edf8] to-[#c5e3f4] rounded-2xl p-20 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"                                >
                                    <h3 className="text-[29px] text-center font-semibold text-gray-900 mb-5">
                                        {solution.title}
                                    </h3>
                                    <div className="mt-auto flex justify-center">
                                        <img
                                            src={solution.image}
                                            alt={solution.title}
                                            className="w-full max-w-[450px] h-[390px] object-contain"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#eef7fc] py-6 lg:py-19">
                <div className="max-w-8xl mx-15 px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">

                        {/* Left Side */}
                        <div>
                            <span className="inline-block bg-[#d7ebef] text-[#1d507a] text-sm font-semibold uppercase px-4 py-2 mb-8">
                                BULK SMS SERVICE PROVIDER
                            </span>

                            <h2 className="text-8xl md:text-4xl lg:text-4xl font-semibold text-black leading-tight mb-10">
                                Powerful Messaging Platform That
                                <br />
                                Grows with Your Needs
                            </h2>

                            <p className="text-gray-700 text-lg md:text-[17px] leading-relaxed mb-12 ">
                                As a trusted bulk SMS service provider, we deliver powerful
                                messaging infrastructure with real-time delivery reports,
                                smart failover routing, and seamless connectivity across
                                multiple operators. Our scalable platform ensures consistent
                                performance—no matter your volume.
                            </p>

                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-3 px-7 py-2 bg-[#155979] text-white rounded-lg font-semibold hover:bg-[#0e3d5f] transition-all duration-300"
                            >
                                Book a Free Demo
                                <span className="text-xl">›</span>
                            </Link>
                        </div>

                        {/* Right Side */}
                        <div className="space-y-12">
                            {features.map((item, index) => (
                                <div key={index} className="flex items-center gap-4">

                                    {/* Image */}
                                    <div className="flex-shrink-0">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-12 h-12 md:w-14 md:h-14 object-contain"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div>
                                        <h3 className="text-2xl md:text-[22px] font-semibold text-[#232a35] leading-tight mb-2">
                                            {item.title}
                                        </h3>

                                        <p className="text-lg md:text-[17px] text-[#38404a]">
                                            {item.subtitle}
                                        </p>
                                    </div>

                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>


            <section className="bg-white py-20">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">

                    {/* Heading */}
                    <h2 className="text-4xl md:text-4xl font-semibold text-center text-black mb-20">
                        Why Businesses Choose Us as Their Bulk SMS Service Provider
                    </h2>

                    {/* Features Grid */}
                    <div className="grid lg:grid-cols-2 gap-x-1 gap-y-10">
                        {featuressms.map((item, index) => (
                            <div key={index} className="flex items-center gap-8">

                                {/* Image */}
                                <div className="flex-shrink-0">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-36 h-36 object-contain"
                                    />
                                </div>

                                {/* Content */}
                                <div>
                                    <h3 className="text-2xl md:text-[22px] font-bold text-[#1f2937] mb-2">
                                        {item.title}
                                    </h3>

                                    <p className="text-[18px] leading-relaxed text-[#374151]">
                                        {item.description}
                                    </p>
                                </div>

                            </div>
                        ))}
                    </div>

                </div>
            </section>

            <section className="bg-[#eef7fc] py-16">
                <div className="max-w-8xl mx-15 px-6 lg:px-8">

                    {/* Heading */}
                    <h2 className="text-4xl md:text-3xl font-medium text-center text-black mb-16">
                        Industries We Serve with Bulk SMS Solutions
                    </h2>

                    {/* Cards Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {industries.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300"
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


            <section className="bg-white px-2 md:px-6 py-6 md:py-24">
                <div className="max-w-8xl mx-15">

                    {/* ===== TOP: WHY WE ARE THE RIGHT CHOICE ===== */}
                    <div className="mb-15">
                        <h2 className="text-2xl md:text-[40px] font-semibold text-gray-900 mb-10">
                            Why We Are the Right Choice for Your Bulk SMS Campaign
                        </h2>

                        <ul className="flex flex-col gap-7">
                            {checkpoints.map((point, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    {/* Green circle check icon */}
                                    <span className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full bg-green-50 border-2 border-green-600 flex items-center justify-center">
                                        <svg
                                            className="w-3.5 h-3.5 text-green-600"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2.5"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </span>
                                    <span className="text-gray-700 text-[16px] leading-relaxed">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ===== BOTTOM: QUOTE + IMAGE ===== */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        {/* LEFT: Quote + contact */}
                        <div >
                            <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 leading-snug mb-6">
                                If your marketing strategy doesn't include mobile and bulk SMS, your plans aren't complete !
                            </h2>

                            <p className="text-gray-500 text-[15px] leading-relaxed mb-8">
                                Infra Infotech is a pioneer in the SMS industry and we know what we do. Our Bulk SMS services are
                                tailor made for various types of business and are highly reliable. Act smart and go the bulk sms way to
                                stand ahead in competition.
                            </p>

                            {/* Contact row */}
                            <div className="flex flex-col sm:flex-row gap-6">
                                {/* Phone */}
                                <div className="flex items-center gap-3">
                                    <span className="w-15 h-15 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                                        <img src={callIcon} alt="Call" className="w-17 h-17 object-contain" />
                                    </span>
                                    <div>
                                        <p className="text-gray-400 text-xs mb-0.5">Give us a call</p>
                                        <a
                                            href="tel:+919004100213"
                                            className="text-gray-900 font-semibold text-[16px] hover:text-green-700 transition-colors"
                                        >
                                            +91 9004100213
                                        </a>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="hidden sm:block w-px bg-gray-200" />

                                {/* Email */}
                                <div className="flex items-center gap-3">
                                    <span className="w-15 h-15 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                                        <img src={mailIcon} alt="Email" className="w-17 h-17 object-contain" />
                                    </span>
                                    <div>
                                        <p className="text-gray-400 text-xs mb-0.5">Email us</p>
                                        <a
                                            href="mailto:support@infrainfotech.com"
                                            className="text-gray-900 font-semibold text-[16px] hover:text-green-700 transition-colors"
                                        >
                                            support@infrainfotech.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Image */}
                        <div className="w-full flex justify-center">
                            <img
                                src={bulksms23}
                                alt="Bulk SMS Marketing"
                                className="w-full max-w-[500px] h-auto object-cover rounded-2xl"
                            />
                        </div>

                    </div>
                </div>
            </section>

            <section className="bg-white px-1 md:px-1 py-6 md:py-12">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 text-center mb-18">
                        Frequently Asked Questions
                    </h2>

                    <div className="flex flex-col gap-4">
                        {faqs.map((faq, i) => {
                            const isOpen = openIndex === i;
                            return (
                                <div
                                    key={i}
                                    className="border border-gray-200 rounded-2xl bg-white overflow-hidden shadow-sm transition-all duration-300"
                                >
                                    <button
                                        onClick={() => toggle(i)}
                                        className="w-full flex items-center justify-between px-7 py-10 text-left"
                                    >
                                        <span
                                            className={`text-[19px] font-medium transition-colors duration-200 ${isOpen ? "text-[#335491]" : "text-gray-800"
                                                }`}
                                        >
                                            {faq.question}
                                        </span>
                                        <span
                                            className={`ml-4 flex-shrink-0 text-gray-500 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"
                                                }`}
                                        >
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="6 9 12 15 18 9" />
                                            </svg>
                                        </span>
                                    </button>

                                    {/* Answer */}
                                    <div
                                        className={`overflow-hidden transition-all duration-400 ease-in-out ${isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                                            }`}
                                    >
                                        <div className="px-6 pb-6">
                                            {faq.answer && (
                                                <p className="text-gray-500 text-[16px] leading-relaxed">
                                                    {faq.answer}
                                                </p>
                                            )}
                                            {faq.bullets && (
                                                <ul className="mt-2 space-y-1 list-disc list-inside text-sm text-gray-500">
                                                    {faq.bullets.map((b, j) => (
                                                        <li key={j}>
                                                            <span className="font-semibold text-gray-700">{b.label}</span>: {b.value}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
            <BookMeeting />

        </>
    );
}