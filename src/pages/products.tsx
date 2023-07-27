import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import header from "../components/client/header";
import footer from "../components/client/footer";
import "../styles/header.css";
const products = (props:any) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(props.products);
  }, [props]);
  
  return (
    <div className="my-10 mt-32 ">
      {header()}
      <div className="flex bg-white z-10 space-x-4 -mt-[43px] border-b border-t  border-b-green-500 pl-32 py-4 fixed w-full">
        <p className="font-medium">Trang chủ /</p>
        <p className="text-gray-600">Tất cả sản phẩm</p>
      </div>
      <div className="flex mx-32 ">
        <div className="w-[300px] px-20 mt-4 h-[360px] space-y-2 fixed border-r   border-r-green-500 py-[100px] -ml-[120px]">
        {/* ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%] */}
          <p className="border-b py-2 hover:border-b-green-500 font-medium text-gray-700">
            Sản Phẩm Nổi Bật
          </p>
          <p className="border-b py-2 hover:border-b-red-500 font-medium text-gray-700">
            Tất Cả Sản Phẩm
          </p>
          <p className="border-b py-2 hover:border-b-violet-500 font-medium text-gray-700">
            Quần
          </p>
          <p className="border-b py-2 hover:border-b-yellow-500 font-medium text-gray-700">
            Áo
          </p>
          <p className="border-b-2 py-2 hover:border-b-black font-medium text-gray-700">
            Phụ Kiện
          </p>
        </div>
        {/* san pham */}
        <div className=" ml-[350px] mt-10">
          <div className="flex justify-between my-5">
            <p className="font-bold text-[25px] text-gray-700">
              Sản Phẩm Nổi Bật
            </p>
            <select id="countries" className="border-b py-2 border-black">
              <option selected className="px-2 text-[15px]">
                mới nhất
              </option>
              <option value="US">giá: Tăng dần</option>
              <option value="US">gia: Giảm dần</option>
              <option value="US">Tên: A - Z</option>
              <option value="US">Tên: Z - A</option>
            </select>
          </div>
          <div className="grid grid-cols-3 gap-8 mt-10">
            {/* ss1 */}
            {data?.map(product => {
              return(
                <div key={product._id} className=" hover:shadow-xl ">
                <p className="bg-red-600 w-16 text-center font-medium text-white">
                    {product.sale}%
                  </p>
                  <div className="image-container">
                    <img
                      src={product.image}
                      alt="Ảnh gốc"
                      className="original-image w-[300px]"
                    />
                    <img
                      src={product.image1}
                      alt="Ảnh thay thế"
                      className="hover-image w-[300px]"
                    />
                  </div>
                  <div className="text-center ">
                    <a href={`/products/${product._id}`} className="my-1 font-medium text-[15px]">
                      {product.name}
                    </a>
                    <div className="flex justify-center space-x-2">
                      <p className="text-red-600 font-medium">{product.price}</p>
                      <p className="text-gray-500 line-through font-medium">
                        {product.cost}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
           
           
          </div>

          {/* sanpham */}

          <div className="flex space-x-10 justify-center mt-20">
            <p className="text-black font-bold hover:font-bold">1</p>
            <p className="text-gray-600 hover:font-bold hover:text-black">2</p>
            <p className="text-gray-600 hover:font-bold hover:text-black">3</p>
            <p className="">...</p>
            <p>
              <svg
                className=" text-gray-600 hover:font-bold hover:text-black flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default products;
