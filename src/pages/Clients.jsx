import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

// CLIENT LOGOS
import client1 from "../assets/Images/client1.webp";
import client2 from "../assets/Images/client2.jpeg";
import client3 from "../assets/Images/client3.webp";
import client4 from "../assets/Images/client4.webp";
import client5 from "../assets/Images/client5.webp";
import client6 from "../assets/Images/client6.webp";
import client7 from "../assets/Images/client7.webp";
import client8 from "../assets/Images/client8.webp";
import client9 from "../assets/Images/client9.webp";
import client10 from "../assets/Images/client10.webp";
import client11 from "../assets/Images/client11.webp";
import vid from "../assets/Images/vid.png";

const logos = [
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  client7,
  client8,
  client9,
  client10,
  client11,
];

const stats = [
  {
    number: "5000+",
    title: "Registered Users",
  },
  {
    number: "100,000+",
    title: "Successful Campaigns",
  },
  {
    number: "98%",
    title: "Messages Delivery Rate",
  },
  {
    number: "1000+",
    title: "Chatbots",
  },
];

const services = [
  {
    title: "Enterprise SMS",
    desc: "Reach your audience with targeted promotions, offers, and announcements that drive engagement.",
  },
  {
    title: "Alerts & Notifications",
    desc: "Keep customers informed with real-time updates, from order status to appointment reminders.",
  },
  {
    title: "OTP & Verification Codes",
    desc: "Ensure secure transactions with instant one-time passwords and verification messages.",
  },
  {
    title: "Transactional Messages",
    desc: "Send reliable, automated confirmations and updates for orders, payments, and account activities.",
  },
  {
    title: "SMART Link SMS Tracking",
    desc: "Include trackable links to measure engagement and user actions with detailed insights.",
  },
  {
    title: "SMS API Integration",
    desc: "Easily integrate SMS functionality into your apps and platforms for seamless communication.",
  },
];

const Clients = () => {
  return (
    <section className="relative bg-[#ffffff] py-20 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-4 relative z-20">

        {/* TOP TEXT */}
        <div className="text-center relative z-20">
          <p className="text-[15px] md:text-[17px] uppercase tracking-[2px] text-[#6d6b8b] font-semibold leading-relaxed">
            Trusted by 5,000+ businesses for RCS Messaging,
            WhatsApp Business API, Bulk SMS, and Voice Solutions
          </p>
        </div>

        {/* LOGO SLIDER */}
        <div className="mt-6 relative">
          {/* ambient glow behind the panel */}
          <div className="absolute -inset-6 bg-gradient-to-r from-[#294d8f]/5 via-transparent to-[#307eba]/5 blur-sm pointer-events-none rounded-[1rem] z-10" />

          <div className="relative bg-white/80 backdrop-blur-sm  rounded-[2rem] sm:rounded-[2.5rem] px-2 sm:px-6 py-6 sm:py-8 overflow-hidden z-20">

            {/* edge fade masks */}
            <div className="absolute left-0 top-0 h-full w-14 sm:w-28 bg-gradient-to-r from-white via-white/90 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 h-full w-14 sm:w-28 bg-gradient-to-l from-white via-white/90 to-transparent z-10 pointer-events-none" />

            <Swiper
              modules={[Autoplay]}
              slidesPerView={2}
              spaceBetween={24}
              loop={true}
              speed={3500}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              breakpoints={{
                480: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 32,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 36,
                },
              }}
            >
              {logos.map((logo, index) => (
                <SwiperSlide key={index}>
                  <div className="flex items-center justify-center h-[130px] sm:h-[140px]">
                    <div className="group relative w-full h-[120px] sm:h-[135px] rounded-xl p-[1.5px] bg-gradient-to-br from-gray-100 to-gray-100 hover:from-[#294d8f]/40 hover:to-[#307eba]/80 transition-colors duration-500">
                      <div className="relative flex items-center justify-center w-full h-full bg-white rounded-[14px]  group-hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                        {/* shimmer sweep on hover */}
                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/70 to-transparent skew-x-12 pointer-events-none" />
                        <img
                          src={logo}
                          alt={`client-${index + 1}`}
                          className="relative max-h-28 sm:max-h-28 object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>



        <div className="mt-5 relative z-20">

          <section className="max-w-7xl mx-auo px-4 md:px-0  py-6">
            <div className="grid lg:grid-cols-2 gap-10 items-center">

              <div className="mt-8 grid gap-5">
                {services.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-3 h-3 rounded-full bg-[#294d8f] mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-[20px] font-semibold text-[#294d8f]">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Side Image */}
              <div className="flex justify-center">
                <img
                  src={vid}
                  alt="Enterprise SMS"
                  className="w-full max-w-[550px] object-contain"
                />
              </div>

            </div>
          </section>


        </div>
      </div>
    </section>
  );
};

export default Clients;