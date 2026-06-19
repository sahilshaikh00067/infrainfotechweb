import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Images/logo.png";
import google from "../assets/Images/google.png";
import meta from "../assets/Images/meta.png";

export default function Footer() {
  return (
    <footer className="bg-white pt-25 pb-0 px-2 md:px-2 border-t border-gray-100">

      {/* TOP SECTION */}
      <div className="max-w-7xl mx-15 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-70">

        {/* LEFT - LOGO + PARTNER BADGES */}
        <div>
          <img src={logo} alt="Infra Infotech" className="h-20 object-contain" />

          <div className="flex gap-4 mt-8">
            <div className="border border-gray-200 rounded-xl px-5 py-4 flex flex-col items-center justify-center w-[250px] h-[100px] shadow-sm">
              <img src={google} alt="Google Partner" className="h-15 object-contain" />
              <span className="text-[13px] text-gray-500 mt-1 font-medium">Google Partner</span>
            </div>
            <div className="border border-gray-200 rounded-xl px-5 py-4 flex flex-col items-center justify-center w-[250px] h-[100px] shadow-sm">
              <img src={meta} alt="Meta Tech Provider" className="h-15 object-contain" />
              <span className="text-[13px] text-gray-500 mt-1 font-medium">Tech Provider</span>
            </div>
          </div>
        </div>

        {/* RIGHT - NAV COLUMNS */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-15">

          {/* SOLUTIONS */}
          <div>
            <h4 className="text-[#205b7f] font-semibold uppercase tracking-wider mb-4">Solutions</h4>
            <ul className="space-y-3">
              <li><Link to="/rcs" className="text-gray-600 text-sm hover:text-black transition-colors duration-200">RCS Messaging</Link></li>
              <li><Link to="/whatsappapi" className="text-gray-600 text-sm hover:text-black transition-colors duration-200">WhatsApp API</Link></li>
              <li><Link to="/voice" className="text-gray-600 text-sm hover:text-black transition-colors duration-200">Voice Solutions</Link></li>
              <li><Link to="/bulksms" className="text-gray-600 text-sm hover:text-black transition-colors duration-200">Bulk SMS</Link></li>
              <li><Link to="/multi-channel" className="text-gray-600 text-sm hover:text-black transition-colors duration-200">Enterprise Messaging Service</Link></li>
            </ul>
          </div>

          {/* INDUSTRIES WE SERVE */}
          <div>
            <h4 className="text-[#205b7f] font-semibold uppercase tracking-wider mb-4">Industries We Serve</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-600 text-sm hover:text-black transition-colors duration-200">Healthcare</Link></li>
              <li><Link to="/" className="text-gray-600 text-sm hover:text-black transition-colors duration-200">Automobiles</Link></li>
              <li><Link to="/" className="text-gray-600 text-sm hover:text-black transition-colors duration-200">Finance</Link></li>
              <li><Link to="/" className="text-gray-600 text-sm hover:text-black transition-colors duration-200">Retail</Link></li>
              <li><Link to="/" className="text-gray-600 text-sm hover:text-black transition-colors duration-200">Real Estate</Link></li>
              <li><Link to="/" className="text-gray-600 text-sm hover:text-black transition-colors duration-200">Ecommerce</Link></li>
              <li><Link to="/" className="text-gray-600 text-sm hover:text-black transition-colors duration-200">Educational</Link></li>
            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <h4 className="text-[#205b7f] font-semibold uppercase tracking-wider mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-600 text-sm hover:text-black transition-colors duration-200">Developers</Link></li>
              <li><Link to="/about" className="text-gray-600 text-sm hover:text-black transition-colors duration-200">Blog</Link></li>
              <li><Link to="/about" className="text-gray-600 text-sm hover:text-black transition-colors duration-200">Tutorials</Link></li>
              <li><Link to="/about" className="text-gray-600 text-sm hover:text-black transition-colors duration-200">Events and Webinars</Link></li>
              <li><Link to="/contact" className="text-gray-600 text-sm hover:text-black transition-colors duration-200">Pricing</Link></li>
              <li><Link to="/contact" className="text-gray-600 text-sm hover:text-black transition-colors duration-200">Contact</Link></li>
            </ul>
          </div>

          {/* WHO WE ARE */}
          <div>
            <h4 className="text-[#205b7f] font-semibold uppercase tracking-wider mb-4">Who We Are</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-600 text-sm hover:text-black transition-colors duration-200">About</Link></li>
              <li><Link to="/" className="text-gray-600 text-sm hover:text-black transition-colors duration-200">Partnership</Link></li>
              <li><Link to="/" className="text-gray-600 text-sm hover:text-black transition-colors duration-200">Career</Link></li>
              <li><Link to="/contact" className="text-gray-600 text-sm hover:text-black transition-colors duration-200">Contact</Link></li>
            </ul>
          </div>

        </div>
      </div>

      {/* SOCIAL ICONS */}
      <div className="max-w-7xl mx-15 mt-15 flex gap-4">

        {/* YouTube */}
        <a href="https://youtube.com/@infrainfotech2157?si=5SNYsD7vcsnQKtG8" target="_blank" rel="noopener noreferrer"
          className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors duration-200">
          <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2 31.4 31.4 0 000 12a31.4 31.4 0 00.5 5.8 3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1A31.4 31.4 0 0024 12a31.4 31.4 0 00-.5-5.8zM9.75 15.5v-7l6.5 3.5-6.5 3.5z" />
          </svg>
        </a>

        {/* X (Twitter) */}
        <a href="https://x.com/infrainfotech1?s=20" target="_blank" rel="noopener noreferrer"
          className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors duration-200">
          <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>

        {/* WhatsApp */}
        <a href="https://wa.me/919004100213" target="_blank" rel="noopener noreferrer"
          className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors duration-200">
          <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>

        {/* Facebook */}
        <a href="https://www.facebook.com/share/1GFmBhWpHk/" target="_blank" rel="noopener noreferrer"
          className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors duration-200">
          <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </a>

        {/* LinkedIn */}
        <a href="https://www.linkedin.com/company/digital-infra-infotech-private-limited/" target="_blank" rel="noopener noreferrer"
          className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors duration-200">
          <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>

        {/* Instagram */}
        <a href="https://www.instagram.com/infrainfotech?igsh=YnRyc3Z5OWxjNXJi" target="_blank" rel="noopener noreferrer"
          className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors duration-200">
          <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
          </svg>
        </a>
      </div>

      {/* SEO LINKS */}
      <div className="max-w-7xl mx-15 mt-10 space-y-3 text-sm text-gray-500">
        <p>
          <span className="font-semibold text-black">WhatsApp API –</span>{" "}
          {["WhatsApp API Provider", "WhatsApp Chatbot", "WhatsApp API Pricing", "WhatsApp Business API", "WhatsApp API Integration", "WhatsApp Marketing", "WhatsApp API Pricing 2025"].map((item, i, arr) => (
            <span key={item}>
              <Link to="/whatsappapi" className="hover:underline">{item}</Link>
              {i < arr.length - 1 && <span className="mx-1 text-gray-400">|</span>}
            </span>
          ))}
        </p>
        <p>
          <span className="font-semibold text-black">RCS –</span>{" "}
          {["RCS Business Messaging", "RCS Pricing", "RCS SMS", "RCS Messaging", "RCS Messaging Service", "RCS Messaging Provider", "RCS Messaging Service", "RCS Messaging Android", "RCS Chat"].map((item, i) => (
            <span key={i}>
              <Link to="/rcs" className="hover:underline">{item}</Link>
              {i < 8 && <span className="mx-1 text-gray-400">|</span>}
            </span>
          ))}
        </p>
        <p>
          <span className="font-semibold text-black">Bulk SMS –</span>{" "}
          {["Bulk SMS Service Provider", "Bulk SMS Service", "SMS Pricing"].map((item, i, arr) => (
            <span key={item}>
              <Link to="/bulksms" className="hover:underline">{item}</Link>
              {i < arr.length - 1 && <span className="mx-1 text-gray-400">|</span>}
            </span>
          ))}
        </p>
        <p>
          <span className="font-semibold text-black">Voice Call Service –</span>{" "}
          {["Bulk Voice Call Service", "Voice Calling App", "Voice Call", "Voice Call API", "Voice Pricing"].map((item, i, arr) => (
            <span key={item}>
              <Link to="/voice" className="hover:underline">{item}</Link>
              {i < arr.length - 1 && <span className="mx-1 text-gray-400">|</span>}
            </span>
          ))}
        </p>
      </div>

      {/* COMPANY DESC */}
      <div className="max-w-7xl mx-15 mt-6">
        <p className="text-[16px] text-gray-500 leading-relaxed">
          Infra Infotech is one of the leading CPaaS service provider. We offer an array of services such as WhatsApp Business API,
          WhatsApp Business Cloud API, RCS messaging, Bulk sms, Voice call, Cloud telephony services and many more under one roof.
        </p>
      </div>

      {/* BOTTOM BAR */}
      <div className="max-w-7xl mx-15 mt-20 py-5 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[14px] text-gray-800">© 2022. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="/privacy-policy" className="text-sm text-gray-800 hover:text-black transition-colors duration-200">Privacy Policy</Link>
          <Link to="/terms-of-service" className="text-sm text-gray-800 hover:text-black transition-colors duration-200">Terms of Service</Link>
        </div>
      </div>

    </footer>
  );
} 