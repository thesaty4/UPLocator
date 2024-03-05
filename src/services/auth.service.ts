import ApiService, {APIResponse} from '../shared/services/APIServices';
import {LoginResponse} from '../types/auth.types';

class AuthService extends ApiService {
  login(data: LoginResponse): Promise<APIResponse<LoginResponse>> {
    return this.post<LoginResponse>('/login', data);
  }

  logout(): Promise<APIResponse<LoginResponse>> {
    return this.post('/logout');
  }
}

export const authService = new AuthService();
