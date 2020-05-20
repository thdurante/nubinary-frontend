import { observable } from 'mobx';

import AppStore, { AppStoreType } from './AppStore';
import AuthStore, { AuthStoreType } from './AuthStore';
import CalculationStore, { CalculationStoreType } from './CalculationStore';

export type RootStoreType = {
  appStore?: AppStoreType;
  authStore?: AuthStoreType;
  calculationStore?: CalculationStoreType;
};

class RootStore {
  @observable appStore: AppStoreType;
  @observable authStore: AuthStoreType;
  @observable calculationStore: CalculationStoreType;

  constructor() {
    this.appStore = new AppStore(this);
    this.authStore = new AuthStore(this);
    this.calculationStore = new CalculationStore(this);
  }
}

export default new RootStore();
