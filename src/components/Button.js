import React from 'react'
import "../App.scss";
import {Button} from "@mui/material";
const AddButton = ({onClick,text}) => {
    
  return (
    
    <Button variant="contained" className="button"  onClick={onClick}>
        {text}
    </Button>
 
  )
}

export default AddButton