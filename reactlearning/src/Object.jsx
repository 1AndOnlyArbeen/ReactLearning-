export default function Object(){
    const details = {
        firstName :" Arbeen ",
        lastName:" Shrestha ",
        age: 23,
    }
    function fullName (details){
        return details.firstName + "" + details.lastName

    }
    return(
        <>

        <h2> Person details </h2>
        <p>firstName {details.firstName}</p>
        <p>lastName {details.lastName}</p>
        <p>age {details.age}</p>
        <p> fullName : {fullName(details)}</p>
        
        
        </>
    )
    
}