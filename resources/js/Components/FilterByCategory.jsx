import { useState, useEffect } from "react"
import { Button, Spin } from "antd"
import axios from "axios"

export default function FilterByCategory({categorySlug = null}) {
    const [categories, setCategories] = useState([{ name: "All Categories", slug: "" }])
    const [selectedCategory, setSelectedCategory] = useState("All Categories")
    const [categoriesLoading, setCategoriesLoading] = useState(true)

    // After fetching categories
    useEffect(() => {
        setCategoriesLoading(true)
        axios
            .get("/api/categories")
            .then((res) => {
                const apiCategories =
                    res.data?.response?.results?.map((cat) => ({
                        name: cat.Title,
                        slug: cat.Slug
                    })) || []
                const allCats = [{ name: "All Categories", slug: "" }, ...apiCategories]
                setCategories(allCats)

                // 🔑 Set selected category based on categorySlug
                if (categorySlug) {
                    const match = allCats.find((cat) => cat.slug === categorySlug)
                    if (match) {
                        setSelectedCategory(match.name)
                    }
                }
            })
            .catch((err) => console.error("Error fetching categories:", err))
            .finally(() => setCategoriesLoading(false))
    }, [categorySlug])

    // Handle category change
    const handleCategoryChange = (category) => {
        setSelectedCategory(category.name)

        if (category.name === "All Categories") {
            window.location.href = `/range`
        } else {
            window.location.href = `/range/${category.slug}`
        }
    }

    return (
        <section className="bg-white">
            <div
                className="flex flex-col gap-4 mb-8 p-6 rounded-2xl shadow-sm"
                style={{ backgroundColor: "#F8F7F4" }}
            >
                <label
                    className="text-sm font-semibold tracking-wide"
                    style={{ color: "#3A2E2E" }}
                >
                    Filter by Category
                </label>

                {categoriesLoading ? (
                    <div className="flex justify-center py-4">
                        <Spin size="default" />
                    </div>
                ) : (
                    <div className="flex flex-wrap gap-3">
                        {categories.map((category) => (
                            <Button
                                key={category.name}
                                onClick={() => handleCategoryChange(category)}
                                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 shadow-sm ${
                                    selectedCategory === category.name
                                        ? "bg-[#3A2E2E] text-white"
                                        : "bg-white text-[#3A2E2E] border border-[#3A2E2E] hover:!bg-[#3A2E2E] hover:!text-white"
                                }`}
                            >
                                {category.name}
                            </Button>
                        ))}
                    </div>
                )}
            </div>
        </section>


    )
}
