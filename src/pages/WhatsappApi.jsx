import { Link } from "react-router-dom";
import React, { useState } from "react";
import whatsappapi2 from "../assets/Images/whatsappapi2.png";
import whatsappapi3 from "../assets/Images/whatsappapi3.png";
import whatsappapi4 from "../assets/Images/whatsappapi4.png";
import whatsappapi5 from "../assets/Images/whatsappapi5.png";
import whatsappapi6 from "../assets/Images/whatsappapi6.png";
import whatsappapi7 from "../assets/Images/whatsappapi7.png";
import whatsappapi8 from "../assets/Images/whatsappapi8.png";
import whatsappapi9 from "../assets/Images/whatsappapi9.png";
import whatsappapi10 from "../assets/Images/whatsappapi10.png";
import whatsappapi11 from "../assets/Images/whatsappapi11.png";
import whatsappapi12 from "../assets/Images/whatsappapi12.png";
import FAQ from "./FAQ";
import BookMeeting from "./Bookmeeting";


const checkpoints = [
  "Meta's Official Tech Partner",
  "Designed with GDPR & PSD2",
  "Regulations Enterprise Grade Security",
  "Build a Chatbot in 5 Minutes",
  "One-to-One Meeting with Product Expert",
  "High quality & Low cost connectivity",
  "14 Days Free Trial",
  "24*7 support",
];

const features = [
  {
    title: "14 Days Free Trial",
    description:
      "Experience the full power of our WhatsApp API with a 14-day free trial. Test messaging, chatbot setup, automation, and integration features without any upfront cost. It's the perfect way to understand how our platform can boost your business communication before you commit.",
    image: whatsappapi7,
  },
  {
    title: "Dedicated Account Manager Support",
    description:
      "Get personalised assistance with a dedicated account manager who will guide you through onboarding, campaign setup, and optimisation. Whether you need technical help or strategy advice, our experts are available to ensure your WhatsApp API journey is smooth and successful.",
    image: whatsappapi8,
  },
  {
    title: "3rd-party Integration",
    description:
      "Easily connect our WhatsApp API with your favourite tools and platforms. Whether it's CRM systems, e-commerce platforms, or marketing automation software, our API supports seamless integration to streamline your workflows and enhance customer engagement.",
    image: whatsappapi9,
  },
  {
    title: "Quick Chatbot Setup",
    description:
      "Launch your WhatsApp chatbot in record time! Our platform provides easy chatbot building tools and templates, allowing you to automate customer interactions, support, and lead generation — all without heavy coding or long setup times.",
    image: whatsappapi10,
  },
];

const slides = [
  {
    image: whatsappapi2,
    features: [
      {
        title: "Team Inbox",
        description:
          "Manage all your customer conversations efficiently with WhatsApp Team Inbox. With Infra Infotech, your entire support team can handle, assign, and respond to messages from one shared WhatsApp number. Easily track agent performance, collaborate with internal notes, and personalise every reply—ensuring no message goes unanswered. Whether it's sales, support, or follow-ups, our Team Inbox makes customer communication faster, more effective, and fully organised.",
      },
    ],
  },
  {
    image: whatsappapi3,
    features: [
      {
        title: "Team Inbox",
        description:
          "Manage all your customer conversations efficiently with WhatsApp Team Inbox. With Infra Infotech, your entire support team can handle, assign, and respond to messages from one shared WhatsApp number. Easily track agent performance, collaborate with internal notes, and personalise every reply—ensuring no message goes unanswered. Whether it's sales, support, or follow-ups, our Team Inbox makes customer communication faster, more effective, and fully organised.",
      },
      {
        title: "WhatsApp Business Calling API",
        description:
          "The WhatsApp Business Calling API allows businesses to initiate voice calls directly within WhatsApp chats, blending the convenience of messaging with the personal touch of real-time conversation. Customers can speak to support agents, sales reps, or service teams without leaving the app. Even during a call, they can continue sharing media and messages, creating a dynamic and seamless experience. With end-to-end encryption, it ensures secure communication. Ideal for customer support, consultations, and appointment confirmations, this voice call API helps brands build trust and deliver more responsive service.",
      },
    ],
  },
  {
    image: whatsappapi4,
    features: [
      {
        title: "Team Inbox",
        description:
          "Manage all your customer conversations efficiently with WhatsApp Team Inbox. With Infra Infotech, your entire support team can handle, assign, and respond to messages from one shared WhatsApp number. Easily track agent performance, collaborate with internal notes, and personalise every reply—ensuring no message goes unanswered. Whether it's sales, support, or follow-ups, our Team Inbox makes customer communication faster, more effective, and fully organised.",
      },
      {
        title: "WhatsApp Business Calling API",
        description:
          "The WhatsApp Business Calling API allows businesses to initiate voice calls directly within WhatsApp chats, blending the convenience of messaging with the personal touch of real-time conversation. Customers can speak to support agents, sales reps, or service teams without leaving the app. Even during a call, they can continue sharing media and messages, creating a dynamic and seamless experience. With end-to-end encryption, it ensures secure communication. Ideal for customer support, consultations, and appointment confirmations, this voice call API helps brands build trust and deliver more responsive service.",
      },
      {
        title: "Broadcasting",
        description:
          "WhatsApp Broadcasting enables businesses to send messages to thousands of customers at once—without creating a group or waiting for replies. Whether it's promotions, alerts, reminders, or product updates, broadcasts let you reach your audience instantly on the app they trust most. Using the WhatsApp Business API, you can personalise each broadcast with customer names, purchase history, or preferences, making every message feel one-to-one. All broadcasts are secure, opt-in based, and comply with WhatsApp's business messaging policies—ensuring trust and reliability.",
      },
    ],
  },
  {
    image: whatsappapi5,
    features: [
      {
        title: "Team Inbox",
        description:
          "Manage all your customer conversations efficiently with WhatsApp Team Inbox. With Infra Infotech, your entire support team can handle, assign, and respond to messages from one shared WhatsApp number. Easily track agent performance, collaborate with internal notes, and personalise every reply—ensuring no message goes unanswered. Whether it's sales, support, or follow-ups, our Team Inbox makes customer communication faster, more effective, and fully organised.",
      },
      {
        title: "WhatsApp Business Calling API",
        description:
          "The WhatsApp Business Calling API allows businesses to initiate voice calls directly within WhatsApp chats, blending the convenience of messaging with the personal touch of real-time conversation. Customers can speak to support agents, sales reps, or service teams without leaving the app. Even during a call, they can continue sharing media and messages, creating a dynamic and seamless experience. With end-to-end encryption, it ensures secure communication. Ideal for customer support, consultations, and appointment confirmations, this voice call API helps brands build trust and deliver more responsive service.",
      },
      {
        title: "Broadcasting",
        description:
          "WhatsApp Broadcasting enables businesses to send messages to thousands of customers at once—without creating a group or waiting for replies. Whether it's promotions, alerts, reminders, or product updates, broadcasts let you reach your audience instantly on the app they trust most. Using the WhatsApp Business API, you can personalise each broadcast with customer names, purchase history, or preferences, making every message feel one-to-one. All broadcasts are secure, opt-in based, and comply with WhatsApp's business messaging policies—ensuring trust and reliability.",
      },
      {
        title: "Chat Commerce",
        description:
          "WhatsApp Chat Commerce brings your storefront straight into your customer's chat window. From product discovery to payment, everything happens within a single conversation. Customers can browse catalogues, explore offers, place orders, and complete payments—all in real time, without needing to download another app. With Chat Commerce, you reach your customers where they already are—on WhatsApp.",
      },
    ],
  },
  {
    image: whatsappapi6,
    features: [
      {
        title: "Team Inbox",
        description:
          "Manage all your customer conversations efficiently with WhatsApp Team Inbox. With Infra Infotech, your entire support team can handle, assign, and respond to messages from one shared WhatsApp number. Easily track agent performance, collaborate with internal notes, and personalise every reply—ensuring no message goes unanswered. Whether it's sales, support, or follow-ups, our Team Inbox makes customer communication faster, more effective, and fully organised.",
      },
      {
        title: "WhatsApp Business Calling API",
        description:
          "The WhatsApp Business Calling API allows businesses to initiate voice calls directly within WhatsApp chats, blending the convenience of messaging with the personal touch of real-time conversation. Customers can speak to support agents, sales reps, or service teams without leaving the app. Even during a call, they can continue sharing media and messages, creating a dynamic and seamless experience. With end-to-end encryption, it ensures secure communication. Ideal for customer support, consultations, and appointment confirmations, this voice call API helps brands build trust and deliver more responsive service.",
      },
      {
        title: "Broadcasting",
        description:
          "WhatsApp Broadcasting enables businesses to send messages to thousands of customers at once—without creating a group or waiting for replies. Whether it's promotions, alerts, reminders, or product updates, broadcasts let you reach your audience instantly on the app they trust most. Using the WhatsApp Business API, you can personalise each broadcast with customer names, purchase history, or preferences, making every message feel one-to-one. All broadcasts are secure, opt-in based, and comply with WhatsApp's business messaging policies—ensuring trust and reliability.",
      },
      {
        title: "Chat Commerce",
        description:
          "WhatsApp Chat Commerce brings your storefront straight into your customer's chat window. From product discovery to payment, everything happens within a single conversation. Customers can browse catalogues, explore offers, place orders, and complete payments—all in real time, without needing to download another app. With Chat Commerce, you reach your customers where they already are—on WhatsApp.",
      },
      {
        title: "Chatbot",
        description:
          "A WhatsApp Chatbot enables businesses to engage with customers instantly, 24/7—without the need for human intervention. From answering FAQs and capturing leads to booking appointments and assisting with purchases, the chatbot manages it all within the familiar WhatsApp interface. With personalised responses, smart automations, and seamless integration with your CRM or backend systems, WhatsApp Chatbots streamline operations, reduce response times, and elevate the customer experience.",
      },
    ],
  },
];


const WhatsAppHero = () => {

  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (i) => setActiveIndex(activeIndex === i ? null : i);

  const [current, setCurrent] = useState(0);

  const goTo = (index) => {
    setCurrent(index);
  };

  const prev = () => setCurrent((p) => (p === 0 ? slides.length - 1 : p - 1));
  const next = () => setCurrent((p) => (p === slides.length - 1 ? 0 : p + 1));

  const slide = slides[current];

  return (
    <>
      <section className="bg-white px-2 md:px-11 py-6 md:py-11">
        <div className="max-w-7xl mx-15 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ===== LEFT SIDE ===== */}
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight mb-6">
              Top WhatsApp Business API Provider in India
            </h1>

            <p className="text-gray-700 text-[18px] leading-relaxed mb-6 max-w-xl">
              India's most trusted Meta-certified WhatsApp Business API provider —
              helping businesses reach customers faster, automate conversations,
              and drive revenue through the country's most used messaging app.
            </p>

            <a
              href="#"
              className="inline-block text-[#294d8f] font-semibold underline underline-offset-2 hover:text-blue-900 transition-colors mb-8"
            >
              Meta's Official WhatsApp Business API Provider
            </a>

            <div className="flex flex-col gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-7 py-3 rounded-md bg-[#294d8f] text-white font-semibold hover:bg-blue-900 transition-all duration-300 w-fit"
              >
                <span className="text-lg">◆</span>
                Start your free trial
              </Link>

              <p className="text-gray-500 font-semibold text-[16px]">
                We will respond back in 5–10 mins
              </p>
            </div>
          </div>

          {/* ===== RIGHT SIDE IMAGE ===== */}
          <div className="w-full">
            <img
              src={whatsappapi3}
              alt="WhatsApp Platform Walkthrough"
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>

        </div>
      </section>

      <section className="bg-[#dfe9f0] px-2 md:px-11 py-6 md:py-12">
        <div className="max-w-7xl mx-15">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[460px]">

            {/* ===== LEFT: TEXT ===== */}
            <div className="flex flex-col gap-6 transition-all duration-500">
              {slide.features.map((feature, i) => (
                <div
                  key={i}
                  className={`transition-all duration-500 ${i === slide.features.length - 1 ? "opacity-100" : "opacity-40"
                    }`}
                >
                  <h3
                    className={`font-semibold mb-2 ${i === slide.features.length - 1
                      ? "text-[#294d8f] text-2xl md:text-3xl"
                      : "text-[#1e4896] text-lg md:text-xl"
                      }`}
                  >
                    {feature.title}
                  </h3>
                  {i === slide.features.length - 1 && (
                    <p className="text-gray-700 text-base leading-relaxed">
                      {feature.description}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* ===== RIGHT: IMAGE ===== */}
            <div className="w-full flex justify-center">
              <img
                key={current}
                src={slide.image}
                alt={`Feature ${current + 1}`}
                className="w-full max-w-[600px] h-auto object-contain rounded-2xl transition-all duration-500 ease-in-out"
                style={{ animation: "fadeSlide 0.5s ease-out" }}
              />
            </div>
          </div>

          {/* ===== BOTTOM: DOTS + ARROWS ===== */}
          <div className="flex items-center justify-between mt-12">
            {/* Dots */}
            <div className="flex items-center gap-3">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${i === current
                    ? "w-4 h-4 bg-gray-800"
                    : "w-3 h-3 bg-gray-400 hover:bg-gray-600"
                    }`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-3">
              <button
                onClick={prev}
                aria-label="Previous"
                className="w-12 h-12 rounded-full border border-gray-400 bg-white flex items-center justify-center hover:bg-[#294d8f] hover:text-white hover:border-[#294d8f] transition-all duration-300 text-gray-700 font-semibold text-lg shadow-sm"
              >
                ←
              </button>
              <button
                onClick={next}
                aria-label="Next"
                className="w-12 h-12 rounded-full border border-gray-400 bg-white flex items-center justify-center hover:bg-[#294d8f] hover:text-white hover:border-[#294d8f] transition-all duration-300 text-gray-700 font-semibold text-lg shadow-sm"
              >
                →
              </button>
            </div>
          </div>
        </div>

        <style>{`
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateX(24px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
      </section>

      <section className="bg-white px-2 md:px-11 py-6 md:py-12">
        <div className="max-w-7xl mx-15 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* ===== LEFT: ACCORDION ===== */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-10">
              WhatsApp API Features
            </h2>

            <div className="flex flex-col divide-y divide-gray-200">
              {features.map((feature, i) => (
                <div key={i}>
                  <button
                    onClick={() => toggle(i)}
                    className="w-full flex items-center justify-between py-6 text-left group"
                  >
                    <span
                      className={`text-lg font-semibold transition-colors duration-200 ${activeIndex === i
                        ? "text-[#294d8f]"
                        : "text-[#294d8f] hover:text-blue-900"
                        }`}
                    >
                      {feature.title}
                    </span>
                    <span
                      className={`text-[#294d8f] text-2xl transition-transform duration-300 ${activeIndex === i ? "rotate-180" : "rotate-0"
                        }`}
                    >
                      ⌄
                    </span>
                  </button>

                  {/* Expandable description */}
                  <div
                    className={`overflow-hidden transition-all duration-400 ease-in-out ${activeIndex === i
                      ? "max-h-[400px] opacity-100 pb-6"
                      : "max-h-0 opacity-0"
                      }`}
                  >
                    <p className="text-gray-600 text-base leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ===== RIGHT: IMAGE ===== */}
          <div className="w-full flex justify-center items-start sticky top-24">
            {activeIndex !== null ? (
              <img
                key={activeIndex}
                src={features[activeIndex].image}
                alt={features[activeIndex].title}
                className="w-full max-w-[500px] h-auto object-contain rounded-2xl"
                style={{ animation: "fadeSlideIn 0.4s ease-out" }}
              />
            ) : (
              <img
                src={whatsappapi7}
                alt="WhatsApp API Features"
                className="w-full max-w-[500px] h-auto object-contain rounded-2xl"
              />
            )}
          </div>
        </div>

        <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      </section>

      <section className="bg-white px-2 md:px-11 py-6 md:py-12">
        <div className="max-w-11xl mx-18">
          <div className="bg-[#e8f1f5] rounded-3xl px-8 md:px-16 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* ===== LEFT: TEXT ===== */}
            <div>
              <h2 className="text-2xl md:text-2xl font-semibold text-gray-900 leading-snug mb-6">
                Why Choose Infra Infotech as Your WhatsApp Business API Provider?
              </h2>

              <p className="text-gray-600 text-base leading-relaxed mb-8">
                Infra Infotech empowers businesses to harness the full potential of the
                WhatsApp Business API. With advanced chatbot capabilities, reliable
                performance, personalised message delivery, and a user-friendly dashboard,
                our{" "}
                <Link
                  to="/contact"
                  className="text-purple-600 underline underline-offset-2 hover:text-purple-800 transition-colors"
                >
                  WhatsApp API services
                </Link>{" "}
                help to enhance customer interactions and drive growth.
              </p>

              {/* Checklist */}
              <ul className="flex flex-col gap-4">
                {checkpoints.map((point, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-600 flex items-center justify-center">
                      <svg
                        className="w-3.5 h-3.5 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-700 text-base">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* ===== RIGHT: IMAGE ===== */}
            <div className="w-full flex justify-center items-center">
              <img
                src={whatsappapi11}
                alt="WhatsApp Business API showcase"
                className="w-full max-w-[600px] h-auto object-contain rounded-2xl"
              />
            </div>

          </div>
        </div>
      </section>

      <section className="bg-[#dfe9f0] px-2 md:px-11 py-6 md:py-11">
        <div className="max-w-9xl mx-15 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ===== LEFT SIDE ===== */}
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight mb-6">
              Requirements to Activate WhatsApp Business API
            </h1>

            <p className="text-gray-700 text-[17px] leading-relaxed mb-6">
              To use WhatsApp Business API, businesses need to meet certain requirements.
              First, they must have a verified Facebook Business Manager account.
              A dedicated phone number that is not linked to an existing WhatsApp account is also required.
            </p>

            <p className="text-gray-700 text-[17px] leading-relaxed mb-6 ">

              Businesses need to apply through an official WhatsApp API Provider (BSP) or Meta directly for API access. Once approved, they must set up a hosting environment to manage messages, either through their own servers or a BSP’s cloud service. Additionally, businesses must comply with WhatsApp’s policies, including using approved message templates for outbound communication.

            </p>

            <div className="flex flex-col gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-7 py-3 rounded-md bg-[#294d8f] text-white font-semibold hover:bg-blue-900 transition-all duration-300 w-fit"
              >
                <span className="text-lg">◆</span>
                Free sign up
              </Link>
            </div>
          </div>

          {/* ===== RIGHT SIDE IMAGE ===== */}
          <div className="w-full">
            <img
              src={whatsappapi12}
              alt="WhatsApp Platform Walkthrough"
              className="w-full max-w-[550px] h-auto  object-cover rounded-2xl"
            />
          </div>

        </div>
      </section>
      <FAQ />
      <BookMeeting />




    </>


  );
};

export default WhatsAppHero;