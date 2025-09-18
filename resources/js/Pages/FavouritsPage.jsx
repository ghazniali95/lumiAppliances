
import { useState, useEffect } from "react"
import { Card, Button, Typography, Row, Col, Tag, message, Popconfirm } from "antd"
import { HeartFilled, ShoppingCartOutlined, DeleteOutlined } from "@ant-design/icons"
import Header from "@/Components/Header.jsx";
import Footer from "@/Components/Footer.jsx";
import {Head} from "@inertiajs/react";


const { Title, Text, Paragraph } = Typography
const { Meta } = Card

const FavouritesPage = () => {
    const [favourites, setFavourites] = useState([])
    const [loading, setLoading] = useState(true)

    // Load favourites from localStorage on component mount
    useEffect(() => {
        const loadFavourites = () => {
            try {
                const stored = localStorage.getItem("modera:favourites")
                const parsedFavourites = stored ? JSON.parse(stored) : []
                setFavourites(parsedFavourites)
            } catch (error) {
                console.error("Error loading favourites:", error)
                setFavourites([])
            } finally {
                setLoading(false)
            }
        }

        loadFavourites()
    }, [])

    // Remove item from favourites
    const removeFromFavourites = (itemId) => {
        const updatedFavourites = favourites.filter((item) => item.id !== itemId)
        setFavourites(updatedFavourites)
        localStorage.setItem("modera:favourites", JSON.stringify(updatedFavourites))
        message.success("Item removed from favourites")
    }

    // Clear all favourites
    const clearAllFavourites = () => {
        setFavourites([])
        localStorage.setItem("modera:favourites", JSON.stringify([]))
        message.success("All favourites cleared")
    }

    // Navigate to enquiry with favourites prefilled
    const enquireWithFavourites = () => {
        // Store favourites in session storage for enquiry form
        sessionStorage.setItem("enquiry:favourites", JSON.stringify(favourites))
        window.location.href = "/enquiry"
    }

    // Navigate to single item enquiry
    const enquireWithItem = (item) => {
        sessionStorage.setItem("enquiry:favourites", JSON.stringify([item]))
        window.location.href = "/enquiry"
    }

    // Handle broken images
    const handleImageError = (e) => {
        e.target.src = "/kitchen-product.png"
    }

    // Empty state component
    const EmptyState = () => (
        <div className="text-center py-16">
            <div className="mb-6">
                <HeartFilled style={{ fontSize: "64px", color: "#d9d9d9" }} />
            </div>
            <Title level={3} className="text-gray-600 mb-4">
                No favourites yet
            </Title>
            <Paragraph className="text-gray-500 mb-6 max-w-md mx-auto">
                Start building your dream kitchen by adding products to your favourites. Browse our range to discover beautiful
                kitchen solutions.
            </Paragraph>
            <Button
                type="primary"
                size="large"
                onClick={() => (window.location.href = "/range")}
                className="bg-slate-600 hover:!bg-[rgb(248,247,244)] hover:!text-black border-slate-600 px-6 py-3 h-auto text-base transition-colors duration-300"
            >
                Browse Our Range
            </Button>
        </div>
    )

    if (loading) {
        return (
            <div className="min-h-screen bg-[#f8f7f4]">
                <Header />
                <div className="container mx-auto px-4 py-8">
                    <div className="text-center py-16">
                        <Text>Loading your favourites...</Text>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-[#f8f7f4]">
            <Head>
                <title>Favourites</title>
            </Head>
            <Header />

            {/* Hero Section */}
            <div className="bg-white py-12">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <Title level={1} className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
                            Your Favourites
                        </Title>
                        <Paragraph className="text-lg text-gray-600 max-w-2xl mx-auto">
                            {favourites.length > 0
                                ? `You have ${favourites.length} favourite${favourites.length !== 1 ? "s" : ""} selected`
                                : "Your favourite kitchen products will appear here"}
                        </Paragraph>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-8 pb-24">
                {favourites.length === 0 ? (
                    <EmptyState />
                ) : (
                    <>
                        {/* Header with Clear All */}
                        <div className="flex justify-between items-center mb-6">
                            <Title level={2} className="text-2xl font-serif text-gray-800 mb-0">
                                My Favourites ({favourites.length})
                            </Title>
                            <Popconfirm
                                title="Clear all favourites?"
                                description="This action cannot be undone."
                                onConfirm={clearAllFavourites}
                                okText="Yes, clear all"
                                cancelText="Cancel"
                            >
                                <Button type="text" danger size="small" className="text-gray-500 hover:text-red-500">
                                    Clear all
                                </Button>
                            </Popconfirm>
                        </div>

                        {/* Favourites Grid */}
                        <Row gutter={[24, 24]}>
                            {favourites.map((item) => (
                                <Col xs={24} sm={12} lg={6} key={item.id}>
                                    <Card
                                        hoverable
                                        className="h-full shadow-sm hover:shadow-md transition-shadow duration-300 rounded-lg overflow-hidden"
                                        cover={
                                            <div className="relative overflow-hidden h-48">
                                                <img
                                                    alt={item.title}
                                                    src={item.image || "/placeholder.svg"}
                                                    onError={handleImageError}
                                                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                                />
                                            </div>
                                        }
                                        actions={[
                                            <Button
                                                key="remove"
                                                type="text"
                                                danger
                                                icon={<DeleteOutlined />}
                                                onClick={() => removeFromFavourites(item.id)}
                                                className="hover:bg-red-50"
                                            >
                                                Remove
                                            </Button>,
                                            <Button
                                                key="enquire"
                                                type="primary"
                                                icon={<ShoppingCartOutlined />}
                                                onClick={() => enquireWithItem(item)}
                                                className="bg-slate-600 hover:!bg-[rgb(248,247,244)] hover:!text-black border-slate-600 px-4 py-1 h-auto text-base transition-colors duration-300"
                                            >
                                                Enquire
                                            </Button>,
                                        ]}
                                    >
                                        <Meta
                                            title={
                                                <div>
                                                    <Title level={4} className="text-lg font-serif text-gray-800 mb-2 line-clamp-2">
                                                        {item.title}
                                                    </Title>
                                                </div>
                                            }
                                            description={
                                                <Paragraph className="text-gray-600 text-sm line-clamp-3 mb-0" ellipsis={{ rows: 3 }}>
                                                    {item.shortDescription}
                                                </Paragraph>
                                            }
                                        />
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </>
                )}
            </div>

            {/* Sticky Footer Bar */}
            {favourites.length > 0 && (
                <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
                    <div className="container mx-auto px-4 py-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <HeartFilled className="text-red-500 text-xl" />
                                <div>
                                    <Text strong className="text-gray-800">
                                        {favourites.length} item{favourites.length !== 1 ? "s" : ""} selected
                                    </Text>
                                    <br />
                                    <Text className="text-gray-500 text-sm">Ready to enquire about your favourites?</Text>
                                </div>
                            </div>
                            <Button
                                type="primary"
                                size="large"
                                icon={<ShoppingCartOutlined />}
                                onClick={enquireWithFavourites}
                                className="bg-slate-600 hover:!bg-[rgb(248,247,244)] hover:!text-black border-slate-600 px-6 py-3 h-auto text-base transition-colors duration-300"
                            >
                                Enquire with my favourites
                            </Button>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    )
}

export default FavouritesPage
