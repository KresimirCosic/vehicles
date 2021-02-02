import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { observer } from 'mobx-react';

import { useRootStore } from '../../mobx/hooks/useRootStore';

interface UserPrivateRouteProps {
  path: string;
}

const UserPrivateRoute: React.FC<UserPrivateRouteProps> = ({
  children,
  path,
}) => {
  const { authenticationStore } = useRootStore();

  if (authenticationStore.user.email && !authenticationStore.user.admin)
    return (
      <Route exact path={path}>
        {children}
      </Route>
    );
  else return <Redirect to='/' />;
};

export default observer(UserPrivateRoute);
