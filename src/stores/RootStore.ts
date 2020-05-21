import { action, observable } from 'mobx';
import { RouterStore } from 'mobx-react-router';

import AppStore, { AppStoreType } from './AppStore';
import AuthStore, { AuthStoreType } from './AuthStore';
import CalculationStore, { CalculationStoreType } from './CalculationStore';

export type RootStoreType = {
  appStore?: AppStoreType;
  authStore?: AuthStoreType;
  calculationStore?: CalculationStoreType;
  routerStore?: RouterStore | null;
  setRouterStore?: Function;
};

class RootStore {
  @observable appStore: AppStoreType;
  @observable authStore: AuthStoreType;
  @observable calculationStore: CalculationStoreType;
  @observable routerStore: RouterStore | null;

  constructor() {
    this.appStore = new AppStore(this);
    this.authStore = new AuthStore(this);
    this.calculationStore = new CalculationStore(this);
    this.routerStore = null;
  }

  @action
  public setRouterStore = (routerStore: RouterStore): void => {
    this.routerStore = routerStore;
  };
}

export default new RootStore();
