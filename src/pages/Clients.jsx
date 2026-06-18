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
        <div className="mt-16 relative z-20">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={2}
            spaceBetween={40}
            loop={true}
            speed={3500}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
          >
            {logos.map((logo, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center h-[150px]">
                  <img
                    src={logo}
                    alt={`client-${index + 1}`}
                    className="max-h-22 object-contain opacity-90 hover:opacity-100 transition duration-500"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* MAIN HEADING */}
        <div className="text-center mt-24 px-2 relative z-20">
          <h2 className="text-[34px] md:text-[68px] font-bold text-[#307eba] leading-tight">
            Engage your Customers with Smart Conversations
          </h2>

          <p className="mt-8 text-[22px] md:text-[40px] text-[#7a7895] font-light leading-relaxed">
            One Platform, Millions of Conversations,
            Endless Possibilities!
          </p>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-24 relative z-20">
          {stats.map((item, index) => (
            <div
              key={index}
              className="relative pl-8"
            >
              {/* GREEN LINE */}
              <div className="absolute left-0 top-2 h-16 w-[2px] bg-[#177a63]"></div>

              <h3 className="text-4xl md:text-6xl font-semibold text-black">
                {item.number}
              </h3>

              <p className="mt-4 text-[#7a7895] text-lg md:text-xl">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        {/* VIDEO SECTION */}
        <div className="mt-25 relative z-20">
          {/* <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-[#177a63]">
          Watch Our Platform in Action
        </h2>

        <p className="mt-5 text-[#7a7895] text-lg md:text-2xl">
          Smart Communication Solutions for Modern Businesses
        </p>
      </div> */}

          <section className="max-w-7xl mx-auo px-4 md:px-0  py-16">
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