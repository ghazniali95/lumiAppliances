import { useEffect, useState } from "react"
import { ArrowRight, CheckCircle, Users, Award } from "lucide-react"
import { Button } from "antd"
import Header from "@/Components/Header.jsx"
import Footer from "@/Components/Footer.jsx"
import { Head } from "@inertiajs/react"
const BRAND = {
    deeptruffle: "#3E755F",   // Primary
    chalkDust: "#F4F4F4",  // Light background
    deepTruffle: "#3C342E", // Dark text
    wildSage: "#448C6A",   // Accent
};
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
            { threshold: 0.1 }
        )

        const sections = document.querySelectorAll("[data-animate]")
        sections.forEach((section) => observer.observe(section))

        return () => observer.disconnect()
    }, [])

    const isAnimated = (sectionId) => animatedSections.has(sectionId)

    return (
        <div className="min-h-screen bg-[#f8f7f4] ">
            {/* Header */}
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
                    <h1
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                        style={{ color: "white" }}
                    >
                        About Lumi
                    </h1>
                    <p className="text-lg md:text-xl mb-8 leading-relaxed text-gray-100">
                        Redefining home living with premium appliances designed for elegance,
                        innovation, and timeless quality.
                    </p>

                </div>
            </section>

            {/* Hero Section */}


            {/* Brand Story */}
            <section className="py-20 px-6 bg-[#f5f2eb]">
                <div className="max-w-6xl   mx-auto px-6 items-center">

                    <div>
                        <h2
                            className="text-4xl text-center font-semibold mb-4"
                        >
                            Our Story
                        </h2>
                        <p
                            className="text-lg text-gray-600 text-center mb-10"

                        >
                            At Lumi, we create appliances that go beyond utility — blending
                            luxury with everyday functionality. Every product reflects our
                            commitment to detail, modern design, and long-lasting performance.
                        </p>
                        <img
                            src="/Lumi - Dishwasher1 - Logo.jpg"
                            alt="Lumi Appliances"
                            className="rounded-2xl shadow-xl w-1/2 text-center justify center item-center aligned-center mx-auto"
                        />
                    </div>
                </div>
            </section>

            {/* Promise Section */}

            <section className="py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto text-center mb-16">
                    <h2
                        className="text-3xl md:text-4xl font-bold mb-12"
                        style={{ color: BRAND.deepTruffle }}
                    >
                        Our Promise
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                    {/* Card */}
                    {[
                        {
                            img: "/Lumi%20-%20Rangehood%20-%20Logo.jpg",
                            title: "Energy Efficient",
                            desc: "Our appliances are designed with cutting-edge technology to save energy and lower your bills."
                        },
                        {
                            img: "/Lumi - Oven2 - Logo.jpg",
                            title: "Sustainable Design",
                            desc: "We use eco-friendly materials and processes to reduce environmental impact without compromising quality."
                        },
                        {
                            img: "/Lumi - Dishwasher1 - Logo.jpg",
                            title: "Trusted Quality",
                            desc: "Built to last with premium craftsmanship, every LUMI product is backed by years of expertise."
                        }
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className="text-center bg-white rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:shadow-xl hover:-translate-y-2"
                        >
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6">
                                <h3
                                    className="text-xl font-semibold mb-4" style={{ color: BRAND.deeptruffle }}
                                >
                                    {item.title}
                                </h3>
                                <p
                                    className="text-gray-600 leading-relaxed"
                                >
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>


            {/* CTA */}
            <section className="py-20 px-6 text-[#f5f2eb] text-center"
                     style={{ backgroundColor: BRAND.deepTruffle }} >

                <h2
                    className="text-4xl  mb-4"
                >
                    Ready to Elevate Your Home?
                </h2>
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


            {/* Footer */}
            <Footer />
        </div>
    )
}

export default About
