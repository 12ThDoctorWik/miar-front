import {React, useState} from 'react'
import "./Filters.scss";

import { Accordion, AccordionSummary, AccordionDetails, Checkbox, FormControlLabel } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';

import CustomizedCheckbox from "../../Components/Filters/Checkbox.js";

export default function Filters() {

  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event) => {
    setIsChecked(event.target.checked);
  };

  function clickDay(event) {
    event.target.classList.toggle('accordion__day_active')
  }

  return (
    <div className="filters">
      <Accordion
        sx={{
          backgroundColor: "transparent",
          borderTop: "1px solid rgba(255, 255, 255, 0.12)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <span className="accordion__title">Тип партії</span>
        </AccordionSummary>

        <AccordionDetails>
          <FormControlLabel
            control={
              <CustomizedCheckbox/>
            }
            label="Публічна"
            sx={{
              color: '#FFFFFF99',
              fontFamily: 'Inter'
            }}
          />
          <FormControlLabel
            control={
              <CustomizedCheckbox/>
            }
            label="Приватна"
            sx={{
              color: '#FFFFFF99',
              fontFamily: 'Inter',
            }}
          />
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          backgroundColor: "transparent",
          borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
          // height: '20px'
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <span className="accordion__title">Формат проведення</span>
        </AccordionSummary>

        <AccordionDetails>
          <FormControlLabel
            control={
              <CustomizedCheckbox/>
            }
            label="Офлайн"
            sx={{
              color: '#FFFFFF99',
              fontFamily: 'Inter'
            }}
          />
          <FormControlLabel
            control={
              <CustomizedCheckbox/>
            }
            label="Онлайн"
            sx={{
              color: '#FFFFFF99',
              fontFamily: 'Inter',
            }}
          />
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          backgroundColor: "transparent",
          borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
          // height: '20px'
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <span className="accordion__title">День проведення</span>
        </AccordionSummary>

        <AccordionDetails>
          <div className="accordion__btnGroup">
            <div className="accordion__day" onClick={clickDay}>Понеділок</div>
            <div className="accordion__day" onClick={clickDay}>П'ятниця</div>
            <div className="accordion__day" onClick={clickDay}>Вівторок</div>
            <div className="accordion__day" onClick={clickDay}>Субота</div>
            <div className="accordion__day" onClick={clickDay}>Середа</div>
            <div className="accordion__day" onClick={clickDay}>Неділя</div>
            <div className="accordion__day" onClick={clickDay}>Четвер</div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}