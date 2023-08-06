import { reactShinyInput } from 'reactR';
import React, { useState, useEffect } from 'react'

import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const marks = [
  {
    value: 2014,
    label: '2014',
  },
  {
    value: 2015,
    label: '',
  },
  {
    value: 2016,
    label: '2016',
  },
  {
    value: 2017,
    label: '',
  },
  {
    value: 2018,
    label: '2018',
  },
  {
    value: 2019,
    label: '',
  },
  {
    value: 2020,
    label: '2020',
  },
  {
    value: 2021,
    label: '',
  },
  {
    value: 2022,
    label: '2022',
  },
];

const SliderInput = ({ configuration, value, setValue }) => {

  const [sliderValue, setSliderValue] = useState(2014)

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
          contrastText: configuration.secondaryColor,
        },
      },
  });



  const handleOnChange = (event, value) => {
    //debounced(event.target.value);
    setValue(value);
  };



  return(
    <ThemeProvider theme={theme}>
        <Stack sx={{ height: 300 }} spacing={1} direction="row">
          <Slider
            min={2014}
            max={2022}
            orientation='vertical'
            aria-label="Custom marks"
            defaultValue={sliderValue}
            step={1}
            valueLabelDisplay="auto"
            marks={marks}
            onChangeCommitted={handleOnChange}
            disabled={configuration.disabled}
          />
        </Stack>
    </ThemeProvider>

  )
};


export default function initSlider(){
  return reactShinyInput(
    '.slider',
    'shiny.muiinput.slider',
    SliderInput
  );
}
