import type { ReactNode } from "react";
import type { Product } from "../../types/product";
import "./Item.css";

interface ItemProps extends Product {
    children?: ReactNode;
}

export function Item({
    name,
    description,
    price,
    imageUrl,
    children,
}: ItemProps) {
    return (
        <article className="item">
            <img
                src={imageUrl}
                alt={`Imagen del producto ${name}`}
                className="item-image"
            />
            <div className="item-content">
                <h4 className="item-title">{name}</h4>
                <p className="item-description">{description}</p>
                <span className="item-price">$ {price}</span>
            </div>
            {children}
        </article>
    );
}
