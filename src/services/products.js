const BASE_URL = "https://690b8c336ad3beba00f56cc2.mockapi.io/products";

export const createProduct = async (product) => {
    const response = await fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
    });

    if (!response.ok) {
        throw new Error("Error al crear el producto");
    }

    const result = await response.json();

    return result;
};

export const getProducts = async (category) => {
    let url = BASE_URL;

    if (category) {
        url = `${BASE_URL}?category=${category}`;
    }

    const res = await fetch(url);
    if (!res.ok) {
        throw new Error("Error al obtener la lista de productos");
    }

    const result = await res.json();

    return result;
};

export const getProductById = async (id) => {
    const url = `${BASE_URL}/${id}`;

    const res = await fetch(url);
    if (!res.ok) {
        throw new Error("Error al obtener el producto");
    }

    const result = await res.json();

    return result;
};
