import { useState } from "react"

export default function Toggle (){
    const [isvisible, setIsVisible] =useState(false)


    return(
        <div>

            <button className="mt-4 mb-1 py-2 px-2 border rounded-xl cursor-pointer hover:bg-amber-500" onClick={()=>setIsVisible(!isvisible)}>
                {isvisible ? "Hide":"Show" } text </button>

        </div>
    )
}