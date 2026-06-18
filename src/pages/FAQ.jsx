import React, { useState } from "react";

const faqs = [
    {
        question: "What is WhatsApp Business API?",
        answer:
            "The WhatsApp Business API is an enterprise-grade messaging solution by Meta that allows businesses to send automated notifications, run marketing campaigns, and manage customer conversations at scale. Unlike the standard WhatsApp Business App, the API supports chatbots, CRM integrations, multi-agent access, and bulk broadcasting. It is designed for medium and large businesses that need reliable, high-volume communication with their customers.",
    },
    {
        question: "Who are the Top WhatsApp Business API Providers in India?",
        answer:
            "Some of the top WhatsApp Business API providers in India include Infra Infotech, Alot Digital Solution, Interakt, Wati, and AiSensy. Infra Infotech stands out as a Meta-certified partner offering advanced chatbot capabilities, multi-agent team inbox, broadcasting, and 24/7 support with a 14-day free trial.",
    },
    {
        question: "How to Choose the Best WhatsApp API Provider in India?",
        answer:
            "When selecting the best WhatsApp Business API provider in India, look for Meta's official partner certification, transparent pricing, and support for DLT registration — a mandatory compliance requirement for business messaging in India. You should also evaluate features like chatbot automation, CRM integrations, broadcast capabilities, and the quality of customer support offered. Infra Infotech checks all these boxes and offers a 14-day free trial so you can test the platform before committing.",
    },
    {
        question: "Can I Send Bulk WhatsApp Messages to Customers in India Using the API?",
        answer:
            "Yes, with the WhatsApp Business API you can send bulk messages to opted-in customers in India. This includes promotional campaigns, transactional alerts, order updates, and reminders. All bulk messaging must comply with WhatsApp's business policies and Meta's messaging guidelines to maintain account health and deliverability.",
    },
    {
        question: "How Can I Get Access to the WhatsApp API in India?",
        answer:
            "To get access to the WhatsApp Business API in India, you need to apply through a Meta-certified Business Solution Provider (BSP) like Infra Infotech. The process involves verifying your Facebook Business Manager account, submitting your business details, and getting approved by Meta. Infra Infotech simplifies this process and helps you go live quickly.",
    },
    {
        question: "What is the Difference Between WhatsApp Business App and WhatsApp Business API?",
        answer:
            "The WhatsApp Business App is a free mobile application designed for small businesses with limited messaging needs. It supports up to 5 devices and does not allow automation or CRM integration. The WhatsApp Business API, on the other hand, is built for medium to large businesses that require automation, chatbots, multi-agent support, bulk broadcasting, and seamless integration with CRM and e-commerce platforms.",
    },
    {
        question: "What is the Pricing for WhatsApp API in India?",
        answer:
            "WhatsApp Business API pricing in India is based on Meta's conversation-based billing model, where charges apply per 24-hour conversation window — categorised into marketing, utility, authentication, and service conversations. Pricing varies by category and country. Infra Infotech offers competitive platform plans on top of Meta's conversation charges, with a 14-day free trial to get started.",
    },
    {
        question: "Who are the top 5 WhatsApp Business API providers?",
        answer:
            "The top 5 WhatsApp Business API providers globally include Infra Infotech, Alot Digital Solution, Twilio, Infobip, and Wati. Each offers different strengths — Infra Infotech is known for its user-friendly dashboard, strong India-specific support, chatbot capabilities, and competitive pricing.",
    },
    {
        question: "How to get the official WhatsApp Business API?",
        answer:
            "You can get the official WhatsApp Business API by partnering with a Meta-authorised Business Solution Provider (BSP). Simply sign up with Infra Infotech, complete the business verification process, and our team will help you get your WhatsApp API access within a few business days.",
    },
    {
        question: "Is the WhatsApp Business API free to use?",
        answer:
            "The WhatsApp Business API itself is not free — Meta charges businesses per conversation window. However, Infra Infotech offers a 14-day free trial so you can explore the platform and test features before committing to a paid plan. After the trial, plans are available at competitive rates.",
    },
    {
        question: "What is the cost of utility conversation on the WhatsApp Business API?",
        answer: null,
        bullets: [
            { label: "Starter Plan", value: "16 paise/message" },
            { label: "Basic Plan", value: "15 paise/message" },
            { label: "Enterprise Plan", value: "14 paise/message" },
        ],
    },
    {
        question: "What is the cost of authentication conversation on the WhatsApp Business API?",
        answer:
            "Authentication conversations on the WhatsApp Business API are used for sending OTPs and verification codes. Meta charges a fixed rate per authentication conversation window, and Infra Infotech passes on the most competitive rates available for Indian businesses.",
    },
    {
        question: "What is the cost of marketing conversation on the WhatsApp Business API?",
        answer:
            "Marketing conversations on the WhatsApp Business API cover promotional messages, offers, and campaigns sent to customers. Charges apply per 24-hour conversation window initiated by the business. Infra Infotech offers transparent pricing with no hidden costs.",
    },
    {
        question: "What are the Requirements for accessing WhatsApp API?",
        answer:
            "To access the WhatsApp Business API you need: a verified Facebook Business Manager account, a dedicated phone number not linked to any existing WhatsApp account, a valid business website and email, compliance with Meta's business and commerce policies, and a partnership with a Meta-authorised BSP like Infra Infotech.",
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

    return (
        <section className="bg-white px-2 md:px-11 py-6 md:py-12">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 text-center mb-18">
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
    );
};

export default FAQ;