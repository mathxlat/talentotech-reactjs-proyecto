import { useCartContext } from "../../context/CartContext/useCartContext";
import { Item } from "../Item/Item";
import "./ItemDetail.css";

export function ItemDetail({ detail }) {
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
