import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import Posts from "../pages/Posts";
import About from "../pages/About";
import PostIdPage from "./PostIdPage";
import {routes, privateRoutes, publicRoutes} from "../router";
import {AuthContext} from "../context";

const AppRouter = () => {

    const {isAuth} = useContext(AuthContext)

    return (
        <Routes>

            {isAuth
            ?   privateRoutes.map(route =>
                        <Route element={route.component} path={route.path} exact={route.exact} key={route.path}/>
                    )
            :  publicRoutes.map(route =>
                        <Route element={route.component} path={route.path} exact={route.exact} key={route.path}/>
                    )
            }



        </Routes>
    );
};

export default AppRouter;