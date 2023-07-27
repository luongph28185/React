import React from 'react'
// import Film from '../components/film'
const register = () => {
    return(
        <div>
<section className="bg-black opacity-90 absolute mt-32 ml-[500px]">
  <div className=" lg:w-4/12 px-4  pt-6">
    <div className="relative flex flex-col min-w-0 break-words  mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
      <p className='text-white font-bold ml-10 my-5 text-[25px]'>Đăng Ký</p>
      <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
       
        <form className='w-[500px]'>
        <div className="relative w-full mb-3">
            <label className="block uppercase text-white text-xs font-bold mb-2" htmlFor="grid-password">Name</label><input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Name"/>
          </div>
          <div className="relative w-full mb-3">
            <label className="block uppercase text-white text-xs font-bold mb-2" htmlFor="grid-password">Email</label><input type="email" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Email"/>
          </div>
          <div className="relative w-full mb-3">
            <label className="block uppercase text-white text-xs font-bold mb-2" htmlFor="grid-password">Password</label><input type="password" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Password"/>
          </div>
         
          <div className="text-center mt-6">
            <button className="bg-red-900 text-white hover:bg-red-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150" type="button"> Sign up </button>
          </div>
          <div className='flex justify-between mt-3'>
            <label className="inline-flex items-center cursor-pointer"><input id="customCheckLogin" type="checkbox" className="form-checkbox border-0 rounded text-white ml-1 w-5 h-5 ease-linear transition-all duration-150"/><span className="ml-2 text-sm font-semibold text-white">Remember me</span></label>
            <p className='text-gray-300'>Bạn cần trợ giúp gì?</p>
          </div>
          <div className='mt-24'>
    <p className=' text-[20px] my-3 text-gray-300'>Bạn là KH của Hades ? <a href='/login' className='text-blue-500'>đăng nhập ngay</a></p>
    <p className='text-gray-300 text-[14px]'>Trang này được Google reCAPTCHA bảo vệ để đảm bảo bạn không phải là robot. <a href="#" className='text-blue-500'>Tìm hiểu thêm</a>.</p>
  </div>
        </form>
        
      </div>
    </div>
  </div>
  
</section>
<img src="https://theme.hstatic.net/1000306633/1000891824/14/slideshow_2.jpg?v=558" alt="" />
        </div>
    )
  
}

export default register