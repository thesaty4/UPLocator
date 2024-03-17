export const router = {
  home: {
    label: 'Home',
    route: '/',
  },
  validator: {
    label: '',
    route: 'validator',
  },
  signIn: {
    label: 'Sign In',
    route: 'signIn',
  }, 
  capturePole:{
    label: 'Capture Pole',
    route: 'capture-pole',
  },
  poleList:{
    label: 'Pole List',
    route: 'pole-list',
  },
} satisfies Record<string, Routes>;

export type AllRoutes = keyof typeof router;

export type Routes = {
  label: string;
  route: never | string;
};
