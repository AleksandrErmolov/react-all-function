import '../styles/App.css'
import {useState, useEffect, useRef} from "react";
import PostList from "../component/PostList";
import PostForm from "../component/PostForm";
import PostFilter from "../component/PostFilter";
import MyModal from "../component/UI/MyModal/MyModal";
import MyButton from "../component/UI/Button/MyButton";
import {usePagination, usePosts} from "../hooks/usePosts";
import PostService from "../API/PostService";
import Loader from "../component/UI/Loader/Loader";
import {useFetching} from "../hooks/useFetching";
import {getPageCount, getPagesArray} from "../utils/pages";
import Pagination from "../component/UI/Pagination/Pagination";
import {useObserver} from "../hooks/useObserver";
import MySelect from "../component/UI/MySelect/MySelect";

function Posts() {

    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const lastElement = useRef()


    // let pagesArray = getPagesArray(totalPages)
    // console.log(pagesArray)

    // let pagesArray = usePagination(totalPages)
    // console.log(pagesArray)

    const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostService.getAll(limit, page);
        setPosts([...posts, ...response.data])
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    })


    useObserver(lastElement, page< totalPages, isPostsLoading, () => {setPage(page+1)})


    useEffect(() => {
        fetchPosts(limit, page)
    }, [page, limit])


    const create = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(el => el.id !== post.id))
    }

    const changePage = (page) => {
        setPage(page)
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
            <MySelect value={limit} onChange={value => setLimit(value)} defaultValue='Кол-во элементов на странице'
                      options={[
                          {value:5, name:'5'},
                          {value:10, name:'10'},
                          {value:25, name:'25'},
                          {value:-1, name:'Показать всё'}

                      ]}/>
            {postError &&
            <h1>Произошла ошибка {postError}</h1>
            }
            <PostList removePost={removePost} posts={sortedAndSearchedPosts} title='Посты про JS'/>
            {isPostsLoading &&
            <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
            }
            <div ref={lastElement} style={{height: 20, background: 'red'}}/>

            <Pagination page={page} changePage={changePage} totalPages={totalPages}/>

        </div>
    );
}

export default Posts;
