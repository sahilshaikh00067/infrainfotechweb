"use client"

import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import {
  FaWhatsapp, FaBolt, FaAward, FaRocket, FaPhone,
  FaArrowLeft, FaArrowRight
} from "react-icons/fa"

import home1 from "../assets/Images/home1.webp"
import home2 from "../assets/Images/home2.webp"
import home3 from "../assets/Images/home3.webp"
import home4 from "../assets/Images/home4.webp"
import home5 from "../assets/Images/home5.webp"
import Clients from "./Clients"
import Learn from "./Learn"
import SuccessStories from "./Successstories"
import BookMeeting from "./Bookmeeting"

const slides = [
  {
    title: "Messaging Platform",
    heading: "Connect, Engage & Grow with Smart Business Messaging",
    desc: "Connect, engage, convert, and grow with WhatsApp Business API, RCS Messaging, Bulk SMS and voice solutions.",
    img: home1,
    icon: FaWhatsapp,
    accent: "#307eba",
    accentLight: "#e8faf0",
    tag: "WhatsApp",
  },
  {
    title: "MEFFYS AWARD 2024",
    heading: "Enterprise Messaging Category Winner!",
    desc: "Recognized globally for delivering secure, scalable messaging solutions that transform how businesses communicate.",
    img: home2,
    icon: FaAward,
    accent: "#307eba",
    accentLight: "#fef9ec",
    tag: "Award",
  },
  {
    title: "Google RCS",
    heading: "Scale-Up Your Business Using AI-Powered Omnichannel",
    desc: "A single unified platform to send messages, broadcasts, and manage customer queries across multiple channels with one team inbox.",
    img: home3,
    icon: FaBolt,
    accent: "#307eba",
    accentLight: "#eef7fc",
    tag: "RCS",
  },
  {
    title: "Telinfy Platform",
    heading: "All-in-One Messaging Platform",
    desc: "Manage WhatsApp, RCS, and SMS in one place seamlessly. Built for teams that need speed, scale, and simplicity.",
    img: home4,
    icon: FaRocket,
    accent: "#307eba",
    accentLight: "#f5f0ff",
    tag: "Platform",
  },
  {
    title: "WhatsApp Calling API",
    heading: "Real-Time Engagement Over Voice",
    desc: "Enable instant, personalised communication using WhatsApp calling API — the future of business conversations.",
    img: home5,
    icon: FaPhone,
    accent: "#307eba",
    accentLight: "#fff1f1",
    tag: "Calling",
  },
]

export default function Home() {
  const [index, setIndex] = useState(0)
  const [dir, setDir] = useState(1)
  const timerRef = useRef(null)

  const startTimer = () => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setDir(1)
      setIndex((prev) => (prev + 1) % slides.length)
    }, 6000)
  }

  useEffect(() => {
    startTimer()
    return () => clearInterval(timerRef.current)
  }, [])

  const go = (newIndex) => {
    setDir(newIndex > index ? 1 : -1)
    setIndex(newIndex)
    startTimer()
  }

  const next = () => go((index + 1) % slides.length)
  const prev = () => go((index - 1 + slides.length) % slides.length)

  const current = slides[index]
  const Icon = current.icon

  const variants = {
    enter: (d) => ({ opacity: 0, x: d > 0 ? 80 : -80, scale: 0.97 }),
    center: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] } },
    exit: (d) => ({ opacity: 0, x: d > 0 ? -80 : 80, scale: 0.97, transition: { duration: 0.4 } }),
  }

  return (
    <>
      <div className="relative bg-white overflow-hidden lg:min-h-screen">

        {/* ── animated background blobs ── */}
        <div
          className="absolute inset-0 transition-colors duration-700 ease-in-out pointer-events-none"
          style={{ background: `linear-gradient(135deg, ${current.accentLight} 0%, #ffffff 50%, #f8faff 100%)` }}
        />
        <div
          className="absolute -top-24 -right-24 sm:-top-32 sm:-right-32 lg:-top-40 lg:-right-40 w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px] rounded-full opacity-20 blur-3xl pointer-events-none transition-colors duration-700"
          style={{ background: current.accent }}
        />
        <div
          className="absolute -bottom-24 -left-24 sm:-bottom-32 sm:-left-32 lg:-bottom-40 lg:-left-40 w-[260px] h-[260px] sm:w-[380px] sm:h-[380px] lg:w-[500px] lg:h-[500px] rounded-full opacity-10 blur-3xl pointer-events-none transition-colors duration-700"
          style={{ background: current.accent }}
        />

        {/* ── vertical dots (left) — tablet & desktop only ── */}
        <div className="hidden md:flex absolute left-3 md:left-5 top-1/2 -translate-y-1/2 flex-col gap-3 z-30">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`rounded-full transition-all duration-400 ${
                i === index ? "w-2.5 h-10" : "w-2 h-2 opacity-40 hover:opacity-70"
              }`}
              style={{ background: i === index ? current.accent : "#94a3b8" }}
            />
          ))}
        </div>

        {/* ── main content ── */}
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={index}
            custom={dir}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="relative z-10 flex flex-col lg:flex-row items-center justify-between lg:min-h-screen px-5 sm:px-8 md:px-12 lg:px-16 xl:px-24 gap-8 sm:gap-10 lg:gap-12 py-12 sm:py-14 md:py-16 lg:py-20"
          >
            {/* LEFT: text */}
            <div className="max-w-xl w-full text-center lg:text-left">

              {/* tag chip */}
              <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-5 sm:mb-7 text-xs sm:text-sm font-semibold"
                style={{ background: current.accentLight, color: current.accent }}
              >
                <span
                  className="w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center"
                  style={{ background: current.accent + "22" }}
                >
                  <Icon style={{ color: current.accent, fontSize: 13 }} />
                </span>
                {current.title}
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18 }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4 sm:mb-5"
              >
                {current.heading}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.26 }}
                className="text-gray-500 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10"
              >
                {current.desc}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.34 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
              >
                <Link to="/contact" className="w-full sm:w-auto">
                  <button
                    className="w-full sm:w-auto px-8 py-3.5 rounded-full text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm"
                    style={{ background: `linear-gradient(135deg, ${current.accent}, ${current.accent}cc)` }}
                  >
                    Start your free trial
                  </button>
                </Link>
                <Link to="/contact" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-gray-200 text-gray-700 font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 text-sm backdrop-blur-sm">
                    Book a Meeting
                  </button>
                </Link>
              </motion.div>

              {/* progress bar */}
              <div className="mt-8 sm:mt-10 h-1 w-48 mx-auto lg:mx-0 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  key={index}
                  className="h-full rounded-full"
                  style={{ background: current.accent }}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 5, ease: "linear" }}
                />
              </div>
              <p className="text-xs text-gray-400 mt-2 font-medium">
                {index + 1} / {slides.length}
              </p>
            </div>

            {/* RIGHT: image card */}
            <div className="flex flex-col items-center gap-5 sm:gap-6 w-full max-w-[580px]">
              <motion.div
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.12, duration: 0.6 }}
                className="relative w-full"
              >
                {/* glow ring */}
                <div
                  className="absolute -inset-1 rounded-3xl opacity-30 blur-xl pointer-events-none"
                  style={{ background: current.accent }}
                />
                {/* card */}
                <div className="relative bg-white border border-gray-100 rounded-3xl p-4 sm:p-5 shadow-2xl">
                  {/* top bar dots */}
                  <div className="flex gap-1.5 mb-4">
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-400" />
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-400" />
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-400" />
                    <span
                      className="ml-auto text-xs font-semibold px-2.5 sm:px-3 py-1 rounded-full"
                      style={{ background: current.accentLight, color: current.accent }}
                    >
                      {current.tag}
                    </span>
                  </div>
                  <img
                    src={current.img}
                    alt={current.heading}
                    className="w-full object-contain rounded-xl max-h-[200px] sm:max-h-[280px] md:max-h-[340px] lg:max-h-[420px]"
                  />
                </div>
              </motion.div>

              {/* arrows */}
              <div className="flex gap-3">
                <button
                  onClick={prev}
                  aria-label="Previous slide"
                  className="w-11 h-11 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center hover:shadow-lg hover:scale-105 transition-all duration-300 text-gray-600"
                >
                  <FaArrowLeft size={14} />
                </button>
                <button
                  onClick={next}
                  aria-label="Next slide"
                  className="w-11 h-11 rounded-full text-white shadow-md flex items-center justify-center hover:shadow-lg hover:scale-105 transition-all duration-300"
                  style={{ background: current.accent }}
                >
                  <FaArrowRight size={14} />
                </button>
              </div>

              {/* mobile dots (horizontal) — phone & small tablet only */}
              <div className="flex md:hidden items-center gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => go(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`rounded-full transition-all duration-400 ${
                      i === index ? "w-8 h-2" : "w-2 h-2 opacity-40"
                    }`}
                    style={{ background: i === index ? current.accent : "#94a3b8" }}
                  />
                ))}
              </div>
            </div>

          </motion.div>
        </AnimatePresence>
      </div>

      <Clients />
      <Learn />
      <SuccessStories />
      <BookMeeting />
    </>
  )
}