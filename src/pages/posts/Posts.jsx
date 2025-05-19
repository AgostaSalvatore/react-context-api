import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { NavLink } from 'react-router-dom'
import posts from '../../data/posts'

const Posts = () => {

    return (
        <>
            <div className="row">
                <div className="col-12 mb-4">
                    <h1>Lista prodotti</h1>
                </div>
                <div className="row g-3">
                    {posts === null ? (
                        <div>Loading...</div>
                    ) : (
                        posts.map((post) => {
                            return (
                                <div className="col-12 col-md-6" key={post.id}>
                                    <NavLink to={`/products/${post.id}`}>
                                        <div className="card">
                                            <div className="card-body">
                                                <h3>{post.title}</h3>
                                                <p>{post.content}</p>
                                                <p>{post.category}</p>
                                            </div>
                                        </div>
                                    </NavLink>
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