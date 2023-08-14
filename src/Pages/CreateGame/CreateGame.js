import React, { useState } from 'react';
import "./CreateGame.scss";

import Button from '@mui/material/Button';
import CustomButton from "../../Components/CustomButton/CustomButton";

import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import moment from "moment";
import 'moment/locale/uk';
import { Field, Form } from 'react-final-form';

import { Checkboxes, Select, TextField } from 'mui-rff';
import { addSession } from "../../Store";
import { useThunk } from "../../Hooks/useThunk";

const fields = []
const validate = (values) => {
  console.log('validate', values);
  const errors = {};
  const checks = [
    'name',
    'club',
    'city',
    'location',
    'masterName',
    'maxPlayer',
    'difficult',
    'maxLevel',
    'pricePerPlayer',
    'system'];
  checks.forEach((field) => {
    if (!values[field]) {
      errors[field] = 'Required';
      // console.warn('Required', field);
    }
  });

  return errors;
};

export default function CreateGame() {
  const [gameDatetime, setGameDatetime] = useState(moment());
  const [doAddSession, addSessionError] = useThunk(addSession);

  const onSubmit = async (values) => {
    if (values.visible === undefined) {
      values.visible = 0;
    }

    let tags = [];
    if (values.tags) {
      tags = values.tags.split(', ');
    }

    const newGame = {
      ...values,
      startTime: moment.utc(gameDatetime).toISOString(),
      locationType: 0,
      visible: +values.visible,
      tags,
      // image
    }

    console.log('newGameObject', newGame);
    doAddSession(newGame);
  };
  // const required = value => (value ? undefined : 'Required')

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
                    {/*"club": 0,*/}
                    {/*"city": 0,*/}
                    {/*"location": "string",*/}
                    {/*"masterName": "string",*/}
                    {/*"maxPlayer": 0,*/}
                    {/*"difficult": 0*/}
                    {/*"description": "string",*/}
                    {/*"startTime": "2023-08-13T20:33:47.330Z",*/}
                    {/*"minLevel": 0,*/}
                    {/*"maxLevel": 0,*/}
                    {/*"visible": 0,*/}
                    {/*"pricePerPlayer": 0,*/}
                    {/* ++++"system": "string",*/}
                    {/*"tags": [*/}
                    {/*"string"*/}
                    {/*],*/}

                    {/*"locationType": 0, ????*/}
                    {/*"image": "string",*/}
                    {/*"clubId": 0,*/}

                    <TextField id="name" name="name" label="Назва гри" variant="outlined"
                               sx={{ color: "white" }}/>
                    <TextField id="club" name="club" label="Клуб" variant="outlined" sx={{ color: "white" }}/>
                    <TextField id="city" name="city" label="Місто" variant="outlined" sx={{ color: "white" }}/>
                    <TextField id="masterName" name="masterName" label="Майстер" variant="outlined"
                               sx={{ color: "white" }}/>
                    <TextField id="location" name="location" label="Локація" variant="outlined"
                               sx={{ color: "white" }}/>
                    {/*<Checkboxes id="locationType" name="locationType" label="Онлайн = " variant="outlined" sx={{ color: "white" }}/>*/}
                    <TextField id="system" name="system" label="Ігрова система" variant="outlined"
                               sx={{ color: "white" }}/>
                    <TextField id="maxPlayer" name="maxPlayer" label="Кількість гравців" variant="outlined"
                               sx={{ color: "white" }}
                               type={"number"}
                               InputProps={{
                                 inputProps: {
                                   max: 6, min: 1
                                 }
                               }}/>
                    <TextField id="difficult" name="difficult" label="Складність пригоди" variant="outlined"
                               type={"number"}
                               InputProps={{
                                 inputProps: {
                                   max: 5, min: 1
                                 }
                               }}
                               sx={{ color: "white" }}/>
                    <TextField id="pricePerPlayer" name="pricePerPlayer" label="Ціна (грн)" variant="outlined"
                               sx={{ color: "white" }}
                               type="number"
                    />
                    <TextField id="minLevel" name="minLevel" label="Мін. рівень персонажів" variant="outlined"
                               sx={{ color: "white" }}
                               type="number"/>
                    <TextField id="maxLevel" name="maxLevel" label="Макс рівень персонажів" variant="outlined"
                               sx={{ color: "white" }}
                               type="number"/>
                    <Checkboxes id="visible" name="visible" label="Публічна гра" variant="outlined"
                                sx={{ color: "black" }}
                                data={{ label: 'Публічна гра', value: 1 }}/>

                    <Field name={"startTime"}>
                      {props => (
                          <LocalizationProvider dateAdapter={AdapterMoment} adapterLocale={'uk'}>
                            <MobileDateTimePicker
                                type="datetime"
                                ampm={false}
                                format="LLL"
                                value={gameDatetime}
                                onChange={(newValue) => setGameDatetime(newValue)}
                            ></MobileDateTimePicker>
                          </LocalizationProvider>
                      )}
                    </Field>

                    <Field id="description" name="description" component={'textarea'} placeholder="Опис">
                      {/*{({ input, meta }) => (*/}
                      {/*    // <textarea style={((meta.error || meta.submitError) && meta.touched) ? {borderColor:'red'}: {borderColor:'black'}}></textarea>*/}
                      {/*    <textarea></textarea>*/}
                      {/*)}*/}
                    </Field>
                    <TextField id="tags" name="tags" label="Теги (через кому з пробілом)" variant="outlined"
                               sx={{ color: "white" }}/>

                    <TextField name="image" label="Фон (URL)" variant="outlined"
                               sx={{ color: "white" }}/>
                    {/*<Field id="image" name="image" component={'textarea'} placeholder="Опис">*/}
                    {/*  { props => (<input type="file"/>*/}
                    {/*  )}*/}
                    {/*</Field>*/}

                    {/*<FilePicker></FilePicker>*/}

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