import React from 'react'
import PostsList from './PostsList'

const PostsPage = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 mb-4">
                    <h1>Lista Posts</h1>
                </div>
            </div>
            <PostsList />
        </div>
    )
}

export default PostsPage