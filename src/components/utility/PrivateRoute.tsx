import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { observer } from 'mobx-react';

import { useRootStore } from '../../mobx/hooks/useRootStore';

interface PrivateRouteProps {
  path: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, path }) => {
  const { authenticationStore } = useRootStore();

  if (authenticationStore.userName)
    return <Route path={path}>{children}</Route>;
  else return <Redirect to='/login' />;
};

export default observer(PrivateRoute);
