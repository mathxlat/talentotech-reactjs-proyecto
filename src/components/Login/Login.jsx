import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext/useAuthContext";
import { Navigate, useNavigate } from "react-router-dom";
import "./Login.css";

export function Login() {
    const [userForm, setUserForm] = useState({
        name: "",
        password: "",
    });
    const { user, login } = useAuthContext();

    const navigate = useNavigate();

    if (user) {
        return <Navigate to="/admin/alta-productos" />;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserForm({ ...userForm, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const success = login(userForm.name, userForm.password);

        if (success) {
            navigate("/admin/alta-productos");
        } else {
            alert("Credenciales incorrectas");
            setUserForm({ name: "", password: "" });
        }
    };

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <h2 className="login-form-title">Iniciar sesión</h2>
            <div className="login-form-field">
                <label htmlFor="name" className="login-form-label">
                    Usuario
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={userForm.name}
                    onChange={handleChange}
                    className="login-form-input"
                />
            </div>
            <div className="login-form-field">
                <label htmlFor="password" className="login-form-label">
                    Contraseña
                </label>
                <input
                    type="text"
                    name="password"
                    id="password"
                    value={userForm.password}
                    onChange={handleChange}
                    className="login-form-input"
                />
            </div>
            <button className="login-form-button" type="submit">
                Iniciar sesión
            </button>
        </form>
    );
}
