import { useState } from "react"

const Student = () => {
    const [student,setStudent]= useState({
        name:"Arbeen Shrestha",
        grade:"A",
        city:"Kathmandu",

    })
    const changeCity =()=>{
        setStudent({...student, city:" Gorkha", grade:"i dont know"})
    }

  return (
    <div>

        <h2> Name: {student.name}</h2>
        <h2>  City: {student.city}</h2>
        <h2>  grade: {student.grade}</h2>
        <button className="mt-4 mb-1 py-2 px-2 border rounded-xl cursor-pointer hover:bg-amber-500" onClick={changeCity}> Change Student Details </button>


    </div>
  )
}

export default Student