export const router = {
  home: {
    label: 'Home',
    route: '/' as never,
  },
  validator: {
    label: '',
    route: 'validator' as never,
  },
  signIn: {
    label: 'Sign In',
    route: 'signIn' as never,
  },
  signUp: {
    label: 'SignUp',
    route: 'signup' as never,
  },
  forgotPassword: {
    label: 'Forgot Password',
    route: 'forgot-password' as never,
  },
} satisfies Record<string, Routes>;

export type AllRoutes = keyof typeof router;

export type Routes = {
  label: string;
  route: never | string;
};
