import React from 'react';
import "./CustomButton.scss";
import { Button } from '@mui/material';
import { Link } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';

export default function CustomButton({type, to, text=null, showIcon = true}) {

  return(
    <Button className={"custom_button custom_button"+type} component={Link}  to={to}>
      {showIcon && <AddIcon></AddIcon>}
      {text}
    </Button>
  )
}