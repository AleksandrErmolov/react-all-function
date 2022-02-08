import './styles/App.css'
import {useState, useEffect} from "react";
import PostList from "./component/PostList";
import PostForm from "./component/PostForm";
import PostFilter from "./component/PostFilter";
import MyModal from "./component/UI/MyModal/MyModal";
import MyButton from "./component/UI/Button/MyButton";
import {usePosts} from "./hooks/usePosts";
import PostService from "./API/PostService";
import Loader from "./component/UI/Loader/Loader";

function App() {

    const [posts, setPosts] = useState([])

    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const [isPostsLoading, setIsPostsLoading] = useState('false')

    useEffect(() => {
        fetchPosts()
    }, [])


    async function fetchPosts() {
        setIsPostsLoading(true)

        setTimeout (async () => {
            const posts = await PostService.getAll();
            setPosts(posts)
            setIsPostsLoading(false)
        }, 5000)

    }

    const create = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(el => el.id !== post.id))
    }


    return (
        <div className="App">
            <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
                Создать пост
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={create}/>
            </MyModal>

            <hr style={{margin: '15px 0'}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            {isPostsLoading
                ? <div style={{display:'flex', justifyContent:'center', marginTop:50}}><Loader /></div>
                : <PostList removePost={removePost} posts={sortedAndSearchedPosts} title='Посты про JS'/>

            }
        </div>
    );
}

export default App;
