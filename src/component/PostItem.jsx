import React from 'react';
import MyButton from "./UI/Button/MyButton";
import {useHistory, useNavigate} from "react-router-dom";

function PostItem({number, title, body, removePost, post}) {

    const navigate = useNavigate()


    return (
        <div className='post'>
            <div className='post__content'>
                <strong>{post.id}. {title}</strong>
                <div>
                    {body}
                </div>
            </div>
            <div className='post__btns'>
                <MyButton onClick={() => navigate(`/posts/${post.id}`)}>Открыть</MyButton>
                <MyButton onClick={() => removePost(post)}>Удалить</MyButton>
            </div>
        </div>
    );
}

export default PostItem;