import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import "./App.css";
import { CartProvider } from "./context/CartContext/CartProvider";

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
                </Routes>
                <Footer />
            </CartProvider>
        </BrowserRouter>
    );
}

export default App;
