const constType = <dType extends string>(d:dType)=>d;

export const router = {
  home: {
    label: 'Home',
    route: constType('/'),
  },
  validator: {
    label: '',
    route: constType('validator'),
  },
  signIn: {
    label: 'Sign In',
    route: constType('signIn'),
  },
  zonalList: {
    label: 'Zonal List', 
    route: constType('zonal-list'),
  }, 
  routeLines: {
    label: 'Route Lines', 
    route: constType('route-lines'),
  },
  editPole: {
    label: 'Edit Pole', 
    route: constType('edit-pole'),
  },
  capturePole: {
    label: 'Capture Pole',
    route: constType('capture-pole'),
  },
  poleList: {
    label: 'Pole List',
    route: constType('pole-list'),
  },
} satisfies Record<string, Routes>;

export type AllRoutes = keyof typeof router;

export type RouteType = typeof router[keyof typeof router]['route'];
 
export type Routes = {
  label: string;
  route: never | string;
};
