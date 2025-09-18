
import { useState } from "react"
import { Button } from "antd"
import Header from "@/Components/Header.jsx"
import Footer from "@/Components/Footer.jsx"
import ProductsSection from "@/Components/ProductsSection";
import FilterByCategory from "@/Components/FilterByCategory.jsx";
import GallerySection from "@/Components/GallerySection.jsx";
import {Head} from "@inertiajs/react";


export default function HomePage() {

    return (
        <div className="min-h-screen bg-white">
            <Head>
                <title>High-Spec Kitchens, Made Affordable</title>
            </Head>
            <Header />

            <section className="relative h-screen flex items-center overflow-hidden" style={{ backgroundColor: "#f5f3f0" }}>
                <div className="absolute inset-0">
                    <img src="/kitchen.jpg" alt="Mountain landscape with kitchen" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="text-white max-w-lg">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
                            High-Spec Kitchens, Made Affordable
                        </h1>
                        <p className="text-lg md:text-xl mb-8 leading-relaxed">
                            Modera brings the best of high-tech, automated manufacturing together with trusted local expertise. The
                            result? Stunning kitchens built from premium components — without the premium price tag.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                href="/range"
                                type="primary"
                                size="large"
                                className="bg-slate-600 hover:!bg-[rgb(248,247,244)] hover:!text-black border-slate-600 px-4 py-2 h-auto text-base transition-colors duration-300"
                            >
                                Explore the Range
                            </Button>
                            <Button
                                href="/enquiry"
                                type="default"
                                size="large"
                                className="bg-white text-gray-900 border-white hover:!bg-[rgb(248,247,244)] hover:!text-black px-4 py-2 h-auto text-base transition-colors duration-300"
                            >
                                Start Your Enquiry
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-5xl font-serif font-bold text-gray-900 mb-4">Why Choose Modera</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center border border-gray-100">
                            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <div className="w-8 h-8 bg-slate-600 rounded"></div>
                            </div>
                            <h3 className="text-xl font-serif font-semibold text-gray-900 mb-4">High-Tech Manufacturing</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Products sourced from world-leading, fully automated factories — ensuring precision, durability, and
                                cutting-edge design.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center border border-gray-100">
                            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <div className="w-8 h-8 bg-slate-600 rounded"></div>
                            </div>
                            <h3 className="text-xl font-serif font-semibold text-gray-900 mb-4">Affordable Excellence</h3>
                            <p className="text-gray-600 leading-relaxed">
                                By removing middlemen and streamlining supply, we make premium kitchen components accessible at a
                                fraction of the cost.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center border border-gray-100">
                            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <div className="w-8 h-8 bg-slate-600 rounded-full"></div>
                            </div>
                            <h3 className="text-xl font-serif font-semibold text-gray-900 mb-4">Trusted Local Partnership</h3>
                            <p className="text-gray-600 leading-relaxed">
                                In collaboration with HK Kitchens, we deliver expert installation and customer support you can rely on.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center border border-gray-100">
                            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <div className="w-8 h-8 bg-slate-600 rounded-lg"></div>
                            </div>
                            <h3 className="text-xl font-serif font-semibold text-gray-900 mb-4">Complete Range</h3>
                            <p className="text-gray-600 leading-relaxed">
                                From benchtops and cabinetry to handles, accessories, sinks, and tapware — every detail is designed to
                                elevate your space.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <style jsx>
                    {`
                        .product-card {
                          opacity: 0;
                          transform: translateX(-50px);
                          transition: all 0.6s ease-out;
                        }
                        .product-card.animate {
                          opacity: 1;
                          transform: translateX(0);
                        }
                  `}
                </style>
                <div className="max-w-7xl mx-auto">
                    {/* Section header */}
                    <div className="flex items-center justify-between mb-12">
                        <div>
                            <h2 className="text-5xl font-serif font-bold text-gray-900 mb-4">Our Products</h2>
                            <p className="text-lg text-gray-600 max-w-2xl">
                                Discover our comprehensive collection of kitchen components, each carefully selected for quality and
                                design excellence.
                            </p>
                        </div>
                    </div>

                    {/* Category filter */}
                    <FilterByCategory />
                    <ProductsSection />
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#f8f7f4" }}>
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-5xl font-serif font-bold text-gray-900 mb-6">See what's possible with Modera.</h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Explore our gallery of stunning kitchen transformations and get inspired for your own space.
                        </p>
                    </div>

                    <GallerySection />

                    <div className="text-center">
                        <Button
                            href="/gallery"
                            type="primary"
                            size="large"
                            className="bg-slate-600 hover:!bg-[rgb(248,247,244)] hover:!text-black border-slate-600 px-6 py-3 h-auto text-base transition-colors duration-300"
                        >
                            View Full Gallery
                        </Button>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                        Your Dream Kitchen, Made Simple.
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        Whether you already have a plan or are starting from scratch, Modera makes it easy.
                    </p>
                    <Button
                        href="/enquiry"
                        type="primary"
                        size="large"
                        className="bg-slate-600 hover:!bg-[rgb(248,247,244)] hover:!text-black border-slate-600 px-6 py-3 h-auto text-base transition-colors duration-300"
                    >
                        Start Your Enquiry
                    </Button>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#f8f7f4" }}>
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12">
                        <h2 className="text-5xl font-serif font-bold text-gray-900 mb-2">Our Mission</h2>
                        <p className="text-lg text-gray-600 max-w-2xl">
                            To simplify the kitchen supply process for builders—delivering high-quality, custom kitchens at exceptional prices. We streamline the journey from quote to install, helping builders save time, reduce costs, and impress clients without compromising on craftsmanship."
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                        <div className="space-y-8">
                            <div>
                                <div className="text-2xl font-serif font-bold text-gray-900 mb-2">Nationwide Footprint</div>
                            </div>
                            <div>
                                <div className="text-2xl font-serif font-bold text-gray-900 mb-2">30 Years</div>
                                <div className="text-lg text-gray-600">Design and Install Experience</div>
                            </div>
                            <div>
                                <div className="text-2xl font-serif font-bold text-gray-900 mb-2">40,000+</div>
                                <div className="text-lg text-gray-600">Kitchens</div>
                            </div>
                        </div>
                        <div className="lg:col-span-2">
                            <img
                                src="/modern-kitchen-showroom.png"
                                alt="Kitchen showroom"
                                className="w-full h-64 object-cover rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
