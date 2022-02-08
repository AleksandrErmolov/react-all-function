import './styles/App.css'
import {useState, useMemo} from "react";
import PostList from "./component/PostList";
import PostForm from "./component/PostForm";
import MySelect from "./component/UI/MySelect/MySelect";
import MyInput from "./component/UI/Input/MyInput";
import PostFilter from "./component/PostFilter";

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', body: 'Description'},
        {id: 2, title: 'JavaScript 2', body: 'Description'},
        {id: 3, title: 'JavaScript 3', body: 'Description'},
    ])

    const [filter, setFilter] = useState({sort: '', query: ''})


    const sortedPosts = useMemo(() => {

        if (filter.sort) {
            console.log('фуyнкция отработала')
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts;

    }, [filter.sort, posts])


    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
    }, [filter.query, sortedPosts])

    const create = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(el => el.id !== post.id))
    }


    return (
        <div className="App">
            <PostForm create={create}/>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            <PostList removePost={removePost} posts={sortedAndSearchedPosts} title='Посты про JS'/>
        </div>
    );
}

export default App;
