import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import "./App.css";

function App() {
    return (
        <BrowserRouter>
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
        </BrowserRouter>
    );
}

export default App;
