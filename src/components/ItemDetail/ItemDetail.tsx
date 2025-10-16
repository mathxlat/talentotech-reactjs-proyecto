import type { Product } from "../../types/product";
import { Item } from "../Item/Item";
import "./ItemDetail.css";

interface ItemDetailProps {
    detail: Product;
}

export function ItemDetail({ detail }: ItemDetailProps) {
    return (
        <Item {...detail}>
            <button className="item-detail-button">Agregar al carrito</button>
        </Item>
    );
}
