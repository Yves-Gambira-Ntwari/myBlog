import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./nav"
import Home from "../public/home";
function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar />
      <Routes>
          <Route path="../public/home.jsx" element= {<Home />}>Home</Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
