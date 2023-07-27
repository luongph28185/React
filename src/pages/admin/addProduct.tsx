import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/form.css"
import { Iproduct } from "../../types/product";
const addProduct = (props: any) => {
  // console.log('cate',props.categories);
  const navigate = useNavigate()
  const [inputValue, setInputValue] = useState({})
  const onHandleChange = (e) => {
    setInputValue({ name: e.target.value });
    const name = e.target.name;
    const value = e.target.value;
    // console.log(name);
    setInputValue({...inputValue, [name]: value});
  }
  console.log(inputValue);
  const onHandleSubmit = (e) => {
    e.preventDefault();
    props.onAdd(inputValue)
    
    
  }
    return(
        <div>
          {/* <!-- component -->
<!-- Container --> */}
<div className="flex flex-wrap ml-[200px] min-h-screen w-full content-center justify-center bg-gray-200 py-4">
  
  {/* <!-- Login component --> */}
  <div className="flex ">
    {/* <!-- Login form --> */}
    <div className="flex flex-wrap content-center justify-center rounded-l-md bg-white  w-[37rem] h-[45rem]" >
      <div className="w-[380px]">
        {/* <!-- Heading -> */}
        <img className='w-[200px] my-5 ml-24' src="https://theme.hstatic.net/1000306633/1000891824/14/logo_menu_scroll.png?v=560" alt="" />
        <h1 className="text-xl font-semibold">Form Add</h1>
        <small className="text-gray-400"></small>

        {/* <!-- Form --> */}
        <form className="mt-4" onSubmit={onHandleSubmit}>
          <div className="mb-3">
            <label className="mb-2 block text-xs font-semibold">Name</label>
            <input name="name" onChange={onHandleChange} type="text" placeholder="Tên Sản Phẩm" className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500" />
          </div>
          <div className='flex space-x-2'>
          <div className="mb-3">
            <label className="mb-2 block text-xs font-semibold">Price</label>
            <input type="number" name="price" onChange={onHandleChange} placeholder="Giá cũ Sản Phẩm" className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500" />
          </div>
          <div className="mb-3">
            <label className="mb-2 block text-xs font-semibold">Price new</label>
            <input type="number" name="cost" onChange={onHandleChange} placeholder="Giá mới Sản Phẩm" className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500" />
          </div>
          </div>
          <div className="mb-3">
            <label className="mb-2 block text-xs font-semibold">image</label>
            <input type="text" name="image" onChange={onHandleChange} placeholder="Ảnh Sản Phẩm" className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500" />
          </div>
          <div className="mb-3">
            <label className="mb-2 block text-xs font-semibold">image1</label>
            <input type="text" name="image1" onChange={onHandleChange} placeholder="Ảnh Sản Phẩm" className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500" />
          </div>
          <div className="mb-3">
            <label className="mb-2 block text-xs font-semibold">image2</label>
            <input name="image2" onChange={onHandleChange} type="text" placeholder="Ảnh Sản Phẩm" className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500" />
          </div>
          <div className="mb-3">
            <label className="mb-2 block text-xs font-semibold">image3</label>
            <input type="text" name="image3" onChange={onHandleChange} placeholder="Ảnh Sản Phẩm" className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500" />
          </div>
          <div className="mb-3">
            <label className="mb-2 block text-xs font-semibold">Description</label>
            <input type="text" name="description" onChange={onHandleChange}npm placeholder="Mô tả Sản Phẩm" className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500" />
          </div>


          <div className="mb-3 mt-10">
            <button type="submit" className="mb-1.5 block w-full text-center text-white bg-purple-700 hover:bg-purple-900 px-2 py-1.5 rounded-md">Add</button>
           
          </div>
        </form>

        {/* <!-- Footer --> */}
        
      </div>
    </div>

    {/* <!-- Login banner --> */}
    <div className="flex flex-wrap content-center justify-center rounded-r-md w-[24rem] h-[32rem]" />
      <img className="w-[500px] h-[720px] -ml-[385px] bg-center bg-no-repeat bg-cover rounded-r-md" src="https://theme.hstatic.net/1000306633/1000891824/14/block_home_category2_new.png?v=560"/>
    </div>

  </div>

  {/* <!-- Credit --> */}
  
</div>

       
    )
  
}

export default addProduct