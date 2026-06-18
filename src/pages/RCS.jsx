import React from 'react'
import { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Link } from "react-router-dom";
import rcs1 from "../assets/Images/rcs1.png";
import rcs2 from "../assets/Images/rcs2.png";
import rcs3 from "../assets/Images/rcs3.png";
import rcs4 from "../assets/Images/rcs4.png";
import rcs5 from "../assets/Images/rcs5.png";
import rcs6 from "../assets/Images/rcs6.png";
import rcs7 from "../assets/Images/rcs7.png";
import rcs8 from "../assets/Images/rcs8.png";
import rcs9 from "../assets/Images/rcs9.png";
import rcs10 from "../assets/Images/rcs10.png";
import rcs11 from "../assets/Images/rcs11.png";
import rcs12 from "../assets/Images/rcs12.png";
import rcs13 from "../assets/Images/rcs13.png";
import rcs14 from "../assets/Images/rcs14.png";
import rcs15 from "../assets/Images/rcs15.png";
import rcs16 from "../assets/Images/rcs16.png";
import rcs17 from "../assets/Images/rcs17.png";
import rcs18 from "../assets/Images/rcs18.png";


import Clients from './Clients';
import client1 from "../assets/Images/client1.webp";
import client2 from "../assets/Images/client2.jpeg";
import client3 from "../assets/Images/client3.webp";
import client4 from "../assets/Images/client4.webp";
import client5 from "../assets/Images/client5.webp";
import client6 from "../assets/Images/client6.webp";
import client7 from "../assets/Images/client7.webp";
import client8 from "../assets/Images/client8.webp";
import client9 from "../assets/Images/client9.webp";
import client10 from "../assets/Images/client10.webp";
import client11 from "../assets/Images/client11.webp";
import SuccessStories from './Successstories';
import BookMeeting from './Bookmeeting';



const logos = [
    client1,
    client2,
    client3,
    client4,
    client5,
    client6,
    client7,
    client8,
    client9,
    client10,
    client11,
];

const solutions = [
    {
        title: "Branded Business Messages",
        image: rcs2,
    },
    {
        title: "Deliver Rich Media Experiences",
        image: rcs3,
    },
    {
        title: "Reach, Attract and Convert",
        image: rcs4,
    },
    {
        title: "Deliver rich Video experiences",
        image: rcs5,
    },
    {
        title: "Send invoices, Statements &Reports",
        image: rcs6,
    },
    {
        title: "24/7 Customer Support through Chatbots",
        image: rcs7,
    },
];

const features = [
    {
        title: "Google Verification Badge",
        description:
            "Give your brand instant credibility with the Google-verified sender badge. Customers can trust your messages, knowing they come from an authenticated, verified business — not from an unknown number. It strengthens brand reputation and improves open rates.",
        image: rcs8,
    },
    {
        title: "Trusted Branding",
        description:
            "Display your brand name, logo, and verified identity in every message. RCS Messaging allows businesses to create a consistent, professional brand presence directly in the customer's native messaging app — building trust with every interaction.",
        image: rcs9,
    },
    {
        title: "Rich Media Cards",
        description:
            "Send a combination of text with other media like images, videos, GIFs, and more — all within a single interactive message card. Rich Media Cards make your campaigns visually compelling and drive higher engagement than plain SMS.",
        image: rcs10,
    },
    {
        title: "Carousels",
        description:
            "Showcase multiple products, offers, or options within a single message using carousels. Customers can easily swipe through images, links, and descriptions — making your marketing campaigns more dynamic, interactive, and conversion-driven.",
        image: rcs11,
    },
    {
        title: "Call To Action Buttons",
        description:
            "Add clickable CTA buttons directly inside your messages — such as 'Buy Now', 'Book Appointment', 'Get Directions', or 'Call Us'. These interactive buttons reduce friction and guide customers to take immediate action without leaving the chat.",
        image: rcs12,
    },
    {
        title: "Instant Reply's",
        description:
            "Enable customers to respond to your messages with pre-set quick reply options. Instant Replies simplify conversations, speed up response times, and make it easy for customers to engage without typing — boosting interaction rates significantly.",
        image: rcs13,
    },
    {
        title: "Analytics",
        description:
            "Track delivery rates, read receipts, click-throughs, and customer actions in real-time. RCS messaging provides advanced analytics, helping businesses measure campaign performance, optimise engagement, and make smarter communication decisions.",
        image: rcs14,
    },
];

const tabs = [
    {
        label: "PROMOTIONAL",
        image: rcs16,
        title: "PROMOTIONAL",
        description:
            "Promotional RCS messages are designed to boost brand awareness, customer engagement, and sales by delivering targeted marketing communication to new or existing customers. These messages often include offers, discounts, and product or service upgrades. They can also be used to follow up on incomplete user actions, such as abandoned shopping carts or wishlists, encouraging customers to complete their transactions.",
    },
    {
        label: "TRANSACTIONAL",
        image: rcs17,
        title: "TRANSACTIONAL",
        description:
            "Transactional RCS messages provide customers with timely and relevant updates related to their existing accounts, services, or purchases. These include order confirmations, product or service alerts, account notifications, and information updates. Businesses can also use transactional messages to request customer feedback or share important news and alerts, ensuring ongoing communication and customer satisfaction.",
    },
    {
        label: "OTP / VERIFICATION",
        image: rcs18,
        title: "OTP / VERIFICATION",
        description:
            "OTP RCS messages are used to verify user identity and secure sensitive actions through unique, time-sensitive passwords. These messages play a critical role in account login verifications using OTP or two-factor authentication, password reset processes, and the approval of sensitive online transactions. OTP RCS ensures both security and a seamless user experience.",
    },
];

const leftPoints = [
    "RCS messaging is a next-generation communication protocol that is a renewal of SMS with text messages.",
    "RCS is more interactive and a rich communication channel than conventional SMS.",
    "It has rich features like image and video sharing, location tracking, route map sharing, link sharing, and many more from one to another.",
    "We can engage with customers more securely by sending verified messages.",
    "As a message is from a verified business sender, it improves the confidence level of the customer.",
    "RCS is similar to chat apps like Facebook, WhatsApp and it is free to be used by customers.",
];

const rightPoints = [
    "Business senders can connect with customers by sending messages without any delay.",
    "RCS messaging offers the stability of SMS and rich features of OTT chat apps.",
    "In the business sector, RCS can build a branded and interactive communication experience.",
    "Using RCS messaging you can create a group chat, the ability to add and remove members from the group, and much more facilities than the way everyone communicates.",
    "RCS business messaging can be used by all-size companies.",
    "This service helps to create a quality conversation across the network.",
];

const faqs = [
    {
        question: "What is RCS Messaging?",
        answer: `RCS Messaging (Rich Communication Services) is an advanced messaging protocol that enhances traditional SMS with features like multimedia sharing, interactive buttons, read receipts, typing indicators, and more. It allows businesses to send rich, branded, and personalized messages, making communication more engaging. Unlike SMS, RCS works over the internet and can send high-quality media, making it more powerful and flexible for customer interactions.`,
    },
    {
        question: "Can I use RCS messaging on iPhone?",
        answer: `Yes. Apple introduced RCS support in iOS 18. iPhone users can now send and receive RCS messages when both the sender and receiver support RCS through their carrier and messaging app. This enables features like read receipts, high-quality media sharing, and typing indicators between iPhone and Android users.`,
    },
    {
        question: "What do I need to do to enable RCS?",
        answer: `To enable RCS messaging:
 
• On Android: Open Google Messages → tap your profile → click Messages settings → enable Chat features.
• On iPhone (iOS 18+): Go to Settings → Apps → Messages → enable RCS Messaging.
• Your carrier must also support RCS for it to work on your device.`,
    },
    {
        question: "How do RCS chats keep your conversations secure?",
        answer: `RCS chats use end-to-end encryption (E2EE) in supported messaging apps like Google Messages. This means only the sender and recipient can read the messages — no one else, including the service provider, can access them. For business messaging, RCS also ensures verified sender identity through Google verification badges, protecting users from spam and phishing.`,
    },
    {
        question: "How to turn on RCS chats in Google Messages?",
        answer: `To enable RCS in Google Messages:
 
1. Open the Google Messages app.
2. Tap your profile picture (top right).
3. Go to Messages settings.
4. Tap on Chat features.
5. Toggle on Enable chat features.
 
Once enabled, RCS will activate automatically if your carrier supports it.`,
    },
    {
        question: "How to enable RCS chats on Android & iPhone?",
        answer: `On Android:
Open Google Messages → Profile icon → Messages settings → Chat features → Enable chat features.
 
On iPhone (iOS 18+):
Go to Settings → Apps → Messages → scroll down and toggle on RCS Messaging.
 
Note: Both the sender and receiver must have RCS enabled and supported by their carrier for it to work.`,
    },
    {
        question: "How to turn off RCS chats?",
        answer: `On Android:
Open Google Messages → Profile icon → Messages settings → Chat features → Toggle off Enable chat features.
 
On iPhone (iOS 18+):
Go to Settings → Apps → Messages → Toggle off RCS Messaging.
 
After turning off, your messages will revert to standard SMS/MMS.`,
    },
    {
        question: "RCS vs. SMS: What's the difference?",
        answer: `RCS (Rich Communication Services) is the next evolution of SMS:
 
• SMS: Plain text only, 160 character limit, no delivery/read receipts, no internet needed.
• RCS: Supports images, videos, GIFs, buttons, carousels, typing indicators, read receipts, and verified sender branding.
 
RCS delivers a chat-app-like experience directly in the native messages app — without needing a third-party app download.`,
    },
    {
        question: "What is the difference between iMessage, RCS, and SMS/MMS?",
        answer: `• SMS/MMS: Basic text and media messaging. Works on all phones, no internet required. No read receipts or rich features.
 
• iMessage: Apple-only encrypted messaging that works over the internet. Rich features but limited to Apple devices only.
 
• RCS: Cross-platform (Android + iPhone) internet-based messaging with rich features, verified branding, end-to-end encryption (in supported apps), and no app download required. The best of both worlds.`,
    },
    {
        question: "Is RCS messaging free?",
        answer: `RCS messaging is a premium messaging service for businesses. While personal RCS messages between individuals may not have extra charges, business messages follow a pricing model set by carriers and providers. To learn more about RCS Business Messaging pricing, visit our pricing page.`,
    },
    {
        question: "Does RCS fall back to SMS?",
        answer: `Yes. RCS has automatic SMS fallback. If the recipient's device or carrier does not support RCS, the message will automatically be delivered as a standard SMS or MMS. This ensures your message always reaches the customer regardless of their network or device capability.`,
    },
    {
        question: "Does RCS work on iPhone?",
        answer: `Yes. Starting with iOS 18, Apple added RCS support on iPhone. iPhone users can send and receive RCS messages when their carrier supports RCS and the other party (Android or iPhone) also has RCS enabled. This enables cross-platform rich messaging features like high-quality media, read receipts, and typing indicators.`,
    },
];


const CheckIcon = () => (
    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-600 flex items-center justify-center mt-0.5">
        <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
    </span>
);


export default function RCS() {

    const [currentGroup, setCurrentGroup] = useState(0);

    const groups = [];
    for (let i = 0; i < solutions.length; i += 3) {
        groups.push(solutions.slice(i, i + 3));
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentGroup((prev) =>
                prev === groups.length - 1 ? 0 : prev + 1
            );
        }, 3500);

        return () => clearInterval(interval);
    }, [groups.length]);

    // artical section 

    const [activeIndex, setActiveIndex] = useState(0);

    const toggle = (i) => setActiveIndex(activeIndex === i ? null : i);

    const activeImage =
        activeIndex !== null ? features[activeIndex].image : features[0].image;

    const [active, setActive] = useState(0);


    return (
        <>
            <section className="bg-white px-2 md:px-11 py-6 md:py-11">
                <div className="max-w-7xl mx-15 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* LEFT SIDE */}
                    <div>
                        <h1 className="text-3xl md:text-[42px] font-medium text-gray-900 leading-tight mb-4">
                            RCS Messaging : Branded, Interactive Conversations
                        </h1>
                        <p className="text-gray-700 text-[19px] font-medium leading-relaxed mb-4">
                            Engage Customers with Interactive, Branded Messaging
                        </p>
                        <p className="text-gray-700 text-[17px] leading-relaxed mb-4">
                            RCS Messaging delivers rich, engaging conversations with images,videos,
                            and interactive features— providing an app-like experience directly within the user’s SMS inbox.
                        </p>

                        <div className=" gap-4">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-3 px-5 py-1 rounded-md bg-[#294d8f] text-white font-semibold hover:bg-blue-900 transition-all duration-300 w-fit"
                            >
                                <span className="text-lg">◆</span>
                                Schedule a Meeting
                            </Link>

                            <Link
                                to="/contact"
                                className=" ml-4 inline-flex items-center gap-3 px-5 py-1 rounded-md text-[#294d8f] border border-[#294d8f] font-semibold transition-all duration-300 w-fit"
                            >
                                <span className="text-lg">◆</span>
                                Book a Meeting
                            </Link>

                            <p className="text-gray-500 font-semibold mt-5 text-[17px]">
                                We will respond back in 5–10 mins
                            </p>
                        </div>
                    </div>

                    {/* RIGHT SIDE IMAGE */}
                    <div className="w-full">
                        <img
                            src={rcs1}
                            alt="Bulk SMS Platform"
                            className="w-full h-auto object-cover rounded-2xl"
                        />
                    </div>
                </div>
            </section>

            <section className='bg-white px-2 md:px-11 py-6 md:py-11'>
                {/* TOP TEXT */}
                <div className="text-center relative z-20">
                    <p className="text-[15px] md:text-[17px] uppercase tracking-[2px] text-[#6d6b8b] font-semibold leading-relaxed">
                        Trusted by 5,000+ businesses for RCS Messaging,
                        WhatsApp Business API, Bulk SMS, and Voice Solutions
                    </p>
                </div>

                {/* LOGO SLIDER */}
                <div className="mt-16 relative z-20">
                    <Swiper
                        modules={[Autoplay]}
                        slidesPerView={2}
                        spaceBetween={40}
                        loop={true}
                        speed={3500}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 3,
                            },
                            768: {
                                slidesPerView: 4,
                            },
                            1024: {
                                slidesPerView: 5,
                            },
                        }}
                    >
                        {logos.map((logo, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex items-center justify-center h-[150px]">
                                    <img
                                        src={logo}
                                        alt={`client-${index + 1}`}
                                        className="max-h-22 object-contain opacity-90 hover:opacity-100 transition duration-500"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            <section className="py-16 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">

                    <h2 className="text-4xl font-semibold text-center mb-14">
                        How Brands Use Bulk SMS to Engage Customers
                    </h2>

                    <div className="relative overflow-hidden">

                        <div
                            className="flex transition-transform duration-700 ease-in-out"
                            style={{
                                transform: `translateX(-${currentGroup * 100}%)`,
                            }}
                        >
                            {groups.map((group, groupIndex) => (
                                <div
                                    key={groupIndex}
                                    className="w-full shrink-0 grid grid-cols-3 gap-8"
                                >
                                    {group.map((solution, index) => (
                                        <div
                                            key={index}
                                            className="bg-gradient-to-br from-[#a5cde3] via-[#a2e5f9] to-[#447592]
                rounded-[30px]
                p-8
                h-[580px]
                shadow-lg
                hover:shadow-2xl
                transition-all duration-300"
                                        >
                                            <h3 className="text-[28px] text-gray-600 text-center font-semibold mb-6">
                                                {solution.title}
                                            </h3>

                                            <div className="flex justify-center items-center h-[520px]">
                                                <img
                                                    src={solution.image}
                                                    alt={solution.title}
                                                    className="w-full max-w-[650px] h-[520px] object-contain"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>


            <section className="bg-white px-2 md:px-11 py-6 md:py-11">
                <div className="max-w-9xl mx-15">

                    {/* Badge */}
                    <span className="inline-block bg-[#d7ebef] text-[#1d507a] text-sm font-semibold uppercase px-3 py-1 mb-8">
                        RCS MESSAGING
                    </span>

                    {/* Heading */}
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-12">
                        Explore the Powerful Features of RCS Messaging
                    </h2>

                    {/* Two-column layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 items-start">

                        {/* LEFT: Accordion */}
                        <div className="flex flex-col ">
                            {features.map((feature, i) => {
                                const isOpen = activeIndex === i;
                                return (
                                    <div key={i}>
                                        <button
                                            onClick={() => toggle(i)}
                                            className="w-full flex items-center justify-between py-5 text-left group"
                                        >
                                            <span
                                                className={`text-[20px] font-semibold transition-colors duration-200 ${isOpen ? "text-[#306a99]" : "text-[#062d4e]"
                                                    }`}
                                            >
                                                {feature.title}
                                            </span>
                                            <span
                                                className={`ml-4 flex-shrink-0 text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"
                                                    }`}
                                            >
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <polyline points="6 9 12 15 18 9" />
                                                </svg>
                                            </span>
                                        </button>

                                        {/* Expandable answer */}
                                        <div
                                            className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[400px] opacity-100 pb-5" : "max-h-0 opacity-0"
                                                }`}
                                        >
                                            <p className="text-[#6c6e70] text-[16px] leading-relaxed">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* RIGHT: Image — changes with active item */}
                        <div className="sticky top-24 w-full flex justify-center">
                            <img
                                key={activeIndex}
                                src={activeImage}
                                alt="RCS Feature preview"
                                className="w-full max-w-[380px] h-auto object-contain rounded-2xl"
                                style={{ animation: "rcsFadeIn 0.45s ease-out" }}
                            />
                        </div>

                    </div>
                </div>

                <style>{`
        @keyframes rcsFadeIn {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
            </section>
            <SuccessStories />

            <section className='bg-white px-2 md:px-11 py-6 md:py-11'>
                {/* INTEGRATIONS SECTION */}

                <div className="grid grid-cols-1 lg:grid-cols-[48%_40%] gap-25 items-center">

                    {/* LEFT IMAGE */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-[#307eba]/10 blur-3xl rounded-full"></div>

                        <img
                            src={rcs15}
                            alt="Integrations"
                            className="relative z-10 w-full object-contain"
                        />
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className='mt-15'>

                        <span className="inline-block px-5 py-2 bg-[#d8e5f1] text-[#5ba4dc] font-semibold uppercase text-sm rounded-sm">
                            integrations
                        </span>

                        <h2 className="mt-7 text-4xl md:text-4xl font-semibold text-black leading-tight">
                            Integrate RCS Messaging API into Your Business in Minutes </h2>

                        <p className="mt-7 text-[#6d6b8b] text-lg leading-relaxed">
                            Seamlessly integrate RCS with your existing systems via our programmable API. Connect with CRM, email, social media,
                            and SMS platforms to deliver rich messaging, automate workflows, and track campaign performance.
                        </p>

                    </div>
                </div>
            </section>

            <section className="bg-white px-2 md:px-8 py-6 md:py-11">
                <div className="max-w-8xl mx-15">

                    {/* Heading */}
                    <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 text-center mb-16 leading-tight">
                        Smart Messaging for Every Business <br />
                        Scenario : Promote, Notify, Verify
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">

                        {/* LEFT: Image with decorative green circle bg */}
                        <div className="relative flex justify-center items-start">
                            {/* decorative circle */}
                            <div className="absolute -left-8 top-8 w-72 h-72 rounded-full border-2 border-green-200 opacity-60 pointer-events-none" />
                            {/* decorative triangles */}
                            <span className="absolute left-2 top-48 text-green-500 text-3xl select-none">▶</span>
                            <span className="absolute left-14 bottom-24 text-red-300 text-xl select-none">◀</span>
                            <span className="absolute right-10 top-12 text-green-600 text-xl select-none">▶</span>

                            <img
                                key={active}
                                src={tabs[active].image}
                                alt={tabs[active].title}
                                className="relative z-10 w-full max-w-[440px] h-auto object-contain"
                                style={{ animation: "sceneFadeIn 0.45s ease-out" }}
                            />
                        </div>

                        {/* RIGHT: Tabs + content */}
                        <div>
                            {/* Tab buttons */}
                            <div className="flex gap-3 mb-10 flex-wrap">
                                {tabs.map((tab, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setActive(i)}
                                        className={`px-5 py-2 rounded-full text-[15px] font-semibold border transition-all duration-300 ${active === i
                                            ? "bg-[#326594] text-white border-[#326594] shadow-lg"
                                            : "bg-white text-[#326594] border-[#6296c8] hover:bg-blue-50"
                                            }`}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </div>

                            {/* Content */}
                            <div
                                key={active}
                                style={{ animation: "sceneFadeIn 0.4s ease-out" }}
                            >
                                <h3 className="text-[#326594] text-[20px] font-semibold tracking-widest uppercase mb-4">
                                    {tabs[active].title}
                                </h3>
                                <p className="text-gray-700 text-[18px] leading-relaxed">
                                    {tabs[active].description}
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                <style>{`
        @keyframes sceneFadeIn {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
            </section>

            <section>
                <div className="mt-4 text-center px-2 md:px-26">
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                        RCS Messaging – The best option for business communication
                    </h2>
                    <p className="text-gray-700 text-[14px] leading-relaxed max-w-5xl mx-auto mb-12">
                        GreenAds Global, a leading RCS messaging provider, offers a versatile solution that works seamlessly
                        across all networks and mobile devices. With its rich communication features, including multimedia
                        capabilities, robust security, and reliable delivery, businesses of all sizes can leverage this powerful
                        tool as an effective marketing strategy, enabling enhanced communication with customers.
                    </p>

                    {/* Green card with 2-col checklist */}
                    <div className="bg-green-50 rounded-3xl p-8 md:p-12 text-left">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                            {/* Left column */}
                            <div className="flex flex-col gap-6">
                                {leftPoints.map((point, i) => (
                                    <div key={i} className="flex items-start gap-4">
                                        <CheckIcon />
                                        <p className="text-gray-700 text-[16px] leading-relaxed">{point}</p>
                                    </div>
                                ))}
                            </div>
                            {/* Right column */}
                            <div className="flex flex-col gap-6">
                                {rightPoints.map((point, i) => (
                                    <div key={i} className="flex items-start gap-4">
                                        <CheckIcon />
                                        <p className="text-gray-700 text-[16px] leading-relaxed">{point}</p>
                                    </div>
                                ))}
                            </div>
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
                            const isOpen = activeIndex === i;
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
    )
}
