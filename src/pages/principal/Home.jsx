import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

export default function Home() {
    return (
        <div className="Home" style={{minHeight: "100vh"}}>
            <Header />
            <div style={{minHeight:"calc(100vh - 271px)"}} >
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}