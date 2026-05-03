export default function props2({name = "guest", age=18, city="unknown", hobbies} ){   
    return(
        <>
        <h2 className="text-xl"> Hello ,{name}</h2>
        <p>Age : {age}</p>
        <p> city : {city}</p>
        <ul>
            {hobbies.map((hobby,index)=>(
                <li key={index}>{hobby}</li>
            ))}
        </ul>

        </>
    )
}