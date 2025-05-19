import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaulLayout}>
            <Route path="/" Component={Homepage} />
            <Route path="/posts" Component={Posts} />
            <Route path="/contacts" Component={Contacts} />
            <Route path="/aboutus" Component={About} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
