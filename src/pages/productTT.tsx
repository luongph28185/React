import { useState, useEffect } from "react"


// interface ProductProps {
//     name: string;
//     price: number;
//     description: string,
//     cost: number,
//     sale: number,
//     image: string,
//     image1: string,
//     image2: string,
//     image3: string,
//   }
const ProductTT = (props:any) => {
    
    const [data, setData] = useState([]);
  useEffect(() => {
    setData(props.products);
  }, [props]);
  let maxdata = data?.slice(0, 5)
  return (
    <div>
         <div className="overflow-x-auto flex mx-[10px] ml-10">
        {maxdata?.map((product) => {
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
    </div>
  )
}

export default ProductTT