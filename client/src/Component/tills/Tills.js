import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { createTill, getCurrentTill } from '../../actions/tills';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


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

export const Tills = ({
  till: { till, loading },
  createTill,
  history,
  getCurrentTill,
}) => {
  const [formData, setFormData] = useState({
    date: '',
    tillNumber: '',
    cash: '',
    card: '',
    payouts: '',
    food: '',
    drink: '',
    turnover: '',
    variance: '',
  });




  const [selectedDate, setSelectedDate] = React.useState(
    new Date('2014-08-18T21:11:54')
  );


  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    getCurrentTill();

    setFormData({
      date: loading || !till.date ? '' : till.date,
      tillNumber: loading || !till.tillNumber ? '' : till.tillNumber,
      cash: loading || !till.cash ? '' : till.cash,
      card: loading || !till.card ? '' : till.card,
      payouts: loading || !till.payouts ? '' : till.payouts,
      food: loading || !till.food ? '' : till.food,
      drink: loading || !till.drink ? '' : till.drink,
      turnover: loading || !till.turnover ? '' : till.turnover,
      variance: loading || !till.variance ? '' : till.variance,
    });
  }, [loading]);

  const {
    date,
    tillNumber,
    cash,
    card,
    payouts,
    food,
    drink,
    turnover,
    variance,
  } = formData;

  const classes = useStyles();

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value },
      variance=cash+card);

  const onSubmit = (e) => {
    e.preventDefault();
    createTill(formData, history, true);
  };

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

      <div className='tills'>
        <form
          className={classes.root}
          noValidate
          autoComplete='off'
          onSubmit={(e) => onSubmit(e)}
        >
          

          <TextField
            id='standard'
            label='Cash'
            defaultValue=''
            name='cash'
            value={cash}
            onChange={onChange}
          />

          <TextField
            id='standard'
            label='Card'
            defaultValue=''
            name='card'
            value={card}
            onChange={onChange}
          />

          <TextField
            id='standard'
            label='Payouts'
            defaultValue=''
            name='payouts'
            value={payouts}
            onChange={onChange}
          />

          <TextField
            id='standard'
            label='Food'
            defaultValue=''
            name='food'
            value={food}
            onChange={onChange}
          />

          <TextField
            id='standard'
            label='Drink'
            defaultValue=''
            name='drink'
            value={drink}
            onChange={onChange}
          />

          <TextField
            id='standard'
            label='Turnover'
            defaultValue=''
            name='turnover'
            value={turnover}
            onChange={onChange}
          />

          <TextField
            id='standard-read-only-input'
            label='Variance'
            defaultValue=''
            name='variance'
            value={variance}
            onChange={onChange}
            InputProps={{
              readOnly: true,
            }}
          />

<TextField
            id='standard'
            label='Cash'
            defaultValue=''
            name='cash'
            value={cash}
            onChange={onChange}
          />

          <TextField
            id='standard'
            label='Card'
            defaultValue=''
            name='card'
            value={card}
            onChange={onChange}
          />

          <TextField
            id='standard'
            label='Payouts'
            defaultValue=''
            name='payouts'
            value={payouts}
            onChange={onChange}
          />

          <TextField
            id='standard'
            label='Food'
            defaultValue=''
            name='food'
            value={food}
            onChange={onChange}
          />

          <TextField
            id='standard'
            label='Drink'
            defaultValue=''
            name='drink'
            value={drink}
            onChange={onChange}
          />

          <TextField
            id='standard'
            label='Turnover'
            defaultValue=''
            name='turnover'
            value={turnover}
            onChange={onChange}
          />

          <TextField
            id='standard-read-only-input'
            label='Variance'
            defaultValue=''
            name='variance'
            value={variance}
            onChange={onChange}
            InputProps={{
              readOnly: true,
            }}
          />


<TextField
            id='standard'
            label='Cash'
            defaultValue=''
            name='cash'
            value={cash}
            onChange={onChange}
          />

          <TextField
            id='standard'
            label='Card'
            defaultValue=''
            name='card'
            value={card}
            onChange={onChange}
          />

          <TextField
            id='standard'
            label='Payouts'
            defaultValue=''
            name='payouts'
            value={payouts}
            onChange={onChange}
          />

          <TextField
            id='standard'
            label='Food'
            defaultValue=''
            name='food'
            value={food}
            onChange={onChange}
          />

          <TextField
            id='standard'
            label='Drink'
            defaultValue=''
            name='drink'
            value={drink}
            onChange={onChange}
          />

          <TextField
            id='standard'
            label='Turnover'
            defaultValue=''
            name='turnover'
            value={turnover}
            onChange={onChange}
          />

          <TextField
            id='standard-read-only-input'
            label='Variance'
            defaultValue=''
            name='variance'
            value={variance}
            onChange={onChange}
            InputProps={{
              readOnly: true,
            }}
          />


<TextField
            id='standard'
            label='Cash'
            defaultValue=''
            name='cash'
            value={cash}
            onChange={onChange}
          />

          <TextField
            id='standard'
            label='Card'
            defaultValue=''
            name='card'
            value={card}
            onChange={onChange}
          />

          <TextField
            id='standard'
            label='Payouts'
            defaultValue=''
            name='payouts'
            value={payouts}
            onChange={onChange}
          />

          <TextField
            id='standard'
            label='Food'
            defaultValue=''
            name='food'
            value={food}
            onChange={onChange}
          />

          <TextField
            id='standard'
            label='Drink'
            defaultValue=''
            name='drink'
            value={drink}
            onChange={onChange}
          />

          <TextField
            id='standard'
            label='Turnover'
            defaultValue=''
            name='turnover'
            value={turnover}
            onChange={onChange}
          />

          <TextField
            id='standard-read-only-input'
            label='Variance'
            defaultValue=''
            name='variance'
            value={variance}
            onChange={onChange}
            InputProps={{
              readOnly: true,
            }}
          />




<TextField
            id='standard'
            label='Cash'
            defaultValue=''
            name='cash'
            value={cash}
            onChange={onChange}
          />

          <TextField
            id='standard'
            label='Card'
            defaultValue=''
            name='card'
            value={card}
            onChange={onChange}
          />

          <TextField
            id='standard'
            label='Payouts'
            defaultValue=''
            name='payouts'
            value={payouts}
            onChange={onChange}
          />

          <TextField
            id='standard'
            label='Food'
            defaultValue=''
            name='food'
            value={food}
            onChange={onChange}
          />

          <TextField
            id='standard'
            label='Drink'
            defaultValue=''
            name='drink'
            value={drink}
            onChange={onChange}
          />

          <TextField
            id='standard'
            label='Turnover'
            defaultValue=''
            name='turnover'
            value={turnover}
            onChange={onChange}
          />

          <TextField
            id='standard-read-only-input'
            label='Variance'
            defaultValue=''
            name='variance'
            value={variance}
            onChange={onChange}
            InputProps={{
              readOnly: true,
            }}
          />

          <input
            type='submit'
            className='btn btn-primary my-1'
            value='Submit'
          />
        </form>
      </div>
      
    </Fragment>
  );
};

Tills.propTypes = {
  createTill: PropTypes.func.isRequired,
  getCurrentTill: PropTypes.func.isRequired,
  till: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  till: state.till,
});

export default connect(mapStateToProps, { createTill, getCurrentTill })(
  withRouter(Tills)
);
