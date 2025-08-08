import React from "react";
import First from "@/components/app page/first section/first";
import Fourth from "@/components/app page/fourth section/fourth";
import Second from "@/components/app page/second section/second";
import Third from "@/components/app page/third section/third";
import Fifth from "@/components/app page/fifth section/fifth";
import Eighth from "@/components/product card/eighth section/eighth";

const App = () => {
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
      <Eighth />
    </div>
  );
};

export default App;
