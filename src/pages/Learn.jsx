import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react"


// NORMAL IMAGES
import whatsapp from "../assets/Images/whatsapp.webp";
import rcs from "../assets/Images/rcs.webp";
import bulksms from "../assets/Images/bulksms.webp";
import voice from "../assets/Images/voice.webp";

// HOVER IMAGES
import whatsappHover from "../assets/Images/whatsapphover.png";
import rcsHover from "../assets/Images/rcshover.png";
import bulksmsHover from "../assets/Images/bulksmshover.png";
import voiceHover from "../assets/Images/voicehover.png";
import learndown from "../assets/Images/learndown.png";
import ins from "../assets/Images/ins.png";
import partner from "../assets/Images/partner.png";
import api from "../assets/Images/api.png";
import extra1 from "../assets/Images/extra1.png";
import extra2 from "../assets/Images/extra2.png";
import Carousel from "./Carousel";




const codeSnippets = {
    Java: `OkHttpClient client = new OkHttpClient();
 
Request request = new Request.Builder()
  .url("https://api.telinfy.net/gaca/whatsapp/templates
  /message/")
  .post(null)
  .addHeader("accept", "application/json")
  .addHeader("Content-Type", "application/json")
  .build();
 
Response response = client.newCall(request).execute();`,

    Python: `import requests
 
url = "https://api.telinfy.net/gaca/whatsapp/templates/message/"
 
headers = {
    "accept": "application/json",
    "Content-Type": "application/json"
}
 
response = requests.post(url, headers=headers)
 
print(response.text)`,

    PHP: `<?php
 
$curl = curl_init();
 
curl_setopt_array($curl, [
  CURLOPT_URL => "https://api.telinfy.net/gaca/whatsapp/templates/message/",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_HTTPHEADER => [
    "accept: application/json",
    "Content-Type: application/json"
  ],
]);
 
$response = curl_exec($curl);
curl_close($curl);
 
echo $response;`,

    HTTP: `POST /gaca/whatsapp/templates/message/ HTTP/1.1
Host: api.telinfy.net
accept: application/json
Content-Type: application/json`,
};

export default function Learn() {
    const tabs = ["Java", "Python", "PHP", "HTTP"];
    const [activeTab, setActiveTab] = useState("Java");

    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

    const services = [
        {
            title: "WhatsApp Business API",
            desc: "Build trust, engage customers, and grow your brand with WhatsApp Business API",
            image: whatsapp,
            hover: whatsappHover,
            link: "/whatsappapi",
            bg: "bg-[#dfe8cd]",
        },
        {
            title: "RCS Messaging",
            desc: "Rich media and guided responses create an app-like experience right in the user's SMS inbox",
            image: rcs,
            hover: rcsHover,
            link: "/rcs",
            bg: "bg-[#d4e5f5]",
        },
        {
            title: "Bulk SMS",
            desc: "Send instant, reliable, and high-volume messages for alerts, promotions and transactional updates",
            image: bulksms,
            hover: bulksmsHover,
            link: "/bulksms",
            bg: "bg-[#e7ddf1]",
        },
        {
            title: "Voice Solutions",
            desc: "Scale up your conversation rates through automated outbound calls",
            image: voice,
            hover: voiceHover,
            link: "/voice",
            bg: "bg-[#ece4c6]",
        },
    ];

    const accordionData = [
        {
            title: "Enterprise Solutions for On-Premises Operations",
            content:
                "Host our services on your own servers to maintain complete control over your data. With this solution, your business ensures maximum data security, as no third party—including us—has access to your information. This is ideal for enterprises that prioritise privacy and compliance while leveraging advanced communication solutions.",
        },
        {
            title: "Reseller White Label Opportunities.",
            content:
                "Launch your own messaging platform with our white-label solution. Purchase our panel, customise it with your branding, and resell it as your own. You get full control over pricing, branding, and customer management while leveraging our robust infrastructure.",
        },
        {
            title: "Mutually Beneficial Partnering",
            content:
                "Join us as a partner and unlock new earning opportunities. Refer businesses to our platform and earn referral bonuses. Whether you are an individual, a consultant, or a business, our partnership model offers a simple way to generate revenue while helping others access top-tier communication solutions.",
        },
    ];

    return (
        <>
            <section className="bg-[#ffffff] py-0 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4">

                    {/* TOP TAG */}
                    <div className="flex justify-center">
                        <span className="px-5 py-2 bg-[#f1f7f8] text-[#307eba] font-semibold uppercase tracking-wide text-sm rounded-sm">
                            BUSINESS MESSAGING SOLUTIONS PROVIDER
                        </span>
                    </div>

                    {/* MAIN HEADING */}
                    <div className="text-center max-w-6xl mx-auto mt-8">
                        <h2 className="text-3xl md:text-4xl font-semibold text-black leading-tight">
                            RCS, WhatsApp API, SMS & Voice Solution—Everything Your Business Needs
                        </h2>
                    </div>

                    {/* CARDS */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-18">

                        {services.map((item, index) => (
                            <div
                                key={index}
                                className="group rounded-[35px] overflow-hidden transition-all duration-500 hover:-translate-y-3"
                            >

                                {/* IMAGE AREA */}
                                <div
                                    className={`relative h-[360px] overflow-hidden flex items-end justify-center rounded-[35px] border border-black/10 ${item.bg}`}
                                >

                                    {/* NORMAL IMAGE */}
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="absolute bottom-0  object-contain transition-all duration-500 group-hover:opacity-0 group-hover:scale-105"
                                    />

                                    {/* HOVER IMAGE */}
                                    <img
                                        src={item.hover}
                                        alt={item.title}
                                        className="absolute bottom-0  object-contain opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-105"
                                    />
                                </div>

                                {/* CONTENT BELOW IMAGE */}
                                <div className="pt-7 px-2">

                                    <h3 className="text-2xl font-bold text-black">
                                        {item.title}
                                    </h3>

                                    <p className="mt-4 text-[#6d6b8b] leading-relaxed text-[15px] min-h-[110px]">
                                        {item.desc}
                                    </p>

                                    <Link
                                        to={item.link}
                                        className="inline-flex items-center ml-4 gap-2 mt-6 text-[#307eba] font-semibold hover:gap-4 transition-all duration-300"
                                    >
                                        Learn More
                                        <span>→</span>
                                    </Link>
                                </div>

                            </div>
                        ))}

                    </div>
                </div>
            </section>

            {/* LEARN DOWN SECTION */}
            <div className=" m-15 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* LEFT IMAGE */}
                <div className="relative">
                    <div className="absolute inset-0 bg-[#177a63]/10 blur-3xl rounded-full"></div>

                    <img
                        src={learndown}
                        alt="Omni Channel Messaging"
                        className="relative z-10 w-full object-contain"
                    />
                </div>

                {/* RIGHT CONTENT */}
                <div>

                    <span className="inline-block px-5 py-2 bg-[#f1f7f8] text-[#307eba] font-semibold uppercase tracking-wide text-sm rounded-sm">
                        Omni-Channel Messaging Platform
                    </span>

                    <h2 className="mt-7 text-4xl md:text-4xl font-semibold text-black leading-tight">
                        A Unified Platform for Smarter Business Messaging
                    </h2>

                    <p className="mt-7 text-[#6d6b8b] text-lg leading-relaxed">
                        Our Unified API Platform intelligently routes messages across
                        WhatsApp, RCS, and SMS, ensuring seamless delivery and maximum reach.
                        With real-time tracking and dedicated support, businesses stay
                        connected effortlessly.
                    </p>

                    {/* BUTTON */}
                    <div className="mt-10">
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-3 px-6 py-2 rounded-sm bg-[#307eba] text-white font-semibold hover:bg-black transition-all duration-300 shadow-lg"
                        >
                            Start your free trial
                            <span className="text-xl">→</span>
                        </Link>
                    </div>

                </div>
            </div>




            <section className="bg-white py-11 lg:py-8">
                <div className="max-w-8xl mx-auto px-2 lg:px-8">

                    {/* Heading */}
                    <div className="text-center max-w-5xl mx-auto mb-2">
                        <span className="inline-block bg-[#e7effa] text-[#5497cb] px-4 py-1 rounded-sm text-sm font-semibold uppercase tracking-wide mb-6">
                            Omnichannel Customer Engagement
                        </span>

                        <h2 className="text-4xl md:text-4xl lg:text-5xl font-semibold text-[#0f172a] leading-tight mb-3">
                            Connect, Engage & Convert Customers Across Every Channel
                        </h2>

                        <p className="mb-5 md:text-[17px] text-gray-600 leading-relaxed">
                            Deliver seamless customer experiences through WhatsApp, SMS, RCS,
                            Email and Voice. Manage conversations, automate campaigns, track
                            engagement, and grow your business from one unified platform.
                        </p>
                    </div>

                    {/* Image */}
                    <div className="flex justify-center">
                        <img
                            src={extra1}
                            alt="Omnichannel Communication Platform"
                            className="w-full max-w-7xl object-contain rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
                        />
                    </div>

                </div>
            </section>



            <section className="bg-white py-20 lg:py-28 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* Left Content */}
                        <div>
                            {/* Badge */}
                            <div className="inline-flex items-center gap-3 px-5 py-3 border border-gray-200 rounded-full mb-8">
                                <svg
                                    className="w-5 h-5 text-blue-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 2L18 5V9C18 14 14.8 17.8 10 19C5.2 17.8 2 14 2 9V5L10 2Z" />
                                </svg>

                                <span className="text-[16px] font-medium text-gray-800">
                                    Integrations
                                </span>
                            </div>

                            {/* Heading */}
                            <h2 className="text-4xl md:text-5xl font-semibold text-[#111827] leading-tight mb-8">
                                Seamlessly integrate with the tools you already love
                            </h2>

                            {/* Description */}
                            <p className="text-[17px] text-gray-500 leading-relaxed mb-4 max-w-2xl">
                                Unlock limitless collaboration possibilities with our powerful
                                integration capabilities. Our APIs seamlessly connect with CRM
                                systems, marketing automation platforms, and customer support
                                applications. With pre-built connectors and SDKs, developers can
                                quickly embed messaging and communication services into their
                                applications.
                            </p>

                            {/* Button */}
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center px-7 py-3 bg-[#4785b1] hover:bg-[#29638c] text-white font-medium text-[16px] rounded-xl transition-all duration-300"
                            >
                                View All Integrations
                            </Link>
                        </div>

                        {/* Right Image */}
                        <div className="flex justify-center lg:justify-end">
                            <img
                                src={extra2}
                                alt="Integrations"
                                className="w-full max-w-[700px] object-contain"
                            />
                        </div>

                    </div>
                </div>
            </section>
            <Carousel />





            {/* INTEGRATIONS SECTION */}
            <div className="w-full bg-blue-100 py-16 px-6 md:px-14">

                <div className="grid grid-cols-1 lg:grid-cols-[35%_60%] gap-25 items-center">

                    {/* LEFT IMAGE */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-[#307eba]/10 blur-3xl rounded-full"></div>

                        <img
                            src={ins}
                            alt="Integrations"
                            className="relative z-10 w-full object-contain rounded-sm"
                        />
                    </div>

                    {/* RIGHT CONTENT */}
                    <div>

                        <span className="inline-block px-5 py-2 bg-[#a4cdf4] text-[#307eba] font-semibold uppercase tracking-wide text-sm rounded-sm">
                            integrations
                        </span>

                        <h2 className="mt-7 text-4xl md:text-4xl font-semibold text-black leading-tight">
                            Sync Your Tools, Simplify Your Operations
                        </h2>

                        <p className="mt-5 text-[#307eba] text-xl leading-relaxed font-medium">
                            Unified integrations for smarter workflows and effortless data management
                        </p>

                        <p className="mt-7 text-[#6d6b8b] text-lg leading-relaxed">
                            Connect with Zoho, Shopify, Google Sheets, WooCommerce, and other tools.
                            Automate workflows, sync data, and manage customer interactions—all from one unified platform.
                        </p>

                        {/* BUTTON */}
                        <div className="mt-10">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-3 px-6 py-2 rounded-sm bg-[#307eba] text-white font-semibold hover:bg-black transition-all duration-300 shadow-lg"
                            >
                                Request a demo
                                <span className="text-xl">→</span>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
            

            <section className="bg-white py-11 px-2 md:px-16">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT CONTENT */}
                    <div>
                        {/* TAG */}
                        <span className="inline-block px-4 py-1.5 bg-[#dbe8f8] text-[#4079ad] font-semibold uppercase tracking-wide text-[14px] rounded-sm">
                            PARTNER WITH US
                        </span>

                        {/* HEADING */}
                        <h2 className="mt-6 text-5xl md:text-[2.1rem] font-normal text-black leading-tight">
                            Looking to Grow Your Business Opportunities? Let's Grow Together!
                        </h2>

                        {/* SUB TEXT */}
                        <p className="mt-5 text-[#0c0c15] text-base leading-relaxed">
                            Whether you are looking for a secure on-premises setup, a white-label reselling
                            opportunity, or a rewarding partnership, we have got the perfect solution for you.
                        </p>

                        {/* ACCORDION */}
                        <div className="mt-8 divide-y  divide-gray-500 border-t border-gray-500">
                            {accordionData.map((item, i) => (
                                <div key={i} className="py-5">
                                    <button
                                        onClick={() => toggle(i)}
                                        className="w-full flex items-center justify-between text-left gap-4 focus:outline-none"
                                    >
                                        <span
                                            className={`text-[21px] font-semibold transition-colors duration-200 ${openIndex === i ? "text-[#3a599a]" : "text-[#1a1a2e]"
                                                }`}
                                        >
                                            {item.title}
                                        </span>
                                        <span
                                            className={`flex-shrink-0 w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${openIndex === i
                                                ? "border-[#467997] text-[#427093] rotate-180"
                                                : "border-gray-300 text-gray-400"
                                                }`}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-4 h-4"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={2.5}
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </span>
                                    </button>

                                    {/* CONTENT */}
                                    <div
                                        className={`overflow-hidden transition-all duration-400 ease-in-out ${openIndex === i ? "max-h-60 opacity-100 mt-3" : "max-h-0 opacity-0"
                                            }`}
                                    >
                                        <p className="text-[#6d6b8b] text-[16px]">
                                            {item.content}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="relative flex justify-center">
                        {/* Soft glow behind image */}
                        <div className="absolute inset-0 bg-[#177a63]/10 blur-3xl rounded-full scale-90"></div>

                        <img
                            src={partner}
                            alt="Partners"
                            className="relative z-10 w-full max-w-lg object-contain rounded-2xl shadow-xl"
                        />
                    </div>

                </div>
            </section>


            <section
                className="w-full px-6 md:px-16 flex items-center"
                style={{
                    background: "linear-gradient(105deg, #1a1a3e 0%, #2d1b5e 5%, #3b2070 10%, #1e3a5f 60%)",
                    height: "100vh",
                }}
            >
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT - CODE BLOCK */}
                    <div
                        className="rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                        style={{ background: "#111111" }}
                    >
                        {/* TABS */}
                        <div className="flex items-center gap-1 px-5 pt-5 pb-3">
                            {tabs.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${activeTab === tab
                                        ? "bg-white text-black"
                                        : "text-gray-400 hover:text-white"
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        {/* CODE */}
                        <div className="px-6 pb-8 pt-2 overflow-x-auto">
                            <pre className="text-sm leading-7 font-mono whitespace-pre-wrap">
                                {codeSnippets[activeTab].split("\n").map((line, i) => {
                                    // Color logic: strings in teal/green, keywords in lighter green
                                    const coloredLine = line
                                        .replace(
                                            /(".*?")/g,
                                            '<span style="color:#4ecca3">$1</span>'
                                        )
                                        .replace(
                                            /\b(OkHttpClient|Request|Response|client|request|response|new|null)\b/g,
                                            '<span style="color:#7ee8a2">$1</span>'
                                        );
                                    return (
                                        <div
                                            key={i}
                                            style={{ color: "#7ee8a2" }}
                                            dangerouslySetInnerHTML={{ __html: coloredLine || "&nbsp;" }}
                                        />
                                    );
                                })}
                            </pre>
                        </div>
                    </div>

                    {/* RIGHT - TEXT CONTENT */}
                    <div>
                        <h2 className="text-5xl md:text-4xl font-semibold text-white leading-tight">
                            Developer API Documentation
                        </h2>

                        <p className="mt-4 text-gray-300 text-base leading-relaxed text-[17px]">
                            Effortlessly integrate with our streamlined SDKs and APIs, designed for your preferred coding
                            language. Get started quickly with clear guides and easy-to-follow tutorials. Whether you are
                            building from scratch or enhancing existing systems, our developer-friendly tools make it simple.
                            Explore our API reference and start building today!
                        </p>

                        <div className="mt-8">
                            <Link
                                to="/api-reference"
                                className="inline-flex items-center gap-2 px-9 py-2.5 rounded-md bg-[#177a63] text-white font-semibold hover:bg-[#1a9478] transition-all duration-300 text-sm"
                            >
                                API reference
                                <span>›</span>
                            </Link>
                        </div>
                    </div>

                </div>
            </section>

        </>
    );
}