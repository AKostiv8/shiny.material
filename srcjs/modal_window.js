import { reactWidget } from 'reactR';
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #ffffff',
  boxShadow: 24,
  p: 4,
};


function ModalWindow(props) {

  const [open, setOpen] = React.useState(props.windowCondition);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [enableAdd, setEnableAdd] = React.useState(true);

  const [description, setDescription] = React.useState("");
  const [title, setTitle] = React.useState("");

  const handleDescription = (event) => setDescription(event.target.value);
  const handleTitle = (event) => setTitle(event.target.value);


  useEffect(() => {
    if(description.length > 0 && title.length > 0) {
      setEnableAdd(false)
    } else {
      setEnableAdd(true)
    }

  }, [description, title]);


  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add note
          </Typography>
          <br />
          <TextField fullWidth
                      sx={[{'&:hover': {
                        "&& fieldset": {
                            border: `2px solid '#3d8361'`
                          },
                         "&& label": {
                            color: '#3d8361'
                         }
                        }
                    },
                    {"label": {
                        color: '#3d8361'
                      }
                    },
                    { color: '#3d8361', border: `1px solid '#3d8361'` },
                    {"&& fieldset": {
                        border: `1px solid '#3d8361'`,
                        color: '#3d8361'
                      }
                    },
                    {
                      fieldset: { borderColor: `#3d8361` }
                    },
                    {
                      "& .MuiOutlinedInput-root.Mui-focused": {
                        "& > fieldset": {
                          borderColor: `#3d8361`,
                          color: `#3d8361`
                        },
                        "label": {
                          color: `#3d8361`
                        }
                      }
                    }
              ]}
          onChange={handleTitle} label="Title" id="note_add_title" />
          <br/>
          <br/>
          <br/>
          <TextField
            id="outlined-multiline-static"
            fullWidth
            inputProps={{ style: { color: '#3d8361'} }}
            sx={[{'&:hover': {
                    "&& fieldset": {
                        border: `2px solid '#3d8361'`
                      },
                     "&& label": {
                        color: '#3d8361'
                     }
                    }
                },
                {"label": {
                    color: '#3d8361'
                  }
                },
                { color: '#3d8361', border: `1px solid '#3d8361'` },
                {"&& fieldset": {
                    border: `1px solid '#3d8361'`,
                    color: '#3d8361'
                  }
                },
                {
                  fieldset: { borderColor: `#3d8361` }
                },
                {
                  "& .MuiOutlinedInput-root.Mui-focused": {
                    "& > fieldset": {
                      borderColor: `#3d8361`,
                      color: `#3d8361`
                    },
                    "label": {
                      color: `#3d8361`
                    }
                  }
                }
          ]}


            label="Description"
            multiline
            rows={4}
            onChange={handleDescription}
        />
        <br/>
        <br/>
        <div style={{display:'flex', gap: '1rem'}}>
        <Button
        variant="contained"
        sx={{ background: '#3d8361', borderColor: '#3d8361' }}
        onClick={() => {

          // Send data to Shiny with the map_id defined in Shiny
          Shiny.setInputValue('added_note_info', {title: title, decription: description, obj: props.obj}, {priority: "event"});
          handleClose()

        }}
        disabled={enableAdd}>Add note</Button>
        <Button
        variant="outlined"
        sx={{ color: '#3d8361', borderColor: '#3d8361' }}
        onClick={() => {

          Shiny.setInputValue('cancel_modal', Math.random(), {priority: "event"});
          handleClose()

        }}
        >Cancel</Button>
        </div>
        </Box>
      </Modal>
    </div>
  );
}

export default ModalWindow;
