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
  { id: 4, img: n4, name: "Hubspot", desc: "Widely used by individuals and businesses." },
  { id: 5, img: n5, name: "Shopify", desc: "With Shopify, users can manage everything." },
  { id: 6, img: n6, name: "CleverTap", desc: "CleverTap is widely used by product teams." },
  { id: 7, img: n7, name: "MoEngage", desc: "Mobile-first and digital-first businesses." },
  { id: 8, img: n8, name: "WebEngage", desc: "Mobile-first and digital-first businesses." },
  { id: 9, img: n9, name: "Zoho Flow", desc: "It supports a wide range of apps." },
  { id: 10, img: n10, name: "Integration 10", desc: "Powerful integration for your workflow." },
  { id: 11, img: n11, name: "Integration 11", desc: "Seamless connection with your tools." },
];

// Duplicate for seamless infinite loop
const allCards = [...integrations, ...integrations];

export default function Carousel() {
  const trackRef = useRef(null);
  const animationRef = useRef(null);
  const positionRef = useRef(0);
  const isPausedRef = useRef(false);

  const SPEED = 0.6; // px per frame — adjust to taste
  const CARD_WIDTH = 200; // px — must match the card's actual rendered width + gap
  const TOTAL_WIDTH = CARD_WIDTH * integrations.length;

  useEffect(() => {
    const animate = () => {
      if (!isPausedRef.current && trackRef.current) {
        positionRef.current -= SPEED;
        // Reset when first set scrolled fully out
        if (Math.abs(positionRef.current) >= TOTAL_WIDTH) {
          positionRef.current = 0;
        }
        trackRef.current.style.transform = `translateX(${positionRef.current}px)`;
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, [TOTAL_WIDTH]);

  return (
    <section className="w-full py-12 bg-white overflow-hidden">

      {/* Fade edges */}
      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 h-full w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, white, transparent)" }} />
        {/* Right fade */}
        <div className="absolute right-0 top-0 h-full w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, white, transparent)" }} />

        {/* Scrolling track */}
        <div
          className="flex"
          ref={trackRef}
          style={{ willChange: "transform" }}
          onMouseEnter={() => { isPausedRef.current = true; }}
          onMouseLeave={() => { isPausedRef.current = false; }}
        >
          {allCards.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="flex-shrink-0 mx-3"
              style={{ width: "176px" }} // 176px card + 24px margin = 200px total
            >
              <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center cursor-pointer group">
                {/* Logo box */}
                <div className="w-25 h-25 mb-1 flex items-center justify-center transition-colors duration-300 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-12 h-12 object-contain"
                    draggable={false}
                  />
                </div>

                {/* Name */}
                <p className="text-sm font-semibold text-gray-800 mb-1 leading-tight">
                  {item.name}
                </p>

                {/* Description */}
                <p className="text-xs text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}