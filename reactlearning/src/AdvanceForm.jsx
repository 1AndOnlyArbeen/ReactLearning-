import { useState } from "react"

const AdvanceForm = () => {

    const [fromData,setFormData] = useState({
        gender:"",
        country:"Nepal",
        agree:false

    })

    const handelSubmit = (e)=>{
        e.preventDefault()
        console.log(fromData)

        setFormData({
              gender:"",
        country:"Nepal",
        agree:false

        })
    }

    const handleChange=(e)=>{
        const {name,type,checked,value}=e.target;
    
        setFormData((prev)=>({
            ...prev,
            [name]: type === "checkbox"?checked :value


        }))

    }

    

  return (
    <div>
<form onSubmit={handelSubmit}  action="">
        <h2> Form With CheckBox and radio and Select </h2>

        <label htmlFor="">
            <input type="radio" name="gender" value="male" checked={fromData.gender ==="male"} onChange={handleChange}/> Male 
        </label>

         <label htmlFor="">
            <input type="radio" name="gender" value="Female" checked={fromData.gender ==="Female"} onChange={handleChange} /> Female 
        </label>

        <label htmlFor="country">
            Country:
            <select name="country" onChange={handleChange} value={fromData.country}>
                <option value="Nepal"> Nepal </option>
                <option value="Australia"> Australia </option>
                <option value="China"> China </option>
                <option value="SwitzerLand"> SwitzerLand </option>
                <option value="Austria"> Austria </option>
                <option value="Germany"> Germany </option>

            </select>


        </label>
        <br />


        <label htmlFor="">

            <input onChange={handleChange} checked={fromData.agree} type="checkbox" name="agree" />
            I agree to term and condition
        </label>
        <br />

        <button type="submit"> Submit</button>

</form>
    
    </div>
  )
}

export default AdvanceForm