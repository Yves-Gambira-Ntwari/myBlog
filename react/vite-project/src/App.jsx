import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./nav"
import Home from "./home";
import Blog from "./blog";
function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar />
      <Routes>
          <Route path="/" element= {<Home />}>Home</Route>
          <Route path="/blog" element= {<Blog />}>Blog</Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
