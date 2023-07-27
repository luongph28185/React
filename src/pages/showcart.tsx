import React from "react";
import header from "../components/client/header";
import footer from "../components/client/footer";

const showcart = () => {
  return (
   <div>
    {header()}
     <div className="grid grid-cols-2 gap-8">
      {/* box-l */}
      <div className="mt-[100px] px-20 py-16">
        <p className=" text-[35px]">HADES STUDIO</p>
        <div className="flex space-x-2 my-3">
          <a href="#" className="text-blue-500">Giỏ hàng /</a>
          <p></p>
          <p>Thông tin giao hàng</p>
        </div>
        <p className="mb-2 text-[20px]">Thông tin giao hàng</p>
        <div>
          <input
            className="border-2 border-gray-400 w-full py-2 px-2 rounded-lg my-2"
            type="text"
            placeholder="ho va ten"
          />
          <div className="flex space-x-2">
            <input
              className="border-2 border-gray-400 w-[370px] py-2 px-2 rounded-lg"
              type="email"
              placeholder="Email"
            />
            <input
              className="border-2 border-gray-400 w-[210px] py-2 px-2 rounded-lg"
              type="number"
              placeholder="SDT"
            />
          </div>
          <input
            className="border-2 border-gray-400 w-full py-2 px-2 rounded-lg my-2"
            type="text"
            placeholder="Dia chi"
          />
          <div className="flex space-x-2">
            <select
              id="countries"
              className="border-2 border-gray-400 w-[200px] py-2 px-2 rounded-lg"
            >
              <option selected className="px-2 text-[15px]">
                 Tỉnh/ Thành 
              </option>
              <option value="US">Ha Noi</option>
              <option value="US">Da Nang</option>
              <option value="US">Ninh Binh</option>
              <option value="US">Nam Dinh</option>
            </select>
            <select
              id="countries"
              className="border-2 border-gray-400 w-[200px] py-2 px-2 rounded-lg"
            >
              <option selected className="px-2 text-[15px]">
                Quận/ Huyện
              </option>
              <option value="US">Ha Noi</option>
            </select>
            <select
              id="countries"
              className="border-2 border-gray-400 w-[200px] py-2 px-2 rounded-lg"
            >
              <option selected className="px-2 text-[15px]">
                Phường/ Xã
              </option>
              <option value="US">Nam Dinh</option>
            </select>
          </div>
          <p className="my-4 text-[20px]">Phương Thức Thanh Toán</p>
          <div >
            <div className=" items-center  border-2 border-gray-400 w-full py-4 px-2 rounded-lg">
              <div className="flex space-x-3 items-center mb-4 border-b-2 border-gray-500 pb-4">
                <input
                  id="country-option-1"
                  type="radio"
                  name="countries"
                  value="USA"
                  className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                  aria-labelledby="country-option-1"
                  aria-describedby="country-option-1"
                />
                <img
                  src="https://hstatic.net/0/0/global/design/seller/image/payment/cod.svg?v=4"
                  alt=""
                />
                <label className="text-sm font-medium text-gray-900 ml-2 block">
                  Thanh toán khi giao hàng (COD)
                </label>
              </div>
              <div className="flex space-x-3 items-center">
                <input
                  id="country-option-2"
                  type="radio"
                  name="countries"
                  value="Germany"
                  className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                  aria-labelledby="country-option-2"
                  aria-describedby="country-option-2"
                />
                <img
                  src="https://hstatic.net/0/0/global/design/seller/image/payment/other.svg?v=4"
                  alt=""
                />
                <label className="text-sm font-medium text-gray-900 ml-2 block">
                  Chuyển khoản qua ngân hàng
                </label>
              </div>
              <div className="ml-[140px]">
              <img
                src="https://scontent.fhan14-1.fna.fbcdn.net/v/t1.15752-9/361167732_828293411987225_3899399927511277312_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_ohc=4wA4XBaaV6QAX8awP8Z&_nc_ht=scontent.fhan14-1.fna&oh=03_AdQ8PiZcLfvqONESFclZWiqRuT4MlUxURL6ffhq6P0GrBQ&oe=64D9B74E"
                alt=""
              />
              </div>
            </div>
            
          </div>
        </div>
      </div>
      {/* box-r */}
      <div className="border-l-2 border-gray-300 mt-[100px] px-20 py-16">
        <div className="flex items-center">
        <img src="https://product.hstatic.net/1000306633/product/hades_16.06.23.7371_283ffb3a33ad47b19dfa88b596191fc1_small.jpg" alt="" />
        <div className="ml-4">
        <p className="text-[20px]">RAYBACK BOXY TEE</p>
        <p className="text-gray-500">ĐEN / M</p>
        </div>
        <p className="ml-[200px]">420,000₫</p>
        </div>
        <hr className="text-gray-500 my-5"/>
        <div className="my-4">
        <input
              className="border-2 border-gray-400 w-[420px] py-2 px-2 rounded-lg"
              type="email"
              placeholder="Vocher"
            />
        <button className="bg-green-500 px-5 py-2 rounded-lg mx-2">Sử dụng</button>
        </div>
        <hr className="my-5"/>
        <div>
            <div className="flex justify-between my-2">
            <p>Tạm tính</p>
            <p>1,310,000₫</p>
            </div>
            <div className="flex justify-between my-4">
            <p>Phí vận chuyển</p>
            <p>Miễn phí</p>
            </div>
        </div>
        <hr />
        <div className="flex justify-between my-4">
            <p>Tổng</p>
            <p className="font-bold">1,310,000₫</p>
            </div>
        <hr className="my-5" />
        <div className="float-right my-10">
            <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
    <div className="absolute inset-0 w-3 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
    <span className="relative text-black group-hover:text-white">hoàn tất</span>
  </button>
            </div>
      </div>
    </div>
   
   </div>
  );
};

export default showcart;
