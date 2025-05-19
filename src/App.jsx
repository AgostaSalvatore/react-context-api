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

function App() {
  return (
    <>
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
    </>
  )
}

export default App
