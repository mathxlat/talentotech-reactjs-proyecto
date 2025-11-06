import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/useCartContext";
import { Item } from "../Item/Item";
import "./Cart.css";

export function Cart() {
    const { cart, deleteItem, getTotal, clearCart, checkout } =
        useCartContext();

    return (
        <section className="cart-container">
            <h2>Carrito de compras</h2>

            {cart.length ? (
                <div className="cart-item-list">
                    {cart.map((product) => (
                        <Item key={product.id} {...product}>
                            <span className="cart-item-quantity">
                                Cantidad: {product.quantity}
                            </span>
                            <button
                                className="cart-button-delete"
                                onClick={() => {
                                    deleteItem(product.id);
                                }}
                            >
                                Eliminar
                            </button>
                        </Item>
                    ))}
                </div>
            ) : (
                <p>Tu carrito está vacío</p>
            )}
            {cart.length ? (
                <div className="cart-buttons">
                    <div className="cart-total">
                        <p>Total a pagar: ${getTotal()}</p>
                    </div>
                    <button className="cart-button-checkout" onClick={checkout}>
                        Finalizar compra
                    </button>
                    <button className="cart-button-clear" onClick={clearCart}>
                        Vaciar carrito
                    </button>
                </div>
            ) : (
                <Link to="/">Volver al inicio</Link>
            )}
        </section>
    );
}
