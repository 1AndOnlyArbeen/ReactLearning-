import { useState } from "react"

export default function Counter (){
    const [count, setCount] = useState(0)

    function increaseCount(){
      setCount(count+1)
    }
    function decreaseCount(){
        if(count>1){
        setCount(count-1)}
    }

    return (
        <>

        <div  className=" px-4 py-4">

        <h1> Count {count}</h1>
        <button className="mt-4 mb-1 py-2 px-2 border rounded-xl cursor-pointer hover:bg-amber-500" onClick={increaseCount}> increase Count</button>   
        <br />     
        <button className="mt-2 py-1 px-2  border rounded-xl cursor-pointer hover:bg-pink-600" onClick={decreaseCount}> Decrease Count</button>        
        </div>

        
        
        </>

    )
}