import { Button } from "antd"

export default function Footer() {
    return (
        <footer className="py-16" style={{ backgroundColor: "#f7f6f2" }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/*<div className="text-center mb-12">*/}
                {/*    <img src="/2.png" alt="modera-logo" className="w-60 h-auto inline mb-5" />*/}

                {/*    <div className="max-w-md mx-auto">*/}
                {/*        <h3 className="text-xl font-semibold mb-4 text-gray-900">Subscribe to our news letters</h3>*/}
                {/*        <div className="flex">*/}
                {/*            <input*/}
                {/*                type="email"*/}
                {/*                placeholder="Enter your email"*/}
                {/*                className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-gray-900"*/}
                {/*            />*/}
                {/*            <Button*/}
                {/*                type="primary"*/}
                {/*                className="bg-gray-900 hover:bg-gray-800 border-gray-900 px-6 py-3 h-auto rounded-l-none"*/}
                {/*            >*/}
                {/*                Subscribe*/}
                {/*            </Button>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className="py-12 mt-8 text-sm">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                            <div className="lg:col-span-1">
                                <div className="flex items-center space-x-2 mb-4">
                                    <img className="w-40" src="/2.png" alt="Logo" />
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    To simplify the kitchen supply process for builders—delivering high-quality, custom kitchens at exceptional prices. We streamline the journey from quote to install, helping builders save time, reduce costs, and impress clients without compromising on craftsmanship."
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-gray-900 mb-4">Explore</h3>
                                <ul className="space-y-2">
                                    <li>
                                        <a href="/range" className="text-gray-600 hover:text-gray-900">
                                            Range
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/gallery" className="text-gray-600 hover:text-gray-900">
                                            Gallery
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/favourites" className="text-gray-600 hover:text-gray-900">
                                            Favourites
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
                                <ul className="space-y-2">
                                    <li>
                                        <a href="/range/benchtop" className="text-gray-600 hover:text-gray-900">
                                            Bench Tops
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/range/sinks" className="text-gray-600 hover:text-gray-900">
                                            Sinks
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/range/handles" className="text-gray-600 hover:text-gray-900">
                                            Handles
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-semibold text-gray-900 mb-4">Connect</h3>
                                <ul className="space-y-2">
                                    <li>
                                        <a href="mailto:support@moderakitchens.co.nz" className="text-gray-600 hover:text-gray-900">
                                            support@moderakitchens.co.nz
                                        </a>
                                    </li>
                                </ul>
                                <div className="flex space-x-3 mt-4">

                                    <a href="https://www.instagram.com/moderakitchens/" className="text-gray-400 hover:text-gray-600">
                                        <svg
                                            className="w-5 h-5"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.25-.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z" />
                                        </svg>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <div className="flex space-x-6 mb-4 md:mb-0">
                        <a href="/terms" className="hover:text-gray-700">
                            Terms & Conditions
                        </a>
                    </div>
                    <p>© 2025 all rights reserved</p>
                </div>
            </div>
        </footer>
    )
}
