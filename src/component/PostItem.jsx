import React from 'react';

function PostItem({number, title, body}) {

    return (
        <div className='post'>
            <div className='post__content'>
                <strong>{number}. {title}</strong>
                <div>
                    {body}
                </div>
            </div>
            <div className='post__btns'>
                <button>Удалить</button>
            </div>
        </div>
    );
}

export default PostItem;