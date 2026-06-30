import { useEffect, useRef } from "react";

import n1 from "../assets/Images/n1.png";
import n2 from "../assets/Images/n2.png";
import n3 from "../assets/Images/n3.png";
import n4 from "../assets/Images/n4.png";
import n5 from "../assets/Images/n5.png";
import n6 from "../assets/Images/n6.png";
import n7 from "../assets/Images/n7.png";
import n8 from "../assets/Images/n8.png";
import n9 from "../assets/Images/n9.png";
import n10 from "../assets/Images/n10.png";
import n11 from "../assets/Images/n11.png";

const integrations = [
    { id: 1, img: n1, name: "Zapier", desc: "Customer engagement software company." },
    { id: 2, img: n2, name: "Google Sheets", desc: "Widely used by individuals and businesses." },
    { id: 3, img: n3, name: "WooCommerce", desc: "Widely used by individuals and businesses." },
    { id: 4, img: n4, name: "Hubspot", desc: "Marketing automation platform." },
    { id: 5, img: n5, name: "Shopify", desc: "Powerful e-commerce platform." },
    { id: 6, img: n6, name: "CleverTap", desc: "Retention cloud for customer engagement." },
    { id: 7, img: n7, name: "MoEngage", desc: "Insights-led customer engagement platform." },
    { id: 8, img: n8, name: "WebEngage", desc: "Data-driven engagement platform." },
    { id: 9, img: n9, name: "Zoho Flow", desc: "Connect apps and automate workflows." },
    { id: 10, img: n10, name: "Integration X", desc: "Advanced business automation." },
    { id: 11, img: n11, name: "Integration Pro", desc: "Enterprise-ready integrations." },
];

const allCards = [...integrations, ...integrations];

export default function Carousel() {
    const trackRef = useRef(null);
    const animationRef = useRef(null);
    const positionRef = useRef(0);
    const isPausedRef = useRef(false);

    const SPEED = 0.6;
    const CARD_WIDTH = 260;
    const TOTAL_WIDTH = CARD_WIDTH * integrations.length;

    useEffect(() => {
        const animate = () => {
            if (!isPausedRef.current && trackRef.current) {
                positionRef.current -= SPEED;

                if (Math.abs(positionRef.current) >= TOTAL_WIDTH) {
                    positionRef.current = 0;
                }

                trackRef.current.style.transform = `translateX(${positionRef.current}px)`;
            }

            animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationRef.current);
    }, []);

    return (
        <section className="relative overflow-hidden py-16 bg-white">

            {/* Soft Aurora Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className="absolute -top-52 -left-40 w-[900px] h-[900px] rounded-full bg-blue-300/25 blur-[180px]"
                    style={{ animation: "aurora1 15s ease-in-out infinite" }}
                />
                <div
                    className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-cyan-300/25 blur-[180px]"
                    style={{ animation: "aurora2 18s ease-in-out infinite" }}
                />
                <div
                    className="absolute bottom-0 left-1/3 w-[800px] h-[800px] rounded-full bg-indigo-200/25 blur-[180px]"
                    style={{ animation: "aurora3 20s ease-in-out infinite" }}
                />
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(30)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-blue-400/20"
                        style={{
                            width: `${2 + Math.random() * 4}px`,
                            height: `${2 + Math.random() * 4}px`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `particle ${6 + Math.random() * 10}s linear infinite`,
                        }}
                    />
                ))}
            </div>

            {/* Ocean Waves */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden">
                <svg
                    className="w-[250%]"
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                    style={{ animation: "waveMove1 28s linear infinite", opacity: 0.12 }}
                >
                    <path
                        fill="#2563eb"
                        d="M0,192L60,170.7C120,149,240,107,360,101.3C480,96,600,128,720,160C840,192,960,224,1080,208C1200,192,1320,128,1380,96L1440,64L1440,320L0,320Z"
                    />
                </svg>
                <svg
                    className="absolute bottom-0 w-[250%]"
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                    style={{ animation: "waveMove2 38s linear infinite", opacity: 0.08 }}
                >
                    <path
                        fill="#06b6d4"
                        d="M0,128L80,144C160,160,320,192,480,186.7C640,181,800,139,960,122.7C1120,107,1280,117,1360,122.7L1440,128V320H0Z"
                    />
                </svg>
            </div>

            {/* Heading */}
            <div className="relative z-20 text-center mb-12 px-4">
                <span className="inline-flex items-center px-5 py-2 rounded-full bg-blue-50 border border-blue-200 backdrop-blur-xl text-blue-600 text-sm font-semibold shadow-sm">
                    Integrations
                </span>

                <h2 className="mt-5 text-4xl md:text-5xl font-black leading-tight">
                    <span className="text-slate-900">Connect Every</span>
                    <br />
                    <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">
                        Business Tool
                    </span>
                </h2>

                <p className="mt-6 max-w-2xl mx-auto text-slate-500 text-lg">
                    Powerful integrations designed to automate workflows,
                    increase engagement and scale your business effortlessly.
                </p>
            </div>

            {/* Carousel */}
            <div className="relative z-20">
                <div
                    className="absolute left-0 top-0 h-full w-40 z-30 pointer-events-none"
                    style={{ background: "linear-gradient(to right, #ffffff, transparent)" }}
                />
                <div
                    className="absolute right-0 top-0 h-full w-40 z-30 pointer-events-none"
                    style={{ background: "linear-gradient(to left, #ffffff, transparent)" }}
                />

                <div
                    ref={trackRef}
                    className="flex"
                    style={{ willChange: "transform" }}
                    onMouseEnter={() => { isPausedRef.current = true; }}
                    onMouseLeave={() => { isPausedRef.current = false; }}
                >
                    {allCards.map((item, index) => (
                        <div
                            key={`${item.id}-${index}`}
                            className="flex-shrink-0 px-4"
                            style={{ width: "260px" }}
                        >
                            <div
                                className="
                relative
                h-[250px]
                overflow-hidden
                rounded-[24px]
                bg-white
                border
                border-slate-200/70
                shadow-[0_10px_50px_rgba(15,23,42,0.07)]
                hover:-translate-y-4
                hover:border-cyan-300/60
                hover:shadow-[0_25px_70px_rgba(37,99,235,0.15)]
                transition-all
                duration-700
                group
                "
                            >
                                {/* Glow Layer */}
                                <div
                                    className="
                  absolute inset-0 opacity-0 group-hover:opacity-100
                  transition-all duration-700
                  bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50
                  "
                                />

                                {/* Shine */}
                                <div
                                    className="
                  absolute -left-[180%] top-0 w-[120%] h-full rotate-12
                  bg-gradient-to-r from-transparent via-white/60 to-transparent
                  group-hover:left-[180%] duration-[1500ms] transition-all
                  "
                                />

                                <div className="relative z-10 h-full flex flex-col items-center text-center px-5 py-5">
                                    {/* Logo */}
                                    <div
                                        className="
                    w-26 h-26 rounded-2xl flex items-center justify-center mb-4
                    shadow-[0_0_30px_rgba(59,130,246,0.08)]
                    transition-all duration-700
                    "
                                    >
                                        <img
                                            src={item.img}
                                            alt={item.name}
                                            draggable={false}
                                            className="
                      w-19 h-19 object-contain transition-all duration-700
                      group-hover:scale-110 group-hover:rotate-3
                      "
                                        />
                                    </div>

                                    {/* Name */}
                                    <h3 className="text-base font-bold text-slate-900 mb-2">
                                        {item.name}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-xs text-slate-500 leading-relaxed flex-grow">
                                        {item.desc}
                                    </p>

                                    {/* Dots */}
                                    <div className="mt-4 flex gap-2">
                                        <span className="w-2 h-2 rounded-full bg-cyan-500" />
                                        <span className="w-2 h-2 rounded-full bg-blue-500" />
                                        <span className="w-2 h-2 rounded-full bg-indigo-500" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Premium Animations */}
            <style>
                {`
        @keyframes waveMove1{ 0%{transform:translateX(0);} 100%{transform:translateX(-50%);} }
        @keyframes waveMove2{ 0%{transform:translateX(-50%);} 100%{transform:translateX(0);} }
        @keyframes aurora1{ 0%,100%{transform:translate(0,0);} 50%{transform:translate(120px,-80px);} }
        @keyframes aurora2{ 0%,100%{transform:translate(0,0);} 50%{transform:translate(-120px,70px);} }
        @keyframes aurora3{ 0%,100%{transform:translate(0,0);} 50%{transform:translate(90px,-120px);} }
        @keyframes particle{
          0%{ transform:translateY(0px); opacity:0; }
          20%{ opacity:1; }
          80%{ opacity:1; }
          100%{ transform:translateY(-200px); opacity:0; }
        }
        `}
            </style>

        </section>
    );
}