import React from "react";
import { BrowserRouter} from "react-router-dom";
import { Provider } from "react-redux";
import Router from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { store } from "./store/index";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </Provider>
    );
}

export default App;
