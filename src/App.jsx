import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Container from "./components/layout/Container";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { useDispatch } from "react-redux";
import { baseApi } from "./app/api/baseApi";
import { logout, markAuthChecked, setCredentials } from "./app/authSlice";
import AppRoutes from "./AppRoutes";

const App = () => {

  return (
    <div className="min-h-screen bg-rose-50 py-8">
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        theme="light"
      />
      <Container>
        <Navbar />
        <AppRoutes />
        <Footer />
      </Container>
    </div>
  );
};

export default App;
