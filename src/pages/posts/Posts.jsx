import React from 'react'
import { useContext } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import posts from '../../data/posts'
import PostsPage from '../../components/PostsPage'

const Posts = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 mb-4">
                    </div>
                </div>
                {posts === null ? (
                    <div>Loading...</div>
                ) : (
                    <PostsPage />
                )}
            </div>
        </>
    )
}

export default Posts