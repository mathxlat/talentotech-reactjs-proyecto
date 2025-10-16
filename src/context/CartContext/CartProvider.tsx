import { useState, type ReactNode } from "react";
import { CartContext } from "./CartContext";
import type { Product } from "../../types/product";

interface CartProviderProps {
    children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
    const [cart, setCart] = useState<Product[]>([]);

    const exists = (id: string) => {
        const exist = cart.some((item) => item.id === id);
        return exist;
    };

    const addItem = (item: Product) => {
        if (exists(item.id)) {
            alert("El producto ya existe en el carrito");
            return;
        }

        setCart([...cart, item]);
        alert(`${item.name} agregado`);
    };

    const clearCart = () => {
        setCart([]);
    };

    const getTotalItems = () => {
        return cart.length;
    };

    const values = { cart, addItem, clearCart, getTotalItems };

    return (
        <CartContext.Provider value={values}>{children}</CartContext.Provider>
    );
};
