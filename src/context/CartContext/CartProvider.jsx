import { useState } from "react";
import { CartContext } from "./CartContext";

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const exists = (id) => {
        const exist = cart.some((item) => item.id === id);
        return exist;
    };

    const addItem = (item) => {
        if (exists(item.id)) {
            const updatedCart = cart.map((product) => {
                if (product.id === item.id) {
                    return {
                        ...product,
                        quantity: product.quantity + item.quantity,
                    };
                } else {
                    return product;
                }
            });
            setCart(updatedCart);
        } else {
            setCart([...cart, item]);
        }
        alert(`${item.name} agregado al carrito`);
    };

    const deleteItem = (id) => {
        const filteredCart = cart.filter((product) => product.id !== id);
        setCart(filteredCart);
        alert("Producto eliminado del carrito");
    };

    const clearCart = () => {
        setCart([]);
    };

    const getTotalItems = () => {
        const totalItems = cart.reduce(
            (prev, product) => prev + product.quantity,
            0
        );
        return totalItems;
    };

    const getTotal = () => {
        const total = cart.reduce(
            (prev, product) => prev + product.price * product.quantity,
            0
        );
        return total;
    };

    const checkout = () => {
        const ok = confirm("¿Seguro que querés finalizar la compra?");

        if (ok) {
            alert("¡Compra realizada con éxito!");
            clearCart();
        }
    };

    const values = {
        cart,
        addItem,
        deleteItem,
        clearCart,
        getTotalItems,
        getTotal,
        checkout,
    };

    return (
        <CartContext.Provider value={values}>{children}</CartContext.Provider>
    );
}
