import React from "react";
import ProductSection from "../component/Sections/ProductSection";
import Info from "../component/Sections/Info";
import CategoryCards from "../component/Sections/CategoryCards";

const Main = () => {
  return (
    <main>
      <section>
        <ProductSection />
        <Info />
        <CategoryCards />
      </section>
    </main>
  );
};

export default Main;