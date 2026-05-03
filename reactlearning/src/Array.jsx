export default function Array(){
    const developers = [ "Nabin", "Sabin", "Arbin ", " Prabin "]
    function numbercount(index ){
        return index+1
    }
    return(
        <>
        <h1> Fruit List </h1>

       <ul>
        {
            developers.map((developer,index)=>(
                <li key={index}>{numbercount(index)} - {developer}</li>
            ))
        }
       </ul>
        
        
        </>
    )

}