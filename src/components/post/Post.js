import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';

function Post({ data }) {
    const history = useHistory();
    const apiURI = 'https://jsonplaceholder.typicode.com/comments'
    const [commentCount, setCommentCount] = useState(0);

    const goToPost = e => {
        history.push(`/${data.id}`)
    }

    useEffect(() => {
        fetch(apiURI).then(ress => ress.json()).then(posts => {
            let thisPostComment = posts.filter(post => post.postId === data.id)
            setCommentCount(thisPostComment.length)
        })
    }, [data.id])
    return (
        <div className="my-2 py-6 px-5 sm:px-7 md:px-10 rounded-2xl bg-white">
            <h5 className="text-base font-normal text-green-500">Category</h5>
            <h1 className="my-2 text-lg md:text-2xl leading-normal font-bold">{data.title}</h1>
            <div className="flex items-center">
                <img className="h-4 mr-1 rounded-full" src="https://randomuser.me/api/portraits/men/1.jpg" alt="random-user" />
                <p className="text-xs sm:text-sm">Jhon Doe</p>
                <img className="h-5  ml-3 rounded-full" src="https://cdn0.iconfinder.com/data/icons/free-daily-icon-set/512/Comments-512.png" alt="" />
                <p className="text-xs ml-2 sm:text-sm">{commentCount}</p>
            </div>
            <h3 className="my-1 text-md md:text-lg line-clamp-3 text-justify text-gray-500">{data.body}</h3>
            <p onClick={e => goToPost()} className="mt-2 text-green-500 cursor-pointer">Read More...</p>
        </div>
    )
}

export default Post
