import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ServicesOverview from "../components/ServicesOverview";

const Home = () => {
    return (
       
        <div className="min-h-screen bg-gray-50">
            <Header />

            {/* Welcome/Who we are */}
            <Hero />

            {/* Services brief */}
            <ServicesOverview />

            {/* Portfolio brief*/}

            {/* Contact brief*/}

            <Footer />

        </div>
         
    )
}

export default Home;