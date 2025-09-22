import { useState, useEffect } from "react"
import { X, ChevronLeft, ChevronRight, Share2 } from "lucide-react"
import Footer from "@/Components/Footer.jsx"
import Header from "@/Components/Header.jsx"
import GalleryFilter from "@/Components/GalleryFilter.jsx"
import axios from "axios"
import {Head} from "@inertiajs/react";

const Gallery = ({slug = null}) => {
    const [selectedFilters, setSelectedFilters] = useState([])
    const [lightboxImage, setLightboxImage] = useState(null)
    const [lightboxIndex, setLightboxIndex] = useState(0)
    const [filteredImages, setFilteredImages] = useState([])
    const [galleryImages, setGalleryImages] = useState([])

    // ✅ get imageId from URL manually
    const getImageIdFromUrl = () => {
        const params = new URLSearchParams(window.location.search)
        return params.get("imageId")
    }

    // Fetch gallery images
    useEffect(() => {
        axios
            .get("/api/gallery")
            .then((res) => {
                const apiImages = res.data?.response?.results?.map((img) => ({
                    id: img._id,
                    src: img.File?.startsWith("http")
                        ? img.File
                        : `https:${img.File}`,
                    caption: img.name || "Untitled",
                    tags: [img.RelatedGalleryCategory || "Uncategorized"],
                })) || []
                setGalleryImages(apiImages)
                setFilteredImages(apiImages)

                // ✅ open if ?imageId= exists
                const imageId = getImageIdFromUrl()
                if (imageId) {
                    const index = apiImages.findIndex((img) => img.id === imageId)
                    if (index !== -1) {
                        setLightboxImage(apiImages[index])
                        setLightboxIndex(index)
                    }
                }
            })
            .catch((err) => console.error("Error fetching gallery:", err))
    }, [])

    // Filtering
    useEffect(() => {
        if (selectedFilters.length === 0) {
            setFilteredImages(galleryImages)
        } else {
            const filtered = galleryImages.filter((image) =>
                selectedFilters.some((filter) => image.tags.includes(filter))
            )
            setFilteredImages(filtered)
        }
    }, [selectedFilters, galleryImages])

    const toggleFilter = (filter) => {
        setSelectedFilters((prev) =>
            prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]
        )
    }

    // ✅ update URL when opening
    const openLightbox = (image, index) => {
        setLightboxImage(image)
        setLightboxIndex(index)
        const newUrl = `/gallery?imageId=${image.id}`
        window.history.pushState({}, "", newUrl)
    }

    // ✅ reset URL on close
    const closeLightbox = () => {
        setLightboxImage(null)
        window.history.pushState({}, "", "/gallery")
    }

    const navigateLightbox = (direction) => {
        const newIndex =
            direction === "next"
                ? (lightboxIndex + 1) % filteredImages.length
                : (lightboxIndex - 1 + filteredImages.length) % filteredImages.length

        setLightboxIndex(newIndex)
        setLightboxImage(filteredImages[newIndex])
        window.history.pushState({}, "", `/gallery?imageId=${filteredImages[newIndex].id}`)
    }

    // Keyboard navigation
    useEffect(() => {
        const handleKeyPress = (e) => {
            if (!lightboxImage) return
            switch (e.key) {
                case "Escape":
                    closeLightbox()
                    break
                case "ArrowLeft":
                    navigateLightbox("prev")
                    break
                case "ArrowRight":
                    navigateLightbox("next")
                    break
            }
        }
        window.addEventListener("keydown", handleKeyPress)
        return () => window.removeEventListener("keydown", handleKeyPress)
    }, [lightboxImage, lightboxIndex])

    // ✅ Share correct link
    const shareImage = () => {
        if (!lightboxImage) return
        const url = `${window.location.origin}/gallery?imageId=${lightboxImage.id}`

        if (navigator.share) {
            navigator.share({
                title: lightboxImage.caption,
                url: url,
            })
        } else {
            navigator.clipboard.writeText(url)
            alert("Link copied to clipboard!")
        }
    }

    return (
        <div className="min-h-screen bg-white">
            <Head>
                <title>Gallery</title>
            </Head>
            <Header />

            {/* Hero Banner */}
            {/* Hero Banner */}
            <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-[#1d1512]">
                <div className="absolute inset-0">
                    <img
                        src="/luxury-kitchen-appliances.png"
                        alt="Lumi Appliances Gallery"
                        className="w-full h-full object-cover opacity-70"
                    />
                    <div className="absolute inset-0 bg-[#1d1512] bg-opacity-60"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                        Lumi Inspiration Gallery
                    </h1>
                    <p className="text-lg md:text-xl mb-8 leading-relaxed text-gray-100">
                        Explore timeless designs and modern home appliances that blend elegance,
                        innovation, and functionality — curated for every lifestyle.
                    </p>
                </div>
            </section>


            {/* Filter Bar */}
            <section className="py-8 bg-white ">
                <GalleryFilter toggleFilter={toggleFilter} selectedFilters={selectedFilters} />
            </section>

            {/* Gallery Grid */}
            <section className="pb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                        {filteredImages.map((image, index) => (
                            <div
                                key={image.id}
                                className="group cursor-pointer"
                                onClick={() => openLightbox(image, index)}
                            >
                                <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                    <img
                                        src={image.src || "/placeholder.svg"}
                                        alt={image.caption}
                                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                                </div>
                                {/*<p className="mt-3 text-sm text-gray-600 font-medium">*/}
                                {/*    {image.caption}*/}
                                {/*</p>*/}
                            </div>
                        ))}
                    </div>

                    {filteredImages.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-gray-500 text-lg">
                                No images match your selected filters.
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* Lightbox Modal */}
            {lightboxImage && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
                    <div className="relative max-w-4xl max-h-full">
                        {/* Close Button */}
                        <button
                            onClick={closeLightbox}
                            className="absolute top-4 right-4 z-10 p-2 bg-white bg-opacity-20 rounded-full text-white hover:bg-opacity-30 transition-all"
                        >
                            <X size={24} />
                        </button>

                        {/* Share Button */}
                        <button
                            onClick={shareImage}
                            className="absolute top-4 right-16 z-10 p-2 bg-white bg-opacity-20 rounded-full text-white hover:bg-opacity-30 transition-all"
                        >
                            <Share2 size={20} />
                        </button>

                        {/* Navigation Buttons */}
                        {filteredImages.length > 1 && (
                            <>
                                <button
                                    onClick={() => navigateLightbox("prev")}
                                    className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white bg-opacity-20 rounded-full text-white hover:bg-opacity-30 transition-all"
                                >
                                    <ChevronLeft size={24} />
                                </button>
                                <button
                                    onClick={() => navigateLightbox("next")}
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white bg-opacity-20 rounded-full text-white hover:bg-opacity-30 transition-all"
                                >
                                    <ChevronRight size={24} />
                                </button>
                            </>
                        )}

                        {/* Image */}
                        <img
                            src={lightboxImage.src || "/placeholder.svg"}
                            alt={lightboxImage.caption}
                            className="max-w-full max-h-full object-contain"
                        />

                        {/* Caption */}
                        <div className="absolute bottom-4 left-4 right-4 text-center">
                            <p className="text-white text-lg font-medium bg-black bg-opacity-50 px-4 py-2 rounded-lg">
                                {lightboxImage.caption}
                            </p>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    )
}

export default Gallery
