import React from 'react';
import data from './data';
import { IoIosColorPalette } from 'react-icons/io';
import './navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className='container nav__container'>
        <a href='indx.html' className='nav__logo'>
          <img src={require('../../assets/logo.jpg')} alt='logo' title='My Website Logo' />
        </a>
        <ul className='nav__menu'>
          {data.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
        <button id='theme__icon'>
          <IoIosColorPalette />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
