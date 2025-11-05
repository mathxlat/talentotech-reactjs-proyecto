import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";

export function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const { category } = useParams();

    useEffect(() => {
        fetch("https://690b8c336ad3beba00f56cc2.mockapi.io/products")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        "Ocurrió un error al obtener los productos"
                    );
                }

                return response.json();
            })
            .then((data) => {
                if (category) {
                    setProducts(
                        data.filter((product) => product.category === category)
                    );
                } else {
                    setProducts(data);
                }
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
