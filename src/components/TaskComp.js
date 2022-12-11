import React from 'react'

import { BsXCircleFill } from "react-icons/bs";
import Box from '@mui/material/Box';
const TaskComp = ({task,onDelete,OnToogle}) => {
  return (
    <Box sx={{ display: 'grid',padding:'2px',gap:'1', borderColor: 'error.main' ,border: 1 }} onDoubleClick={()=>OnToogle(task.id)}  >  <h2 >
      {task.text} <BsXCircleFill onClick={()=>onDelete(task.id)} /> </h2>
      <p>
        {task.day}
      </p>
      </Box>
  )
}

export default TaskComp