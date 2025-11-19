import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";
import { getProducts } from "../../services/products";

export function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const { category } = useParams();

    useEffect(() => {
        getProducts(category)
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [category]);

    return (
        <main className="item-list-container">
            <h1 className="item-list-container-title">Productos</h1>
            {products ? <ItemList items={products} /> : <p>Cargando...</p>}
        </main>
    );
}
