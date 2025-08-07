import React from "react";
import First from "@/app/components/product card/first section/first";
import Second from "@/app/components/product card/second section/second";
import Third from "@/app/components/product card/third section/third";
import Fourth from "@/app/components/product card/fourth section/fourth";
import Fifth from "@/app/components/product card/fifth section/fifth";
import Sixth from "@/app/components/product card/sixth section/sixth";
import Seventh from "@/app/components/product card/seventh section/seventh";
import Eighth from "@/app/components/product card/eighth section/eighth";

const ProductCard = () => {
  return (
    <div>
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
      {/* seventh section */}
      <Seventh />
      {/* eighth section */}
      <Eighth />  
    </div>
  );
};

export default ProductCard;
