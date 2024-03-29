import React, {useState} from 'react';
import MyInput from "./UI/Input/MyInput";
import MyButton from "./UI/Button/MyButton";

const PostForm = ({create}) => {

    const [post, setPost] = useState({title:'', body:''})

    const addNewPost = (e) => {
        e.preventDefault();

        const newPost = {
            id: Date.now(),
            title: post.title,
            body: post.body
        }

        create(newPost)
        setPost({title:'', body:''})
    }


    return (
        <form>
            <MyInput type='text' placeholder='Название поста' value={post.title} onChange={e =>setPost({...post, title: e.target.value})} />
            <MyInput  type='text' placeholder='Описание поста' value={post.body} onChange={e => setPost({...post, body: e.target.value})}  />
            <MyButton onClick={addNewPost}> Создать пост </MyButton>
        </form>
    );
};

export default PostForm;