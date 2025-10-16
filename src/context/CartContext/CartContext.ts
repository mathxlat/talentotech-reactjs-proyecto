import { createContext } from "react";
import type { Product } from "../../types/product";

interface CartContextType {
    cart: Product[];
    addItem: (item: Product) => void;
    clearCart: () => void;
    getTotalItems: () => number;
}

export const CartContext = createContext<CartContextType>(
    {} as CartContextType
);
