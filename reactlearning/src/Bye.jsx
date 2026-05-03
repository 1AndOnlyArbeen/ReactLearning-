import "./App.css"
export default function  Bye (){

    function getName(name){
        return name
    }
    function handler (){
        alert('Button was clicked ')

    }
    function handelInput(event){
        console.clear()
        console.log("value:", event.target.value)
    }
    const name = "Arbeen "
    const age = "23"
    return(
        <div>
           <h1 className=" test flex gap-1">  My name is <p className=" text-amber-500">{getName(name)}</p> </h1>
           <h1 className=" test flex gap-1">  My age is <p className=" text-amber-500">{getName(age)}</p> </h1>
           <button onClick={handler}> click me </button>
           <br />
           <button onClick={()=> alert("Hello this is inline function  ")}> Say Hello </button>
           <br />
           <input type="text" onChange={handelInput} placeholder=" Type Message .... "/>

        </div>
    )  
}