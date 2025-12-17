"use client"

import { Button } from "antd"
import { ArrowRight, CheckCircle } from "lucide-react"
import Header from "@/Components/Header.jsx"
import Footer from "@/Components/Footer.jsx"
import { Head } from "@inertiajs/react"

const BRAND = {
    deeptruffle: "#3E755F",
    chalkDust: "#F4F4F4",
    deepTruffle: "#3C342E",
    wildSage: "#448C6A",
}

const Warranty = () => {
    return (
        <div className="min-h-screen bg-[#f8f7f4]">
            <Head>
                <title>Lumi Warranty & Support</title>
            </Head>
            <Header />

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center text-center bg-white">
                <div className="absolute inset-0">
                    <img
                        src="/Lumi%20-%20Oven2%20-%20Logo.jpg"
                        alt="Lumi Warranty & Support"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                </div>

                <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ color: "white" }}>
                        Lumi Warranty & Support
                    </h1>
                    <p className="text-lg md:text-xl mb-8 leading-relaxed text-gray-100">
                        We back our appliances with a straightforward warranty. Nothing complicated—just fair coverage that gives homeowners confidence and reduces issues for builders.
                    </p>
                </div>
            </section>

            {/* Warranty Promise Section */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ color: BRAND.deepTruffle }}>
                        Our Warranty Promise
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {[
                        {
                            icon: <CheckCircle className="w-12 h-12" style={{ color: BRAND.wildSage }} />,
                            title: "Clear Coverage",
                            desc: "No confusing terms or hidden conditions. Our warranty is written in plain language so you know exactly what's covered and for how long. We believe in transparency and making things simple for everyone involved.",
                        },
                        {
                            icon: <CheckCircle className="w-12 h-12" style={{ color: BRAND.wildSage }} />,
                            title: "Quick Support When Needed",
                            desc: "If something does go wrong, we're here to help sort it out quickly. Our support team understands that delays can be frustrating, so we work to resolve issues efficiently and keep everyone informed throughout the process.",
                        },
                        {
                            icon: <CheckCircle className="w-12 h-12" style={{ color: BRAND.wildSage }} />,
                            title: "NZ Service Partners",
                            desc: "We work with trusted service partners throughout New Zealand who understand our products and can provide local support. This means faster response times and reliable service when you need it most.",
                        },
                        {
                            icon: <CheckCircle className="w-12 h-12" style={{ color: BRAND.wildSage }} />,
                            title: "Peace of Mind for Homeowners",
                            desc: "Our warranty is designed to give homeowners confidence in their appliances from day one. For builders and developers, this means fewer call-backs and more satisfied clients who trust the quality of their new homes.",
                        },
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col items-center text-center bg-[#f5f2eb] rounded-xl p-8 transition-transform duration-300 hover:shadow-xl hover:-translate-y-2"
                        >
                            <div className="mb-4">{item.icon}</div>
                            <h3 className="text-xl font-semibold mb-4" style={{ color: BRAND.deeptruffle }}>
                                {item.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Additional Info Section */}


            {/* CTA Section */}
            <section className="py-20 px-6 text-[#f5f2eb] text-center" style={{ backgroundColor: BRAND.deepTruffle }}>
                <h2 className="text-4xl mb-4">Have Questions About Our Warranty?</h2>
                <p className="text-lg mb-8 text-gray-200">Get in touch with our team for more details</p>
                <Button
                    href="/contact"
                    size="large"
                    style={{
                        backgroundColor: "#f5f2eb",
                        borderColor: "#f5f2eb",
                        color: "#1d1512",
                        borderRadius: "999px",
                        padding: "14px 36px",
                        fontFamily: "Nexa Bold",
                        fontSize: "18px",
                    }}
                >
                    Contact Us <ArrowRight className="w-5 h-5" />
                </Button>
            </section>

            <Footer />
        </div>
    )
}

export default Warranty
