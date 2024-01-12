import axios from "axios";

const productsURL = "https://dummyjson.com/";

axios.defaults.baseURL = productsURL;

export const axiosGetAllProducts = async () => await axios("products?limit=10");
export const axiosCreateProducts = async (body) => await axios.post(
    "products/add", body);
export const axiosDeleteProducts = async (productId) => await axios.delete(
    `products/${productId}`);
