
import { useState } from "react"
import { Button } from "antd"
import { Menu, X, Heart } from "lucide-react"

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-white text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <a href={'/'}><img className="w-28" src="/logo.png" alt="Modera Kitchen" /></a>

                    <nav className="hidden md:flex items-center space-x-8">
                        <a href="/" className="text-black hover:text-white transition-colors">
                            Home
                        </a>
                        <a href="/range" className="text-black hover:text-white transition-colors">
                            Range
                        </a>
                        <a href="/gallery" className="text-black hover:text-white transition-colors">
                            Gallery
                        </a>
                        <a href="/about" className="text-black hover:text-white transition-colors">
                            About us
                        </a>
                        <a href="/enquiry" className="text-black hover:text-white transition-colors">
                            Enquiry
                        </a>

                        <Button  type="text" className="text-black hover:text-white">
                            <a href="/favourites" className="text-black hover:text-white transition-colors">
                                <Heart className="h-5 w-5" />
                            </a>

                        </Button>

                    </nav>

                    <div className="md:hidden">
                        <Button type="text" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-black">
                            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </Button>
                    </div>
                </div>
            </div>

            {mobileMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
                        <a href="/home" className="text-gray 800 hover:text-white block px-3 py-2 text-base">
                            Home
                        </a>
                        <a href="/range" className="text-black hover:text-white block px-3 py-2 text-base">
                            Range
                        </a>
                        <a href="/gallery" className="text-black hover:text-white block px-3 py-2 text-base">
                            Gallery
                        </a>
                        <a href="/about" className="text-black hover:text-white block px-3 py-2 text-base">
                            About us
                        </a>
                        <a href="/enquiry" className="text-black hover:text-white block px-3 py-2 text-base">
                            Enquiry
                        </a>

                        <div className="flex items-center space-x-2 px-3 py-2">
                            <Button  type="text" className="text-black hover:text-white">
                                <a href="/favourites" className="text-black hover:text-white block px-3 py-2 text-base">
                                    <Heart  className="h-5 w-5" />
                                </a>
                            </Button>

                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}
