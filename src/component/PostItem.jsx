import React from 'react';
import MyButton from "./UI/Button/MyButton";

function PostItem({number, title, body, removePost, post}) {

    return (
        <div className='post'>
            <div className='post__content'>
                <strong>{post.id}. {title}</strong>
                <div>
                    {body}
                </div>
            </div>
            <div className='post__btns'>
                <MyButton onClick={() => removePost(post)}>Удалить</MyButton>
            </div>
        </div>
    );
}

export default PostItem;