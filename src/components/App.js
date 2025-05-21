
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [name,setName]=useState("")
  const [age,setAge]=useState("")
  const [fields,setFields]=useState([{name:"",age:""}])



  const handleform = (e)=>{
    e.preventDefault()
    console.log(fields)
    
  }

  const handlechange = (index,field,value)=>{
    const updatedFiled=[...fields];
    updatedFiled[index][field]=value
    setFields(updatedFiled)

  }

  const handleAddField = ()=>{
    setFields([...fields,{name:"",age:""}])
  }



  
    const handleremove = (index) => {
  const newFields = fields.filter((_, i) => i !== index);
  setFields(newFields);
};

  


  return (
    <div>
        {/* Do not remove the main div */}


        <form onSubmit={handleform}>
        {/* <input type="text" value={name}  name="name" onChange={(e)=>setName(e.target.value)}></input> */}
        {/* <input type="number" value={age}  name="age" onChange={(e)=>setAge(e.target.value)}></input> */}

          {
        fields.map((item,index)=>{
          return(
          <div key={index}>
            <input type="text" value={item.name} name="name" onChange={(e)=>handlechange(index,"name",e.target.value)}></input>
            <input type="number" value={item.age} name="age" onChange={(e)=>handlechange(index,"age",e.target.value)}></input>
            <button type="button" onClick={()=>handleremove(index)}>Remove</button>

            
          </div>
          )

        })

      }



        {/* <button onClick={handleremove}>Remove</button> */}


        <button onClick={handleAddField}>Add More</button>
        <button type="submit">Submit</button>
        </form>


    





    </div>
  )
}

export default App
