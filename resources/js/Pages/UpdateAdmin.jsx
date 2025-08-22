import React from "react";
import NavBar from "../layout/NavBar";
import MainUpdate from "../layout/MainUpdate";
import Footer from "../layout/Footer";

export default function UpdateAdmin() {

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <MainUpdate />
      <Footer />
    </div>
  );
}