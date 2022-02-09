import React from 'react';
import {Route, Routes} from "react-router-dom";
import Posts from "../pages/Posts";
import About from "../pages/About";
import PostIdPage from "./PostIdPage";
import {routes, privateRoutes, publicRoutes} from "../router";

const AppRouter = () => {

    const isAuth = true;

    return (
        <Routes>

            {isAuth
            ?   privateRoutes.map(route =>
                        <Route element={route.component} path={route.path} exact={route.exact} />
                    )
            :  publicRoutes.map(route =>
                        <Route element={route.component} path={route.path} exact={route.exact} />
                    )
            }



        </Routes>
    );
};

export default AppRouter;