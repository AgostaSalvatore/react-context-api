import React from 'react'

const PostCard = ({ post }) => {
    return (
        <div className="card">
            <div className="card-body">
                <h3 className='title'>{post.title}</h3>
                <p>{post.content}</p>
                <p>{post.category}</p>
            </div>
        </div>
    )
}

export default PostCard