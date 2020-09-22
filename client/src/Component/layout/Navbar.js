import React, { Fragment } from 'react';
import logo from '../../img/logo.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import Dashboard from '../dashboard/Dashboard';
import Tills from '../tills/Tills.js';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <Link to='/Dashboard'>
          <i className='fas fa-chart-line' />{' '}
          <span className='hide-sm'>Dashboard</span>
        </Link>
      </li>
      <li>
        <Link to='/Tills'>
          <i className='fas fa-money-bill' />{' '}
          <span className='hide-sm'>Tills</span>
        </Link>
      </li>
      <li>
        <a onClick={logout} href='!#'>
          <i className='fas fa-sign-out-alt' />{' '}
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </ul>
  );
  const guestLinks = (
    <ul>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </ul>
  );
  return (
    <nav className='navbar bg-dark'>
      <Link to='/'>
        <img src={logo} width='auto' height='50' alt='Corckscrew Logo'></img>
      </Link>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
