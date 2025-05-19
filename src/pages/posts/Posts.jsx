import React from 'react'
import { useContext } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import posts from '../../data/posts'

//context
import CountContext from '../../contexts/CountContext'

const Posts = () => {

    let { count } = useContext(CountContext);
    return (
        <>
            <div className="row">
                <div className="col-12 mb-4">
                    <h1>Lista Posts</h1>
                    <p>{count}</p>
                </div>
                <div className="row g-3">
                    {posts === null ? (
                        <div>Loading...</div>
                    ) : (
                        posts.map((post) => {
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
                        })
                    )}
                </div>
            </div >
        </>

    )
}

export default Posts