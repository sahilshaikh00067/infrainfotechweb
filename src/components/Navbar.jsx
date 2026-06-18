"use client"

import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa"
import multic from "../assets/Images/multic.png" // ✅ Place multic.png at: src/assets/Images/multic.png
import multic1 from "../assets/Images/multic1.png"
import {
  FaWhatsapp,
  FaSms,
  FaMicrophone,
  FaRobot,
  FaLayerGroup,
  FaBook,
  FaBlog,
  FaCalendar,
  FaCode,
  FaShoppingCart,
  FaCogs,
} from "react-icons/fa"

/* ─────────────────────────────────────────────
   NAV DATA — shared between desktop mega menu
   and the mobile accordion menu
───────────────────────────────────────────── */
const NAV_GROUPS = {
  products: {
    title: "Products",
    image: multic1,
    items: [
      { label: "WhatsApp Business API", icon: FaWhatsapp, link: "/whatsappapi" },
      { label: "Bulk SMS", icon: FaSms, link: "/bulksms" },
      { label: "RCS Messaging", icon: FaLayerGroup, link: "/rcs" },
      { label: "Voice Solutions", icon: FaMicrophone, link: "/voice" },
      { label: "Chatbot", icon: FaRobot, link: "/chatbot" },
      { label: "Multi Channel", icon: FaLayerGroup, link: "/multi-channel" },
    ],
  },
  resources: {
    title: "Resources",
    image: multic,
    items: [
      { label: "Tutorials", icon: FaBook, link: "/about" },
      { label: "Blog", icon: FaBlog, link: "/about" },
      { label: "Events & Webinars", icon: FaCalendar, link: "/about" },
      { label: "Developers", icon: FaCode, link: "/about" },
    ],
  },
  integrations: {
    title: "Integrations",
    image: multic,
    items: [
      { label: "Shopify", icon: FaShoppingCart, link: "/multi-channel" },
      { label: "ZOHO CRM", icon: FaCogs, link: "/multi-channel" },
    ],
  },
}

/* ─────────────────────────────────────────────
   DESKTOP MEGA MENU (lg and up)
───────────────────────────────────────────── */
const MegaMenu = ({ title, items, image, active, setActive }) => {
  const isOpen = active === title
  const ref = useRef(null)

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setActive(null)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [setActive])

  const handleItemClick = () => {
    setActive(null)
  }

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setActive(isOpen ? null : title)}
        className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-[#265983] transition-colors duration-200 group"
      >
        {title}
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="text-gray-400 group-hover:text-blue-500"
        >
          <FaChevronDown size={10} />
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 top-[96px] bg-black/10 backdrop-blur-[2px] z-40"
              onClick={() => setActive(null)}
            />

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="fixed left-0 top-[96px] w-screen z-50"
            >
              <div className="h-[2px] w-full bg-gradient-to-r from-[#326d9e] via-cyan-400 to-[#326d9e]" />

              <div className="bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-100">
                <div className="max-w-[1400px] mx-auto px-16 py-12 grid grid-cols-2 gap-20 items-center">

                  <div className="grid grid-cols-2 gap-3">
                    {items.map((item, i) => (
                      <Link to={item.link} key={i} onClick={handleItemClick}>
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.04 }}
                          className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-blue-50/80 hover:shadow-sm transition-all duration-200 cursor-pointer border border-transparent hover:border-blue-100"
                        >
                          <div className="shrink-0 bg-gradient-to-br from-blue-50 to-indigo-100 text-[#326d9e] p-3 rounded-xl shadow-sm group-hover:from-blue-100 group-hover:to-indigo-200 transition-all duration-200">
                            <item.icon size={18} />
                          </div>

                          <div>
                            <h3 className="font-semibold text-sm text-gray-800 group-hover:text-[#216093] transition-colors leading-tight">
                              {item.label}
                            </h3>
                            <p className="text-xs text-gray-400 mt-0.5 group-hover:text-gray-500 transition-colors">
                              Explore solution →
                            </p>
                          </div>
                        </motion.div>
                      </Link>
                    ))}
                  </div>

                  <div className="flex items-center justify-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.93 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-200/40 via-cyan-200/20 to-indigo-200/40 rounded-3xl blur-2xl scale-110" />
                      <img
                        src={image}
                        alt="Preview"
                        className="relative w-[400px] object-contain rounded-2xl shadow-xl ring-1 ring-white/60"
                      />
                    </motion.div>
                  </div>

                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ─────────────────────────────────────────────
   MOBILE ACCORDION ITEM (used inside the mobile
   drawer for Products / Resources / Integrations)
───────────────────────────────────────────── */
const MobileNavGroup = ({ group, openSection, setOpenSection, onLinkClick }) => {
  const isOpen = openSection === group.title

  return (
    <div className="border-b border-gray-100">
      <button
        onClick={() => setOpenSection(isOpen ? null : group.title)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-base font-semibold text-gray-800">{group.title}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="text-gray-400"
        >
          <FaChevronDown size={12} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-1 pb-4">
              {group.items.map((item, i) => (
                <Link to={item.link} key={i} onClick={onLinkClick}>
                  <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-blue-50 active:bg-blue-100 transition-colors">
                    <div className="shrink-0 bg-gradient-to-br from-blue-50 to-indigo-100 text-[#326d9e] p-2.5 rounded-lg">
                      <item.icon size={15} />
                    </div>
                    <span className="text-sm font-medium text-gray-700">{item.label}</span>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ─────────────────────────────────────────────
   MOBILE MENU (slide-in drawer, below lg)
───────────────────────────────────────────── */
const MobileMenu = ({ isOpen, onClose }) => {
  const [openSection, setOpenSection] = useState(null)

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const handleClose = () => {
    setOpenSection(null)
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] lg:hidden"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-[70] lg:hidden flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 h-16 border-b border-gray-100 shrink-0">
              <img src="/logo.jpg" alt="Logo" className="h-9 w-auto object-contain" />
              <button
                onClick={handleClose}
                aria-label="Close menu"
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-500"
              >
                <FaTimes size={18} />
              </button>
            </div>

            {/* Scrollable nav content */}
            <div className="flex-1 overflow-y-auto px-5">
              <MobileNavGroup
                group={NAV_GROUPS.products}
                openSection={openSection}
                setOpenSection={setOpenSection}
                onLinkClick={handleClose}
              />
              <MobileNavGroup
                group={NAV_GROUPS.resources}
                openSection={openSection}
                setOpenSection={setOpenSection}
                onLinkClick={handleClose}
              />

              <Link to="/about" onClick={handleClose}>
                <div className="py-4 border-b border-gray-100 text-base font-semibold text-gray-800">
                  About Us
                </div>
              </Link>

              <Link to="/contact" onClick={handleClose}>
                <div className="py-4 border-b border-gray-100 text-base font-semibold text-gray-800">
                  Contact Us
                </div>
              </Link>

              <MobileNavGroup
                group={NAV_GROUPS.integrations}
                openSection={openSection}
                setOpenSection={setOpenSection}
                onLinkClick={handleClose}
              />
            </div>

            {/* Bottom CTAs */}
            <div className="px-5 py-5 border-t border-gray-100 flex flex-col gap-3 shrink-0">
              <Link to="/partner" onClick={handleClose}>
                <button className="w-full text-sm font-semibold text-blue-600 px-4 py-3 rounded-xl border border-blue-200 hover:bg-blue-50 transition-colors">
                  Become a Partner
                </button>
              </Link>
              <Link to="/meeting" onClick={handleClose}>
                <button className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold shadow-md shadow-blue-200 hover:from-blue-700 hover:to-indigo-700 transition-all duration-200">
                  Book a Meeting
                </button>
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

/* ─────────────────────────────────────────────
   NAVBAR
───────────────────────────────────────────── */
const Navbar = () => {
  const [active, setActive] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      {/* ── TOP ANNOUNCEMENT BANNER ── */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
          style={{
            background: "linear-gradient(90deg, #4f46e5, #0891b2, #6366f1, #0891b2, #4f46e5)",
            backgroundSize: "300% 100%",
          }}
        />

        <motion.div
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "linear", repeatDelay: 1.5 }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
        />

        <div className="relative flex items-center justify-center gap-2 sm:gap-6 py-2 sm:py-2.5 px-3 text-center text-xs sm:text-sm font-medium text-white">
          <span className="tracking-wide text-white/90">
            🎉 <span className="hidden sm:inline">Unlock Your&nbsp;</span>
            <span className="font-bold text-white">14-Day Free Trial</span>
            <span className="hidden sm:inline">&nbsp;with Free Credits!</span>
          </span>

          <Link to="/signup">
            <motion.button
              whileHover={{ scale: 1.06, boxShadow: "0 4px 20px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.97 }}
              className="whitespace-nowrap px-3 sm:px-5 py-1 sm:py-1.5 rounded-full bg-white text-[#326d9e] font-semibold text-[11px] sm:text-xs shadow-md hover:bg-blue-50 transition-colors"
            >
              Get Started Free →
            </motion.button>
          </Link>
        </div>
      </div>

      {/* ── MAIN NAVBAR ── */}
      <motion.header
        animate={{
          boxShadow: scrolled
            ? "0 4px 30px rgba(0,0,0,0.08)"
            : "0 1px 0px rgba(0,0,0,0.06)",
        }}
        className="bg-white/95 backdrop-blur-xl sticky top-0 z-50 border-b border-gray-100/80"
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 h-16 lg:h-[60px] flex items-center justify-between">

          {/* LOGO */}
          <Link to="/" className="shrink-0">
            <img
              src="/logo.jpg"
              alt="Logo"
              className="h-8 sm:h-10 w-auto object-contain"
            />
          </Link>

          {/* DESKTOP NAV LINKS (lg and up) */}
          <nav className="hidden lg:flex items-center gap-8 lg:gap-10">
            <MegaMenu
              title="Products"
              image={NAV_GROUPS.products.image}
              items={NAV_GROUPS.products.items}
              active={active}
              setActive={setActive}
            />

            <MegaMenu
              title="Resources"
              image={NAV_GROUPS.resources.image}
              items={NAV_GROUPS.resources.items}
              active={active}
              setActive={setActive}
            />

            <Link
              to="/about"
              className="text-sm font-medium text-gray-600 hover:text-[#326d9e] transition-colors"
            >
              About Us
            </Link>

            <Link
              to="/contact"
              className="text-sm font-medium text-gray-600 hover:text-[#326d9e] transition-colors"
            >
              Contact Us
            </Link>

            <MegaMenu
              title="Integrations"
              image={NAV_GROUPS.integrations.image}
              items={NAV_GROUPS.integrations.items}
              active={active}
              setActive={setActive}
            />
          </nav>

          {/* DESKTOP CTA BUTTONS (lg and up) */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Link to="/partner">
              <button className="text-sm font-semibold text-[#5692c3] hover:text-[#5692c3] transition-colors px-4 py-2 rounded-lg hover:bg-blue-50 border border-transparent hover:border-blue-100">
                Become a Partner
              </button>
            </Link>

            <Link to="/meeting">
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: "0 6px 24px rgba(37,99,235,0.35)" }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#5692c3] to-[#055ea7] text-white text-sm font-semibold shadow-md shadow-blue-200 hover:from-[#0e4979] hover:to-[#104a79] transition-all duration-200"
              >
                Book a Meeting
              </motion.button>
            </Link>
          </div>

          {/* MOBILE HAMBURGER (below lg) */}
          <button
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className="lg:hidden p-2 -mr-2 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors text-gray-700"
          >
            <FaBars size={20} />
          </button>

        </div>
      </motion.header>

      {/* MOBILE DRAWER */}
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}

export default Navbar