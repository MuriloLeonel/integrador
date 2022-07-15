import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeContent from "./HomeContent";

export default function Home() {
    return (
        <div className="Home">
            <Header />
            <HomeContent/>
            <Footer />
        </div>
    )
}