import Root from './pages/Root';
import HomePage from './pages/Homepage';
import UserDetailsPage from './pages/UserDetailsPage';

export const pagesPaths = {
  homepage: '/',
  userDetails: '/user/:id',
  about: ''
};

export default [
  {
    component: Root,
    routes: [
      {
        path: pagesPaths.homepage,
        exact: true,
        component: HomePage
      },
      {
        path: pagesPaths.userDetails,
        exact: true,
        component: UserDetailsPage,
      }
    ]
  }
];