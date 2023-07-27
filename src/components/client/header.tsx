import React from 'react'
import '../../styles/header.css'
const header = () => {
  return (
    <div>
        <div>
            
            <header className="w-full bg-white">
                <a href='/'><img className="w-32  rounded-lg -ml-16" src="https://theme.hstatic.net/1000306633/1000891824/14/logo_menu_no_scroll.png?v=510" alt="" /></a>
                <ul className="navbar space-x-2">
                  <li><a href="/products">SHOP ALL</a></li>
                  <li><a href="#">TOPS</a></li>
                  <li><a href="#">BOTTOMS</a></li>
                  <li><a href="#">OUTTERWEAR</a></li>
                  <li><a href="#">FASHION</a></li>
                  <li><a href='/recruiment' >RECRUITMENT</a></li>
                </ul>
            <div className=" text-right  flex">
               <div className="flex">
                <input className="px-3 py-1 w-[300px] rounded-lg border-2  text-black  hover:border-black" type="text" />
               
              </div>
                <button className=" border-2 ml-2  px-3 py-1 rounded-lg  font-bold hover:border-black">Seach</button>
            </div>
            
            <div className="flex cursor-pointer items-center  rounded-md py-2 px-4 ">
                <div className="relative">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                  <span className="absolute -top-2  flex h-4 w-4 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">3</span>
                </div>
                <a href='/cart'  className="text-sm font-medium ">Cart</a>
              </div>
            
            <div className="-mr-16">
            <a   className="font-bold px-3 py-2 rounded-lg  no-underline mt-10"><div className="data-container">
              <a href='/login' className="btn">Signin</a>
              </div></a>
            </div>
            </header>
            
                       
                        
                    </div>
    </div>
  )
}

export default header