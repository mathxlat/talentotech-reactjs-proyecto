import { useEffect, useState } from "react";
import type { Product } from "../../types/product";
import { ItemList } from "../ItemList/ItemList";
import "./ItemListContainer.css";

export function ItemListContainer() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch("/data/products.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        "Ocurrió un error al obtener los productos"
                    );
                }

                return response.json();
            })
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <main className="item-list-container">
            <h1 className="item-list-container-title">Productos</h1>
            {products ? <ItemList items={products} /> : <p>Cargando...</p>}
        </main>
    );
}
