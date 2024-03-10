import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, {AxiosResponse} from 'axios';
// import {store} from '../../redux/store';
// import {logout} from '../../redux/slices/authSlice';
import {AuthKeys} from '../../constants/storage-keys.enum';
export default class RequestService {
  private baseURL = 'https://uplapp.in/api/';
  //   private dispatch!: typeof store.dispatch;

  constructor() {
    // this.dispatch = store.dispatch;
  }

  private async makeRequest<T>(
    method: 'get' | 'post' | 'put' | 'patch' | 'delete',
    endpoint: string,
    data?: T,
    header?: Record<string, any>,
  ): Promise<APIResponse<T>> {
    try {
      const token = await AsyncStorage.getItem('authData');
      const response: AxiosResponse<APIResponse<T>> = await axios({
        method,
        url: `${this.baseURL}${endpoint}`,
        headers: {
          //   Accept: "application/vnd.api+json",
          'Content-Type': 'application/json',
          ...(token && {Authorization: `Bearer ${JSON.parse(token).token}`}),
          ...header,
        },
        data: (header?.['Content-Type'] == 'multipart/form-data'
          ? data
          : JSON.stringify(data)) as T,
        timeout: 3000,
      });

      return response.data;
    } catch (error: any) {
      // handle this..........
      // console.log(error.toString());
      if ([401].includes(error?.response?.status)) {
        // this.dispatch(logout());
        throw new Error('Unauthorized');
      } else {
        if (error.response && error.response.data) {
          // If there's an error message from the server, return it
          let errorMessage = '';
          if (
            error.response.data?.errors &&
            Object.keys(error.response.data?.errors)?.length
          ) {
            errorMessage =
              (Object.values(error.response.data.errors) as string[])[0] ?? '';
          } else {
            errorMessage = error.response.data.message;
          }

          throw new Error(errorMessage);
        } else {
          // If no specific error message from the server, throw a generic error
          throw new Error(error?.message);
        }
      }
    }
  }

  protected async get<T>(
    endpoint: string,
    header?: Record<string, string>,
  ): Promise<APIResponse<T>> {
    return this.makeRequest('get', endpoint);
  }

  protected async post<T>(
    endpoint: string,
    data?: T,
    header?: Record<string, any>,
  ): Promise<APIResponse<T>> {
    return this.makeRequest('post', endpoint, data, header);
  }

  protected async delete<T>(
    endpoint: string,
    data?: T,
  ): Promise<APIResponse<T>> {
    return this.makeRequest('delete', endpoint, data);
  }

  protected async put<T>(
    endpoint: string,
    data?: any,
    header?: Record<string, any>,
  ): Promise<APIResponse<T>> {
    return this.makeRequest('put', endpoint, data, header);
  }

  protected async patch<T>(
    endpoint: string,
    data?: any,
  ): Promise<APIResponse<T>> {
    return this.makeRequest('patch', endpoint, data);
  }

  public async getStorageData<dType extends Record<string, any>>(
    key: AuthKeys,
  ) {
    try {
      const authDataString = await AsyncStorage?.getItem(key);
      return (authDataString ? JSON.parse(authDataString) : {}) as dType;
    } catch (error) {
      return {} as dType;
    }
  }
}

export interface APIResponse<T> {
  code: number;
  status: string[];
  message: string[];
  data: T;
}
