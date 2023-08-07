import { reactShinyInput } from 'reactR';
import { useState } from "react";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const TogglBtnGroup = ({ configuration, value, setValue }) => {

  const theme = createTheme({
      status: {
        danger: configuration.mainColor,
      },
      palette: {
        primary: {
          main: configuration.mainColor,
          darker: configuration.mainColor,
        },
        neutral: {
          main: configuration.mainColor,
          contrastText: configuration.fontColor,
        },
      },
  });



  const handleChange = (event, newVal) => {
    setValue(newVal);
  };


  return(
    <ThemeProvider theme={theme}>
    <ToggleButtonGroup
      color="primary"
      value={value}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="Field A">Field A</ToggleButton>
      <ToggleButton value="Field B">Field B</ToggleButton>
      <ToggleButton value="Field C">Field C</ToggleButton>
      <ToggleButton value="Field D">Field D</ToggleButton>
      <ToggleButton value="Field E">Field E</ToggleButton>
      <ToggleButton value="Field F">Field F</ToggleButton>
      <ToggleButton value="Field G">Field G</ToggleButton>
      <ToggleButton value="Field H">Field H</ToggleButton>
      <ToggleButton value="Field I">Field I</ToggleButton>
      <ToggleButton value="Field J">Field J</ToggleButton>
      <ToggleButton value="Field K">Field K</ToggleButton>
      <ToggleButton value="Field L">Field L</ToggleButton>
      <ToggleButton value="Field M">Field M</ToggleButton>
      <ToggleButton value="Field N">Field N</ToggleButton>
      <ToggleButton value="Field O">Field O</ToggleButton>
      <ToggleButton value="Field P">Field P</ToggleButton>
      <ToggleButton value="Field Q">Field Q</ToggleButton>
      <ToggleButton value="Field R">Field R</ToggleButton>
      <ToggleButton value="Field S">Field S</ToggleButton>
      <ToggleButton value="Field T">Field T</ToggleButton>
    </ToggleButtonGroup>
    </ThemeProvider>
  )
};

export default function initTogglGroup(){
  return reactShinyInput(
    '.toggl_btn_group',
    'shiny.material.toggl_btn_group',
    TogglBtnGroup
  );
}
