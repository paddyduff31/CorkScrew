import React, { Fragment, useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';

function Navbar({ auth: { isAuthenticated, loading }, logout }) {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const authLinks = (
    <ul className='top-nav-menu-items'>
      <a onClick={logout} href='!#'>
        <i className='fas fa-sign-out-alt' />{' '}
        <span className='hide-sm'>Logout</span>
      </a>
    </ul>
  );
  const guestLinks = (
    <ul className='top-nav-menu-items'>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </ul>
  );
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>

          {!loading && (
            <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
          )}
        </div>

        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);

// import React, { Fragment } from 'react';
// import logo from '../../img/logo.png';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { logout } from '../../actions/auth';
// import * as FaIcons from "react-icons/fa"
// import * as AiIcons from "react-icons/ai"

// const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {

//   const sidebar [sidebar, setSidebar] = useState(false)

//   const showSidebar = () => setSidebar(!sidebar)

//   return (
//     <>
//       <div className="navbar">

//       <Link to='/'>
//         <FaIcons.FaBars onClick={showSidebar/>
//       </Link>
//       </div>
//       <nav className ={sidebar ? 'nav-menu active' : 'nav-menu'}>
//         <ul className="nav-menu-items">
//           <li className="navbar-toggle">
//             <Link to="#" className='menu-bars'>
//               <AiIcons.AiOutlineClose/>
//             </Link>
//           </li>
//         </ul>

// //       </nav>

//     </>
//   );
// };

// Navbar.propTypes = {
//   logout: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired,
// };

// const mapStateToProps = (state) => ({
//   auth: state.auth,
// });

// export default connect(mapStateToProps, { logout })(Navbar);
