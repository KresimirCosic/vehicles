import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { observer } from 'mobx-react';

import { useRootStore } from '../../mobx/hooks/useRootStore';

interface AdminPrivateRouteProps {
  path: string;
}

const AdminPrivateRoute: React.FC<AdminPrivateRouteProps> = ({
  children,
  path,
}) => {
  const { authenticationStore } = useRootStore();

  if (authenticationStore.user && authenticationStore.user.admin)
    return (
      <Route exact path={path}>
        {children}
      </Route>
    );
  else return <Redirect to='/login' />;
};

export default observer(AdminPrivateRoute);
