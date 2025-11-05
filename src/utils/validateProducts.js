export const validateProduct = (product, fileRequired = true) => {
    const errors = {};

    if (!product.name.trim()) {
        errors.name = "Ingresa el nombre";
    }

    if (!product.price) {
        errors.price = "Ingresa el precio";
    } else if (product.price <= 0) {
        errors.price = "El precio debe ser mayor a 0";
    }

    if (!product.description.trim()) {
        errors.description = "Ingresa la descripción";
    }

    if (!product.category.trim()) {
        errors.category = "Ingresa la categoría";
    }

    if (fileRequired && !product.file) {
        errors.file = "Selecciona una imagen";
    }

    return errors;
};
