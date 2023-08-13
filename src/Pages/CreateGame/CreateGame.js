import React from 'react';
import "./CreateGame.scss";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';


export default function CreateGame() {

  return(
    <div className="createGame">
      <div className="createGame__container">
        <TextField id="outlined-basic" label="Назва гри" variant="outlined" sx={{color: "white"}} />
        <TextField id="outlined-basic" label="Клуб" variant="outlined" sx={{color: "white"}} />
        <TextField id="outlined-basic" label="Місто" variant="outlined" sx={{color: "white"}} />
        <TextField id="outlined-basic" label="Майстер" variant="outlined" sx={{color: "white"}} />
        <TextField id="outlined-basic" label="Локація" variant="outlined" sx={{color: "white"}} />
        <TextField id="outlined-basic" label="Ігрова система" variant="outlined" sx={{color: "white"}} />
        <TextField id="outlined-basic" label="Кількість гравців" variant="outlined" sx={{color: "white"}} />
        <TextField id="outlined-basic" label="Складність пригоди" variant="outlined" sx={{color: "white"}} />
        <TextField id="outlined-basic" label="Ціна" variant="outlined" sx={{color: "white"}} />
        <TextField id="outlined-basic" label="Рівні персонажів" variant="outlined" sx={{color: "white"}} />

        <input type="date"/>
        <input type="time"/>
        {/* <DatePicker label="Дата проведення" /> */}

        <textarea id="w3review" name="w3review" placeholder='Опис'></textarea>
        <TextField id="outlined-basic" label="Теги" variant="outlined" sx={{color: "white"}} />
        <div>
          <input type="file" id="image"/>
        </div>
        

        <Button variant="contained">Створити гру</Button>
        
      </div>
    </div>
  )
}