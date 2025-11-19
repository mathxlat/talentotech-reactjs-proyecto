import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartContext/CartProvider";
import { Cart } from "./components/Cart/Cart";
import { ProductFormContainer } from "./components/adminComponents/ProductFormContainer/ProductFormContainer";
import { MainLayout } from "./layouts/MainLayout";
import { AdminLayout } from "./layouts/AdminLayout";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import { Login } from "./components/Login/Login";
import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <CartProvider>
                <Routes>
                    <Route element={<MainLayout />}>
                        <Route index element={<ItemListContainer />} />
                        <Route
                            path="/productos"
                            element={<ItemListContainer />}
                        />
                        <Route
                            path="/detalle/:id"
                            element={<ItemDetailContainer />}
                        />
                        <Route path="/carrito" element={<Cart />} />
                    </Route>

                    <Route path="/admin" element={<AdminLayout />}>
                        <Route index element={<Login />} />
                        <Route
                            path="alta-productos"
                            element={
                                <ProtectedRoute>
                                    <ProductFormContainer />
                                </ProtectedRoute>
                            }
                        />
                    </Route>
                </Routes>
                <Footer />
            </CartProvider>
        </BrowserRouter>
    );
}

export default App;
