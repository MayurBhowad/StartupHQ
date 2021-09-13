import React, { useEffect, useState } from 'react'
import Post from './post/Post'

function Posts() {
    const apiURI = 'https://jsonplaceholder.typicode.com/posts';
    const [posts, setPosts] = useState([]);

    let displayPostsContainer;
    if (posts.length > 0) {
        displayPostsContainer = posts.map(post => (<Post key={post.id} data={post} />))
    } else {
        displayPostsContainer = <h1>No post found</h1>
    }

    useEffect(() => {
        fetch(apiURI).then(response => {
            return response.json()
        }).then(posts => {
            setPosts(posts)
        })
    }, [])

    return (
        <div className="my-2 mx-2 sm:mx-10 md:mx-20 lg:mx-40">
            {displayPostsContainer}
        </div>
    )
}

export default Posts
