import "./Item.css";

export function Item({ name, description, price, imageUrl, children }) {
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
