import './styles/App.css'
import {useState} from "react";
import PostList from "./component/PostList";
import MyButton from "./component/UI/Button/MyButton";
import MyInput from "./component/UI/Input/MyInput";
import PostForm from "./component/PostForm";
import MySelect from "./component/UI/MySelect/MySelect";

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', body: 'Description'},
        {id: 2, title: 'JavaScript 2', body: 'Description'},
        {id: 3, title: 'JavaScript 3', body: 'Description'},
    ])

    const [selectedSort, setSelectedSort] = useState('')

    const create = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(el => el.id !== post.id))
    }

    const sortPosts = (sort) => {
        setSelectedSort(sort)
        setPosts([...posts].sort((a,b) => a[sort].localeCompare(b[sort])))
    }

    return (
        <div className="App">
            <PostForm create={create}/>
            <hr style={{margin: '15px 0'}}/>
            <div>
                <MySelect defaultValue='Сортировка по'
                          options={[
                              {value: 'title', name: 'По названию'},
                              {value: 'body', name: 'По описанию'},

                          ]}
                          value={selectedSort} onChange={sortPosts}/>
            </div>
            {posts.length
                ? <PostList removePost={removePost} posts={posts} title='Посты про JS'/>
                : <h1 style={{textAlign: 'center'}}> Посты не найдены</h1>
            }

        </div>
    );
}

export default App;
