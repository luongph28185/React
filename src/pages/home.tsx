import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { getAllProduct } from '../api/product';
import ReactPlayer from "react-player";
import "../styles/header.css";
import "../styles/home.css";
import header from "../components/client/header";
import footer from "../components/client/footer";
import slideShow from "../components/client/slideShow";

const HomePage = (props: any) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(props.products);
  }, [props]);
  let maxdata = data?.slice(0, 5)
  return (
    <div className="">
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide $carousel-transition-duration:       .2s; $carousel-control-transition:        opacity .2s ease;"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <a>
              <img
                src="https://theme.hstatic.net/1000306633/1000891824/14/slideshow_2.jpg?v=558"
                className="d-block w-100"
                alt="..."
              />
            </a>
          </div>
          {/* <div className="carousel-item">
        <a ><img src="https://theme.hstatic.net/1000306633/1000891824/14/slideshow_2.jpg?v=510" className="d-block w-100" alt="..."/></a>
      </div>
      <div className="carousel-item">
        <a ><img src="https://theme.hstatic.net/1000306633/1000891824/14/slideshow_3.jpg?v=510" className="d-block w-100" alt="..."/></a>
      </div> */}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 mt-2">
        <img
          src="https://theme.hstatic.net/1000306633/1000891824/14/block_home_category1_new.png?v=558"
          alt=""
        />
        <img
          src="https://theme.hstatic.net/1000306633/1000891824/14/block_home_category2_new.png?v=562"
          alt=""
        />
        <img
          src="https://theme.hstatic.net/1000306633/1000891824/14/block_home_category3_new.png?v=558"
          alt=""
        />
      </div>
      <hr className="my-10 border border-gray-400" />
      {/* cuon */}
      <p className="text-center font-medium my-10">
        SẢN PHẨM NỔI BẬT CỦA LEVENTS®
      </p>
      <div className="overflow-x-auto flex mx-[10px] ml-10">
        {maxdata?.map(product => {
          return(
            <div key={product._id} className=" hover:shadow-xl ">
          <p className="bg-red-600 w-16 text-center font-medium text-white">
            new
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
            <p className="my-1 font-medium text-[15px]">{product.name}</p>
            <div className="flex justify-center space-x-2">
              <p className="text-red-600 font-medium">{product.price}</p>
              <p className="text-gray-500 line-through font-medium">{product.cost}</p>
            </div>
          </div>
        </div>
          )
        })}
        
       
      </div>
      {/* hetcuon */}
      {/* video */}
      <hr className="my-10 border border-gray-400" />
      <div className="mx-4">
        <p className="text-center font-medium my-10">
          THỂ HIỆN CÁ TÍNH CÙNG LEVENTS® TRONG MÙA HÈ NÀY
        </p>
       <div className="flex">
       <div>
        <video className="absolute mt-[120px] ml-[100px]" controls width="562" height="515">
          <source
            src="https://levents.asia/wp-content/uploads/2023/05/Mia_framengang_18.5.mp4"
            type="video/mp4"
          />
        </video>
          <img width="830px" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="" />
        </div>
        <div>
        <div className="flex mb-3">
          <div className="w-[300px] h-[285px]"><img className="  h-[285px] ml-3" src="https://levents.asia/wp-content/uploads/2023/02/Hinh-anh-04_.png" alt="" /></div>
          <div className="pl-3 text-gray-600 ml-4">
            <p>Streetwear là gì? Gợi ý phối đồ theo phong cách Streetwear 2023</p>
            <p className="my-16">Posts / Xu hướng thời trang / Style Tips</p>
            <a href="" className="border-2 px-10 py-3 hover:border-black">xem thêm</a>
          </div>
        </div>
        <div className="flex">
          <img className="w-[275px] h-[275px] ml-3" src="https://levents.asia/wp-content/uploads/2023/02/Hinh-anh-07_.png" alt="" />
          <div className="pl-3 text-gray-600 ml-3">
            <span>Bộ sưu tập 3RD ANNIVERSARY “ONE WORLD ONE LOVE”<br /> Đánh dấu cột mốc 3 năm thành công của thương hiệu Levents</span>
            <p className="my-16">Posts / Xu hướng thời trang / Style Tips</p>
            <a href="" className="border-2 px-10 py-3 hover:border-black">xem thêm</a>
          </div>
        </div>
        </div>
        
       </div>
        
      </div>
      <hr className="my-10 border border-gray-400" />
      {/* mẫu */}
      <p className="text-center font-medium my-10">BỘ PHỐI CỦA LEVENTS</p>
      <div className="grid grid-cols-3 gap-8 mt-10">
        {/* ss1 */}
        <div className=" text-center">
          <div className="image-container">
            <img
              src="https://levents.asia/wp-content/uploads/2023/05/17.png"
              alt="Ảnh gốc"
              className="original-image w-[500px]"
            />
            <img
              src="https://levents.asia/wp-content/uploads/2023/05/18.png"
              alt="Ảnh thay thế"
              className="hover-image w-[500px]"
            />
          </div>
          <div className="">
            <p className="-mt-2 font-medium text-[15px] ">
              LEVENTS® AQUARIUM TEE
            </p>
          </div>
        </div>

        <div className=" text-center">
          <div className="image-container">
            <img
              src="https://levents.asia/wp-content/uploads/2023/05/43.png"
              alt="Ảnh gốc"
              className="original-image w-[500px]"
            />
            <img
              src="https://levents.asia/wp-content/uploads/2023/05/44.png"
              alt="Ảnh thay thế"
              className="hover-image w-[500px]"
            />
          </div>
          <div className="">
            <p className="-mt-2 font-medium text-[15px] ">
              LEVENTS® COMPANY & MATES BOXY TEE
            </p>
          </div>
        </div>

        <div className=" text-center">
          <div className="image-container">
            <img
              src="https://levents.asia/wp-content/uploads/2023/05/25.png"
              alt="Ảnh gốc"
              className="original-image w-[500px]"
            />
            <img
              src="https://levents.asia/wp-content/uploads/2023/05/26.png"
              alt="Ảnh thay thế"
              className="hover-image w-[500px]"
            />
          </div>
          <div className="">
            <p className="-mt-2 font-medium text-[15px] ">
              LEVENTS® SUMMER VIBE TEE
            </p>
          </div>
        </div>
      </div>
      {/* <div className="image-container">
                <img
                  src="https://levents.asia/wp-content/uploads/2023/05/18.png"
                  alt="Ảnh gốc"
                  className="original-image w-[500px]"
                />
                <img
                  src="https://levents.asia/wp-content/uploads/2023/05/17.png"
                  alt="Ảnh thay thế"
                  className="hover-image w-full"
                />
              </div> */}

      {/**block 3*/}
      <hr className="my-10 border border-gray-400" />
      <div className="grid grid-cols-2 gap-8 my-16">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.0977438628115!2d105.84749377988659!3d21.028774680651978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab953357c995%3A0x1babf6bb4f9a20e!2zSG_DoG4gS2nhur9tIExha2U!5e0!3m2!1sen!2s!4v1689491812651!5m2!1sen!2s"
            width="700"
            height="420"
            loading="lazy"
          ></iframe>
        </div>
        <div>
          <p className="font-medium">
            GỬI TIN NHẮN NGAY CHO LEVENTS <br />
            KHI BẠN CẦN HỖ TRỢ HOẶC CÓ THẮC MẮC NHÉ!
          </p>
          <input
            className="border-b-2 border-gray-400 w-full my-2 py-2 px-3 rounded-lg"
            type="text"
            placeholder="Họ và tên"
          />
          <div>
            <input
              className="border-b-2 border-gray-400 w-2/3 my-2 py-2 px-3 rounded-lg"
              type="email"
              placeholder="Email"
            />
            <input
              className="border-b-2 border-gray-400  my-2 ml-10 py-2 px-3 rounded-lg"
              type="number"
              placeholder="SDT"
            />
          </div>
          <textarea
            className="border border-gray-400 w-full h-[150px] mt-10 mb-3 py-2  px-3 rounded-lg"
            placeholder="Lời nhắn"
          />
          <button className="group border-2 relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
            <div className="absolute inset-0 w-3 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <span className="relative text-black group-hover:text-white">
              Hoàn tất
            </span>
          </button>
        </div>
      </div>
    </div>
    
  );
};

export default HomePage;
