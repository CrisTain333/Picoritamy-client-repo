import React from "react";
import Header from "../Shared/Navbar/Header";
import Footer from "../Shared/Footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header></Header>
      <div className='main'>
      <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Layout;
