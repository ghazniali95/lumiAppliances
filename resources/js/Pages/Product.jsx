import { useState, useEffect } from "react"
import { Button, Carousel, Collapse, Spin, message } from "antd"
import { Heart, ChevronLeft, ChevronRight, ChevronRightIcon } from "lucide-react"
import Header from "@/Components/Header.jsx"
import Footer from "@/Components/Footer.jsx"
import axios from "axios"
import ProductsSection from "@/Components/ProductsSection.jsx";

const { Panel } = Collapse

export default function ProductPage({ slug }) {
    const [isFavorite, setIsFavorite] = useState(false)
    const [relatedFavorites, setRelatedFavorites] = useState(new Set())
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (!slug) return
        setLoading(true)
        axios.get(`/api/products/${slug}`)
            .then(res => {
                const data = res.data?.response?.results?.[0]
                setProduct(data)

                // check if already in favourites
                const stored = localStorage.getItem("modera:favourites")
                const current = stored ? JSON.parse(stored) : []
                const exists = current.some((fav) => fav.id === data?._id)
                setIsFavorite(exists)
            })
            .catch(err => console.error("Error fetching product:", err))
            .finally(() => setLoading(false))
    }, [slug])

    const addToFavourites = (product) => {
        try {
            const stored = localStorage.getItem("modera:favourites")
            const current = stored ? JSON.parse(stored) : []

            const item = {
                id: product._id,
                title: product.Title,
                image: product.Image || "/placeholder.svg",
                shortDescription: product.ShortDescription,
                category: product.CategoryName || "Uncategorized",
            }

            const exists = current.some((fav) => fav.id === item.id)

            if (!exists) {
                current.push(item)
                localStorage.setItem("modera:favourites", JSON.stringify(current))
                setIsFavorite(true)
                message.success({
                    content: `${item.title} has been added to favourites`,
                    duration: 2,
                })
            } else {
                message.info({
                    content: `${item.title} is already in favourites`,
                    duration: 2,
                })
            }
        } catch (err) {
            console.error("Error adding favourite:", err)
        }
    }

    const toggleRelatedFavorite = (productId) => {
        const newFavorites = new Set(relatedFavorites)
        if (newFavorites.has(productId)) {
            newFavorites.delete(productId)
        } else {
            newFavorites.add(productId)
        }
        setRelatedFavorites(newFavorites)
    }

    const CustomArrow = ({ direction, onClick }) => (
        <Button
            type="text"
            onClick={onClick}
            className={`absolute top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-lg ${
                direction === "prev" ? "left-4" : "right-4"
            }`}
            icon={direction === "prev" ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
        />
    )

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Spin size="large" />
            </div>
        )
    }

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-gray-600">Product not found</p>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-white">
            <Header />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <nav className="mb-8" aria-label="Breadcrumb">
                    <div className="rounded-lg px-6 py-4" style={{ backgroundColor: "#f7f6f2" }}>
                        <ol className="flex items-center space-x-2 text-sm">
                            <li className="flex items-center">
                                <a href="/" className="font-medium text-gray-600 hover:text-gray-900 hover:underline">Home</a>
                                <ChevronRightIcon className="h-4 w-4 text-gray-400 mx-2" />
                            </li>
                            <li className="flex items-center">
                                <span className="font-serif font-semibold text-gray-900 bg-white px-3 py-1 rounded-md shadow-sm border border-gray-200">
                                    {product.CategoryType}
                                </span>
                            </li>
                        </ol>
                    </div>
                </nav>

                {/* Main Product Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    {/* Image Carousel */}
                    <div className="relative">
                        <Carousel
                            arrows
                            prevArrow={<CustomArrow direction="prev" />}
                            nextArrow={<CustomArrow direction="next" />}
                            className="rounded-lg overflow-hidden shadow-lg"
                        >
                            {product.Image && product.Image.length > 0 ? (
                                product.Image.map((img, index) => (
                                    <div key={index}>
                                        <img
                                            src={img}
                                            alt={`${product.Title} - View ${index + 1}`}
                                            className="w-full h-96 lg:h-[500px] object-cover"
                                        />
                                    </div>
                                ))
                            ) : (
                                <img src="/placeholder.svg" alt="No image" className="w-full h-96 lg:h-[500px] object-cover" />
                            )}
                        </Carousel>
                    </div>

                    {/* Product Info Panel */}
                    <div className="space-y-6">
                        <div>
                            <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">{product.Title}</h1>
                            <p className="text-lg text-gray-600 leading-relaxed">{product.ShortDescription}</p>
                        </div>

                        {/* Specifications */}
                        <div>
                            <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-4">Specifications</h2>
                            <Collapse ghost>
                                <Panel header="Product Details" key="1">
                                    <div className="space-y-3">
                                        <div className="flex justify-between py-2 border-b border-gray-100">
                                            <span className="font-medium text-gray-700">SKU:</span>
                                            <span className="text-gray-600">{product.SKU}</span>
                                        </div>
                                        <div className="flex justify-between py-2 border-b border-gray-100">
                                            <span className="font-medium text-gray-700">Availability:</span>
                                            <span className="text-gray-600">{product.AvailabilityStatus}</span>
                                        </div>
                                    </div>
                                </Panel>
                            </Collapse>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-6">
                            <Button
                                type={isFavorite ? "primary" : "default"}
                                size="large"
                                onClick={() => addToFavourites(product)}
                                className={`flex items-center justify-center gap-2 ${
                                    isFavorite ? "bg-green-500 hover:bg-green-600 border-green-500" : "border-gray-300 hover:border-gray-400"
                                }`}
                                icon={<Heart className={`h-5 w-5 ${isFavorite ? "fill-current" : ""}`} />}
                            >
                                {isFavorite ? "Added to Favourites" : "Add to Favourites"}
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Related Products Section */}
                <section>
                    <h3 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">Related Products</h3>
                    <ProductsSection category={slug} />
                </section>
            </main>

            <Footer />
        </div>
    )
}
