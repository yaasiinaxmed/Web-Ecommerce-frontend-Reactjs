import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

// pages
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Search from './pages/Search';

// components
import Header from './components/Header';
import Footer from './components/Footer';

// Layout
const Layout = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
};

// Router
const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
      {path: '/', element: <Home/>},
      {path: '/products/:id', element: <Products/>},
      {path: '/product/:id', element: <ProductDetails/>},
      {path: '/search', element: <Search/>}
    ]
  }
])

const App = () => {
  console.log(process.env.REACT_APP_MY_ENVIRONMENT_VARIABLE)
  return <div>
    <RouterProvider router={router} />
  </div>;
};

export default App;
