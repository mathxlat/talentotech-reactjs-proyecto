import "./ProductFormUI.css";

export function ProductFormUI({
    product,
    errors,
    loading,
    onChange,
    onFileChange,
    onSubmit,
}) {
    return (
        <section className="product-form-container">
            <form className="product-form" onSubmit={onSubmit}>
                <h2 className="product-form-title">Agregar producto</h2>
                <div className="product-form-field">
                    <label htmlFor="name" className="product-form-label">
                        Nombre
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={product.name}
                        onChange={onChange}
                        required
                        className="product-form-input"
                    />
                    {errors.name && (
                        <p className="product-form-error">{errors.name}</p>
                    )}
                </div>
                <div className="product-form-field">
                    <label htmlFor="price" className="product-form-label">
                        Precio
                    </label>
                    <input
                        type="text"
                        name="price"
                        id="price"
                        value={product.price}
                        onChange={onChange}
                        required
                        className="product-form-input"
                    />
                    {errors.price && (
                        <p className="product-form-error">{errors.price}</p>
                    )}
                </div>
                <div className="product-form-field">
                    <label htmlFor="category" className="product-form-label">
                        Categoría
                    </label>
                    <input
                        type="text"
                        name="category"
                        id="category"
                        value={product.category}
                        onChange={onChange}
                        required
                        className="product-form-input"
                    />
                    {errors.category && (
                        <p className="product-form-error">{errors.category}</p>
                    )}
                </div>
                <div className="product-form-field">
                    <label htmlFor="description" className="product-form-label">
                        Descripción
                    </label>
                    <input
                        type="text"
                        name="description"
                        id="description"
                        value={product.description}
                        onChange={onChange}
                        required
                        className="product-form-input"
                    />
                    {errors.description && (
                        <p className="product-form-error">
                            {errors.description}
                        </p>
                    )}
                </div>
                <div className="product-form-field">
                    <label htmlFor="file" className="product-form-label">
                        Imagen
                    </label>
                    <input
                        type="file"
                        accept="image/*"
                        id="file"
                        onChange={(e) =>
                            onFileChange(e.target.files?.[0] ?? null)
                        }
                        className="product-form-input"
                    />
                    {errors.file && (
                        <p className="product-form-error">{errors.file}</p>
                    )}
                </div>
                <button
                    className="product-form-button"
                    type="submit"
                    disabled={loading}
                >
                    {loading ? "Guardando..." : "Guardar"}
                </button>
            </form>
        </section>
    );
}
