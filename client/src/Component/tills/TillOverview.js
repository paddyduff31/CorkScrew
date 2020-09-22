import React, { Fragment, useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
      formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
    },
  }));
const classes = useStyles();

export const Form = () => {  
 return (        
    <Fragment>
      <div className='tills-header'>
        <h1 className='large text-primary'>Tills</h1>

        <form className={classes.container} noValidate>
          <TextField
            id='date'
            label='Todays Date'
            type='date'
            defaultValue={Date.now}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>
      </div>
      </Fragment>
  );
};

export default Form;