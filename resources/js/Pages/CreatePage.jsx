import React from "react";
import NavBar from "../layout/NavBar";
import MainCreate from "../layout/MainCreate";
import Footer from "../layout/Footer";

export default function CreatePage({ categories }) {

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <MainCreate categories={categories} />
      <Footer />
    </div>
  );
}

{/*Pass categories as a prop, otherwise it will return undefined*/}