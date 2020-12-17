import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { observer } from 'mobx-react';

import FadeIn from '../animated/FadeIn';

const Nav: React.FC = () => {
  return (
    <FadeIn>
      <div className='Nav'>
        <div className='container'>
          <nav className='Nav-container'>
            <h1 className='Nav-logo'>
              <Link className='Nav-logo-link' to='/'>
                Vehicles
              </Link>
            </h1>
            <ul className='Nav-list'>
              <li className='Nav-list-item'>
                <NavLink className='Nav-list-item-link' to='/' exact>
                  Home
                </NavLink>
              </li>
              <li className='Nav-list-item'>
                <NavLink className='Nav-list-item-link' to='/cart' exact>
                  Cart
                </NavLink>
              </li>
              <li className='Nav-list-item'>
                <NavLink className='Nav-list-item-link' to='/login' exact>
                  Login
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </FadeIn>
  );
};

export default observer(Nav);
