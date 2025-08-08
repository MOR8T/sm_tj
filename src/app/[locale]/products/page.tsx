import Fifth from "@/components/product page/fifth section/fifth";
import First from "@/components/product page/first section/first";
import Fourth from "@/components/product page/fourth section/fourth";
import Second from "@/components/product page/second section/second";
import Sixth from "@/components/product page/sixth section/sixth";
import Third from "@/components/product page/third section/third";
import React from "react";

const Product = () => {
  return (
    <section>
      {/* first section */}
      <First />
      {/* second section */}
      <Second />
      {/* third section */}
      <Third />
      {/* fourth section */}
      <Fourth />
      {/* fifth section */}
      <Fifth />
      {/* sixth section */}
      <Sixth />
    </section>
  );
};

export default Product;
