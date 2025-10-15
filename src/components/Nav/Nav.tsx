import { Link } from "react-router-dom";
import "./Nav.css";

export function Nav() {
    return (
        <nav className="nav">
            <ul className="nav-list">
                <li className="nav-item">
                    <Link className="nav-link" to="/productos">
                        Productos
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
