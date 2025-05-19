import { createContext, useState } from "react";
import postsData from "../data/posts";

const PostsContext = createContext([]);

const PostsProvider = ({ children }) => {

    const [posts, setPosts] = useState(postsData);

    const value = { posts };


    return (
        <PostsContext.Provider value={value}>
            {children}
        </PostsContext.Provider>
    );
};


export { PostsContext, PostsProvider };