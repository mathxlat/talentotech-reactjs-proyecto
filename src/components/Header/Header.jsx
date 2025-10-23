import { Link } from "react-router-dom";
import { Nav } from "../Nav/Nav.jsx";
import "./Header.css";

export function Header() {
    return (
        <header className="header">
            <div className="header-inner">
                <div className="header-logo">
                    <Link to="/">PC Hardware Club</Link>
                </div>
                <Nav />
            </div>
        </header>
    );
}
