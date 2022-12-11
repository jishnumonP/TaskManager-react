import React, { useState } from 'react'

const AddTask = ({onAddTask}) => {

    const [text, setText] = useState("");
    const [day, setDay] = useState("");
const onSubmit = (e)=>{
e.preventDefault();
if(!text){
  alert("please add a task")
}
onAddTask({text,day})
setDay('')
setText('')
}
  return (
    <form action="sumbit" onSubmit={onSubmit}>
        <label htmlFor="Task">

        </label>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
        <label htmlFor="Day">

        </label>
        <input type="text" value={day} onChange={(e)=>setDay(e.target.value)}  />
        <input type="submit" value='Submit Task'/>


    </form>
  )
}

export default AddTask