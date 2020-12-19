import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { observer } from 'mobx-react';

import { useRootStore } from '../../mobx/hooks/useRootStore';
import { pageRoutes } from '../../routing/routes';

import FadeIn from '../animated/FadeIn';

const Nav: React.FC = () => {
  const { authenticationStore } = useRootStore();

  const determineRouteRendering = (
    privateRoute: boolean,
    requiresAnonymity: boolean,
    requiresAdminPrivileges: boolean
  ) => {
    if (
      (privateRoute && authenticationStore.user && !requiresAdminPrivileges) ||
      (privateRoute &&
        requiresAdminPrivileges &&
        authenticationStore.user &&
        authenticationStore.user.admin) ||
      (!privateRoute && requiresAnonymity && !authenticationStore.user) ||
      (!privateRoute && !requiresAnonymity)
    )
      return true;
    return false;
  };

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
              {pageRoutes.map(
                ({
                  name,
                  path,
                  visibleInNav,
                  privateRoute,
                  requiresAnonymity,
                  requiresAdminPrivileges,
                }) => {
                  if (
                    visibleInNav &&
                    determineRouteRendering(
                      privateRoute,
                      requiresAnonymity,
                      requiresAdminPrivileges
                    )
                  )
                    return (
                      <li className='Nav-list-item' key={name}>
                        <NavLink className='Nav-list-item-link' to={path} exact>
                          {name}
                        </NavLink>
                      </li>
                    );
                  return null;
                }
              )}
              {authenticationStore.user && (
                <li
                  className='Nav-list-item'
                  onClick={() => authenticationStore.removeUser()}
                >
                  <button className='Nav-list-item-button'>Logout</button>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </FadeIn>
  );
};

export default observer(Nav);
