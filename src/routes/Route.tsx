import React, { useContext } from 'react';
import { Route as ReactDOMRoute, RouteProps as ReactDOMRouteProps, Redirect } from 'react-router-dom';

import Context from '../hooks/context';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route = ({ isPrivate = false, component: Component, ...rest }: RouteProps) => {
  const { authStore } = useContext(Context);

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!authStore?.currentUser ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : 'home',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
