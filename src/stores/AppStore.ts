import { action, observable } from 'mobx';
import { RootStoreType } from './RootStore';

export type AppStoreType = {
  isLoading: boolean;
};

class AppStore {
  @observable rootStore: RootStoreType;
  @observable isLoading: boolean;

  constructor(rootStore: RootStoreType) {
    this.rootStore = rootStore;
    this.isLoading = false;
  }

  @action
  public setLoading = (value: boolean): void => {
    this.isLoading = value;
  };
}

export default AppStore;
