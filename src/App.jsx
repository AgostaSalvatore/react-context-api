import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

//Layout
import DefaultLayout from "./layouts/DefaultLayout"

//pages
import Homepage from "./pages/Homepage"
import Contacts from "./pages/Contacs"
import About from "./pages/About"
import Posts from "./pages/posts/Posts"

//context
import { PostsProvider } from "./contexts/PostsContext"

function App() {
  return (
    <>
      <PostsProvider>
        <BrowserRouter>
          <Routes>
            <Route Component={DefaultLayout}>
              <Route path="/" Component={Homepage} />
              <Route path="/posts" Component={Posts} />
              <Route path="/contacts" Component={Contacts} />
              <Route path="/about" Component={About} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PostsProvider>
    </>
  )
}

export default App
