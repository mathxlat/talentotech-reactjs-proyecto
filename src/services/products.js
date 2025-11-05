const BASE_URL = "https://690b8c336ad3beba00f56cc2.mockapi.io/products";

export const createProduct = async (product) => {
    const response = await fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: product,
    });

    if (!response.ok) {
        throw new Error("Ocurrió un error al crear el producto");
    }

    const result = await response.json();

    return result;
};
