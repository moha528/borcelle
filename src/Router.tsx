import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Root';
import LandingPage from "./pages/Landing/LandingPage.tsx";
import AuthPage from "./pages/Auth/AuthPage.tsx";
import HomePage from "./pages/Home/HomePage.tsx";

const router = createBrowserRouter([
  {
    path: '',
    element: <Root />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: 'auth',
        element: <AuthPage />,
      },
      {
        path: 'welcome',
        element: <LandingPage />,
      },
    ]
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
