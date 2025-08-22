import React from "react";
import NavBar from "../layout/NavBar";
import MainAdmin from "../layout/MainAdmin";
import Footer from "../layout/Footer";

export default function Admin() {

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <MainAdmin />
      <Footer />
    </div>
  );
}