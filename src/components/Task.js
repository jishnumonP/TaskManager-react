import React, { useState } from 'react'
import TaskComp from './TaskComp'

export const Task = ({tasks,onDelete,onToogle}) => {


  return (
   <>
   {
    tasks.map((task)=>(
<TaskComp  key={task.id} task={task} onDelete={onDelete} onToogle={onToogle}/>
    ))
   }
   </>
  )
}
