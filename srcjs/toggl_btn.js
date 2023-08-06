import { reactShinyInput } from 'reactR';
import { useState } from "react";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const TogglBtn = ({ configuration, value, setValue }) => {

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



  const [checked, setChecked] = useState(value);

  const switchHandler = (event) => {
    setChecked(event.target.checked);
    setValue(!value)
  };

  return(
    <ThemeProvider theme={theme}>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                // sx={{'.MuiSwitch-track': {'background': '#ffffff80'}}}
                checked={checked} onChange={switchHandler}
              />
            }
            sx={{color:configuration.fontColor}}
            label={configuration.label}
            labelPlacement={configuration.labelPlacement}
          />
        </FormGroup>
    </ThemeProvider>
  )
};

export default function initToggl(){
  return reactShinyInput(
    '.toggl_btn',
    'shiny.material.toggl_btn',
    TogglBtn
  );
}
