import { Button } from "antd"

export default function Footer() {
    return (
        <footer className="py-16" style={{ backgroundColor: "#F4F4F4" }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-[#3C342E]">

                <div className="py-12 mt-8 text-sm">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                            <div className="lg:col-span-1">
                                <div className="flex items-center space-x-2 mb-4">
                                    <img className="w-40" src="/logo.png" alt="Logo" />
                                </div>
                                <p className="leading-relaxed text-[#3C342E] opacity-90">
                                    To simplify the kitchen supply process for builders—delivering high-quality, custom kitchens at exceptional prices. We streamline the journey from quote to install, helping builders save time, reduce costs, and impress clients without compromising on craftsmanship."
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold mb-4 text-[#3C342E]">Explore</h3>
                                <ul className="space-y-2">
                                    <li>
                                        <a href="/range" className="opacity-80 hover:opacity-100 text-[#3C342E]">Range</a>
                                    </li>
                                    <li>
                                        <a href="/gallery" className="opacity-80 hover:opacity-100 text-[#3C342E]">Gallery</a>
                                    </li>
                                    <li>
                                        <a href="/favourites" className="opacity-80 hover:opacity-100 text-[#3C342E]">Favourites</a>
                                    </li>
                                    <li>
                                        <a href="/documentation" className="opacity-80 hover:opacity-100 text-[#3C342E]">Documentation</a>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-semibold mb-4 text-[#3C342E]">Categories</h3>
                                <ul className="space-y-2">
                                    <li>
                                        <a href="/range/oven" className="opacity-80 hover:opacity-100 text-[#3C342E]">Oven</a>
                                    </li>
                                    <li>
                                        <a href="/range/dishwasher" className="opacity-80 hover:opacity-100 text-[#3C342E]">Dishwasher</a>
                                    </li>
                                    <li>
                                        <a href="/range/rangehood" className="opacity-80 hover:opacity-100 text-[#3C342E]">Rangehood</a>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-semibold mb-4 text-[#3C342E]">Connect</h3>
                                <ul className="space-y-2">
                                    <li>
                                        <a href="mailto:support@moderakitchens.co.nz" className="opacity-80 hover:opacity-100 text-[#3C342E]">
                                            support@lumiappliances.co.nz
                                        </a>
                                    </li>
                                </ul>
                                <div className="flex space-x-3 mt-4">
                                    {/*<a href="https://www.instagram.com/moderakitchens/" className="text-[#3C342E] opacity-70 hover:opacity-100">*/}
                                    {/*    <svg*/}
                                    {/*        className="w-5 h-5"*/}
                                    {/*        fill="currentColor"*/}
                                    {/*        viewBox="0 0 24 24"*/}
                                    {/*        xmlns="http://www.w3.org/2000/svg"*/}
                                    {/*    >*/}
                                    {/*        <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.25-.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z" />*/}
                                    {/*    </svg>*/}
                                    {/*</a>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-[#3C342E]/30 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-[#3C342E] opacity-80">
                    <div className="flex space-x-6 mb-4 md:mb-0">
                        <a href="/terms" className="hover:opacity-100">Terms & Conditions</a>
                    </div>
                    <p>© 2025 all rights reserved</p>
                </div>
            </div>
        </footer>
    )
}
