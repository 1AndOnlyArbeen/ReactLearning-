import { useState, useEffect } from "react";

const First = () => {
  const [count, setCount] = useState(0);
  const [name, setName]=useState("")

  useEffect(() => {
    console.log(" Hello This is rendering components ");
    document.title = `Count: ${count}`
  },[name,count]);

  function decreaseCount() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div>
      <h2 className=" my-4 mx-4 p-2 "> Count {count}</h2>
      <button
        className=" my-4 mx-4 p-2 rounded border"
        onClick={() => setCount(count + 1)}
      >
        {" "}
        Increase{" "}
      </button>
      <button className=" my-4 mx-4 p-2 rounded border" onClick={decreaseCount}>
        {" "}
        Decrease{" "}
      </button>
    </div>
  );
};

export default First;
