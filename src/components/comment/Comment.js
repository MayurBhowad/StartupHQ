import React from 'react'

function Comment({ data }) {
    return (
        <div className="p-2 my-2 bg-white rounded-lg">
            <h1 className="text-gray-400 text-sm">{data.email} <span className="text-green-500">says..</span></h1>
            <p className="text-gray-500 text-base">{data.body}</p>
        </div>
    )
}

export default Comment
