"use client"

import { useEffect, useRef, useState } from "react"
import Header from "@/Components/Header.jsx"
import Footer from "@/Components/Footer.jsx"
import FilterByCategory from "@/Components/FilterByCategory"
import ProductsSection from "@/Components/ProductsSection.jsx"
import { Head } from "@inertiajs/react"

const filters = {
    finish: ["Matte", "Gloss", "Satin", "Textured"],
    colour: ["White", "Black", "Grey", "Natural", "Wood Tone"],
    material: ["Quartz", "Granite", "Marble", "Timber", "Stainless Steel"],
    brand: ["Caesarstone", "Quantum Quartz", "Essastone", "Silestone"],
    thickness: ["20mm", "30mm", "40mm"],
    edgeProfile: ["Square", "Bullnose", "Beveled", "Ogee"],
    mountType: ["Undermount", "Drop-in", "Farmhouse", "Integrated"],
}

// Mock product data
const mockProducts = [
    {
        id: 1,
        name: "Calacatta Marble Benchtop",
        category: "Benchtops",
        material: "Marble",
        finish: "Polished",
        image: "/a.jpg",
        specs: "Natural marble, 30mm thickness",
    },
    {
        id: 2,
        name: "Shaker Style Cabinet Door",
        category: "Cabinetry Boards",
        material: "Timber",
        finish: "Matte",
        image: "/b.jbg",
        specs: "Solid timber, painted finish",
    },
    {
        id: 3,
        name: "Brass Bar Handle",
        category: "Handles",
        material: "Brass",
        finish: "Brushed",
        image: "/3.jpg",
        specs: "Solid brass, 300mm length",
    },
    {
        id: 4,
        name: "Undermount Sink",
        category: "Sinks & Tapware",
        material: "Stainless Steel",
        finish: "Brushed",
        image: "/3.jpg",
        specs: "304 grade steel, single bowl",
    },
    {
        id: 5,
        name: "Soft Close Hinges",
        category: "Accessories",
        material: "Steel",
        finish: "Chrome",
        image: "/placeholder-0c19u.png",
        specs: "European style, soft close",
    },
    {
        id: 6,
        name: "Quartz Benchtop",
        category: "Benchtops",
        material: "Quartz",
        finish: "Matte",
        image: "/modern-kitchen.png",
        specs: "Engineered quartz, 20mm thickness",
    },
    {
        id: 7,
        name: "Granite Benchtop",
        category: "Benchtops",
        material: "Granite",
        finish: "Polished",
        image: "/modern-kitchen-showroom.png",
        specs: "Natural granite, 40mm thickness",
    },
    {
        id: 8,
        name: "Modern Cabinet Handle",
        category: "Handles",
        material: "Stainless Steel",
        finish: "Brushed",
        image: "/placeholder-ac847.png",
        specs: "Stainless steel, 200mm length",
    },
    {
        id: 9,
        name: "Farmhouse Sink",
        category: "Sinks & Tapware",
        material: "Ceramic",
        finish: "White",
        image: "/white-farmhouse-sink.png",
        specs: "Ceramic apron front, double bowl",
    },
    {
        id: 10,
        name: "Timber Veneer Panel",
        category: "Cabinetry Boards",
        material: "Timber",
        finish: "Natural",
        image: "/placeholder-ff34i.png",
        specs: "Oak veneer, natural finish",
    },
    {
        id: 11,
        name: "LED Under Cabinet Light",
        category: "Accessories",
        material: "Aluminum",
        finish: "Matte",
        image: "/placeholder-wjn4w.png",
        specs: "LED strip, warm white, dimmable",
    },
    {
        id: 12,
        name: "Black Granite Benchtop",
        category: "Benchtops",
        material: "Granite",
        finish: "Polished",
        image: "/granite-marble-benchtop.png",
        specs: "Black granite, 30mm thickness",
    },
]

export default function RangePage({ categorySlug = null }) {
    const [activeCategory, setActiveCategory] = useState("Benchtops")
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedFilters, setSelectedFilters] = useState({})
    const [favorites, setFavorites] = useState(new Set())

    const categoryRef = useRef(null)

    useEffect(() => {
        if (categorySlug && categoryRef.current) {
            categoryRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
        }
    }, [categorySlug])

    const filteredProducts = mockProducts.filter((product) => {
        const matchesCategory = product.category === activeCategory
        const matchesSearch =
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.specs.toLowerCase().includes(searchTerm.toLowerCase())

        // Apply selected filters
        const matchesFilters = Object.entries(selectedFilters).every(([filterKey, filterValue]) => {
            if (!filterValue) return true
            return product[filterKey]?.toLowerCase() === filterValue.toLowerCase()
        })

        return matchesCategory && matchesSearch && matchesFilters
    })

    const toggleFavorite = (productId) => {
        const newFavorites = new Set(favorites)
        if (newFavorites.has(productId)) {
            newFavorites.delete(productId)
        } else {
            newFavorites.add(productId)
        }
        setFavorites(newFavorites)
    }

    const handleFilterChange = (filterType, value) => {
        setSelectedFilters((prev) => ({
            ...prev,
            [filterType]: value,
        }))
    }

    return (
        <div className="min-h-screen bg-white">
            <Head>
                <title>Our Range</title>
            </Head>
            <Header />

            {/* Hero Section */}
            <section className="relative h-[90vh] flex items-center justify-center text-center overflow-hidden bg-[#1d1512]">
                <div className="absolute inset-0">
                    <img
                        src="/Lumi%20-%20Dishwasher1%20-%20Logo.jpg"
                        alt="Lumi Appliances Range"
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                </div>
                <div className="relative z-10 max-w-4xl px-6">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                        The Lumi Kitchen Range
                    </h1>
                    <p className="text-lg md:text-xl mb-8 leading-relaxed text-gray-100">
                        Appliances designed to look good, work well, and suit the way New Zealand homes are lived in every day.
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
                {/* Category Tabs */}
                <div ref={categoryRef}>
                    <FilterByCategory categorySlug={categorySlug} />

                    <ProductsSection category={categorySlug} />
                </div>
            </div>

            <Footer />
        </div>
    )
}
