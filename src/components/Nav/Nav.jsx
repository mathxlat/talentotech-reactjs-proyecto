import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/useCartContext";
import "./Nav.css";

export function Nav() {
    const { getTotalItems } = useCartContext();

    return (
        <nav className="nav">
            <ul className="nav-list">
                <li className="nav-item">
                    <Link className="nav-link" to="/">
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/productos">
                        Productos
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/carrito">🛒</Link>
                    {getTotalItems() > 0 && (
                        <span className="in-cart">{getTotalItems()}</span>
                    )}
                </li>
            </ul>
        </nav>
    );
}
