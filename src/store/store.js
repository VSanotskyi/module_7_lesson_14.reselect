import {configureStore} from "@reduxjs/toolkit";
import {productsReducer} from "store/sliceProducts/sliceProducts";

import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "products",
    storage,
    whitelist: ["sort"],
};

const persistedReducer = persistReducer(persistConfig, productsReducer);

export const store = configureStore({
    reducer: {
        products: persistedReducer,
    },
});

export const persistor = persistStore(store);