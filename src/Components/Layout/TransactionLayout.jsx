import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Navbar } from "../Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/authSlice";
import { useEffect } from "react";

const Layout = () => {
  return (
    <div className="flex h-full">
      <Navbar />

      <div className="flex flex-col w-full">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
