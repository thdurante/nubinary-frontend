import { observable } from 'mobx';
import { RootStoreType } from './RootStore';

export type AuthStoreType = {
  currentUser: null | object;
};

class AuthStore {
  @observable rootStore: RootStoreType;
  @observable currentUser: null | object;

  constructor(rootStore: RootStoreType) {
    this.rootStore = rootStore;
    this.currentUser = null;
  }
}

export default AuthStore;
