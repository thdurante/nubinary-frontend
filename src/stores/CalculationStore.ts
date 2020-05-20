import { observable } from 'mobx';
import { RootStoreType } from './RootStore';

export type CalculationStoreType = {};

class CalculationStore {
  @observable rootStore: RootStoreType;

  constructor(rootStore: RootStoreType) {
    this.rootStore = rootStore;
  }
}

export default CalculationStore;
