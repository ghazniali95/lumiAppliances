import Header from "@/Components/Header.jsx";
import Footer from "@/Components/Footer.jsx";
import { Head } from "@inertiajs/react";

const TermsPage = () => {
    return (
        <div className="min-h-screen bg-white">
            <Head>
                <title>Terms & Conditions</title>
            </Head>
            <Header />

            {/* Hero Section */}
            <section className="bg-white py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">Terms & Conditions</h1>
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
                                Welcome to Modera Kitchens. These Terms and Conditions govern your use of our website and the services
                                we provide as kitchen installation specialists in New Zealand. By accessing our website or engaging
                                our services, you agree to be bound by these terms. If you do not agree, you must refrain from using
                                our services.
                            </p>
                        </div>

                        {/* Use of Website */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-serif text-gray-900 mb-6">Use of Website</h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                You may use our website for lawful purposes only. You must not use our website in any way that could
                                damage, disable, or impair the operation of the site or interfere with other users.
                            </p>
                        </div>

                        {/* Services */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-serif text-gray-900 mb-6">Services</h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                Modera Kitchens specialises in kitchen design and installation services in New Zealand. While we strive
                                to provide accurate information regarding our services, we do not warrant that all details on our
                                website are error-free, complete, or up to date.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Quotations, project timelines, and costs are provided in good faith but may be subject to change due to
                                unforeseen circumstances. Any changes will be communicated to clients as soon as reasonably possible.
                            </p>
                        </div>

                        {/* Intellectual Property */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-serif text-gray-900 mb-6">Intellectual Property</h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                All content on this website, including text, graphics, images, and logos, is the property of Modera
                                Kitchens and may not be copied, reproduced, or used without our prior written consent.
                            </p>
                        </div>

                        {/* User Accounts */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-serif text-gray-900 mb-6">User Accounts</h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                If you create an account on our website, you agree to provide accurate and current information. You are
                                responsible for maintaining the confidentiality of your login details and for all activity that occurs
                                under your account.
                            </p>
                        </div>

                        {/* Limitation of Liability */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-serif text-gray-900 mb-6">Limitation of Liability</h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                To the maximum extent permitted by New Zealand law, Modera Kitchens will not be liable for any indirect,
                                incidental, or consequential damages arising from your use of our website or services.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Our liability for any claim, whether in contract, tort, or otherwise, will not exceed the total amount
                                paid by you for the services in question.
                            </p>
                        </div>

                        {/* Indemnification */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-serif text-gray-900 mb-6">Indemnification</h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                You agree to indemnify and hold harmless Modera Kitchens, its employees, and contractors from any claims,
                                damages, or expenses arising out of your use of our website or services.
                            </p>
                        </div>

                        {/* Governing Law */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-serif text-gray-900 mb-6">Governing Law</h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                These Terms and Conditions are governed by the laws of New Zealand. Any disputes will be subject to the
                                exclusive jurisdiction of the courts of New Zealand.
                            </p>
                        </div>

                        {/* Changes to Terms */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-serif text-gray-900 mb-6">Changes to These Terms</h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                We may update these Terms and Conditions from time to time. Any changes will be posted on this page, and
                                your continued use of our website or services will constitute acceptance of the updated terms.
                            </p>
                        </div>

                        {/* Contact Information */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-serif text-gray-900 mb-6">Contact Us</h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                If you have any questions regarding these Terms and Conditions, please contact us at:
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

export default TermsPage;
