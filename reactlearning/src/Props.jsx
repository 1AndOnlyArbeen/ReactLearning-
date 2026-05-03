import Props2 from "./Props2"
import Button from "./Button"
export default function  Props (){
    const hobbies = [ "Reading", "Cooking","Traveling " ]
    function Message(){
        alert ("Hello from Message box ")

    }
    

    return(
        <>
        <Props2 name = "Arbeen" age ={24} city =" Gorkha" hobbies={hobbies}/>
        <Props2 hobbies={[]}/>
        <Button label= " Click Me " handleClick={Message}/>

        
        </>
    )
}