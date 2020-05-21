import { AxiosError } from 'axios';

const DEFAULT_ERROR_RESPONSE = 'Oops!! Something went wrong :(';

class BaseService {
  protected handleResponseError = (err: AxiosError): void => {
    const alertError = (message: string): void => {
      alert(message);
    };

    if (err.request.status === 500 || err.request.status === 404) {
      alertError(DEFAULT_ERROR_RESPONSE);
    } else if (err.response) {
      const { error, errors } = err.response.data;

      const message = Array(error || errors).join('. ');
      alertError(message);
    } else {
      alertError(DEFAULT_ERROR_RESPONSE);
    }
  };
}

export default BaseService;
