const BASE_URL = "https://fakestoreapi.com";

export const fetchProducts = async () => {
  const response = await fetch(`${BASE_URL}/products`);
  const data = await response.json();
  return data;
};

export const fetchProductsByCategory = async (cat) => {
  const response = await fetch(`${BASE_URL}/products/category/${cat}`);
  const data = await response.json();
  return data;
};


export const fetchProductById= async (id) => {
  const response = await fetch(`${BASE_URL}/products/${id}`);
  const data = await response.json();
  return data;
};
