import React from 'react'
import header from '../components/client/header'
import footer from '../components/client/footer'
import '../styles/header.css';
const cart = () => {
  return (
    <div>
        {header()}
        <div  className="mt-[100px]">
    <div className='grid grid-cols-4 gap-8'>
        <div  className='col-span-3 bg-slate-100 py-5 px-3'>
            <div >
            <h4 className='text-center font-bold'>GIỎ HÀNG CỦA BẠN</h4>
            <p className='font-bold my-3'>Bạn đang có 3 sản phẩm trong giỏ hàng</p>
            <div   className='flex space-x-[150px] bg-white pt-3 px-1 border-2'>
                <img className='w-[70px] ml-4 mb-4' src='https://product.hstatic.net/1000306633/product/z4478978386851_1a8f8bd47b46c8d7ad98029a4b57449c_ac857bb432744596bcfbc4a05e98d4ba.jpg' alt="" />
                <span>
                <p className='font-bold mt-[25px]'>ten san pham</p>
                <p className='text-slate-400'>NÂU/S</p>
                </span>
                
                <div className='flex space-x-2 mb-10'>
                    <button>-</button>
                    <button>1</button>
                    <button>+</button>
                </div>
                <p className='mt-[25px]'>1000000</p>
                <span className='flex'>
                    
                   <div className='mt-4'> 
                   <p>Thành tiền:</p>
                    <p className='text-red-500'>99999</p>
                   </div>
                    <img className='w-10 h-10 ml-10 mt-4' src="https://theme.hstatic.net/1000306633/1000891824/14/ic_close.png?v=490" alt="" />
                </span>
            </div>
            </div>
            <div className='mt-10'>
                <div className='grid grid-cols-2 gap-8'>
                    <div>
                    <label className='my-4 font-bold' htmlFor="">Ghi chú đơn hàng</label><br />
                    <textarea className="border-2 w-[530px] h-[150px]" name="" id="" ></textarea>
                    </div>
                    <div className='ml-6'>
                    <p className='font-bold my-[20px]'>Chính sách Đổi/Trả</p>
                    <p>Sản phẩm được đổi 1 lần duy nhất, không hỗ trợ trả.</p>
                    <p>Sản phẩm còn đủ tem mác, chưa qua sử dụng.</p>
                    <p>Sản phẩm nguyên giá được đổi trong 30 ngày</p>
                    <p>Sản phẩm sale chỉ hỗ trợ đổi size</p>
                    <p></p>
                    </div>
                </div>
            </div>
        </div>
        
        <div>
            <p className='text-right my-3 mr-3 font-bold hover:text-green-500'>Tiếp Tục Mua Hàng</p>
        <div className='border px-4 py-4'>
            <p className='font-bold text-[20px] border-b-2 pb-3'>Thông tin đơn hàng</p>
            <div className='flex justify-between font-bold my-4 border-b-2 pb-3'>
                <p>Tổng tiền:</p>
                <p>1,260,000₫</p>
            </div>
            <a href='/showcart' className='bg-black px-[70px] py-2 text-white'>Thanh Toán</a>
        </div>
        </div>
    </div>

      
    </div >
     {/* san pham tuong tu */}
     <h2 className="font-bold text-[25px] my-10 mx-10">Sản Phẩm Đã Xem Trước Đó</h2>
    <div className='grid grid-cols-4 gap-2 mt-10 mx-10'>
      {/* ss1 */}
      <div className=" hover:shadow-xl text-center">
            <p className="bg-red-600 w-16 text-center font-medium text-white">
                20%
              </p>
              <div className="image-container">
                <img
                  src="https://product.hstatic.net/1000306633/product/z4478978386851_1a8f8bd47b46c8d7ad98029a4b57449c_ac857bb432744596bcfbc4a05e98d4ba.jpg"
                  alt="Ảnh gốc"
                  className="original-image w-[300px]"
                />
                <img
                  src="https://product.hstatic.net/1000306633/product/z4478978334889_d13690dd8dbcb441f10696881e08427d_c8832071bd8041d9b86a7e1e7d26efbd.jpg"
                  alt="Ảnh thay thế"
                  className="hover-image w-[300px]"
                />
              </div>
              <div className="text-center ">
                <p className="my-1 font-medium text-[15px]">
                  TEE 5 YEARS MISSOUT
                </p>
                <div className="flex justify-center space-x-2">
                  <p className="text-red-600 font-medium">279,000đ</p>
                  <p className="text-gray-500 line-through font-medium">
                    350,000đ
                  </p>
                </div>
              </div>
            </div>
            <div className=" hover:shadow-xl text-center">
            <p className="bg-red-600 w-16 text-center font-medium text-white">
                20%
              </p>
              <div className="image-container">
                <img
                  src="https://product.hstatic.net/1000306633/product/z4478978386851_1a8f8bd47b46c8d7ad98029a4b57449c_ac857bb432744596bcfbc4a05e98d4ba.jpg"
                  alt="Ảnh gốc"
                  className="original-image w-[300px]"
                />
                <img
                  src="https://product.hstatic.net/1000306633/product/z4478978334889_d13690dd8dbcb441f10696881e08427d_c8832071bd8041d9b86a7e1e7d26efbd.jpg"
                  alt="Ảnh thay thế"
                  className="hover-image w-[300px]"
                />
              </div>
              <div className="text-center ">
                <p className="my-1 font-medium text-[15px]">
                  TEE 5 YEARS MISSOUT
                </p>
                <div className="flex justify-center space-x-2">
                  <p className="text-red-600 font-medium">279,000đ</p>
                  <p className="text-gray-500 line-through font-medium">
                    350,000đ
                  </p>
                </div>
              </div>
            </div>
            <div className=" hover:shadow-xl text-center">
            <p className="bg-red-600 w-16 text-center font-medium text-white">
                20%
              </p>
              <div className="image-container">
                <img
                  src="https://product.hstatic.net/1000306633/product/z4478978386851_1a8f8bd47b46c8d7ad98029a4b57449c_ac857bb432744596bcfbc4a05e98d4ba.jpg"
                  alt="Ảnh gốc"
                  className="original-image w-[300px]"
                />
                <img
                  src="https://product.hstatic.net/1000306633/product/z4478978334889_d13690dd8dbcb441f10696881e08427d_c8832071bd8041d9b86a7e1e7d26efbd.jpg"
                  alt="Ảnh thay thế"
                  className="hover-image w-[300px]"
                />
              </div>
              <div className="text-center ">
                <p className="my-1 font-medium text-[15px]">
                  TEE 5 YEARS MISSOUT
                </p>
                <div className="flex justify-center space-x-2">
                  <p className="text-red-600 font-medium">279,000đ</p>
                  <p className="text-gray-500 line-through font-medium">
                    350,000đ
                  </p>
                </div>
              </div>
            </div>
            <div className=" hover:shadow-xl text-center">
            <p className="bg-red-600 w-16 text-center font-medium text-white">
                20%
              </p>
              <div className="image-container">
                <img
                  src="https://product.hstatic.net/1000306633/product/z4478978386851_1a8f8bd47b46c8d7ad98029a4b57449c_ac857bb432744596bcfbc4a05e98d4ba.jpg"
                  alt="Ảnh gốc"
                  className="original-image w-[300px]"
                />
                <img
                  src="https://product.hstatic.net/1000306633/product/z4478978334889_d13690dd8dbcb441f10696881e08427d_c8832071bd8041d9b86a7e1e7d26efbd.jpg"
                  alt="Ảnh thay thế"
                  className="hover-image w-[300px]"
                />
              </div>
              <div className="text-center ">
                <p className="my-1 font-medium text-[15px]">
                  TEE 5 YEARS MISSOUT
                </p>
                <div className="flex justify-center space-x-2">
                  <p className="text-red-600 font-medium">279,000đ</p>
                  <p className="text-gray-500 line-through font-medium">
                    350,000đ
                  </p>
                </div>
              </div>
            </div>
    </div>
    
    </div>
  )
}

export default cart