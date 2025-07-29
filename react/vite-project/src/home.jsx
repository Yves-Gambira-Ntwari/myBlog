import logo from './logo.svg';
export default function Home(){
  return(
    <>
    <main className="grid grid-cols-2 xl:mx-20 items-center max-sm:ml-45 sm:ml-45 max-sm:grid-cols-1 sm:grid-cols-1 max-sm:gap-10 sm:gap-10 z-[-10] md:ml-5 md:grid-cols-2 md:ml-20">
      <div className='space-y-5 mt-20'>
        <h1 className='text-[#313D6F] text-5xl font-bold'>Programming & web development</h1>
        <p className='text-[#605E5E]'>I’m Yves Gambira Ntwari I’m web developer for e-commerce, government websites, 
          schools, company and other related website design and development. This includes front-end and back-end.</p>
          <div>
            <a href="#" className='px-4 py-3 bg-[#F14747] text-white text-lg font-bold'>About me</a>
          </div>
      </div>
      <div>
        <img className='w-200' src={logo} alt="" />
      </div>
    </main>
    </>
  )
}