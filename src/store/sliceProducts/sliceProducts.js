import {createSlice} from "@reduxjs/toolkit";

import {
    createProductsThunk,
    deleteProductsThunk,
    getProductsThunk,
} from "store/sliceProducts/operations";

const pending = (state) => {
    state.isLoading = true;
    state.error = null;
};

const fulfilled = (state) => {
    state.isLoading = false;
};

const rejected = (state, {payload}) => {
    state.isLoading = false;
    state.error = payload;
};

const initialState = {
    items: [],
    isLoading: false,
    error: null,
    filter: "",
    sort: "name",
};

const productsSlice = createSlice({
    name: "products",
    initialState,

    reducers: {
        setFilter: (state, {payload}) => {
            state.filter = payload;
        },
        setSorted: (state, {payload}) => ({
            ...state,
            sort: payload,
        }),
    },

    extraReducers: builder => {
        builder
            // fulfilled
            .addCase(getProductsThunk.fulfilled, (state, {payload}) => {
                state.items = payload;
            })
            .addCase(createProductsThunk.fulfilled, (state, {payload}) => {
                state.items.push(payload);
            })
            .addCase(deleteProductsThunk.fulfilled, (state, {payload}) => {
                state.items = state.items.filter(el => el.id !== payload.id);
            })
            // pending
            .addMatcher((action) => action.type.endsWith("/pending"), pending)
            // fulfilled
            .addMatcher(action => action.type.endsWith("/fulfilled"),
                fulfilled)
            // rejected
            .addMatcher(action => action.type.endsWith("/rejected"), rejected);
    },
});

export const productsReducer = productsSlice.reducer;
export const {setFilter, setSorted} = productsSlice.actions;