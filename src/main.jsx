import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './components/MainLayout/MainLayout';
import Home from './components/Home/Home';
import AddProduct from './components/AddProduct/AddProduct';
import MyCart from './components/MyCart/MyCart';
import Login from './components/Login/Login';
import Products from './components/Products/Products';
import Update from './components/Update/Update';
import AuthProvider from './components/AuthProvider/AuthProvider';
import Register from './components/Register/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/addProduct",
        element: <AddProduct></AddProduct>
      },
      {
        path: "/products/:name",
        element: <Products></Products>,
        loader: ({params}) => fetch(`http://localhost:5000/products/${params.name}`)
        

      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        // loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
      
      },
      {
        path: "/myCart",
        element: <MyCart></MyCart>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
        <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
