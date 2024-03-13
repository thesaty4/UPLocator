import {LoginResponse} from '../types/auth.types';

export class UserDetails {
  user: User;
  token: string;
  constructor(user: LoginResponse) {
    this.user = new User(user);
    this.token = user.token;
  }
}

export class User {
  id: number;
  name: string;
  email: string;
  role: 'admin';
  status: 'active' | 'inactive';
  constructor(user: LoginResponse) {
    this.id = user.user?.id ?? '';
    this.name = user.user?.name ?? '';
    this.email = user.user?.email ?? '';
    this.role = user.user?.role ?? '';
    this.status = user.user?.status ?? '';
  }
}
