import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Navbar } from "../Navbar";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/authSlice";
import { useEffect } from "react";

const Layout = () => {
  const user = useSelector(selectUser);

  useEffect(() => {
    if (!user) {
      <Navigate to="/login" replace />;
    }
  }, [user]);

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
