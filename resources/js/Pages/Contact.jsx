"use client"

import { useState } from "react"
import { Button, Input, message } from "antd"
import { Mail, Phone, MapPin } from "lucide-react"
import Header from "@/Components/Header.jsx"
import Footer from "@/Components/Footer.jsx"
import { Head } from "@inertiajs/react"

const { TextArea } = Input

const BRAND = {
    deeptruffle: "#3E755F",
    chalkDust: "#F4F4F4",
    deepTruffle: "#3C342E",
    wildSage: "#448C6A",
}

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    })
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            message.error("Please fill in all required fields")
            return
        }

        setLoading(true)

        try {
            // Create mailto link with form data
            const mailtoLink = `mailto:info@lumikitchens.co.nz?subject=${encodeURIComponent(
                formData.subject || "Contact Form Submission"
            )}&body=${encodeURIComponent(
                `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || "Not provided"}\n\nMessage:\n${formData.message}`
            )}`

            window.location.href = mailtoLink

            message.success("Opening your email client...")

            // Reset form
            setFormData({
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
            })
        } catch (error) {
            message.error("Something went wrong. Please try again.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-white">
            <Head>
                <title>Contact Us - Lumi</title>
            </Head>
            <Header />

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center text-center bg-white">
                <div className="absolute inset-0">
                    <img src="/Lumi - Oven2 - Logo.jpg" alt="Contact Lumi" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                </div>

                <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ color: "white" }}>
                        Get in Touch With Lumi
                    </h1>
                    <p className="text-lg md:text-xl mb-8 leading-relaxed text-gray-100">
                        We deal directly with developers, builders, and procurement teams. If you've got a project or want more
                        info, we're easy to reach.
                    </p>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-20 px-6 bg-[#f5f2eb]">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: BRAND.deepTruffle }}>
                            Contact Information
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            General enquiries, support/warranty questions, or partnership discussions can come through the form below.
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name Field */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold mb-2" style={{ color: BRAND.deepTruffle }}>
                                    Name <span className="text-red-500">*</span>
                                </label>
                                <Input
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your full name"
                                    size="large"
                                    required
                                    className="rounded-lg"
                                />
                            </div>

                            {/* Email Field */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold mb-2" style={{ color: BRAND.deepTruffle }}>
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="your.email@example.com"
                                    size="large"
                                    required
                                    className="rounded-lg"
                                />
                            </div>

                            {/* Phone Field */}
                            <div>
                                <label htmlFor="phone" className="block text-sm font-semibold mb-2" style={{ color: BRAND.deepTruffle }}>
                                    Phone (Optional)
                                </label>
                                <Input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Your phone number"
                                    size="large"
                                    className="rounded-lg"
                                />
                            </div>

                            {/* Subject Field */}
                            <div>
                                <label htmlFor="subject" className="block text-sm font-semibold mb-2" style={{ color: BRAND.deepTruffle }}>
                                    Subject
                                </label>
                                <Input
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Brief subject of your enquiry"
                                    size="large"
                                    className="rounded-lg"
                                />
                            </div>

                            {/* Message Field */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold mb-2" style={{ color: BRAND.deepTruffle }}>
                                    Message <span className="text-red-500">*</span>
                                </label>
                                <TextArea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us about your project or enquiry..."
                                    rows={6}
                                    required
                                    className="rounded-lg"
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="text-center pt-4">
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    size="large"
                                    loading={loading}
                                    className="px-8 py-3 h-auto text-base font-semibold"
                                    style={{
                                        background: BRAND.deeptruffle,
                                        borderColor: BRAND.deeptruffle,
                                        borderRadius: "999px",
                                        padding: "14px 48px",
                                    }}
                                >
                                    Send Message
                                </Button>
                            </div>
                        </form>

                        {/* Contact Email Display */}
                        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
                            <p className="text-gray-600 mb-2">Or email us directly at:</p>
                            <a
                                href="mailto:info@lumikitchens.co.nz"
                                className="text-lg font-semibold hover:underline"
                                style={{ color: BRAND.deeptruffle }}
                            >
                                info@lumikitchens.co.nz
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Contact
