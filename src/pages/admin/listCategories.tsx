import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
const listCategories = (props: any) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(props.categories);
  }, [props]);
  const removeCategori = (id: any) => {
    const isremove = window.confirm("bạn muốn xóa chứ ?");
    isremove && props.onRemove(id);
  };
  
  
  return (
    <div>
        {/* <!-- component --> */}

<div className="ml-auto mb-[100px] lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
    <div className="flex flex-col">
        <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden ml-24">
              <h1 className="font-bold text-center my-16 text-[30px]">Trang Quản Lý Danh Muc</h1>
              <div className="flex">
                <a href='/admin/products/add'><button className="group rounded-2xl h-10 w-20 bg-green-500 font-bold text-lg text-white relative overflow-hidden">
                  Add
                  <div className="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-2xl">
                  </div>
                </button>
              </a>
                <div  className="flex items-center justify-between border-2 p-2 rounded-xl w-[500px] ml-[50px]">
                    <input type="text" name="keyword" placeholder="search" className="ml-2 outline-none w-full" />
                    
                    <button >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </button>
               
                </div>
                
              </div>
              <table className="min-w-full">
                <thead className="bg-white border-b">
                  <tr>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      STT
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Name
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Product Type
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((categori, index)=>{
                    return(
                      <tr   className="bg-gray-100 border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index+1}</td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {categori.name}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      124
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap space-x-4">
                       <a href="/admin/products/update" > <button className="group rounded-2xl h-10 w-20 bg-yellow-500 font-bold text-lg text-white relative overflow-hidden">
                          Edit
                          <div className="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-2xl">
                          </div>
                        </button></a>
                        <button  
                         onClick={() => removeCategori(categori._id)}
                         className="group rounded-2xl h-10 w-20 bg-red-500 font-bold text-lg text-white relative overflow-hidden">
                          Delete
                          <div className="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-2xl">
                          </div>
                        </button>
                      </td>
                    </tr>
                    )
                  })}
                 
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default listCategories