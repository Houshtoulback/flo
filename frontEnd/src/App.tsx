import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import ShoppingPage from "./pages/ShoppingPage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function App() {
    return (
        <BrowserRouter>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/shop" element={<ShoppingPage />} />
                </Routes>
                <Footer light={false} />
            </div>
        </BrowserRouter>
    );
}
