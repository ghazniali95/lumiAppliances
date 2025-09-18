import Header from "@/Components/Header.jsx";
import Footer from "@/Components/Footer.jsx";
import { Head } from "@inertiajs/react";

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-white">
            <Head>
                <title>Privacy Policy</title>
            </Head>
            <Header />

            {/* Hero Section */}
            <section className="bg-white py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">Privacy Policy</h1>
                    <p className="text-lg text-gray-600 leading-relaxed">Last updated: September 2025</p>
                </div>
            </section>

            {/* Content Section */}
            <section className="bg-white pb-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="prose prose-lg max-w-none">
                        {/* Introduction */}
                        <div className="mb-12">
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                At Modera Kitchens, we value your privacy and are committed to protecting your personal information.
                                This Privacy Policy explains how we collect, use, and safeguard your information when you interact with
                                our website or use our kitchen installation services in New Zealand.
                            </p>
                        </div>

                        {/* Information We Collect */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-serif text-gray-900 mb-6">Information We Collect</h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-4">We may collect the following information:</p>
                            <ul className="list-disc pl-6 text-lg text-gray-700 leading-relaxed mb-4">
                                <li>Personal details such as your name, email address, and contact information.</li>
                                <li>Project details relating to your kitchen installation or consultation requests.</li>
                                <li>Non-identifiable information such as browser type, IP address, and website usage data.</li>
                            </ul>
                        </div>

                        {/* How We Use Information */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-serif text-gray-900 mb-6">How We Use Your Information</h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-4">Your information is used to:</p>
                            <ul className="list-disc pl-6 text-lg text-gray-700 leading-relaxed">
                                <li>Provide and manage our kitchen design and installation services.</li>
                                <li>Communicate with you about enquiries, quotes, and project updates.</li>
                                <li>Improve our website and customer experience.</li>
                                <li>Comply with New Zealand legal obligations.</li>
                            </ul>
                        </div>

                        {/* Data Security */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-serif text-gray-900 mb-6">Data Security</h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                We take reasonable steps to protect your personal data from unauthorised access, use, or disclosure.
                                However, no online system is completely secure, and we cannot guarantee absolute security.
                            </p>
                        </div>

                        {/* Your Rights */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-serif text-gray-900 mb-6">Your Rights</h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-4">Under New Zealand privacy laws, you have the right to:</p>
                            <ul className="list-disc pl-6 text-lg text-gray-700 leading-relaxed">
                                <li>Access the personal information we hold about you.</li>
                                <li>Request corrections to inaccurate or incomplete information.</li>
                                <li>Request deletion of your personal information where applicable.</li>
                            </ul>
                        </div>

                        {/* Cookies */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-serif text-gray-900 mb-6">Cookies</h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Our website may use cookies to enhance your browsing experience and analyse website traffic.
                                You can choose to disable cookies in your browser, though some features of the site may not work as intended.
                            </p>
                        </div>

                        {/* Third-Party Links */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-serif text-gray-900 mb-6">Third-Party Links</h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Our website may contain links to third-party websites. We are not responsible for their privacy practices
                                and encourage you to review their policies when visiting those sites.
                            </p>
                        </div>

                        {/* Updates */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-serif text-gray-900 mb-6">Changes to This Privacy Policy</h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                We may update this Privacy Policy from time to time. Updates will be posted on this page with the
                                “Last updated” date revised. Continued use of our services after updates indicates acceptance of the changes.
                            </p>
                        </div>

                        {/* Contact Information */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-serif text-gray-900 mb-6">Contact Us</h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                If you have any questions regarding this Privacy Policy, please contact us at:
                            </p>
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    <strong>Email:</strong> support@moderakitchens.co.nz
                                </p>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    <strong>Address:</strong> Modera Kitchens, New Zealand
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
