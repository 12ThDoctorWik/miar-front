import React, { useState } from 'react';
import "./CreateGame.scss";

import Button from '@mui/material/Button';
import CustomButton from "../../Components/CustomButton/CustomButton";

// import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
// import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import moment from "moment";
import 'moment/locale/uk';
import { Field, Form } from 'react-final-form';

import { Checkboxes, DateTimePicker, Select, TextField } from 'mui-rff';

const fields = [
    'name'
]
const validate = (values) => {
  console.log('validate', values);
  const errors = {};
  const checks = ['startTime'];
  checks.forEach((field) => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });

  return errors;
};

export default function CreateGame() {
  const [gameDatetime, setGameDatetime] = useState(moment());

  const onSubmit = async (values) => {
    console.log('onSubmit', values);
    if (values.done === undefined) {
      values.done = false;
    }

    console.log(values);
    // console.log(event.target[0]);

    const newGame = {
      startTime: moment.utc(gameDatetime).valueOf(),
      // name: event.target.form
    }

    console.log('newGameObject', newGame);
    // const addCallback = () => history.push('/calendar');
    // dispatch(addTodo(values, addCallback));
  };

  return (
      <Form
          onSubmit={onSubmit}
          validate={validate}
          initialValues={{}}
          render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit} noValidate>
                <div className="createGame">
                  <div className="createGame__container">

                    {/*"name": "string",*/}
                    {/*"clubId": 0,*/}
                    {/*"location": "string",*/}
                    {/*"masterName": "string",*/}
                    {/*"maxPlayer": 0,*/}
                    {/*"difficult": 0*/}

                    {/*"locationType": 0, ????*/}


                    {/*"description": "string",*/}
                    {/*"image": "string",*/}
                    {/*"startTime": "2023-08-13T20:33:47.330Z",*/}


                    {/*"minLevel": 0,*/}
                    {/*"maxLevel": 0,*/}
                    {/*"visible": 0,*/}

                    {/*"pricePerPlayer": 0,*/}


                    {/* --------"system": "string",*/}

                    {/*"tags": [*/}
                    {/*"string"*/}
                    {/*],*/}




                    <TextField id="name" name="name" label="Назва гри" variant="outlined"
                               sx={{ color: "white" }}/>
                    <TextField id="club" name="club" label="Клуб" variant="outlined" sx={{ color: "white" }} disabled/>
                    <TextField id="city" name="city" label="Місто" variant="outlined" sx={{ color: "white" }}/>
                    <TextField id="masterName" name="masterName" label="Майстер" variant="outlined" sx={{ color: "white" }}/>
                    <TextField id="location" name="location" label="Локація" variant="outlined" sx={{ color: "white" }}/>
                    <TextField id="system" name="system" label="Ігрова система" variant="outlined" sx={{ color: "white" }}/>
                    <TextField id="maxPlayer" name="maxPlayer" label="Кількість гравців" variant="outlined" sx={{ color: "white" }}
                               type={"number"}
                               InputProps={{
                                 inputProps: {
                                   max: 6, min: 1
                                 }
                               }}/>
                    <TextField id="difficult" name="difficult" label="Складність пригоди" variant="outlined" type={"number"}
                               InputProps={{
                                 inputProps: {
                                   max: 5, min: 1
                                 }
                               }}
                               sx={{ color: "white" }}/>
                    <TextField id="pricePerPlayer" name="pricePerPlayer" label="Ціна" variant="outlined" sx={{ color: "white" }}
                    type="number"
                    />
                    <TextField id="maxLevel" name="maxLevel" label="Рівні персонажів" variant="outlined" sx={{ color: "white" }}
                               type="number"/>


                    {/*<LocalizationProvider dateAdapter={AdapterMoment} adapterLocale={'uk'}>*/}
                    {/*  <MobileDateTimePicker*/}
                    {/*      id={"startTime"}*/}
                    {/*      name={"startTime"}*/}
                    {/*      type="datetime"*/}
                    {/*                        ampm={false}*/}
                    {/*                        format="LLL"*/}
                    {/*                        value={gameDatetime}*/}
                    {/*                        onChange={(newValue) => setGameDatetime(newValue)}*/}
                    {/*  />*/}
                    {/*</LocalizationProvider>*/}

                    <Field id="description" name="description" component="textarea" placeholder="Опис" />
                    <TextField id="tags" name="tags" label="Теги" variant="outlined" sx={{ color: "white" }}/>
                    {/*<div>*/}
                    {/*  <input type="file" id="image" name="image"/>*/}
                    {/*</div>*/}


                    <Button variant="contained" type="submit">Створити гру</Button>
                    <CustomButton type={"custom_button custom_button_back"} to={'/calendar'} showIcon={false}
                                  text={"Назад"}></CustomButton>


                  </div>
                </div>
              </form>
          )}
      />
  )
}