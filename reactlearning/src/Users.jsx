import { useState, useEffect } from "react"

const Users = () => {

    const [user, setUser]=useState([])


    useEffect(()=>{

      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setUser(json))

    },[])
  return (
    <div>
      <h2> user List </h2>
      <ul>
        {user.map((u)=>(
          <li key={u.id}>  <span className=" text-xl text-pink-700"> {u.id} </span> <span className=" text-amber-900"> - </span> <span className=" text-purple-800">  {u.name}</span> </li>

        ))}
      </ul>



    </div>
  )
}

export default Users