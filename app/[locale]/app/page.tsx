import React from "react";
import First from "@/app/components/app page/first section/first";
import Fourth from "@/app/components/app page/fourth section/fourth";
import Second from "@/app/components/app page/second section/second";
import Third from "@/app/components/app page/third section/third";
import Fifth from "@/app/components/app page/fifth section/fifth";
import Eighth from "@/app/components/product card/eighth section/eighth";

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
