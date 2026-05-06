import { useState } from "react"


export default function LikeButton(){

    const [liked, setLiked] = useState(true)
  

    return(
        <div>

            <button className="mt-4 mb-1 py-2 px-2 border rounded-xl cursor-pointer hover:bg-amber-500" onClick={()=>setLiked(!liked)}>

            {liked? "Liked":"like"}

            </button>

        </div>
    )


}