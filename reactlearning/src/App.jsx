import React from "react";
import Hello from "./Hello";
import reactLogo from "./assets/react.svg"
import Bye from "./Bye";
import Array from "./Array";
import Object from "./Object";
import ArrayOfObject from "./ArrayOfObject"
import Conditional from "./Conditional";
import Props from "./Props";
import Button from "./Button";

const App = () => {
  return (
    <div>
      <h2 className=" bg-slate-500"> Hello </h2>
      <Hello />
      <img src = {reactLogo}/>
      <Bye/>
      <Array/>
      <Object/>
      <ArrayOfObject/>
      <Conditional/>
      <Props/>
    </div>
  );
};

export default App;
