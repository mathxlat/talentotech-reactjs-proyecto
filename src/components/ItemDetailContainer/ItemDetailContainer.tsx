import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";
import { useEffect, useState } from "react";
import type { Product } from "../../types/product";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export function ItemDetailContainer() {
    const [detail, setDetail] = useState<Product | null>(null);
    const { id } = useParams();

    useEffect(() => {
        fetch("/data/products.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Ocurrió un error al obtener el producto");
                }

                return response.json() as Promise<Product[]>;
            })
            .then((data) => {
                const found = data.find((product) => product.id === id);

                if (!found) {
                    throw new Error("Producto no encontrado");
                }

                setDetail(found);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [id]);

    return (
        <main className="item-detail-container">
            {detail ? <ItemDetail detail={detail} /> : <p>Cargando...</p>}
        </main>
    );
}
