import './styles/App.css'
import {useState} from "react";
import PostList from "./component/PostList";
import MyButton from "./component/UI/Button/MyButton";
import MyInput from "./component/UI/Input/MyInput";
import PostForm from "./component/PostForm";

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', body: 'Description'},
        {id: 2, title: 'JavaScript 2', body: 'Description'},
        {id: 3, title: 'JavaScript 3', body: 'Description'},
    ])

    const create= (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
      setPosts(posts.filter( el => el.id !== post.id))
    }


    return (
        <div className="App">
            <PostForm create={create}/>
            <PostList  removePost={removePost} posts={posts} title='Посты про JS'/>
        </div>
    );
}

export default App;
