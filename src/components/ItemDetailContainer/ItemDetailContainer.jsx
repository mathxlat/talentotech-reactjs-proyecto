import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";
import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { getProductById } from "../../services/products";

export function ItemDetailContainer() {
    const [detail, setDetail] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        getProductById(id)
            .then((data) => {
                setDetail(data);
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
