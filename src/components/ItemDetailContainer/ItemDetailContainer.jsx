import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";
import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export function ItemDetailContainer() {
    const [detail, setDetail] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch("https://690b8c336ad3beba00f56cc2.mockapi.io/products")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Ocurrió un error al obtener el producto");
                }

                return response.json();
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
