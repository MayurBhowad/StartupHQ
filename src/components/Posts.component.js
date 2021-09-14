import React, { useEffect, useState } from 'react'
import Pagination from './pagination/Pagination.component';
import Post from './post/Post'

function Posts() {
    const apiURI = 'https://jsonplaceholder.typicode.com/posts';

    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const totalPages = posts.length / postsPerPage
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginateFront = () => {
        if (totalPages > currentPage) {
            setCurrentPage(currentPage + 1)
        }
    };

    const paginateBack = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    };

    let displayPostsContainer;
    if (currentPosts.length > 0) {
        displayPostsContainer = currentPosts.map(post => (<Post key={post.id} data={post} />))
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
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                postsCount={posts.length}
                indexOfFirstPost={indexOfFirstPost}
                indexOfLastPost={indexOfLastPost}
                paginateFront={paginateFront}
                paginateBack={paginateBack}
            />
        </div>
    )
}

export default Posts
