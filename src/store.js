import { configureStore } from "@reduxjs/toolkit";
import tagsSlice from "./reducers/tagsSlice";

const store = configureStore({
    reducer: {
        tags: tagsSlice,
    }
})


export default store;