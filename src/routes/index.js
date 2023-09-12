import { Navigate, Outlet } from 'react-router-dom';
import Landing from '@pages/Landing';
import GamePage from '@pages/GamePage/GamePage';
import Calendar from '@pages/Calendar/Calendar';
import Account from '@pages/Account';
import TermsOfUse from '@pages/TermsOfUse';
import PrivacyPolicy from '@pages/PrivacyPolicy';
import { MainLayout } from '@components/layouts/MainLayout';
import { AuthenticatedRoutes } from '@features/auth/components/AuthenticatedRoutes';

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
        path: '/',
        element: <Navigate to={'/calendar'} replace />,
      },
      {
        path: '/calendar',
        element: <Outlet />,
        children: [
          {
            path: '',
            element: <Calendar />,
            handle: { scrollMode: 'pathname' },
          },
          {
            path: ':id',
            element: <GamePage />,
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
      {
        path: '/terms-of-use',
        element: <TermsOfUse />,
      },
      {
        path: '/privacy-policy',
        element: <PrivacyPolicy />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to={'/calendar'} replace />,
  },
];
