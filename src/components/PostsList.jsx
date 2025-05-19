import React, { useContext } from 'react'
import { PostsContext } from '../contexts/PostsContext'
import PostCard from './PostCard';

const PostsList = () => {
    // Utilizziamo useContext per accedere ai dati dei post dal Context
    const { posts } = useContext(PostsContext);

    return (
        <div className="row g-3">
            {posts.map((post) => {
                return (
                    <div className="col-12 col-md-6" key={post.id}>
                        <PostCard post={post} />
                    </div>
                )
            })}
        </div>
    )
}

export default PostsList