import {createAsyncThunk} from "@reduxjs/toolkit";

import {
    axiosCreateProducts,
    axiosDeleteProducts,
    axiosGetAllProducts,
} from "services/productsAPI/productsAPI";

export const getProductsThunk = createAsyncThunk("products/getProducts",
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await axiosGetAllProducts();
            return data.products;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    });

export const createProductsThunk = createAsyncThunk("products/creatProduct",
    async (body, {rejectWithValue}) => {
        try {
            const {data} = await axiosCreateProducts(body);
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    });

export const deleteProductsThunk = createAsyncThunk("products/deleteProduct",
    async (productId, {rejectWithValue}) => {
        try {
            const {data} = await axiosDeleteProducts(productId);
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    });