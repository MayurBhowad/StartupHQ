import React from 'react'
import Comment from './comment/Comment';

function SinglePost() {
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
                <h1 className="my-2 text-gray-900 text-xl md:text-3xl font-bold leading-normal">sunt aut facere repellat provident occaecati excepturi optio reprehenderit</h1>
                {/* </div>
            <div> */}
                <p className="text-gray-400 md:text-xl">Description:</p>
                <p className="text-gray-700 text-justify md:text-xl">quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto</p>
            </div>
            <div>
                <h1 className="p-2 pb-0 text-green-500">6 Comments</h1>
                <Comment />
                <Comment />
            </div>
        </div >
    )
}

export default SinglePost
