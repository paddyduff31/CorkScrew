import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { createTill, getCurrentTill } from '../../actions/tills';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

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
      width: '10%',
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const Tills = ({
  till: { till, loading },
  createTill,
  history,
  getCurrentTill,
}) => {
  const blankTill = {
    date: '',
    tillNumber: '',
    cash: '',
    card: '',
    payouts: '',
    food: '',
    drink: '',
    turnover: '',
    variance: '',
  };
  const [formData, setFormData] = useState([{ ...blankTill }]);

  const addTill = () => {
    setFormData([...formData, { ...blankTill }]);
  };

  const handleCatChange = (e) => {
    const updatedCats = [...formData];
    updatedCats[e.target.dataset.idx][e.target.className] = e.target.value;
    setFormData(updatedCats);
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    alert(formData)
    createTill(formData, history, true);
  };

  const [selectedDate, setSelectedDate] = React.useState(
    new Date('2014-08-18T21:11:54')
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const classes = useStyles();

  useEffect(() => {
    getCurrentTill();

    setFormData([
      {
        date: loading || !till.date ? '' : till.date,
        tillNumber: loading || !till.tillNumber ? '' : till.tillNumber,
        cash: loading || !till.cash ? '' : till.cash,
        card: loading || !till.card ? '' : till.card,
        payouts: loading || !till.payouts ? '' : till.payouts,
        food: loading || !till.food ? '' : till.food,
        drink: loading || !till.drink ? '' : till.drink,
        turnover: loading || !till.turnover ? '' : till.turnover,
        variance: loading || !till.variance ? '' : till.variance,
      },
    ]);
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

  return (
    <Fragment>
      <div className='tills-header'>
        <div className='till-add'>
          <h1 className='large text-primary' style={{ marginRight: 10 }}>
            Tills
          </h1>
          <Fab
            color=''
            aria-label='add'
            className={classes.root}
            size='medium'
            onClick={addTill}
          >
            <AddIcon />
          </Fab>
        </div>

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
        <form>
          {formData.map((val, idx) => {
            const tillId = `name-${idx}`;
            const ageId = `age-${idx}`;
            return (
              <div key={`Till-${idx}`}>
                <label htmlFor={tillId} style={{ display: 'block' }}>{`Till #${
                  idx + 1
                }`}</label>
                {/* <input
                type='text'
                name={tillId}
                data-idx={idx}
                id={tillId}
                className='name'
                value={formData[idx].name}
                onChange={handleCatChange}
              /> */}
                <div className={classes.root}>
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
                </div>
              </div>
            );
          })}
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

// export const Tills = ({
//   till: { till, loading },
//   createTill,
//   history,
//   getCurrentTill,
// }) => {
//   const [formData, setFormData] = useState({
// date: '',
// tillNumber: '',
// cash: '',
// card: '',
// payouts: '',
// food: '',
// drink: '',
// turnover: '',
// variance: '',
//   });

//

// const onChange = (e) =>
//   setFormData({ ...formData, [e.target.name]: e.target.value },
//     variance=cash+card);

// const onSubmit = (e) => {
//   e.preventDefault();
//   createTill(formData, history, true);
// };

//   return (
//     <Fragment>

//     </Fragment>
//   );
// };
