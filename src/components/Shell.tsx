import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { useRootStore } from '../mobx/hooks/useRootStore';
import { pageRoutes } from '../routing/routes';

import PrivateRoute from './utility/PrivateRoute';
import AnonymousRoute from './utility/AnonymousRoute';

import Nav from './structural/Nav';
import Loader from './structural/Loader';

const Shell: React.FC = () => {
  const { userInterfaceStore } = useRootStore();

  useEffect(() => {
    userInterfaceStore.turnLoaderOff();
  });

  return (
    <div className='Shell'>
      <Loader />

      <BrowserRouter>
        <Nav />

        <Switch>
          {pageRoutes.map(
            ({ name, path, component, privateRoute, requiresAnonymity }) => {
              if (privateRoute)
                return (
                  <PrivateRoute key={name} path={path}>
                    {component}
                  </PrivateRoute>
                );
              else if (requiresAnonymity)
                return (
                  <AnonymousRoute key={name} path={path}>
                    {component}
                  </AnonymousRoute>
                );
              return (
                <Route key={name} path={path}>
                  {component}
                </Route>
              );
            }
          )}
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Shell;
