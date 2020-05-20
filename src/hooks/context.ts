import { createContext } from 'react';
import { RootStoreType } from '../stores/RootStore';

const context = createContext<RootStoreType>({});
export default context;
