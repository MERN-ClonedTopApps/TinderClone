import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';

const Header = () => {
  return (
    <div className='header'>
      <IconButton>
        <PersonIcon fontSize='large' className='header__icon' />
      </IconButton>

      <img
        src='https://cdn.worldvectorlogo.com/logos/tinder-2.svg'
        alt='logo'
        className='header__logo'
      />

      <IconButton>
        <ForumIcon fontSize='large' className='header__icon' />
      </IconButton>
    </div>
  );
};

export default Header;
