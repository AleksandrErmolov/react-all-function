import React from 'react';
import {Route, Routes} from "react-router-dom";
import Posts from "../pages/Posts";
import About from "../pages/About";
import Error from "../pages/Error";
import PostItem from "./PostItem";
import PostIdPage from "./PostIdPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/posts' element={<Posts/>}/>
            <Route path='/posts/:id' element={<PostIdPage />}/>
            <Route path='/about' element={<About/>}/>
            <Route path='*' element={<Error/>}/>

        </Routes>
    );
};

export default AppRouter;