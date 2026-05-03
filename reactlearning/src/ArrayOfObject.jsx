import {Router, Route, BrowserRouter} from 'react-router-dom'
const ArrayOfObject = () => {

    const developers = [
        {firstName:"Arbeen ",lastName:"Shrestha", age: 23,
            role:"Intern"
        },
        {firstName:"Nabin ", lastName:"Koirala",age:30,role:"Server Support"},
        {firstName: "Gagan", lastName:"Gurung",age:30,role:"Senior Developer"},
    ]
    function fullName(developer){
        return developer.firstName + "" + developer.lastName

    }
  return (
    <>
    

    <h1> Developers Details</h1>

   <ul>
     {developers.map((developer,index)=>(
        <li> {fullName(developer)} is {developer.age} years old and his role is {developer.role} </li>

    ))}

   </ul>
   </>
  )
}

export default ArrayOfObject