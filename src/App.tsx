import React  from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';

import Context from './hooks/context';
import GlobalStyle from './styles/global';
import AppProvider from './hooks/AppProvider';
import Routes from './routes';
import { RootStoreType } from './stores/RootStore';

const browserHistory = createBrowserHistory();
const routerStore = new RouterStore();
const history = syncHistoryWithStore(browserHistory, routerStore);

const App = () => (
  <AppProvider>
    <>
      <Context.Consumer>
        {(context: RootStoreType) => {
          if (context && context.setRouterStore) context.setRouterStore(routerStore);
          return <></>;
        }}
      </Context.Consumer>
      <Router history={history}>
        <Routes />
        <GlobalStyle />
      </Router>
    </>
  </AppProvider>
);

export default App;
