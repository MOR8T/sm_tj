import React from "react";
import Sixth from "../components/first page/sixth section/fourth";
import Fourth from "../components/first page/fourth section/sixth";
import Eighth from "../components/first page/eighth section/eighth";
import Nineth from "../components/first page/nineth section/nineth";
import Eleventh from "../components/first page/eleventh section/eleventh";
import Tenth from "../components/first page/tenth section/tenth";
import RealEleventh from "../components/first page/eleventh sectoin2/realEleventh";
import First from "./../components/first page/first section/first";
import Second from "../components/first page/second section/second";
import Third from "../components/first page/third section/third";
import Fifth from "../components/first page/fifth section/fifth";
import Seventh from "../components/first page/seventh section/seventh";
import Twelvth from "../components/product card/eighth section/eighth";
import Thirteenth from "../components/company page/seventh section/seventh";

const Home = () => {
  return (
    <section>
      {/* first section */}
      <First />
      {/* second page */}
      <Second />
      {/* third page */}
      <Third />
      {/* fourth page */}
      <Fourth />
      {/* fifth section */}
      <Fifth />
      {/* sixth section */}
      <Sixth />
      {/* seventh section */}
      <Seventh />
      <hr className="border-1 border-[#ECEDEE]" />
      {/* eighth section */}
      <Eighth />
      {/* nineth section */}
      <Nineth />
      {/* tenth section */}
      <Tenth />
      {/* eleventh section */}
      <RealEleventh />
      {/* tvelveth section */}
      <Eleventh />
      {/* ////////////// */}
      <Thirteenth />
      {/* ///////////// */}
      <Twelvth />
    </section>
  );
};

export default Home;
