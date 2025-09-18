import { useState, useEffect, useRef } from "react"
import { Button, Card, Spin } from "antd"
import { Heart } from "lucide-react"
import axios from "axios"
import { message } from "antd"

export default function ProductsSection({ category = null }) {
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState(["All Categories"])
    const [selectedCategory, setSelectedCategory] = useState("All Categories")
    const [animatedProducts, setAnimatedProducts] = useState(new Set())
    const productRefs = useRef([])
    const [productsLoading, setProductsLoading] = useState(true)
    const [paginationLoading, setPaginationLoading] = useState(false)


    // pagination state
    const [cursor, setCursor] = useState(0)
    const [hasNext, setHasNext] = useState(false)
    const [hasPrev, setHasPrev] = useState(false)

    // Fetch categories
    useEffect(() => {
        axios.get("/api/categories")
            .then(res => {
                const apiCategories = res.data?.response?.results?.map(cat => cat.CategoryName) || []
                setCategories(["All Categories", ...apiCategories])
            })
            .catch(err => console.error("Error fetching categories:", err))
    }, [])

    // Fetch products with pagination
    const fetchProducts = (cursorValue = 0) => {
        setPaginationLoading(true)
        axios
            .get("/api/products", {
                params: {
                    ...(category ? { category } : {}),
                    cursor: cursorValue,
                }
            })
            .then((res) => {
                const data = res.data?.response || {}
                setProducts(data.results || [])
                setCursor(data.cursor || 0)
                setHasNext((data.remaining || 0) > 0)
                setHasPrev((data.cursor || 0) > 0)
            })
            .catch((err) => console.error("Error fetching products:", err))
            .finally(() => {
                setProductsLoading(false)
                setPaginationLoading(false)
            })
    }

    useEffect(() => {
        fetchProducts(0)
    }, [category])

    // Animate product cards
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = Number.parseInt(entry.target.getAttribute("data-index"))
                        setAnimatedProducts((prev) => new Set([...prev, index]))
                    }
                })
            },
            { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
        )

        productRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref)
        })

        return () => observer.disconnect()
    }, [products])

    // Handle details button click
    const handleDetailsClick = (slug) => {
        console.log("Navigating to slug:", slug);
        if (slug) {
            window.location.href = `/product/${slug}`;
        } else {
            alert("Slug missing in API data");
        }
    };

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
                message.success(`${item.title} added to favourites`)
            } else {
                message.info("Already in favourites")
            }
        } catch (err) {
            console.error("Error adding favourite:", err)
        }
    }

    return (
        <div>
            {/* Loader */}
            {productsLoading && (
                <div className="flex justify-center py-12">
                    <Spin size="large" />
                </div>
            )}

            {/* Products grid */}
            {!productsLoading && products.length === 0 ? (
                <div className="text-center py-12">
                    <p className="text-gray-500 text-lg">No products found.</p>
                </div>
            ) : (
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8">
                        {products.map((product, index) => (
                            <div
                                key={product._id}
                                ref={(el) => (productRefs.current[index] = el)}
                                data-index={index}
                                className={`product-card ${animatedProducts.has(index) ? "animate" : ""}`}
                            >
                                <Card
                                    hoverable
                                    className="bg-white shadow-sm hover:shadow-lg transition-shadow border-0"
                                    bodyStyle={{ padding: "24px" }}
                                >
                                    <div className="relative mb-6">
                                        <div className="aspect-square overflow-hidden rounded-lg bg-gray-50">
                                            <img
                                                src={product.Image || "/placeholder.svg"}
                                                alt={product.Title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>

                                    <h3 className="font-serif text-lg font-semibold text-gray-900 mb-2">{product.Title}</h3>
                                    <p className="text-sm text-gray-600 mb-4">{product.ShortDescription}</p>

                                    <div className="flex items-center gap-2 ">
                                        <Button
                                            type="primary"
                                            onClick={() => addToFavourites(product)}
                                            className="bg-white hover:!bg-[rgb(248,247,244)] hover:!text-black border-gray-900 px-4 py-2 text-sm transition-colors duration-300 text-black"
                                        >
                                            <Heart className="h-5 w-5 text-gray-400" />Favourites
                                        </Button>
                                        <Button
                                            type="primary"
                                            onClick={() => handleDetailsClick(product.Slug)}
                                            className="bg-gray-900 w-full hover:!bg-[rgb(248,247,244)] hover:!text-black border-gray-900 px-4 py-2 text-sm transition-colors duration-300"
                                        >
                                            Details
                                        </Button>
                                    </div>
                                </Card>
                            </div>
                        ))}
                    </div>

                    {/* Pagination controls */}
                    <div className="flex justify-center gap-4 mt-8">
                        {hasPrev && (
                            <Button loading={paginationLoading} onClick={() => fetchProducts(cursor - 4)}>Previous</Button>
                        )}
                        {hasNext && (
                            <Button loading={paginationLoading} onClick={() => fetchProducts(cursor + 4)}>Next</Button>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}
