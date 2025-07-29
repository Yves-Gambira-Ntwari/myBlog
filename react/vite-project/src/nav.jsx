import { Link } from "react-router-dom"
import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
export default function NavBar(){
  const [close, setClose] = useState(true)
  const handleClose = ()=>{
    setClose(!close)
  }
  console.log(close)
  return(
    <>
    <header className="md:flex max-sm:fixed justify-between md:gap-20 lg:gap-100 z-10">
    <div class="nav-head max-sm:shadow-2xl max-md:shadow-2xl max-sm:shadow-2xl items-center max-md:flex max-md:gap-80">
      <div>
      <h2 className="font-bold text-2xl p-4">MyName</h2>
      </div>
      <div class="menu invisible max-sm:visible" onClick={handleClose} >
        <FontAwesomeIcon icon={faBars} className="text-2xl cursor-pointer text-[#F14747] " />
    </div>
    <div>
    </div>
    </div>
    <nav className={`-z-10 overflow-hidden transition-all duration-300 border-r-1 border-[#F14747] max-sm:fixed sm:fixed p-2 ${close==true?"w-100 visible":"w-0 -ml-100"} max-md:w-40 md:w-full md:static`}>
      <div className="md:flex md:gap-5">
        <div className="max-sm:grid sm:grid max-sm:grid-cols-1 max-sm:p-4 [&>*]:py-2 md:flex md:gap-5">
        <Link to="">Home</Link>
        <Link to="./home.jsx">Portfolio</Link>
        <Link to="/blog">Blog</Link>
        <Link to="../public/home.jsx">Resume</Link>
        <Link to="../public/home.jsx">About me</Link>
          </div>
        <div>
        <hr className="text-[#F14747] invisible max-sm:visible"></hr>
        <div className="grid max-sm:grid-cols-1 [&>*]:px-4 [&>*]:py-2 [&>*]:text-white [&>*]:rounded-xl max-sm:p-2 md:flex md:gap-5">
            <button class="btn bg-[#F14747] mb-2">Hire Me</button>
            <button class="btn bg-[#313D6F] mb-2">Hire Me</button>
        </div>
        </div>
      <div class="invisible close text-[#F14747] text-4xl absolute right-2 top-0" onClick={handleClose}>
        <i class="fas fa-close cursor-pointer">&times;</i> 
      </div>
      </div>
    </nav>
    </header>
    </>
  )
}