
import { useEffect, useState } from "react"
import { ArrowRight, CheckCircle, Users, Award, Clock } from "lucide-react"
import { Button } from "antd"
import Header from "@/Components/Header.jsx"
import Footer from "@/Components/Footer.jsx"
import {Head} from "@inertiajs/react";

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
        <div className="min-h-screen" style={{ backgroundColor: "#f8f7f4" }}>
            {/* Header */}
            <Head>
                <title>About Us</title>
            </Head>
            <Header />

            {/* Hero Section */}
            <section
                className="relative h-screen flex items-center justify-center"
                style={{
                    backgroundImage: `url('/about.jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <div className="relative z-10 text-center text-white">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4" style={{ fontFamily: "serif" }}>
                        About Modera Kitchens
                    </h1>
                    <p className="text-lg text-white mb-8 leading-relaxed">
                        Crafting exceptional kitchen experiences through precision design and quality components
                    </p>
                </div>
            </section>

            {/* Brand Story & Quality Promise */}
            <section
                id="brand-story"
                data-animate
                className="py-20 px-4 sm:px-6 lg:px-8"
                style={{ backgroundColor: "#f5f3f0" }}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div
                            className={`transform transition-all duration-1000 ${
                                isAnimated("brand-story") ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
                            }`}
                        >
                            <h2 className="text-3xl sm:text-2xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 text-gray-900">
                                Our Story
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                At Modera, we believe everyone deserves a kitchen that combines style, durability, and affordability. By
                                sourcing products from large-scale, automated factories, we bring you the same advanced technology and
                                high specifications trusted by leading global brands — but without the inflated costs.
                            </p>
                        </div>

                        <div
                            className={`transform transition-all duration-1000 delay-300 ${
                                isAnimated("brand-story") ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
                            }`}
                        >
                            <img src="/kitchen.jpg" alt="Premium kitchen components" className="rounded-lg shadow-lg w-full" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Promise Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-2xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 text-gray-900">
                            Our Promise
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Award className="w-8 h-8 text-gray-600" />
                            </div>
                            <h3 className="text-xl font-serif font-bold mb-4 text-gray-900">High-Spec Products</h3>
                            <p className="text-gray-600 leading-relaxed">Built with precision, designed to perform.</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle className="w-8 h-8 text-gray-600" />
                            </div>
                            <h3 className="text-xl font-serif font-bold mb-4 text-gray-900">Affordable Luxury</h3>
                            <p className="text-gray-600 leading-relaxed">Premium quality without the premium price.</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Users className="w-8 h-8 text-gray-600" />
                            </div>
                            <h3 className="text-xl font-serif font-bold mb-4 text-gray-900">Trusted Support</h3>
                            <p className="text-gray-600 leading-relaxed">
                                From planning to installation, our team and partners ensure every detail is handled with care.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}


            {/* Partnership Section */}
            <section
                id="partnership"
                data-animate
                className="py-20 px-4 sm:px-6 lg:px-8"
                style={{ backgroundColor: "#f8f7f4" }}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2
                            className={`text-3xl sm:text-2xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 text-gray-900 transform transition-all duration-1000 ${
                                isAnimated("partnership") ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                            }`}
                        >
                            Our Partnership
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div
                            className={`transform transition-all duration-1000 delay-200 ${
                                isAnimated("partnership") ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
                            }`}
                        >
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                We've partnered with HK Kitchens, one of New Zealand's most respected names in kitchen manufacturing.
                                Together, we blend international innovation with local craftsmanship and support — giving you the
                                confidence that your new kitchen will look incredible and last for years.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="w-6 h-6 text-blue-600" />
                                    <span className="text-gray-600 font-medium">Precision manufacturing processes</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="w-6 h-6 text-blue-600" />
                                    <span className="text-gray-600 font-medium">Enhanced quality assurance</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="w-6 h-6 text-blue-600" />
                                    <span className="text-gray-600 font-medium">Expert installation services</span>
                                </div>
                            </div>
                        </div>

                        <div
                            className={`transform transition-all duration-1000 delay-400 ${
                                isAnimated("partnership") ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
                            }`}
                        >
                            <div className="bg-white p-8 rounded-lg shadow-lg">
                                <div className="flex items-center justify-center space-x-8 mb-6">
                                    <div className="text-center">
                                        <img src="/3.png" alt="Modera Kitchens" className="h-16 mx-auto mb-2" />
                                        <span className="text-sm text-gray-600">Modera Kitchens</span>
                                    </div>
                                    <div className="text-3xl text-gray-400">+</div>
                                    <div className="text-center">
                                        <img src="/hk-kitchens-logo.png" alt="HK Kitchens" className="h-16 mx-auto mb-2" />
                                        <span className="text-sm text-gray-600">HK Kitchens</span>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <p className="text-gray-600 font-medium">Together, delivering exceptional kitchen experiences</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section id="cta" data-animate className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2
                        className={`text-3xl sm:text-2xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 text-gray-900 transform transition-all duration-1000 ${
                            isAnimated("cta") ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                    >
                        Ready to Transform Your Kitchen?
                    </h2>
                    <p
                        className={`text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed transform transition-all duration-1000 delay-200 ${
                            isAnimated("cta") ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                    >
                        Let's discuss your vision and create a kitchen that perfectly matches your lifestyle and aesthetic
                        preferences.
                    </p>
                    <Button
                        href="/enquiry"

                        size="large"
                        className={`transform transition-all duration-1000 delay-400 ${
                            isAnimated("cta") ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                        style={{
                            backgroundColor: "#1f2937",
                            borderColor: "#1f2937",
                            color: "white",
                            borderRadius: "8px",
                            height: "auto",
                            padding: "12px 32px",
                            fontSize: "18px",
                            fontWeight: "500",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "8px",
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = "#111827"
                            e.target.style.borderColor = "#111827"
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = "#1f2937"
                            e.target.style.borderColor = "#1f2937"
                        }}
                    >
                        Enquire now
                        <ArrowRight className="w-5 h-5" />
                    </Button>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default About
