import React from 'react'
import { useContext } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import posts from '../../data/posts'
import PostsPage from '../../components/PostsPage'

//context
import CountContext from '../../contexts/CountContext'

const Posts = () => {
    let { count } = useContext(CountContext);
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 mb-4">
                        <p>Count from context: {count}</p>
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