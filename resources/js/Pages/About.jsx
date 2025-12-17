"use client"

import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "antd"
import Header from "@/Components/Header.jsx"
import Footer from "@/Components/Footer.jsx"
import { Head } from "@inertiajs/react"

const BRAND = {
    deeptruffle: "#3E755F",
    chalkDust: "#F4F4F4",
    deepTruffle: "#3C342E",
    wildSage: "#448C6A",
}

const About = () => {
    const [animatedSections, setAnimatedSections] = useState(new Set())

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setAnimatedSections((prev) => new Set(prev).add(entry.target.id))
                    }
                })
            },
            { threshold: 0.1 },
        )

        const sections = document.querySelectorAll("[data-animate]")
        sections.forEach((section) => observer.observe(section))

        return () => observer.disconnect()
    }, [])

    const isAnimated = (sectionId) => animatedSections.has(sectionId)

    return (
        <div className="min-h-screen bg-[#f8f7f4] ">
            <Head>
                <title>About Lumi</title>
            </Head>
            <Header />

            <section className="relative h-screen flex items-center justify-center text-center bg-white">
                <div className="absolute inset-0">
                    <img
                        src="/Lumi%20-%20Rangehood%20-%20Logo.jpg"
                        alt="Modern Home Appliances"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                </div>

                <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ color: "white" }}>
                        A Smarter Approach to Home Appliances
                    </h1>
                    <p className="text-lg md:text-xl mb-8 leading-relaxed text-gray-100">
                        Redefining home living with premium appliances designed for elegance, innovation, and timeless quality.
                    </p>
                </div>
            </section>

            <section className="py-20 px-6 bg-[#f5f2eb]">
                <div className="max-w-6xl mx-auto px-6 items-center">
                    <div>
                        <h2 className="text-4xl text-center font-semibold mb-4">Our Story</h2>
                        <p className="text-lg text-gray-600 text-center mb-10">
                            Lumi was created to give NZ developers and builders appliances that balance reliability, design, and
                            value. We're avoiding the extremes—nothing cheap and unreliable, but also not overly fancy or overpriced.
                            Just solid appliances that do the job well.
                        </p>
                        <img
                            src="/Lumi - Dishwasher1 - Logo.jpg"
                            alt="Lumi Appliances"
                            className="rounded-2xl shadow-xl w-1/2 text-center justify center item-center aligned-center mx-auto"
                        />
                    </div>
                </div>
            </section>

            <section className="py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ color: BRAND.deepTruffle }}>
                        Our Promise
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                    {[
                        {
                            img: "/Lumi%20-%20Rangehood%20-%20Logo.jpg",
                            title: "Built for Real Kiwi Homes",
                            desc: "Our appliances are chosen and designed around how people in New Zealand actually live. That means practical features, simple controls, and styles that fit well into modern new builds. Nothing over the top — just appliances that work the way families expect them to, every day.",
                        },
                        {
                            img: "/Lumi - Oven2 - Logo.jpg",
                            title: "Reliable Performance You Can Trust",
                            desc: "We focus on appliances that hold up over time, not just look good on install day. The idea is simple: fewer problems, fewer call-backs, and more confidence for the people who end up using them. Everything in the Lumi range is selected for steady, dependable performance without unnecessary complications.",
                        },
                        {
                            img: "/Lumi - Dishwasher1 - Logo.jpg",
                            title: "A Better Experience for Developers & Builders",
                            desc: "We aim to make things easier for the people delivering homes. That means consistent supply, reliable specs, and appliances that help reduce after-sales issues. Our goal is to support your projects with products that look good, work well, and help keep your builds on schedule.",
                        },
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className="text-center bg-white rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:shadow-xl hover:-translate-y-2"
                        >
                            <img src={item.img || "/placeholder.svg"} alt={item.title} className="w-full h-64 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-4" style={{ color: BRAND.deeptruffle }}>
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6 text-[#f5f2eb] text-center" style={{ backgroundColor: BRAND.deepTruffle }}>
                <h2 className="text-4xl mb-4">Ready to Elevate Your Home?</h2>
                <Button
                    href="/enquiry"
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
                    Enquire Now <ArrowRight className="w-5 h-5" />
                </Button>
            </section>

            <Footer />
        </div>
    )
}

export default About
