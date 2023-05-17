import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers";
import thunk from "redux-thunk";
import Api from "../resources";

const api = {api: new Api()};

export const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk.withExtraArgument(api)]
})