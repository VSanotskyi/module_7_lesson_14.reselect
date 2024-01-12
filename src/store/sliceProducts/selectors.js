import {createSelector} from "@reduxjs/toolkit";

export const selectProducts = state => state.products.items;
export const selectIsLoading = state => state.products.isLoading;
export const selectError = state => state.products.error;
export const selectFilter = (state) => state.products.filter;
export const selectSort = (state) => state.products.sort;

export const selectProductsForFender = createSelector(
    [selectFilter, selectProducts, selectSort],
    (filter, products, sort) => {
        if (sort === "name") {
            return filterItems(filter, products)
                .toSorted((a, b) => a.title.localeCompare(b.title));
        }

        if (sort === "price") {
            return filterItems(filter, products)
                .toSorted((a, b) => a.price - b.price);
        }
    },
);

function filterItems(filter, items) {
    return items.filter(
        el => el.title.toLowerCase().includes(filter.toLowerCase()));
}