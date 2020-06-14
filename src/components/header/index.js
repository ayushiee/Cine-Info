import React from 'react';
import logo from '../../assets/logo.png';
import './header.css';
import { useHistory, useLocation } from 'react-router-dom';

const Header = () => {
  const history = useHistory();
  const back = () => history.push('/');
  const location = useLocation();
  let backgroundColor = '#F6F6EB';

  if (location.pathname !== '/') {
    backgroundColor = '#d8d8d8';
  }

  return (
    <div className='logoContainer'
      style={{ backgroundColor }}
    >
      <img
        src={logo}
        className='logo'
        alt='logo' onClick={back}
      />
    </div>
  );
};

export default Header;
