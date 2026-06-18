import multic1 from "../assets/Images/multic1.png";
import multic2 from "../assets/Images/multic2.png";
import multic3 from "../assets/Images/multic3.png";
import multic4 from "../assets/Images/multic4.png";
import multic5 from "../assets/Images/multic5.png";
import { Link } from "react-router-dom";
import MultiClick from "./MultiClick";
import BookMeeting from "./Bookmeeting";
import multic9 from "../assets/Images/multic9.svg";



const features = [
    {
        image: multic2,
        title: "Smart Failover Mechanism",
        description:
            "If a message fails on one channel (e.g. RCS or WhatsApp), our platform automatically reroutes it via an alternative like SMS—guaranteeing maximum delivery and zero communication gaps.",
    },
    {
        image: multic3,
        title: "Track Every Message in Real Time",
        description:
            "Know exactly what happens after you hit send. Our platform gives you full visibility into sent, delivered, and seen status for every message—across WhatsApp, RCS, and SMS.",
    },
    {
        image: multic4,
        title: "Unified Chat View Across Channels",
        description:
            "Manage all your customer conversations—whether on WhatsApp, RCS, or SMS—from a single, easy-to-use interface. No more juggling tabs.",
    },
    {
        image: multic5,
        title: "Integrations with 50+ Tools",
        description:
            "Pre-built integrations with Shopify, Zoho, Google Sheets, WooCommerce, ChatGPT and more. Trigger actions and automate campaigns without heavy development.",
    },
];

const partnerships = [
    {
        title: "White Label Reseller Panel",
        description:
            "White label our panel for your customers and add a new revenue stream to your business. Offer our platform under your brand, providing seamless integration and high-quality service to your clients while boosting your profits.",
    },
    {
        title: "Affiliate Partner",
        description:
            "This partnership is suitable for digital marketing agencies, system integrators, media and branding agencies, and consulting firms. Join our affiliate programme to earn commissions by promoting our platform and expanding your service offerings.",
    },
    {
        title: "Enterprise On-Premises/Cloud Solutions",
        description:
            "This partnership is for enterprise businesses that want our platform on their own servers. Secure your data completely on your server and enjoy a scalable, secure, and customisable platform tailored to your business needs.",
    },
];

const MultiChannelCampaigns = () => {
    return (
        <>
            <section className="white py-6 lg:py-12">
                <div className="max-w-8xl mx-auto px-6 lg:px-8">

                    {/* Badge */}
                    <div className="flex justify-center mb-2">
                        <span className="inline-block bg-[#eef4fc] text-[#3b69ae] px-4 py-2 rounded-full text-[15px] font-medium uppercase">
                            Unified Messaging Platform—WhatsApp, RCS & SMS
                        </span>
                    </div>

                    {/* Heading */}
                    <h2 className="text-4xl md:text-[45px] font-semibold text-center text-[#005a52] leading-tight mb-2">
                        Multi-Channel Campaigns – One Platform for WhatsApp,
                        <br />
                        RCS & SMS
                    </h2>

                    {/* Description */}
                    <p className="text-center text-gray-700 text-lg md:text-[18px] max-w-5xl mx-auto mb-4">
                        Send messages on WhatsApp, RCS & SMS from one dashboard —
                        no-code setup, live tracking, and auto fallback if delivery fails.
                    </p>

                    {/* Image Card */}
                    <div className="max-w-4xl mx-auto">
                        <div className="rounded-[15px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
                            <img
                                src={multic1}
                                alt="Multi Channel Campaigns"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                </div>
            </section>

            <section className="bg-[#eef7fc] py-6 lg:py-12">
                <div className="max-w-8xl mx-15 px-2 lg:px-8">

                    {/* Heading */}
                    <h2 className="text-4xl md:text-4xl lg:text-5xl font-semibold text-center text-[#005a52] leading-tight mb-4 ">
                        If You are Connecting with Customers on Just One Channel,
                        <br />
                        You are Doing It Wrong
                    </h2>

                    {/* Subtitle */}
                    <p className="text-center text-gray-600 text-lg md:text-[15px] max-w-4xl mx-auto mb-4">
                        Reach smarter with a platform that delivers across-
                        <b>WhatsApp, RCS & SMS</b>-with built-in automation and failover fallback.
                    </p>

                    {/* Button */}
                    <div className="flex justify-center mb-6">
                        <Link
                            to="/contact"
                            className="bg-[#1d6387] hover:bg-[#0c4d61] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                        >
                            Get Your Free Demo Now
                        </Link>
                    </div>

                    {/* Cards */}
                    <div className="grid md:grid-cols-2 gap-3">
                        {features.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-xl transition-all duration-300"
                            >
                                {/* Image */}
                                <div className="flex justify-center">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full max-w-[490px] h-[280px] object-contain"
                                    />
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-semibold text-[#111827] mb-1">
                                    {item.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 leading-relaxed text-base">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
            <MultiClick />

            <section className="bg-[#eef7fc] py-12 lg:py-12">
                <div className="max-w-7xl mx-auto px-2 lg:px-8">

                    {/* Heading */}
                    <h2 className="text-4xl md:text-4xl lg:text-4xl font-semibold text-center text-[#0f172a] mb-3">
                        Partnership Programs– White Label, Reseller & Affiliate
                    </h2>

                    {/* Subtitle */}
                    <p className="text-center text-gray-600 text-lg md:text-[17px] max-w-5xl mx-auto mb-16">
                        Partner with us to grow your client base and boost your income—
                        more clients, more revenue, more growth.
                    </p>

                    {/* Cards */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {partnerships.map((item, index) => (
                            <div
                                key={index}
                                className="
                bg-white
                rounded-[32px]
                p-8
                border border-[#dbeafe]
                shadow-[0_10px_40px_rgba(48,126,186,0.10)]
                hover:shadow-[0_20px_50px_rgba(48,126,186,0.18)]
                transition-all
                duration-300
                hover:-translate-y-2
              "
                            >
                                {/* Icon */}
                                <div className="w-21 h-21 rounded-full bg-[#dbeafe] flex items-center justify-center mb-4">
                                    <img
                                        src={multic9}
                                        alt=""
                                        className="w-14 h-14 object-contain"
                                    />
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-semibold text-[#0f172a] mb-3">
                                    {item.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Button */}
                    <div className="flex justify-center mt-5">
                        <Link
                            to="/contact"
                            className="
              px-6 py-3
              rounded-xl
              bg-[#307eba]
              hover:bg-[#1f5f91]
              text-white
              font-semibold
              text-lg
              transition-all
              duration-300
            "
                        >
                            Get Your Free Demo Now
                        </Link>
                    </div>

                </div>
            </section>



            <BookMeeting />






        </>

    );
};

export default MultiChannelCampaigns;