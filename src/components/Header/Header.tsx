import { Link } from "react-router-dom";
import { Nav } from "../Nav/Nav";
import "./Header.css";

export function Header() {
    return (
        <header className="header">
            <div className="header-inner">
                <div className="header-logo">
                    <Link to="/">PC Hardware Club</Link>
                </div>
                <Nav />
                <div className="header-cart">
                    <Link to="/carrito">🛒</Link>
                </div>
            </div>
        </header>
    );
}
