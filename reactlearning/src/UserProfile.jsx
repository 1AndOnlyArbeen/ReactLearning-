import { useState } from "react"

const UserProfile = () => {
    const [name, setName]=useState("Guest")
    const [age, setAge]=useState("18")
  return (
    <div>

        <p>Name : {name}</p>
        <p>Age : {age}</p>
        <button className="mt-4 mb-1 py-2 px-2 border rounded-xl cursor-pointer hover:bg-amber-500" onClick={()=>setName("Arbeen Shrestha")}> Change Name </button>
        <br />
        <button className="mt-4 mb-1 py-2 px-2 border rounded-xl cursor-pointer hover:bg-amber-500" onClick={()=>setAge(Math.floor(Math.random()*10+1))}> Chnage Name </button>
    </div>
  )
}

export default UserProfile