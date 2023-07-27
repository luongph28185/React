import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./pages/home"
import AddFilmPage from './pages/addFilm'
import Login from './pages/login'
import Register from './pages/register'
import Products from './pages/products'
import ProductDetail from './pages/productDetail'
import Cart from './pages/cart'
import Showcart from './pages/showcart'
import Recruitment from './pages/recruitment'
import './App.css'
import header from './components/client/header'
import footer from './components/client/footer'
import AdminLayout from './components/admin/AdminLayout'
import Dashboard from './pages/admin/dashboard'
import ListProduct from './pages/admin/listProduct'
import ListCategories from './pages/admin/listCategories'
import AddProduct from './pages/admin/addProduct'
import UpdateProduct from './pages/admin/updateProduct'
import AddCategori from './pages/admin/addCategori'
import UpdateCategori from './pages/admin/updateCategori'
import ProductTT from './pages/productTT'
import { deleteProduct,getAllProduct, addProduct, updateProduct, signin, signup} from './api/product';
import { getAllCategori, addCategori, updateCategori, deleteCategori } from './api/categori';
import React,{useEffect, useState} from "react";
import { Iproduct } from './types/product';

function UserLayout() {
  return <div>
    {header()}
    <Outlet />
    {footer()}
  </div>
}

const App = () => {
  // const navigate = useNavigate()
  // product
  const [products, setProduct] = useState([])
  useEffect(()=>{
    getAllProduct().then(({data})=>setProduct(data.docs))
  },[])
  const onHandleRemove = (id: any) => {
    deleteProduct(id).then(()=>setProduct(products.filter(product => product._id !== id)))
  }
  //categori
  const [categories, setCategori] = useState([])
  useEffect(()=>{
    getAllCategori().then(({data})=>setCategori(data))
  },[])
  //removecategori
  const onRemoveCategori = (id: any) => {
    deleteCategori(id).then(()=>setCategori(categories.filter(categori => categori._id !== id)))
  }
  //addProduct
  const onHandleAdd = (product: Iproduct) => {
    addProduct(product).then(()=>setProduct([...products, product]))
    window.confirm("thêm sản phẩm thành công !!");
    // navigate('/admin/products')
    location.reload()
  }
  const router = createBrowserRouter([
    {
      path: "/", element: <UserLayout />, children: [
        { path: "/", element: <HomePage products={products}/> },
        { path: "/add", element: <AddFilmPage /> },
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> },
        { path: "/products", element: <Products products={products}/> },
        { path: "/products/:id", element: <ProductDetail products={products}/>},
        { path: "/productTT", element: <ProductTT products={products}/> },
        { path: "/cart", element: <Cart/>},
        { path: "/showcart", element: <Showcart/>},
        { path: "/recruiment", element: <Recruitment/>}
      ]
    },
    {
      path: "/admin", element: <AdminLayout />, children: [
        { path: "/admin", element: <Dashboard /> },
        { path: "/admin/products", element: <ListProduct products={products} onRemove={onHandleRemove}/> },
        { path: "/admin/categories", element: <ListCategories categories={categories} onRemove={onRemoveCategori}/> },
        { path: "/admin/products/add", element: <AddProduct onAdd={onHandleAdd}/> },
        { path: "/admin/products/update", element: <UpdateProduct /> },
        { path: "/admin/categories/add", element: <AddCategori/> },
        { path: "/admin/categories/update", element: <UpdateCategori /> },
      ] 
    },
  ])
  return <RouterProvider router={router} />
}

export default App