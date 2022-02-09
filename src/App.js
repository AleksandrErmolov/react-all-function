import './styles/App.css'
import {useState, useEffect} from "react";
import PostList from "./component/PostList";
import PostForm from "./component/PostForm";
import PostFilter from "./component/PostFilter";
import MyModal from "./component/UI/MyModal/MyModal";
import MyButton from "./component/UI/Button/MyButton";
import {usePagination, usePosts} from "./hooks/usePosts";
import PostService from "./API/PostService";
import Loader from "./component/UI/Loader/Loader";
import {useFetching} from "./hooks/useFetching";
import {getPageCount, getPagesArray} from "./utils/pages";
import Pagination from "./component/UI/Pagination/Pagination";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Navbar from "./component/UI/NavBar/Navbar";
import Error from "./pages/Error";
import AppRouter from "./component/AppRouter";
import {AuthContext} from "./context";

function App() {

    const [isAuth,setIsAuth] = useState(false)

    useEffect(() => {
        if(localStorage.getItem('auth')){
            setIsAuth(true)
        }
    }, [])

    return (
        <AuthContext.Provider value={{isAuth, setIsAuth}}>
        <BrowserRouter>
            <Navbar/>
            <AppRouter/>
        </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default App;
