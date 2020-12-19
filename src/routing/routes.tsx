import React from 'react';

import Home from '../pages/Home';
import Cart from '../pages/Cart';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';

export interface PageRoute {
  name: string;
  path: string;
  component: React.ReactNode;
  visibleInNav: boolean;
  privateRoute: boolean;
  requiresAnonymity: boolean;
  requiresAdminPrivileges: boolean;
}

export const pageRoutes: PageRoute[] = [
  {
    name: 'Cart',
    path: '/cart',
    component: <Cart />,
    visibleInNav: true,
    privateRoute: true,
    requiresAnonymity: false,
    requiresAdminPrivileges: false,
  },
  {
    name: 'Register',
    path: '/register',
    component: <Register />,
    visibleInNav: true,
    privateRoute: false,
    requiresAnonymity: true,
    requiresAdminPrivileges: false,
  },
  {
    name: 'Login',
    path: '/login',
    component: <Login />,
    visibleInNav: true,
    privateRoute: false,
    requiresAnonymity: true,
    requiresAdminPrivileges: false,
  },
  {
    name: 'Dashboard',
    path: '/dashboard',
    component: <Dashboard />,
    visibleInNav: true,
    privateRoute: true,
    requiresAnonymity: false,
    requiresAdminPrivileges: true,
  },
  {
    name: 'Home',
    path: '/',
    component: <Home />,
    visibleInNav: true,
    privateRoute: false,
    requiresAnonymity: false,
    requiresAdminPrivileges: false,
  },
];
