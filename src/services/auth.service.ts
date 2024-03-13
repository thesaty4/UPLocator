import {SignInProps} from '../pages/signin/SignIn';
import ApiService, {APIResponse} from '../shared/services/APIServices';
import {LoginResponse} from '../types/auth.types';

class AuthService extends ApiService {
  login(data: SignInProps): Promise<APIResponse<LoginResponse>> {
    return this.post<LoginResponse>('/login', data as any);
  }

  logout(): Promise<APIResponse<LoginResponse>> {
    return this.post('/logout');
  }
}

export const authService = new AuthService();
