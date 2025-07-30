import logo from './logo.svg';
export default function Home(){
  return(
    <>
    <main className="grid grid-cols-2 items-center max-sm:ml-45 max-sm:grid-cols-1 sm:grid-cols-1 max-sm:gap-10 sm:gap-10 z-[-10] md:ml-5 md:grid-cols-2 max-md:ml-45 md:ml-25">
      <div className='space-y-5 mt-20'>
        <h1 className='text-[#313D6F] text-5xl font-bold max-sm:text-3xl'>Programming & web development</h1>
        <p className='text-[#605E5E] max-sm:text-sm'>I’m Yves Gambira Ntwari I’m web developer for e-commerce, government websites, 
          schools, company and other related website design and development. This includes front-end and back-end.</p>
          <div>
            <a href="#" className='px-4 py-3 bg-[#F14747] text-white text-lg font-bold max-sm:px-3 max-sm:text-sm'>About me</a>
          </div>
      </div>
      <div>
        <img className='w-100' src={logo} alt="" />
      </div>
    </main>
    <section className='mx-20 mt-10'>
            <div className="services grid sm:grid-cols-2 md:grid-cols-3 gap-5 max-md:ml-20">
        <div className='space-y-5 p-4 rounded-lg shadow-2xl'>
          <h1 className='text-[#313D6F] font-bold text-2xl'>Web design</h1>
          <div>
            <p className='text-[#979797] '>I’m able to design websites for UI/UX design in Figma and Adobe XD. In many context</p>
          </div>
          <div>
            <a href="#" className='text-white px-3 py-2 bg-[#F14747] rounded-xl' >Read more</a>
          </div>
        </div>
        <div className='space-y-5 p-4 rounded-lg shadow-2xl'>
          <h1 className='text-[#313D6F] font-bold text-2xl'>Web design</h1>
          <div>
            <p className='text-[#979797] '>I’m able to design websites for UI/UX design in Figma and Adobe XD. In many context</p>
          </div>
          <div>
            <a href="#" className='text-white px-3 py-2 bg-[#F14747] rounded-xl' >Read more</a>
          </div>
        </div>
        <div className='space-y-5 p-4 rounded-lg shadow-2xl'>
          <h1 className='text-[#313D6F] font-bold text-2xl'>Web design</h1>
          <div>
            <p className='text-[#979797] '>I’m able to design websites for UI/UX design in Figma and Adobe XD. In many context</p>
          </div>
          <div>
            <a href="#" className='text-white px-3 py-2 bg-[#F14747] rounded-xl' >Read more</a>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}