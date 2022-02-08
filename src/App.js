import './styles/App.css'
import {useState, useMemo} from "react";
import PostList from "./component/PostList";
import PostForm from "./component/PostForm";
import MySelect from "./component/UI/MySelect/MySelect";
import MyInput from "./component/UI/Input/MyInput";

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', body: 'Description'},
        {id: 2, title: 'JavaScript 2', body: 'Description'},
        {id: 3, title: 'JavaScript 3', body: 'Description'},
    ])

    const [selectedSort, setSelectedSort] = useState('')
    const [searchQuery, setSearchQuery] = useState('')



    const sortedPosts = useMemo (() => {

        if(selectedSort){
            console.log('фуyнкция отработала')
            return [...posts].sort((a,b) => a[selectedSort].localeCompare(b[selectedSort]))
        }
        return posts;

    }, [selectedSort, posts])


    const sortedAndSearchedPosts = useMemo(() => {
return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery) )
    }, [searchQuery, sortedPosts])

    const create = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(el => el.id !== post.id))
    }

    const sortPosts = (sort) => {
        setSelectedSort(sort)
    }

    return (
        <div className="App">
            <PostForm create={create}/>
            <hr style={{margin: '15px 0'}}/>
            <div>

                <MyInput
                    placeholder={'поиск'}
                    type='text'
                    value={searchQuery}
                    onChange={e=> setSearchQuery(e.target.value)}
                />

                <MySelect defaultValue='Сортировка по'
                          options={[
                              {value: 'title', name: 'По названию'},
                              {value: 'body', name: 'По описанию'},

                          ]}
                          value={selectedSort} onChange={sortPosts}
                />

            </div>
            {sortedAndSearchedPosts.length
                ? <PostList removePost={removePost} posts={sortedAndSearchedPosts} title='Посты про JS'/>
                : <h1 style={{textAlign: 'center'}}> Посты не найдены</h1>
            }

        </div>
    );
}

export default App;
