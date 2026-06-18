import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import about1 from "../assets/Images/about1.webp";
import about2 from "../assets/Images/about2.png";
import about3 from "../assets/Images/about3.png";
import about4 from "../assets/Images/about4.png";
import about5 from "../assets/Images/about5.png";
import about6 from "../assets/Images/about6.svg";
import about7 from "../assets/Images/about7.png";
import about8 from "../assets/Images/about8.png";
import about9 from "../assets/Images/about9.png";
import about10 from "../assets/Images/about10.png";
import about11 from "../assets/Images/about11.png";
import BookMeeting from "./Bookmeeting";

const stats = [
  { value: "5000+", label: "Registered Users" },
  { value: "100,000+", label: "Successful Campaigns" },
  { value: "1 Billion+", label: "Messages & Calls Processing Per Month" },
  { value: "1000+", label: "Chatbots" },
];

const awards = [
  {
    year: "2024",
    title: "MEFFY's Award",
  },
  {
    year: "2023",
    title: "Tier2 A2P Messaging Vendor in Rocco's A2P SMS Vendor Benchmarking Report",
  },
  {
    year: "2023",
    title: "Google partner for RBM the solution in Asia pacific, middle east, Africa",
  },
  {
    year: "2023",
    title: "International hubbing With MNO",
  },
];

// Timeline / "Be part of our story" milestones
const milestones = [
  {
    year: "2023",
    position: "top",
    points: [
      { text: "Omnichannel Platform launched" },
      { text: "Serving 12+ Countries" },
      { text: "5000+ Customers" },
    ],
  },
  {
    year: "2021",
    position: "bottom",
    points: [{ text: "AI Based Chatbot" }],
  },
  {
    year: "2020",
    position: "top",
    points: [
      { text: "International Messaging Hubbing" },
      { text: "Google RBM Partners" },
      { text: "2000+ Customers" },
    ],
  },
  {
    year: "2018",
    position: "bottom",
    points: [
      { text: "4 Telecom Connectivity" },
      { text: "International Messaging Connectivity" },
      { text: "Crossed 1000 Customers" },
    ],
  },
  {
    year: "2016",
    position: "top",
    points: [{ text: "Company established" }],
  },
];

// Solutions slider data
const solutions = [
  {
    title: "WhatsApp Business API",
    description:
      "Build trust, engage customers, and grow your brand with WhatsApp Business API",
    image: about8,
  },
  {
    title: "Bulk SMS",
    description:
      "Send instant, reliable, and high-volume messages for alerts, promotions, and transactional updates",
    image: about9,
  },
  {
    title: "Voice Solutions",
    description:
      "Scale up your conversion rates through automated outbound calls",
    image: about10,
  },
  {
    title: "RCS Messaging",
    description:
      "Rich media and guided responses give an app-like experience, right in the user's SMS inbox",
    image: about11,
    overlays: [about11, about11],
  },
];

// Duplicate the list so the marquee loops seamlessly
const loopedSolutions = [...solutions, ...solutions];

const MilestonePoint = ({ point }) => (
  <li className="flex items-start gap-2 text-left">
    <img src={about5} alt="" className="w-4 h-4 mt-1 flex-shrink-0" />
    <span className="text-gray-800 text-sm leading-relaxed">{point.text}</span>
  </li>
);

const About = () => {
  const trackRef = useRef(null);

  // Pause the marquee on hover / touch, resume on leave
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const pause = () => track.classList.add("paused");
    const resume = () => track.classList.remove("paused");

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
    <div className=" bg-white text-gray-800">
      {/* Global animation styles */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 45s linear infinite;
        }
        .animate-marquee.paused {
          animation-play-state: paused;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-in-up {
          opacity: 0;
          animation: fadeInUp 0.8s ease-out forwards;
        }

        @keyframes pulseRing {
          0% { box-shadow: 0 0 0 0 rgba(48, 126, 186, 0.55); }
          70% { box-shadow: 0 0 0 14px rgba(48, 126, 186, 0); }
          100% { box-shadow: 0 0 0 0 rgba(48, 126, 186, 0); }
        }
        .pulse-dot {
          animation: pulseRing 2.4s ease-out infinite;
        }

        @keyframes glowMove {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.55; }
          50% { transform: translate(40px, -30px) scale(1.15); opacity: 0.8; }
        }
        .glow-blob {
          animation: glowMove 12s ease-in-out infinite;
        }
      `}</style>

      {/* ===================== HERO SECTION ===================== */}
      <section className="px-4 md:px-6 py-6 md:py-24">
        <div className="max-w-7xl mx-15 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: heading + copy + CTA */}
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-500 leading-tight mb-4">
              Simplifying Business Communication
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed max-w-xl mb-8">
              Infra Infotech provides top-notch communication solutions. With
              our RCS messaging, WhatsApp API, Bulk SMS, and Voice calls, we
              help businesses reach their audiences easily and effectively.
              Let&apos;s make communication simpler together.
            </p>
            <div className="mt-10">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-6 py-2 rounded-sm bg-[#307eba] text-white font-semibold hover:bg-black transition-all duration-300 shadow-lg"
              >
                Start a free trial
                <span className="text-xl">→</span>
              </Link>
            </div>
          </div>

          {/* Right: big hero image */}
          <div className="w-full">
            <img
              src={about1}
              alt="Customer support agent working on laptop"
              className="w-full h-[380px] md:h-[370px] object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* ===================== STATS SECTION ===================== */}
      <section className="px-6 md:px6 py-20">
        <div className="max-w-8xl mx-35 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border-l border-gray-300 pl-13 first:border-l-0 first:pl-0 lg:first:border-l-0"
            >
              <p className="text-3xl md:text-5xl font-semibold text-[#307eba]">
                {stat.value}
              </p>
              <p className="text-gray-500 mt-3 text-[19px]">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== QUOTE / CEO SECTION ===================== */}
      <section className="bg-blue-50 px-6 md:px-16 py-16 md:py-24">
        <div className="max-w-7xl mx-15">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-600 leading-snug mb-6">
            We help businesses build stronger customer connections with
            versatile messaging solutions
          </h2>
          <p className="text-gray-800 leading-relaxed text-[18px] font-semibold mb-6">
            &quot;Rapid digitalisation, alongside advances in technology and
            AI, is prompting businesses worldwide to rethink how they serve
            and engage with their customers. Infra Infotech offers the
            products, capabilities, and expertise to meet these evolving
            demands.&quot;
          </p>
          <p className="font-semibold text-blue-700 mb-2">
            Rehan Shaikh, CEO
          </p>
          <img
            src={about2}
            alt="CEO signature"
            className="h-24 md:h-28 object-contain"
          />
        </div>
      </section>

      {/* ===================== AWARDS SECTION ===================== */}
      <section className="px-4 md:px-12 py-12 md:py-24">
        <div className="max-w-7xl mx-15">
          <span className="inline-block bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-md mb-4">
            AWARDS AND RECOGNITIONS
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-7">
            Celebrating Our Achievements and Industry Recognitions
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award) => (
              <div
                key={award.title}
                className="bg-[#F7F5EE] rounded-2xl p-6 flex flex-col items-center text-center min-h-[280px]"
              >
                <p className="text-xl font-semibold text-blue-700 mb-6">
                  {award.year}
                </p>
                <img
                  src={about3}
                  alt="Award laurel icon"
                  className="w-28 h-28 object-contain mb-6"
                />
                <p className="text-gray-800 flex-1">{award.title}</p>
                <button className="mt-6 w-full h-2 bg-blue-700 rounded-full opacity-90 hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== "BE PART OF OUR STORY" TIMELINE ===================== */}
      <section
        className="relative px-6 md:px-16 py-20 md:py-28 text-white overflow-hidden"
        style={{
          backgroundImage: `url(${about4})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Base gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1830]/95 via-[#15294f]/90 to-[#0c2230]/95" />

        {/* Decorative glowing blobs for a premium feel */}
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#307eba]/30 rounded-full blur-3xl glow-blob" />
        <div
          className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl glow-blob"
          style={{ animationDelay: "3s" }}
        />

        <div className="relative max-w-7xl mx-15">
          <div className="text-center mb-20 fade-in-up">
            <span className="inline-block text-xs md:text-sm font-semibold tracking-[0.2em] text-blue-300 uppercase mb-3">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-5xl font-semibold mb-4 bg-gradient-to-r from-white via-blue-100 to-[#9cc3ee] bg-clip-text text-transparent">
              Be part of our story
            </h2>
            <p className="text-gray-300 text-lg">
              Infra Infotech: Connecting Businesses Worldwide
            </p>
            <div className="mt-6 mx-auto h-[3px] w-24 rounded-full bg-gradient-to-r from-[#307eba] to-blue-300" />
          </div>

          {/* Timeline track */}
          <div className="relative hidden md:block">
            {/* horizontal line */}
            <div className="absolute top-1/2 left-0 right-0 h-[3px] bg-gradient-to-r from-white/10 via-white/40 to-white/10 -translate-y-1/2 rounded-full" />

            <div className="relative flex justify-between items-center">
              {milestones.map((milestone, idx) => (
                <div
                  key={milestone.year}
                  className="relative flex-1 flex flex-col items-center fade-in-up"
                  style={{ animationDelay: `${idx * 0.15}s` }}
                >
                  {/* Card above the line */}
                  {milestone.position === "top" && (
                    <div className="mb-6 bg-white/95 backdrop-blur text-gray-800 rounded-2xl shadow-2xl p-5 w-56 relative transition-transform duration-300 hover:-translate-y-2 hover:shadow-[#307eba]/30">
                      <ul className="space-y-2">
                        {milestone.points.map((point, i) => (
                          <MilestonePoint key={i} point={point} />
                        ))}
                      </ul>
                      <div className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-4 h-4 bg-white rotate-45" />
                    </div>
                  )}

                  {/* Dot on the line */}
                  <span className="relative z-10 w-5 h-5 rounded-full bg-white border-4 border-[#307eba] pulse-dot" />

                  {/* Year badge */}
                  <span className="mt-4 bg-gradient-to-r from-[#307eba] to-[#4a93cf] text-white text-sm font-semibold px-4 py-1.5 rounded-full shadow-lg shadow-[#307eba]/30">
                    {milestone.year}
                  </span>

                  {/* Card below the line */}
                  {milestone.position === "bottom" && (
                    <div className="mt-6 bg-white/95 backdrop-blur text-gray-800 rounded-2xl shadow-2xl p-5 w-56 relative transition-transform duration-300 hover:-translate-y-2 hover:shadow-[#307eba]/30">
                      <div className="absolute left-1/2 -top-2 -translate-x-1/2 w-4 h-4 bg-white rotate-45" />
                      <ul className="space-y-2">
                        {milestone.points.map((point, i) => (
                          <MilestonePoint key={i} point={point} />
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile vertical timeline */}
          <div className="md:hidden space-y-6">
            {milestones.map((milestone, idx) => (
              <div
                key={milestone.year}
                className="relative bg-white/95 backdrop-blur text-gray-800 rounded-2xl shadow-2xl p-5 pl-7 fade-in-up"
                style={{ animationDelay: `${idx * 0.12}s` }}
              >
                <span className="absolute -left-1.5 top-6 w-4 h-4 rounded-full bg-[#307eba] border-2 border-white pulse-dot" />
                <span className="inline-block bg-gradient-to-r from-[#307eba] to-[#4a93cf] text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
                  {milestone.year}
                </span>
                <ul className="space-y-2">
                  {milestone.points.map((point, i) => (
                    <MilestonePoint key={i} point={point} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== "SIMPLIFYING THE WAY YOU CONNECT" SECTION ===================== */}
      <section className="w-[90%] mx-auto my-16 rounded-3xl overflow-hidden border border-gray-200 bg-blue-50 shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">

          {/* Left Content */}
          <div className="p-8 md:p-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6 leading-tight">
              Simplifying the Way You Connect with Customers
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-8 max-w-xl">
              We are Infra Infotech—your partner in powerful business
              communication. From small startups to global enterprises, we
              help businesses talk to their customers in smarter ways using
              our easy-to-use omnichannel platforms.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-[#307eba] text-white font-semibold hover:bg-black transition-all duration-300"
            >
              <img src={about6} alt="" className="w-4 h-4" />
              Start your free trial
            </Link>
          </div>

          {/* Right Image */}
          <div className="h-full">
            <img
              src={about7}
              alt="Team collaborating in a meeting"
              className="w-full h-full object-cover min-h-[350px]"
            />
          </div>

        </div>
      </section>



      {/* ===================== "SOLUTIONS WE PROVIDE" AUTO SLIDER ===================== */}
      <section className="px-6 md:px-16 py-16 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-15">
          <span className="inline-block bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-md mb-4 uppercase tracking-wide">
            Business Messaging Solutions Provider
          </span>
          <div className="mb-10">
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-900">
              Solutions We Provide
            </h2>
          </div>
        </div>

        {/* Marquee track (full width, auto-scrolls slowly, pauses on hover) */}
        <div className="relative">
          {/* Edge fade gradients for a premium look */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 md:w-2 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 md:w-2 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="overflow-hidden">
            <div
              ref={trackRef}
              className="flex gap-6 w-max animate-marquee"
            >
              {loopedSolutions.map((solution, index) => (
                <div
                  key={`${solution.title}-${index}`}
                  className="shrink-0 w-[300px] md:w-[380px] bg-[#F3EFE9] rounded-2xl p-7 flex flex-col transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {solution.description}
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-gray-900 font-semibold mb-6 hover:text-[#307eba] transition-colors"
                  >
                    Talk to our expert
                    <span>→</span>
                  </Link>
                  <div className="mt-auto flex justify-center relative">
                    <img
                      src={solution.image}
                      alt={`${solution.title} preview`}
                      className="w-full max-w-[280px] object-contain"
                    />
                    {solution.overlays &&
                      solution.overlays.map((overlay, i) => (
                        <img
                          key={i}
                          src={overlay}
                          alt=""
                          className={`absolute w-16 h-16 object-cover rounded-lg shadow-md ${i === 0 ? "bottom-10 -left-2" : "bottom-2 right-0"
                            }`}
                        />
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
          <BookMeeting />
  
    </>
  );
};

export default About;