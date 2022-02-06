import './styles/App.css'
import {useState} from "react";
import PostList from "./component/PostList";
import MyButton from "./component/UI/Button/MyButton";
import MyInput from "./component/UI/Input/MyInput";

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', body: 'Description'},
        {id: 2, title: 'JavaScript 2', body: 'Description'},
        {id: 3, title: 'JavaScript 3', body: 'Description'},
    ])


    return (
        <div className="App">
            <form>
                <MyInput type='text' placeholder='Название поста'/>
                <MyInput type='text' placeholder='Описание поста'/>
                <MyButton disabled> Создать пост </MyButton>
            </form>
            <PostList posts={posts} title='Список постов 1'/>
        </div>
    );
}

export default App;
