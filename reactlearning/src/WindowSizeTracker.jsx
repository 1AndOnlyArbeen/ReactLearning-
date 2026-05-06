import { useState, useEffect } from "react";

const WindowSizeTracker = () => {
    const [width, setWidth] = useState(window.innerWidth)

  useEffect(()=>{
    const handleResize = ()=>{
        setWidth(window.innerWidth)
    }
    window.addEventListener("resize",handleResize)
    return ()=> window.removeEventListener("resize",handleResize)

  },[width])


  return (
    <div>
      <h2>WindowSizeTracker</h2>
      <p> current Width <span className=" text-2xl text-red-600"> {width} </span>  px</p>
    </div>
  );
};

export default WindowSizeTracker;
