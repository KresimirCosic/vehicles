import React from 'react';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import Cart from '../pages/Cart';

export interface PageRoute {
  name: string;
  path: string;
  component: React.ReactNode;
  visibleInNav: boolean;
  privateRoute: boolean;
  requiresAnonymity: boolean;
  adminExclusive: boolean;
  userExclusive: boolean;
}

export const pageRoutes: PageRoute[] = [
  {
    name: 'Cart',
    path: '/cart',
    component: <Cart />,
    visibleInNav: true,
    privateRoute: true,
    requiresAnonymity: false,
    adminExclusive: false,
    userExclusive: true,
  },
  {
    name: 'Register',
    path: '/register',
    component: <Register />,
    visibleInNav: true,
    privateRoute: false,
    requiresAnonymity: true,
    adminExclusive: false,
    userExclusive: false,
  },
  {
    name: 'Login',
    path: '/login',
    component: <Login />,
    visibleInNav: true,
    privateRoute: false,
    requiresAnonymity: true,
    adminExclusive: false,
    userExclusive: false,
  },
  {
    name: 'Dashboard',
    path: '/dashboard',
    component: <Dashboard />,
    visibleInNav: true,
    privateRoute: true,
    requiresAnonymity: false,
    adminExclusive: true,
    userExclusive: false,
  },
  {
    name: 'Home',
    path: '/',
    component: <Home />,
    visibleInNav: true,
    privateRoute: true,
    requiresAnonymity: false,
    adminExclusive: false,
    userExclusive: false,
  },
];
