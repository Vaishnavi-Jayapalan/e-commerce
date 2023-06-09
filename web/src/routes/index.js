import React from "react";
import { Route, Routes} from "react-router-dom";
import LoginContainer from "../containers/login";
import RegisterContainer from "../containers/register";
import HomeContainer from "../containers/home/index";
import {withRouter} from "./history";

const Router = (props) => {
    return (
        <Routes>
            <Route path='/login' exact element={<LoginContainer {...props} />} />
            <Route path='/register' exact element={<RegisterContainer {...props} />} />
            <Route path='/home' exact element={<HomeContainer {...props} />} />
        </Routes>
    )
}

export default withRouter(Router);