import React from 'react'
import posts from '../data/posts'

const PostsList = () => {
    return (
        <div className="row g-3">
            {posts.map((post) => {
                return (
                    <div className="col-12 col-md-6" key={post.id}>
                        <div className="card">
                            <div className="card-body">
                                <h3 className='title'>{post.title}</h3>
                                <p>{post.content}</p>
                                <p>{post.category}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default PostsList