import axios, { AxiosInstance } from 'axios';
import { AuthFormType, UserType } from '../shared/types/auth';

import BaseService from './BaseService';

class AuthService extends BaseService {
  private instance: AxiosInstance;

  constructor() {
    super();

    this.instance = axios.create({
      baseURL: 'http://localhost:3000',
      timeout: 10000,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  }

  public signIn = async (values: AuthFormType): Promise<UserType | boolean> => {
    try {
      const response = await this.instance.post('/users/sign_in', {
        user: {
          ...values,
        },
      });

      const {
        data: { id, email },
        headers: { authorization },
      } = response;

      return {
        id,
        email,
        jwt: authorization.split('Bearer')[1].trim(),
      };
    } catch (error) {
      this.handleResponseError(error);
      return false;
    }
  };
}

export default AuthService;
