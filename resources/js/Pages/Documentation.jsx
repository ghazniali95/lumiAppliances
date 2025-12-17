"use client"

import { Button } from "antd"
import { ArrowRight, FileText, BookOpen, Shield } from "lucide-react"
import Header from "@/Components/Header.jsx"
import Footer from "@/Components/Footer.jsx"
import { Head } from "@inertiajs/react"

const BRAND = {
    deeptruffle: "#3E755F",
    chalkDust: "#F4F4F4",
    deepTruffle: "#3C342E",
    wildSage: "#448C6A",
}

const Documentation = () => {
    return (
        <div className="min-h-screen bg-[#f8f7f4]">
            <Head>
                <title>Installation Guides & Product Documents</title>
            </Head>
            <Header />

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center text-center bg-white">
                <div className="absolute inset-0">
                    <img
                        src="/Lumi%20-%20Rangehood%20-%20Logo.jpg"
                        alt="Installation Guides & Documentation"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                </div>

                <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ color: "white" }}>
                        Installation Guides & Product Documents
                    </h1>
                    <p className="text-lg md:text-xl mb-8 leading-relaxed text-gray-100">
                        All manuals, installation guides, and warranties will be available here for builders, installers, and homeowners.
                    </p>
                </div>
            </section>

            {/* Documentation Sections */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            {
                                icon: <BookOpen className="w-16 h-16" style={{ color: BRAND.wildSage }} />,
                                title: "Manuals",
                                desc: "Comprehensive user manuals for all Lumi appliances. Clear instructions covering operation, maintenance, and troubleshooting to help you get the most from your appliances.",
                                items: [
                                    "Oven User Manual",
                                    "Dishwasher User Manual",
                                    "Rangehood User Manual",
                                    "Cooktop User Manual",
                                ],
                            },
                            {
                                icon: <FileText className="w-16 h-16" style={{ color: BRAND.wildSage }} />,
                                title: "Installation Guides",
                                desc: "Step-by-step installation guides designed for professional installers and builders. Includes specifications, clearances, and electrical requirements for proper installation.",
                                items: [
                                    "Oven Installation Guide",
                                    "Dishwasher Installation Guide",
                                    "Rangehood Installation Guide",
                                    "Cooktop Installation Guide",
                                ],
                            },
                            {
                                icon: <Shield className="w-16 h-16" style={{ color: BRAND.wildSage }} />,
                                title: "Warranty Documents",
                                desc: "Complete warranty information and registration forms. Review coverage details and understand what's included with your Lumi appliances for peace of mind.",
                                items: [
                                    "Standard Warranty Terms",
                                    "Warranty Registration Form",
                                    "Extended Warranty Options",
                                    "Service & Support Information",
                                ],
                            },
                        ].map((section, idx) => (
                            <div
                                key={idx}
                                className="bg-[#f5f2eb] rounded-xl p-8 transition-transform duration-300 hover:shadow-xl hover:-translate-y-2"
                            >
                                <div className="mb-6 flex justify-center">{section.icon}</div>
                                <h3 className="text-2xl font-semibold mb-4 text-center" style={{ color: BRAND.deeptruffle }}>
                                    {section.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed mb-6 text-center">{section.desc}</p>
                                <ul className="space-y-3">
                                    {section.items.map((item, itemIdx) => (
                                        <li key={itemIdx} className="flex items-start">
                                            <span className="mr-2 mt-1" style={{ color: BRAND.wildSage }}>•</span>
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Coming Soon Notice */}
            <section className="py-20 px-6 bg-[#f5f2eb]">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold mb-6" style={{ color: BRAND.deepTruffle }}>
                        Documentation Library Coming Soon
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                        We're currently building our comprehensive documentation library. All product manuals, installation guides, and warranty documents will be available for download here soon.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                        In the meantime, if you need any documentation or have questions about installation, please don't hesitate to contact our support team. We're here to help ensure your project runs smoothly.
                    </p>
                    <div className="bg-white rounded-lg p-6 inline-block shadow-md">
                        <p className="text-gray-700 mb-2">Need documentation now?</p>
                        <p className="text-lg font-semibold" style={{ color: BRAND.deeptruffle }}>
                            Email: support@lumiappliances.co.nz
                        </p>
                    </div>
                </div>
            </section>

            {/* Additional Resources Section */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-semibold mb-12 text-center" style={{ color: BRAND.deepTruffle }}>
                        What You'll Find Here
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "For Builders & Developers",
                                desc: "Technical specifications, installation requirements, and compliance documentation to help you plan and execute projects with confidence.",
                            },
                            {
                                title: "For Installers",
                                desc: "Detailed installation guides with step-by-step instructions, wiring diagrams, and recommended installation practices for each appliance type.",
                            },
                            {
                                title: "For Homeowners",
                                desc: "User-friendly manuals covering daily operation, cleaning and maintenance tips, and troubleshooting guides to help you care for your appliances.",
                            },
                            {
                                title: "For Service Technicians",
                                desc: "Technical service documentation, parts diagrams, and diagnostic information to support efficient service and repairs.",
                            },
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-[#f5f2eb] rounded-lg p-6 border-l-4"
                                style={{ borderColor: BRAND.wildSage }}
                            >
                                <h3 className="text-xl font-semibold mb-3" style={{ color: BRAND.deeptruffle }}>
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6 text-[#f5f2eb] text-center" style={{ backgroundColor: BRAND.deepTruffle }}>
                <h2 className="text-4xl mb-4">Questions About Our Products?</h2>
                <p className="text-lg mb-8 text-gray-200">Contact us for documentation or technical support</p>
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
                    Get in Touch <ArrowRight className="w-5 h-5" />
                </Button>
            </section>

            <Footer />
        </div>
    )
}

export default Documentation
