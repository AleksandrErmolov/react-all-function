import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts, title, removePost}) => {

    if (!posts.length) {
        return <h1 style={{textAlign: 'center'}}> Посты не найдены</h1>
    }

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>{title}</h1>
            {posts.map((post, index) =>
                <PostItem removePost={removePost} number={index + 1} key={post.id} id={post.id} title={post.title}
                          body={post.body} post={post}/>
            )}
        </div>
    );
};


export default PostList;