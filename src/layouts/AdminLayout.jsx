import { Outlet } from "react-router-dom";

export function AdminLayout() {
    return (
        <section className="admin-layout">
            <Outlet />
        </section>
    );
}
