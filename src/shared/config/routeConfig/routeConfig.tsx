import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { RouteProps } from 'react-router-dom';

type AppRouterProps = RouteProps & {
  authOnly?: boolean;
};

export enum AppRouter {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  NOT_FOUND = 'not_found'
}
export const RoutePath: Record<AppRouter, string> = {
  [AppRouter.MAIN]: '/',
  [AppRouter.ABOUT]: '/about',
  [AppRouter.PROFILE]: '/profile',
  [AppRouter.NOT_FOUND]: '*'
};

export const routeConfig: Record<AppRouter, AppRouterProps> = {
  [AppRouter.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />
  },
  [AppRouter.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />
  },
  [AppRouter.PROFILE]: {
    path: RoutePath.profile,
    element: <ProfilePage />,
    authOnly: true
  },
  [AppRouter.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />
  }
};
