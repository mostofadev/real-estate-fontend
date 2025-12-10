import React from "react";
import TopNavbar from "./TopNavbar";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <TopNavbar />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
