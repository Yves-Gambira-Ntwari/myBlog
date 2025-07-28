import { Link } from "react-router-dom"
export default function NavBar(){
  return(
    <>
    <div class="nav-head">
      <h2 className="font-bold text-2xl">MyName</h2>
      <div class="menu">
        <i class="fas fa-bars"></i>
    </div>
    <div>
    </div>
    </div>
    <nav >
      <Link to="../public/home.jsx">Home</Link>
      <Link to="../public/home.jsx">Portfolio</Link>
      <Link to="../public/home.jsx">Blog</Link>
      <Link to="../public/home.jsx">Resume</Link>
      <Link to="../public/home.jsx">About me</Link>
      <hr></hr>
      <div>
          <button class="hire">Hire Me</button>
          <button class="mode">Dark</button>
      </div>
      <div class="close">
        <i class="fas fa-close">&times;</i>
      </div>
    </nav>
    </>
  )
}