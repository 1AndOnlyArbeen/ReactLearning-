import { useState,useEffect } from "react"

const Timer = () => {

    const [second,setSecond]=useState(0)
    const [startTimer, setStartTimer]= useState(false)

    useEffect(()=>{
        if(!startTimer)return
    const interval = setInterval(()=>{
        setSecond((prev)=>
            prev+1
        )
    },1000)
    return()=> clearInterval(interval)

    },[startTimer])
    function handelStart(){
        setStartTimer((prev)=>!prev)

    }

    function reset(){
        setStartTimer(false)
        setSecond(0)
    }


  return (
    <div>

        <h2> Seconds :{second} </h2>
        <button className=" rounded border border-amber-500 px-2 py-1" onClick={handelStart}> {startTimer?" stop":"Start"}</button>
        <button onClick={reset}> Reset</button>
    </div>
  )
}

export default Timer