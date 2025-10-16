import { useCartContext } from "../../context/CartContext/useCartContext";
import type { Product } from "../../types/product";
import { Item } from "../Item/Item";
import "./ItemDetail.css";

interface ItemDetailProps {
    detail: Product;
}

export function ItemDetail({ detail }: ItemDetailProps) {
    const { addItem } = useCartContext();

    const handleAddItem = () => {
        addItem(detail);
    };

    return (
        <Item {...detail}>
            <button onClick={handleAddItem} className="item-detail-button">
                Agregar al carrito
            </button>
        </Item>
    );
}
