import { Link } from "react-router-dom";
import { Item } from "../Item/Item";
import "./ItemList.css";

export function ItemList({ items }) {
    return (
        <section className="item-list">
            {items.length ? (
                items.map((item) => (
                    <Link key={item.id} to={`/detalle/${item.id}`}>
                        <Item {...item} />
                    </Link>
                ))
            ) : (
                <p>No hay productos</p>
            )}
        </section>
    );
}
