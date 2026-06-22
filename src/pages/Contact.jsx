import React, { useState } from "react";
import { Link } from "react-router-dom";

// Import all contact images
import contact1 from "../assets/Images/contact1.png";
import contact2 from "../assets/Images/contact2.png";
import contact3 from "../assets/Images/contact3.png";
import contact4 from "../assets/Images/contact4.png";
import mansi from "../assets/Images/mansi.webp";
import kousen from "../assets/Images/kousen.jpeg";
import riya from "../assets/Images/riya.avif";
import sahil1 from "../assets/Images/sahil1.jpeg";
import ramzan from "../assets/Images/ramzan.jpeg";
import BookMeeting from "./Bookmeeting";
import saba from "../assets/Images/saba.avif";


// Sales executives data - using contact images
const executives = [
  { name: "Sahil", img: sahil1 },
  { name: "Faraah", img: mansi },
  { name: "Kousen", img: kousen },
  { name: "Aayesha", img: riya },
  { name: "Ramzan", img: ramzan },
  { name: "Siba", img: saba },

];

const products = [
  "WhatsApp Business API",
  "RCS Messaging",
  "Bulk SMS",
  "Voice Solutions",
  "Chatbot",
  "Multi Channel Messaging",
];

const countries = [
  "India", "United Arab Emirates", "United States", "United Kingdom",
  "Saudi Arabia", "Singapore", "Australia", "Canada", "Germany", "France",
];

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    company: "", country: "", product: "", reason: "", message: "", agreed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `
🔥 NEW CONTACT FORM LEAD

👤 Name: ${form.firstName} ${form.lastName}

📧 Email: ${form.email}

📱 Phone: ${form.phone}

🏢 Company: ${form.company}

🌍 Country: ${form.country}

📦 Product: ${form.product}

📌 Reason: ${form.reason}

💬 Message:
${form.message}
`;

    window.open(
      `https://wa.me/919004100213?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank"
    );
  };

  return (
    <>
      <div className="bg-white">

        {/* ===== HERO SECTION ===== */}
        <section
          className="w-full py-20 px-6 md:px-16 overflow-hidden"
          style={{ backgroundColor: "white" }}      >
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* LEFT */}
            <div>
              <h1 className="text-3xl md:text-5xl font-semibold text-gray-500 leading-tight">
                Let's build your business relationships through <span className="text-blue-600">conversations</span>
              </h1>
              <p className="mt-6 text-gray-600 text-lg">
                The art of business conversations: Creating lasting relationships for success
              </p>
              <Link
                to="/meeting"
                className="inline-flex items-center gap-2 mt-8 px-7 py-2 rounded-md font-semibold text-white transition-all duration-300 hover:opacity-90"
                style={{ background: "#1e40af" }}
              >
                Schedule a meeting <span>›</span>
              </Link>
            </div>

            {/* RIGHT - FLOATING TEAM CARDS */}
            <div className="relative h-[420px] flex items-center justify-center">

              {/* Main center image */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[260px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 z-20">
                <img src={contact1} alt="Team" className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-white text-xs font-medium">How can we help you? 😊</p>
                </div>
              </div>

              {/* Top right card */}
              <div className="absolute top-4 right-0 bg-white rounded-xl shadow-xl px-4 py-3 flex items-center gap-3 z-30 w-[200px]">
                <div className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0">
                  <img src={contact3} alt="Haritha" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-800">Haritha</p>
                  <p className="text-[10px] text-gray-500">Product Specialist</p>
                </div>
                <span className="ml-auto text-gray-400 text-xs">›</span>
              </div>

              {/* Bottom left card */}
              <div
                className="absolute bottom-10 left-0 rounded-xl shadow-xl px-4 py-2 flex items-center gap-3 z-30 w-[200px]"
                style={{ background: "#1e3a8a" }}
              >
                <div className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0">
                  <img src={contact2} alt="Vidya" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Vidya</p>
                  <p className="text-[10px] text-blue-200">VP Sales</p>
                </div>
                <span className="ml-auto text-white text-xs">›</span>
              </div>

              {/* Small triangle decorations */}
              <div className="absolute top-20 left-10 w-0 h-0 border-l-[14px] border-r-[14px] border-b-[20px] border-l-transparent border-r-transparent border-b-blue-400 opacity-60"></div>
              <div className="absolute bottom-20 right-10 w-0 h-0 border-l-[10px] border-r-[10px] border-b-[15px] border-l-transparent border-r-transparent border-b-blue-300 opacity-40"></div>

            </div>
          </div>
        </section>

        {/* ===== CONTACT INFO STRIP ===== */}
        <section className="py-7 px-6 md:px-16 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* Call */}
            <div className="flex items-center gap-5">
              <div className="w-19 h-19 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#dfecf5" }}>
                <svg className="w-9 h-9" fill="none" stroke="#1e40af" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-blue-900 text-xl">Click to call</h3>
                <a href="tel:+919004100213" className="text-gray-600 hover:text-blue-700 transition-colors text-[17px]">+91 9004100213</a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-5">
              <div className="w-19 h-19 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#dfecf5" }}>
                <svg className="w-9 h-9" fill="none" stroke="#1e40af" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-blue-900 text-xl">Send us an email</h3>
                <a href="mailto:support@infrainfotech.com" className="text-gray-600 hover:text-blue-700 transition-colors text-[17px]">support@infrainfotech.com</a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-center gap-5">
              <div className="w-19 h-19 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#dfecf5" }}>
                <svg className="w-9 h-9" fill="#1e40af" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-blue-900 text-lg">Connect on whatsapp</h3>
                <a href="https://wa.me/919004100213" target="_blank" rel="noopener noreferrer" className="text-gray-600 text-[17px] hover:text-blue-700 transition-colors">Talk to us with in 2-3 mins</a>
              </div>
            </div>

          </div>
        </section>

        {/* ===== FORM + SALES SECTION ===== */}
        <section className="py-20 px-6 md:px-16 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* LEFT - SALES EXECUTIVES + TABS */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                What do you need assistance for?
              </h2>
              <p className="mt-4 text-gray-500 text-base">Our team is ready to guide you!</p>

              {/* OUR SALES EXECUTIVES */}
              <div className="mt-10">
                <h3 className="text-sm font-bold text-gray-800 uppercase tracking-widest mb-6">Our Sales Executives</h3>
                <div className="grid grid-cols-3 gap-6">
                  {executives.map((exec, i) => (
                    <div key={i} className="flex flex-col items-center gap-2">
                      <div className="w-19 h-19 rounded-full overflow-hidden shadow-md" style={{ border: "3px solid #1e4f" }}>
                        <img src={exec.img} alt={exec.name} className="w-full bg-[#dfecf5] h-full object-cover" />
                      </div>
                      <span className="text-sm text-gray-700 text-center font-medium">{exec.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CATEGORY TABS */}
              <div className="mt-10 divide-y divide-gray-200 border-t border-gray-200">

                {/* Sales */}
                <div className="py-5">
                  <span className="inline-block px-5 py-1.5 rounded-full text-sm font-semibold text-blue-700 bg-blue-100">Sales</span>
                  <p className="mt-2 text-gray-500 text-sm">Speak to our friendly team for sales purposes.</p>
                  <a href="mailto:info@greenadsglobal.com" className="inline-block mt-2 text-blue-700 font-semibold text-sm underline underline-offset-2">Talk to our expert</a>
                </div>

                {/* Support */}
                <div className="py-5">
                  <span className="inline-block px-5 py-1.5 rounded-full text-sm font-semibold text-blue-700 bg-blue-50 border border-blue-200">Support</span>
                  <p className="mt-2 text-gray-500 text-sm">Speak to our friendly team for support purposes.</p>
                  <a href="mailto:support@greenadsglobal.com" className="inline-block mt-2 text-blue-700 font-semibold text-sm underline underline-offset-2">Talk to our expert</a>
                </div>

                {/* Enquiries */}
                <div className="py-5">
                  <span className="inline-block px-5 py-1.5 rounded-full text-sm font-semibold text-orange-600 bg-orange-100">Enquiries</span>
                  <p className="mt-2 text-gray-500 text-sm">Speak to our friendly team for other enquiries.</p>
                  <a href="mailto:info@greenadsglobal.com" className="inline-block mt-2 text-blue-700 font-semibold text-sm underline underline-offset-2">Talk to our expert</a>
                </div>

              </div>
            </div>

            {/* RIGHT - CONTACT FORM */}
            <div className="rounded-3xl p-8 md:p-10" style={{ background: "#dfecf5" }}>
              <form onSubmit={handleSubmit} className="space-y-5">

                {/* First + Last Name */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First name</label>
                    <input
                      type="text" name="firstName" value={form.firstName} onChange={handleChange}
                      placeholder="Enter your first name*"
                      className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 text-sm text-gray-700 focus:outline-none focus:border-blue-400 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last name</label>
                    <input
                      type="text" name="lastName" value={form.lastName} onChange={handleChange}
                      placeholder="Enter your last name*"
                      className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 text-sm text-gray-700 focus:outline-none focus:border-blue-400 transition"
                    />
                  </div>
                </div>

                {/* Email + Phone */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email" name="email" value={form.email} onChange={handleChange}
                      placeholder="Enter your mail address*"
                      className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 text-sm text-gray-700 focus:outline-none focus:border-blue-400 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone number</label>
                    <div className="flex gap-2">
                      <div className="flex items-center gap-1 px-3 py-3 rounded-lg bg-white border border-gray-200 text-sm flex-shrink-0">
                        <span>🇮🇳</span><span className="text-gray-500">▾</span>
                      </div>
                      <input
                        type="tel" name="phone" value={form.phone} onChange={handleChange}
                        placeholder="074104 10123"
                        className="flex-1 px-4 py-3 rounded-lg bg-white border border-gray-200 text-sm text-gray-700 focus:outline-none focus:border-blue-400 transition"
                      />
                    </div>
                  </div>
                </div>

                {/* Company + Country */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                    <input
                      type="text" name="company" value={form.company} onChange={handleChange}
                      placeholder="Enter your company name*"
                      className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 text-sm text-gray-700 focus:outline-none focus:border-blue-400 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                    <select
                      name="country" value={form.country} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 text-sm text-gray-700 focus:outline-none focus:border-blue-400 transition"
                    >
                      <option value="">Select a country...</option>
                      {countries.map((c) => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                </div>

                {/* Choose a Product */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Choose a Product</label>
                  <select
                    name="product" value={form.product} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 text-sm text-gray-700 focus:outline-none focus:border-blue-400 transition"
                  >
                    <option value="">Select one...</option>
                    {products.map((p) => <option key={p} value={p}>{p}</option>)}
                  </select>
                </div>

                {/* Reason Radio */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">May I know your reason for reaching us out?</label>
                  <div className="flex gap-8">
                    {["Sales", "Partnership"].map((r) => (
                      <label key={r} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio" name="reason" value={r}
                          checked={form.reason === r} onChange={handleChange}
                          className="w-4 h-4 accent-blue-600"
                        />
                        <span className="text-sm text-gray-700">{r}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">How can we help?</label>
                  <textarea
                    name="message" value={form.message} onChange={handleChange}
                    placeholder="What are your thoughts? Send us a message."
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 text-sm text-gray-700 focus:outline-none focus:border-blue-400 transition resize-none"
                  />
                </div>

                {/* Checkbox */}
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox" name="agreed" checked={form.agreed} onChange={handleChange}
                    className="mt-1 w-4 h-4 accent-blue-600 flex-shrink-0"
                  />
                  <span className="text-xs text-gray-600 leading-relaxed">
                    By clicking submit, I agree to the terms & conditions and privacy policy and I am giving my consent to receive updates through SMS/email
                  </span>
                </label>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl text-white font-semibold text-base transition-all duration-300 hover:opacity-90 shadow-lg"
                  style={{ background: "#1e3a8a" }}
                >
                  Send message
                </button>

              </form>
            </div>

          </div>
        </section>

        {/* ===== GOOGLE MAP ===== */}
        <section className="w-full md:px-5 overflow-hidden h-[500px]">
          <iframe
            title="Infra Infotech Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7163.395465896266!2d72.8301832412275!3d19.188987328155882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b758ea48e839%3A0xde0bcfb0d1215272!2sINFRA%20INFOTECH%20PRIVATE%20LIMITED%20(%20Enterprise%20Messaging%20%26%20Communication%20Solutions%20)!5e1!3m2!1sen!2sin!4v1781269265063!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>

        {/* ===== NEWSLETTER ===== */}
        <section className="py-20 px-6 md:px-16 bg-white text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
            Unlock the latest news and trends – Subscribe<br />to our newsletter today
          </h2>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 w-full px-5 py-3.5 rounded-xl border border-gray-200 text-sm text-gray-700 focus:outline-none focus:border-blue-400 shadow-sm"
            />
            <button
              className="px-8 py-3.5 rounded-xl text-white font-semibold text-sm transition-all duration-300 hover:opacity-90 whitespace-nowrap shadow-lg"
              style={{ background: "#1e3a8a" }}
            >
              Subscribe Now
            </button>
          </div>
        </section>

      </div>
      <BookMeeting />

    </>
  );
}