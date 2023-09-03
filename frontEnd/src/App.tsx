import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";

import LandingPage from "./pages/LandingPage";
import ShoppingPage from "./pages/ShoppingPage";
import ProductPage from "./pages/ProductPage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Store } from "./Store";

export default function App() {
    const { state } = useContext(Store);
    const { cart } = state;
    return (
        <BrowserRouter>
            <div className="flex flex-col min-h-screen">
                <Navbar cartItems={cart.cartItems.length} />
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/shop" element={<ShoppingPage />} />
                    <Route path="product/:slug" element={<ProductPage />} />
                    <Route path="*" element={<div>ridi</div>} />
                </Routes>
                <Footer light={false} />
            </div>
        </BrowserRouter>
    );
}
