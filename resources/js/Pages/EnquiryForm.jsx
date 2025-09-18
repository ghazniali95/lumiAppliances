import Header from "@/Components/Header.jsx";
import Footer from "@/Components/Footer.jsx";

const EnquiryForm = () => {
    return (
        <div className="min-h-screen" style={{ backgroundColor: "#f8f7f4" }}>
            <Header />

            <div className="max-w-6xl mx-auto px-4 py-12">
                <iframe
                    src="https://www.constructy.co.nz/version-test/modera-enquiry?nav=Step%201"
                    title="Modera Enquiry Form"
                    width="100%"
                    height="1200"
                    style={{
                        border: "none",
                        borderRadius: "8px",
                        overflow: "hidden",
                    }}
                />
            </div>

            <Footer />
        </div>
    )
}

export default EnquiryForm
