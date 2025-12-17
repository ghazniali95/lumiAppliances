import { Button } from "antd"
import Header from "@/Components/Header.jsx"
import Footer from "@/Components/Footer.jsx"
import ProductsSection from "@/Components/ProductsSection"
import FilterByCategory from "@/Components/FilterByCategory.jsx"
import GallerySection from "@/Components/GallerySection.jsx"
import { Head } from "@inertiajs/react"

// Lumi Brand Colors
const BRAND = {
    deeptruffle: "#3E755F", // Primary
    chalkDust: "#F4F4F4", // Light background
    deepTruffle: "#3C342E", // Dark text
    wildSage: "#448C6A", // Accent
}

export default function HomePage() {
    return (
        <div className="min-h-screen bg-white">
            <Head>
                <title>LUMI Appliances - Modern Living</title>
            </Head>
            <Header />

            {/* HERO SECTION */}
            <section className="relative h-screen flex items-center justify-center text-center bg-white">
                <div className="absolute inset-0">
                    <img src="/hero-image.jpg" alt="Modern Home Appliances" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                </div>

                <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ color: "white" }}>
                        Appliances Designed for Modern Kiwi Homes
                    </h1>
                    <p className="text-lg md:text-xl mb-8 leading-relaxed text-gray-100">
                        Smart, dependable appliances that look great and make home life easier.
                    </p>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-lg text-gray-600 leading-relaxed">
                        At Lumi, we want to make everyday living a bit simpler. Our appliances are chosen with New Zealand homes in
                        mind, keeping things easy to use and clean-looking so they fit nicely into most modern kitchens. The idea is
                        that families can just get on with cooking, cleaning, and living without having to figure out complicated
                        features.
                    </p>
                </div>
            </section>

            {/* WHY CHOOSE LUMI SECTION */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ color: BRAND.deepTruffle }}>
                        Why Choose Lumi?
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {/* Card 1 */}
                        <div className="bg-white rounded-2xl  p-6 hover:shadow-xl transition duration-300">
                            <div className=" mx-auto mb-6 flex items-center justify-center rounded-full bg-[#3E755F]/10">
                                <img
                                    src="/Lumi%20-%20Rangehood%20-%20Logo.jpg"
                                    alt="Modern Home Appliances"
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>
                            <h3 className="text-xl font-semibold mb-4" style={{ color: BRAND.deeptruffle }}>
                                Practical & Everyday Use
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Every Lumi appliance is selected for practicality and everyday use. Straightforward to operate,
                                consistent in performance, and built to last.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white rounded-2xl  p-6 hover:shadow-xl transition duration-300">
                            <div className=" mx-auto mb-6 flex items-center justify-center rounded-full bg-[#3E755F]/10">
                                <img
                                    src="/Lumi%20-%20Dishwasher1%20-%20Logo.jpg"
                                    alt="Modern Home Appliances"
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>
                            <h3 className="text-xl font-semibold mb-4" style={{ color: BRAND.deeptruffle }}>
                                Clean & Cohesive Design
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Clean lines, simple controls, and a cohesive look across the whole range—Lumi fits seamlessly into new
                                builds and renovations alike.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white rounded-2xl  p-6 hover:shadow-xl transition duration-300">
                            <div className=" mx-auto mb-6 flex items-center justify-center rounded-full bg-[#3E755F]/10">
                                <img
                                    src="/Lumi - Oven2 - Logo.jpg"
                                    alt="Modern Home Appliances"
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>
                            <h3 className="text-xl font-semibold mb-4" style={{ color: BRAND.deeptruffle }}>
                                Simple & Dependable
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                From uncomplicated installation to clear user operation, Lumi keeps things simple. A dependable choice
                                for builders and confidence for new homeowners.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* PRODUCTS */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="item-center justify-center">
                    <div className=" items-center text-center justify-between mb-12">
                        <div>
                            <h2 className="text-5xl font-bold mb-4" style={{ color: BRAND.deepTruffle }}>
                                Our Appliances
                            </h2>
                            <p className="text-lg text-gray-600 text-center">
                                Explore our full collection of ovens, hobs, hoods, and more — each designed with performance and
                                elegance.
                            </p>
                        </div>
                    </div>

                    <FilterByCategory />
                    <ProductsSection />
                </div>
            </section>

            {/* GALLERY */}
            <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: BRAND.chalkDust }}>
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-5xl font-bold mb-6" style={{ color: BRAND.deepTruffle }}>
                            Who We Serve
                        </h2>
                        <p className="text-lg text-gray-600 mb-8">
                            We work with residential developers, group home builders, and procurement teams.
                        </p>
                    </div>


                </div>
            </section>

            {/* CALL TO ACTION */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-5xl font-bold mb-6 leading-tight" style={{ color: BRAND.deepTruffle }}>
                        Lumi Appliances New Zealand
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">Helping create better everyday living with simple, reliable kitchen appliances.</p>
                    <Button
                        href="/enquiry"
                        type="primary"
                        size="large"
                        className="px-6 py-3 h-auto text-base font-semibold"
                        style={{ background: BRAND.deeptruffle, borderColor: BRAND.deeptruffle }}
                    >
                        Start Your Enquiry
                    </Button>
                </div>
            </section>

            <Footer />
        </div>
    )
}
