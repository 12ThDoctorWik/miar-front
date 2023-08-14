import React from 'react';
import "./CreateGameButton.scss";
import { Button } from '@mui/material';
import { Link } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';

export default function CreateGameButton({text}) {

  return(
    <Button className={"add_button add_button_gold_rightCorner"} component={Link}  to="/game_creator">
      <AddIcon></AddIcon>
    </Button>
  )
}