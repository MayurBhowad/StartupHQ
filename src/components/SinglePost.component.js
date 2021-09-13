import React, { useEffect, useState } from 'react'
import Comment from './comment/Comment';
import { useParams } from 'react-router-dom';

function SinglePost(props) {
    const postApi = 'https://jsonplaceholder.typicode.com/posts'
    const commentApi = 'https://jsonplaceholder.typicode.com/comments'
    const { id } = useParams();

    const [post, setPost] = useState({});
    const [comments, setComments] = useState([])

    let commentsContainer;
    if (comments.length > 0) {
        commentsContainer = comments.map(comment => (<Comment key={comment.id} data={comment} />))
    } else {
        commentsContainer = <h1>No Comment Found</h1>
    }

    useEffect(() => {
        fetch(`${postApi}/${props.match.params.id}`).then(ress => ress.json()).then(post => {
            setPost(post)
        })

        fetch(commentApi).then(ress => ress.json()).then(comments => {
            let thisPostComment = comments.filter(post => post.postId === parseInt(id))
            setComments(thisPostComment)
        })
    }, [])

    return (
        <div className="m-2 sm:m-5 md:m-7 lg:mx-20">
            <div className=" p-2 flex justify-between items-center rounded-lg bg-white text-sm">
                < div className="text-green-500" > Category</div >
                <div className="flex">
                    <p className="text-gray-400">Created By: </p>
                    <p className="text-gray-600 ml-1" >John Doe</p>
                </div>
            </div >
            <div className="p-2 md:p-5 my-2 bg-white rounded-lg">
                <h1 className="my-2 text-gray-900 text-xl md:text-3xl font-bold leading-normal">{post.title}</h1>
                {/* </div>
            <div> */}
                <p className="text-gray-400 md:text-lg">Description:</p>
                <p className="text-gray-700 text-justify text-md font-semibold md:text-xl">{post.body}</p>
            </div>
            <div>
                <h1 className="p-2 pb-0 text-green-500">{comments.length} Comments</h1>
                {commentsContainer}
            </div>
        </div >
    )
}

export default SinglePost
