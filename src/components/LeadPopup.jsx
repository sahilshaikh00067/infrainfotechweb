import React, { useEffect, useState } from "react";

const LeadPopup = () => {
    const [showPopup, setShowPopup] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        company: "",
        service: "",
        message: "",
    });

    useEffect(() => {
        const popupClosed = sessionStorage.getItem("popupClosed");

        if (!popupClosed) {
            const timer = setTimeout(() => {
                setShowPopup(true);
            }, 10000);

            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setShowPopup(false);

        setTimeout(() => {
            setShowPopup(true);
        }, 80000);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const message = `
🔥 NEW WEBSITE LEAD

👤 Name: ${formData.name}
📧 Email: ${formData.email}
📱 Mobile: ${formData.mobile}
🏢 Company: ${formData.company}
📌 Service: ${formData.service}
`;

        window.open(
            `https://wa.me/919004100213?text=${encodeURIComponent(message)}`,
            "_blank"
        );

        sessionStorage.setItem("popupClosed", "true");
        setShowPopup(false);
    };

    if (!showPopup) return null;

    return (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/70 backdrop-blur-md px-4 animate-fadeIn">

            <div className="relative w-full max-w-[520px] overflow-hidden rounded-[28px] bg-white shadow-[0_40px_120px_rgba(0,0,0,0.30)]">

                {/* Decorative Blur */}
                <div className="absolute -top-16 -right-16 h-36 w-36 rounded-full bg-blue-400/20 blur-3xl"></div>
                <div className="absolute -bottom-16 -left-16 h-36 w-36 rounded-full bg-cyan-400/20 blur-3xl"></div>

                {/* Header */}
                <div className="relative bg-gradient-to-r from-[#2563eb] via-[#307eba] to-[#60a5fa] px-7 py-5">

                    <button
                        onClick={handleClose}
                        className="absolute right-4 top-3 text-white/80 hover:text-white text-3xl transition-all duration-300 hover:rotate-90"
                    >
                        ×
                    </button>

                    <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1.5 mb-3">
                        <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
                        <span className="text-xs text-white font-medium">
                            Talk To Our Team
                        </span>
                    </div>

                    <h2 className="text-2xl font-bold text-white mb-1">
                        Let's Grow Your Business 🚀
                    </h2>

                    <p className="text-white/90 text-xs leading-relaxed">
                        Get a personalised demo and discover how our communication platform
                        can increase engagement and conversions.
                    </p>

                </div>

                {/* Form */}
                <div className="relative p-5">

                    <div className="space-y-3">

                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-[#307eba] focus:bg-white focus:shadow-lg"
                        />

                        <input
                            type="tel"
                            name="mobile"
                            placeholder="Mobile Number"
                            required
                            value={formData.mobile}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-[#307eba] focus:bg-white focus:shadow-lg"
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-[#307eba] focus:bg-white focus:shadow-lg"
                        />

                        <div className="flex gap-3">
                            <input
                                type="text"
                                name="company"
                                placeholder="Company Name"
                                value={formData.company}
                                onChange={handleChange}
                                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-[#307eba] focus:bg-white focus:shadow-lg"
                            />

                            <select
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-[#307eba] focus:bg-white focus:shadow-lg"
                            >
                                <option value="">Select Service</option>
                                <option>WhatsApp API</option>
                                <option>Bulk SMS</option>
                                <option>RCS Messaging</option>
                                <option>Voice Call</option>
                                <option>Email Marketing</option>
                            </select>
                        </div>

                        <button
                            type="button"
                            onClick={handleSubmit}
                            className="group w-full rounded-xl bg-gradient-to-r from-[#2563eb] via-[#307eba] to-[#60a5fa] py-3 text-white font-semibold text-base shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(48,126,186,0.40)]"
                        >
                            <span className="flex items-center justify-center gap-2">
                                Request Free Demo
                                <span className="transition-transform duration-300 group-hover:translate-x-1">
                                    →
                                </span>
                            </span>
                        </button>

                    </div>

                    {/* Trust Badges */}
                    <div className="mt-4 flex flex-wrap justify-center gap-2">

                        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-[#307eba]">
                            ✓ Free Setup
                        </span>

                        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-[#307eba]">
                            ✓ Instant Demo
                        </span>

                        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-[#307eba]">
                            ✓ 24/7 Support
                        </span>

                        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-[#307eba]">
                            ✓ Enterprise Ready
                        </span>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default LeadPopup;