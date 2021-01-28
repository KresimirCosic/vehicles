import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { observer } from 'mobx-react';

import { useRootStore } from '../../mobx/hooks/useRootStore';

interface AnonymousRouteProps {
  path: string;
}

const AnonymousRoute: React.FC<AnonymousRouteProps> = ({ children, path }) => {
  const { authenticationStore } = useRootStore();

  if (!authenticationStore.user.email)
    return <Route path={path}>{children}</Route>;
  else return <Redirect to='/' />;
};

export default observer(AnonymousRoute);
