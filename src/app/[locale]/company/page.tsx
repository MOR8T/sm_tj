import Fifth from "@/components/company page/fifth section/fifth";
import First from "@/components/company page/first section/first";
import Fourth from "@/components/company page/fourth section/fourth";
import Second from "@/components/company page/second section/second";
import Seventh from "@/components/company page/seventh section/seventh";
import Third from "@/components/company page/third section/third";
import Eleventh from "@/components/first page/eleventh section/eleventh";
import React from "react";

const Company = () => {
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
      <Eleventh />
      {/* seventh section */}
      <Seventh />
    </section>
  );
};

export default Company;
