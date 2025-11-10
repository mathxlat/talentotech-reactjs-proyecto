import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartContext/CartProvider";
import { Cart } from "./components/Cart/Cart";
import { ProductFormContainer } from "./components/adminComponents/ProductFormContainer/ProductFormContainer";
import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <CartProvider>
                <Header />
                <Routes>
                    <Route index element={<ItemListContainer />} />
                    <Route path="/productos" element={<ItemListContainer />} />
                    <Route
                        path="/productos/:id"
                        element={<ItemDetailContainer />}
                    />
                    <Route path="/carrito" element={<Cart />} />
                    <Route path="/admin" element={<ProductFormContainer />} />
                </Routes>
                <Footer />
            </CartProvider>
        </BrowserRouter>
    );
}

export default App;
