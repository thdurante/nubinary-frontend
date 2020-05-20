import React from 'react';
import Context from './context';

const AppProvider = ({ children }: { children: JSX.Element }) => (
  // TODO: adicionar aqui a RootStore
  <Context.Provider value={{}}>{children}</Context.Provider>
);

export default AppProvider;
