import { Link } from "react-router-dom"
import { useState } from "react"
export default function NavBar(){
  const [close, useClose] = useState(true)
  const handleClose = ()=>{
    useClose(!close)
  }
  console.log(close)
  return(
    <>
    <div class="nav-head">
      <h2 className="font-bold text-2xl p-4">MyName</h2>
      <div class="menu">
        <i class="fas fa-bars"></i>
    </div>
    <div>
    </div>
    </div>
    <nav className="grid grid-cols-2 px-4 border-r-1">
      <div className={`transition-all duration-300 border-r-1 border-[#F14747] max-sm:fixed p-2 ${close==true?"w-80 visible":"w-0 invisible"}`}>
        <div className="max-sm:grid sm:grid-cols-1 p-4 [&>*]:py-2">
        <Link to="../public/home.jsx">Home</Link>
        <Link to="../public/home.jsx">Portfolio</Link>
        <Link to="../public/home.jsx">Blog</Link>
        <Link to="../public/home.jsx">Resume</Link>
        <Link to="../public/home.jsx">About me</Link>
          </div>
        <div>
        <hr className="text-[#F14747]"></hr>
        <div className="grid max-sm:grid-cols-1 [&>*]:px-5 [&>*]:py-2 [&>*]:text-white [&>*]:rounded-xl max-sm:p-2">
            <button class="btn bg-[#F14747] mb-2">Hire Me</button>
            <button class="btn bg-[#313D6F]">Dark</button>
        </div>
        </div>
      <div class="close text-[#F14747] text-4xl absolute right-2 top-0" onClick={handleClose}>
        <i class="fas fa-close">&times;</i> 
      </div>
      </div>
    </nav>
    </>
  )
}