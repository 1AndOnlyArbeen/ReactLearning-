import React from "react";
import Hello from "./Hello";
import reactLogo from "./assets/react.svg"
import Bye from "./Bye";

const App = () => {
  return (
    <div>
      <h2 className=" bg-slate-500"> Hello </h2>
      <Hello />
      <img src = {reactLogo}/>
      <Bye/>
    </div>
  );
};

export default App;
