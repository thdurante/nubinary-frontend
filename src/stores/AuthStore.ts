import { observable, runInAction } from 'mobx';

import { RootStoreType } from './RootStore';
import { AuthFormType, UserType } from '../shared/types/auth';
import AuthService from '../services/AuthService';

export type AuthStoreType = {
  currentUser: null | UserType;
  handleSignIn: Function;
};

class AuthStore {
  @observable rootStore: RootStoreType;
  @observable currentUser: null | UserType;
  private authService: AuthService;

  constructor(rootStore: RootStoreType) {
    this.rootStore = rootStore;
    this.currentUser = null;
    this.authService = new AuthService();
  }

  public handleSignIn = async (values: AuthFormType): Promise<void> => {
    const { routerStore } = this.rootStore;
    const response = await this.authService.signIn(values);

    if (typeof response === 'object') {
      runInAction(() => {
        this.currentUser = response;
      });

      if (routerStore) routerStore.history.push('/home');
    }
  };

  public handleSignUp = async (values: AuthFormType): Promise<void> => {
    // TODO: implement.
  };
}

export default AuthStore;
