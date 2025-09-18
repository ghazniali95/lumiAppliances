import { useState, useEffect } from "react"
import axios from "axios"

const GalleryFilter = () => {
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState(null)

    // Fetch categories
    useEffect(() => {
        axios
            .get("/api/gallery-categories")
            .then((res) => {
                const cats =
                    res.data?.response?.results?.map((cat) => ({
                        id: cat._id,
                        name: cat.name,
                        slug: cat.slug || cat.Slug,
                    })) || []
                setCategories(cats)
            })
            .catch((err) => console.error("Error fetching categories:", err))
    }, [])

    // Handle category click
    const handleCategoryClick = (cat) => {
        setSelectedCategory(cat.name)

        // Change URL without reload
        window.history.pushState({}, "", `/gallery/${cat.slug}`)
    }

    return (
        <div className="py-10 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Gallery</h2>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-3">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => handleCategoryClick(cat)}
                            className={`px-4 py-2 rounded-full border text-sm font-medium transition-all duration-200 ${
                                selectedCategory === cat.name
                                    ? "bg-gray-900 text-white border-gray-900"
                                    : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"
                            }`}
                        >
                            {cat.name}
                        </button>
                    ))}

                    {selectedCategory && (
                        <button
                            onClick={() => {
                                setSelectedCategory(null)
                                window.history.pushState({}, "", `/gallery`)
                            }}
                            className="px-4 py-2 text-gray-500 hover:text-gray-700 underline text-sm"
                        >
                            Clear all
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default GalleryFilter
