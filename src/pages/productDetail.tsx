import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllProduct, getProductId } from "../api/product";
import { Link } from "react-router-dom";
import header from '../components/client/header'
import footer from '../components/client/footer'
import ProductTT from "./productTT";
const productDetail = (props: any) => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProductId(id).then(({data}) => {
      setData(data);
    }); 
  },[]);

  useEffect(() => {
    getProductId(id).then(({data}) => {
      setProducts(props.products);
    }); 
  },[props.products]);
  return (
    <div>
        {header()}
        <div className="mx-4 my-[150px]">
    <div className="grid grid-cols-4 gap-8">
      <div className="col-span-1 mt-[120px]">
        <p className="font-bold text-[20px]">THÔNG TIN</p>
        <p className="my-3">{data.description}</p>
        <p>
          Vận chuyển từ 2-3 ngày <br />
          Thiết kế và sản xuất bởi HADES.
        </p>
        <div className="space-x-4 mt-10">
          <button className="hover:bg-black hover:text-white border-black border-2 px-5 py-2 rounded-lg">
            Buy
          </button>
         <a href='/cart' className="hover:bg-black text-gray-900 hover:text-white border-black border-2 px-3 py-2 rounded-lg">
            Add to cart
          </a>
        </div>
      </div>
      <div className="col-span-2 -mt-7 ml-10">
        <div className="overflow-scroll ... w-[600px] h-[700px]">
        <img className="w-[500px] mt-5" src={data.image} alt="" />
        <img className="w-[500px] mt-5" src={data.image1}  alt="" />
        <img className="w-[500px] mt-5" src={data.image2}  alt="" />
        <img className="w-[500px] mt-5" src={data.image3}  alt="" />
        </div>
        
      </div>
      <div className="mt-5">
        <p className="font-bold text-xl">{data.name}</p>
        <p className="text-slate-500 mt-2">SKU: T40223SM</p>
        <div className="flex space-x-3">
        <p className="font-medium my-6">{data.price}đ</p>
        <p className="text-gray-600 line-through  my-6">{data.cost}đ</p>
        </div>
        <p className="font-medium">Màu sắc</p>
        <div className="space-x-3">
          <button className="text-black bg-black px-[10px]">.</button>
          <button className="text-red-500 bg-red-500 px-[10px]">.</button>
          <button className="text-orange-900 bg-orange-900 px-[10px]">
            .
          </button>
        </div>
        <p className="mt-10 font-medium">Kích thước</p>
        <div className="flex">
          <p className="border-black hover:bg-black hover:text-white border-2 px-[28px] py-2">
            S
          </p>
          <p className="border-black hover:bg-black hover:text-white border-2 px-[28px] py-2">
            M
          </p>
          <p className="border-black hover:bg-black hover:text-white border-2 px-[27px] py-2">
            L
          </p>
          <p className="border-black hover:bg-black hover:text-white border-2 px-[25px] py-2">
            XL
          </p>
        </div>
        <div>
          <img
            className="w-[1100px]"
            src="https://file.hstatic.net/1000306633/file/basic_new_tee_8e958fc45123407e8f74b0891e3d5872.png"
            alt=""
          />
        </div>
      </div>
    </div>
    
  </div>
  {ProductTT(products)}
    </div>
  )
}

export default productDetail