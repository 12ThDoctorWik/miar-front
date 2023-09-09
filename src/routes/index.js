import { Navigate, Outlet } from 'react-router-dom';
import { MainLayout } from '@components/layouts/MainLayout';
import { AuthenticatedRoutes } from '@features/auth/components/AuthenticatedRoutes';
import Landing from '@pages/Landing';
import Sessions from '@pages/calendar/Sessions';
import Session from '@pages/calendar/Session';
import Account from '@pages/Account';

export const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Landing />,
      },
      {
        path: '/calendar',
        element: <Outlet />,
        children: [
          {
            path: '',
            element: <Sessions />,
            handle: { scrollMode: 'pathname' },
          },
          {
            path: ':id',
            element: <Session />,
          },
        ],
      },
      {
        path: '/account',
        element: <AuthenticatedRoutes />,
        children: [
          {
            path: '',
            element: <Account />,
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to={'/calendar'} replace />,
  },
];
