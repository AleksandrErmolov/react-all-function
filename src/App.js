import './styles/App.css'
import PostItem from "./component/PostItem";
import {useState} from "react";
import PostList from "./component/PostList";
import MyButton from "./component/UI/Button/MyButton";

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', body: 'Description'},
        {id: 2, title: 'JavaScript 2', body: 'Description'},
        {id: 3, title: 'JavaScript 3', body: 'Description'},
    ])


    return (
        <div className="App">
            <form>
                <input type='text' placeholder='Название поста'/>
                <input type='text' placeholder='Описание поста'/>
                <MyButton disabled> Создать пост </MyButton>
            </form>
            <PostList posts={posts} title='Список постов 1'/>
        </div>
    );
}

export default App;
