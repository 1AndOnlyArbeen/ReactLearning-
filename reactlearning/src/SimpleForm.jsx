import { useState } from "react"

export default function SimpleForm(){
    const [name,setName]= useState("")
    const [email, setEmail]= useState("")

    const handelSubmit = (e)=>{
        e.preventDefault()
        console.log("name:",name)
        console.log("Email:", email )

    }

    

    
    return(
        <form onSubmit={handelSubmit} action="">
            <h2> React Form </h2>
            <label htmlFor="name" > Name: </label>
            <input className="border rounded "
            type="text"
             value={name}
             onChange={(e)=>setName(e.target.value)} />
            <br />
            <label htmlFor="email">Email : </label>
            <input className=" border rounded "
             type="email"
             value={email}
             onChange={(e)=>setEmail(e.target.value)} />
            <br />
            <button className="bg-slate-500 flex border rounded" type="submit">Submit</button>
        </form>
    )
}