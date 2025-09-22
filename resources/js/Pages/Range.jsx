import {useEffect, useRef, useState} from "react"
import { Button, Input, Select } from "antd"
import { Heart, Search, Filter, ChevronDown } from "lucide-react"
import Header from "@/Components/Header.jsx";
import Footer from "@/Components/Footer.jsx";
import FilterByCategory from "@/Components/FilterByCategory";
import ProductsSection from "@/Components/ProductsSection.jsx";
import {Head} from "@inertiajs/react";

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

export default function RangePage({categorySlug = null}) {
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
                    <h1  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                        The Lumi Experience
                    </h1>
                    <p className="text-lg md:text-xl mb-8 leading-relaxed text-gray-100">
                        Discover our premium collection of home appliances, designed to bring elegance,
                        innovation, and efficiency into every corner of your home.
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
                    <FilterByCategory categorySlug={categorySlug}/>

                    <ProductsSection category={categorySlug} />
                </div>
                {/* Main Layout with Sidebar */}
                {/*<div className="flex flex-col lg:flex-row gap-8">*/}
                {/*    /!* Left Sidebar - Filters *!/*/}
                {/*    <div className="lg:w-80 flex-shrink-0">*/}
                {/*        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 sticky top-4">*/}
                {/*            <div className="flex items-center justify-between mb-8">*/}
                {/*                <h2 className="text-2xl font-serif font-bold text-gray-900 flex items-center gap-2">*/}
                {/*                    <Filter className="h-5 w-5 text-gray-700" />*/}
                {/*                    Filters*/}
                {/*                </h2>*/}
                {/*                <button*/}
                {/*                    onClick={() => setSelectedFilters({})}*/}
                {/*                    className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors px-3 py-1 rounded-md hover:bg-gray-50"*/}
                {/*                >*/}
                {/*                    Clear all*/}
                {/*                </button>*/}
                {/*            </div>*/}

                {/*            /!* Search Box *!/*/}
                {/*            <div className="mb-8">*/}
                {/*                <label className="block text-sm font-medium text-gray-700 mb-2">Search Products</label>*/}
                {/*                <div className="relative">*/}
                {/*                    <Input*/}
                {/*                        placeholder="Search by name or specifications..."*/}
                {/*                        value={searchTerm}*/}
                {/*                        onChange={(e) => setSearchTerm(e.target.value)}*/}
                {/*                        prefix={<Search className="text-gray-400 h-4 w-4" />}*/}
                {/*                        className="py-3 rounded-lg border-gray-200 focus:border-gray-900 focus:ring-gray-900"*/}
                {/*                        style={{ fontSize: "14px" }}*/}
                {/*                    />*/}
                {/*                </div>*/}
                {/*            </div>*/}

                {/*            /!* Filter Sections *!/*/}
                {/*            <div className="space-y-6">*/}
                {/*                /!* Material Filter *!/*/}
                {/*                <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">*/}
                {/*                    <h3 className="font-serif font-semibold text-gray-900 mb-3 flex items-center justify-between text-base">*/}
                {/*                        Material*/}
                {/*                        <ChevronDown className="h-4 w-4 text-gray-500" />*/}
                {/*                    </h3>*/}
                {/*                    <Select*/}
                {/*                        placeholder="Choose material type"*/}
                {/*                        className="w-full"*/}
                {/*                        onChange={(value) => handleFilterChange("material", value)}*/}
                {/*                        allowClear*/}
                {/*                        value={selectedFilters.material}*/}
                {/*                        size="large"*/}
                {/*                        style={{ borderRadius: "8px" }}*/}
                {/*                    >*/}
                {/*                        {filters.material.map((option) => (*/}
                {/*                            <Select.Option key={option} value={option}>*/}
                {/*                                {option}*/}
                {/*                            </Select.Option>*/}
                {/*                        ))}*/}
                {/*                    </Select>*/}
                {/*                </div>*/}

                {/*                /!* Finish Filter *!/*/}
                {/*                <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">*/}
                {/*                    <h3 className="font-serif font-semibold text-gray-900 mb-3 flex items-center justify-between text-base">*/}
                {/*                        Finish*/}
                {/*                        <ChevronDown className="h-4 w-4 text-gray-500" />*/}
                {/*                    </h3>*/}
                {/*                    <Select*/}
                {/*                        placeholder="Choose finish type"*/}
                {/*                        className="w-full"*/}
                {/*                        onChange={(value) => handleFilterChange("finish", value)}*/}
                {/*                        allowClear*/}
                {/*                        value={selectedFilters.finish}*/}
                {/*                        size="large"*/}
                {/*                        style={{ borderRadius: "8px" }}*/}
                {/*                    >*/}
                {/*                        {filters.finish.map((option) => (*/}
                {/*                            <Select.Option key={option} value={option}>*/}
                {/*                                {option}*/}
                {/*                            </Select.Option>*/}
                {/*                        ))}*/}
                {/*                    </Select>*/}
                {/*                </div>*/}

                {/*                /!* Colour Filter *!/*/}
                {/*                <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">*/}
                {/*                    <h3 className="font-serif font-semibold text-gray-900 mb-3 flex items-center justify-between text-base">*/}
                {/*                        Colour*/}
                {/*                        <ChevronDown className="h-4 w-4 text-gray-500" />*/}
                {/*                    </h3>*/}
                {/*                    <Select*/}
                {/*                        placeholder="Choose colour option"*/}
                {/*                        className="w-full"*/}
                {/*                        onChange={(value) => handleFilterChange("colour", value)}*/}
                {/*                        allowClear*/}
                {/*                        value={selectedFilters.colour}*/}
                {/*                        size="large"*/}
                {/*                        style={{ borderRadius: "8px" }}*/}
                {/*                    >*/}
                {/*                        {filters.colour.map((option) => (*/}
                {/*                            <Select.Option key={option} value={option}>*/}
                {/*                                {option}*/}
                {/*                            </Select.Option>*/}
                {/*                        ))}*/}
                {/*                    </Select>*/}
                {/*                </div>*/}

                {/*                /!* Brand Filter *!/*/}
                {/*                <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">*/}
                {/*                    <h3 className="font-serif font-semibold text-gray-900 mb-3 flex items-center justify-between text-base">*/}
                {/*                        Brand*/}
                {/*                        <ChevronDown className="h-4 w-4 text-gray-500" />*/}
                {/*                    </h3>*/}
                {/*                    <Select*/}
                {/*                        placeholder="Choose brand"*/}
                {/*                        className="w-full"*/}
                {/*                        onChange={(value) => handleFilterChange("brand", value)}*/}
                {/*                        allowClear*/}
                {/*                        value={selectedFilters.brand}*/}
                {/*                        size="large"*/}
                {/*                        style={{ borderRadius: "8px" }}*/}
                {/*                    >*/}
                {/*                        {filters.brand.map((option) => (*/}
                {/*                            <Select.Option key={option} value={option}>*/}
                {/*                                {option}*/}
                {/*                            </Select.Option>*/}
                {/*                        ))}*/}
                {/*                    </Select>*/}
                {/*                </div>*/}

                {/*                /!* Thickness Filter *!/*/}
                {/*                <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">*/}
                {/*                    <h3 className="font-serif font-semibold text-gray-900 mb-3 flex items-center justify-between text-base">*/}
                {/*                        Thickness*/}
                {/*                        <ChevronDown className="h-4 w-4 text-gray-500" />*/}
                {/*                    </h3>*/}
                {/*                    <Select*/}
                {/*                        placeholder="Choose thickness"*/}
                {/*                        className="w-full"*/}
                {/*                        onChange={(value) => handleFilterChange("thickness", value)}*/}
                {/*                        allowClear*/}
                {/*                        value={selectedFilters.thickness}*/}
                {/*                        size="large"*/}
                {/*                        style={{ borderRadius: "8px" }}*/}
                {/*                    >*/}
                {/*                        {filters.thickness.map((option) => (*/}
                {/*                            <Select.Option key={option} value={option}>*/}
                {/*                                {option}*/}
                {/*                            </Select.Option>*/}
                {/*                        ))}*/}
                {/*                    </Select>*/}
                {/*                </div>*/}
                {/*            </div>*/}

                {/*            /!* Applied Filters Summary *!/*/}
                {/*            {Object.keys(selectedFilters).some((key) => selectedFilters[key]) && (*/}
                {/*                <div className="mt-6 pt-6 border-t border-gray-200">*/}
                {/*                    <h4 className="font-medium text-gray-900 mb-3 text-sm">Active Filters:</h4>*/}
                {/*                    <div className="flex flex-wrap gap-2">*/}
                {/*                        {Object.entries(selectedFilters).map(*/}
                {/*                            ([key, value]) =>*/}
                {/*                                value && (*/}
                {/*                                    <span*/}
                {/*                                        key={key}*/}
                {/*                                        className="inline-flex items-center gap-1 px-3 py-1 bg-gray-900 text-white text-xs rounded-full"*/}
                {/*                                    >*/}
                {/*            {value}*/}
                {/*                                        <button*/}
                {/*                                            onClick={() => handleFilterChange(key, null)}*/}
                {/*                                            className="ml-1 hover:bg-gray-700 rounded-full p-0.5"*/}
                {/*                                        >*/}
                {/*              ×*/}
                {/*            </button>*/}
                {/*          </span>*/}
                {/*                                ),*/}
                {/*                        )}*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            )}*/}
                {/*        </div>*/}
                {/*    </div>*/}

                {/*    /!* Right Content Area - Products *!/*/}
                {/*    <div className="flex-1">*/}
                {/*        /!* Results Count *!/*/}
                {/*        <div className="mb-6">*/}
                {/*            <p className="text-gray-600">*/}
                {/*                Showing {filteredProducts.length} products in {activeCategory}*/}
                {/*            </p>*/}
                {/*        </div>*/}

                {/*        /!* Product Grid *!/*/}
                {/*        {filteredProducts.length > 0 ? (*/}
                {/*            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">*/}
                {/*                {filteredProducts.map((product) => (*/}
                {/*                    <div*/}
                {/*                        key={product.id}*/}
                {/*                        className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"*/}
                {/*                    >*/}
                {/*                        <div className="aspect-w-4 aspect-h-3">*/}
                {/*                            <img*/}
                {/*                                src={product.image || "/placeholder.svg"}*/}
                {/*                                alt={product.name}*/}
                {/*                                className="w-full h-48 object-cover"*/}
                {/*                            />*/}
                {/*                        </div>*/}
                {/*                        <div className="p-4">*/}
                {/*                            <h3 className="font-serif font-semibold text-gray-900 mb-2">{product.name}</h3>*/}
                {/*                            <p className="text-sm text-gray-600 mb-4">{product.specs}</p>*/}
                {/*                            <div className="flex gap-2">*/}
                {/*                                <Button*/}
                {/*                                    type={favorites.has(product.id) ? "primary" : "default"}*/}
                {/*                                    danger={favorites.has(product.id)}*/}
                {/*                                    size="small"*/}
                {/*                                    onClick={() => toggleFavorite(product.id)}*/}
                {/*                                    icon={<Heart className={`h-4 w-4 ${favorites.has(product.id) ? "fill-current" : ""}`} />}*/}
                {/*                                >*/}
                {/*                                    {favorites.has(product.id) ? "Favorited" : "Favorite"}*/}
                {/*                                </Button>*/}
                {/*                                <Button*/}
                {/*                                    type="primary"*/}
                {/*                                    size="small"*/}
                {/*                                    style={{ backgroundColor: "#1f2937", borderColor: "#1f2937" }}*/}
                {/*                                >*/}
                {/*                                    Enquire*/}
                {/*                                </Button>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                ))}*/}
                {/*            </div>*/}
                {/*        ) : (*/}
                {/*            <div className="text-center py-16">*/}
                {/*                <Filter className="h-16 w-16 text-gray-300 mx-auto mb-4" />*/}
                {/*                <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">No products found</h3>*/}
                {/*                <p className="text-gray-600">Try adjusting your filters or search terms</p>*/}
                {/*            </div>*/}
                {/*        )}*/}

                {/*        /!* Pagination Placeholder *!/*/}
                {/*        {filteredProducts.length > 0 && (*/}
                {/*            <div className="flex justify-center mt-10">*/}
                {/*                <Button type="default" size="large">*/}
                {/*                    Load More Products*/}
                {/*                </Button>*/}
                {/*            </div>*/}
                {/*        )}*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>

            <Footer />
        </div>
    )
}
