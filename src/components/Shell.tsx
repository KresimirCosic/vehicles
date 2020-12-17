import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { useRootStore } from '../mobx/hooks/useRootStore';

import Login from '../pages/Login';
import Cart from '../pages/Cart';
import Home from '../pages/Home';

import Nav from './structural/Nav';
import Loader from './structural/Loader';

const Shell: React.FC = () => {
  const { userInterfaceStore } = useRootStore();

  useEffect(() => {
    userInterfaceStore.turnLoaderOff();
  }, []);

  return (
    <div className='Shell'>
      <Loader />

      <BrowserRouter>
        <Nav />

        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/cart' component={Cart} />
          <Route path='/' component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Shell;
