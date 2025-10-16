import { Link } from "react-router-dom";
import type { Product } from "../../types/product";
import { Item } from "../Item/Item";
import "./ItemList.css";

interface ItemListProps {
    items: Product[];
}

export function ItemList({ items }: ItemListProps) {
    return (
        <section className="item-list">
            {items.length ? (
                items.map((item) => (
                    <Link key={item.id} to={`/productos/${item.id}`}>
                        <Item {...item} />
                    </Link>
                ))
            ) : (
                <p>No hay productos</p>
            )}
        </section>
    );
}
