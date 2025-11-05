import { useCartContext } from "../../context/CartContext/useCartContext";
import { Count } from "../Count/Count";
import { Item } from "../Item/Item";
import "./ItemDetail.css";

export function ItemDetail({ detail }) {
    const { addItem } = useCartContext();

    const handleAddItem = (quantity) => {
        addItem({ ...detail, quantity });
    };

    return (
        <Item {...detail}>
            <Count buttonText="Agregar al carrito" onConfirm={handleAddItem} />
        </Item>
    );
}
