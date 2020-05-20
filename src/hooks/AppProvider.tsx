import React from 'react';

import Context from './context';
import RootStore from '../stores/RootStore';

const AppProvider = ({ children }: { children: JSX.Element }) => (
  <Context.Provider value={RootStore}>{children}</Context.Provider>
);

export default AppProvider;
