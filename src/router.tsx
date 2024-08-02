import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { paths } from "./paths";
import { lazy, Suspense } from "react";
import DashboardLayout from "./pages/dashboard/layout";
import Overview from "./pages/dashboard/overview";
import Account from "./pages/dashboard/account";
import Customers from "./pages/dashboard/customers";
import Integrations from "./pages/dashboard/integrations";
import Settings from "./pages/dashboard/settings";
import Orders from "./pages/dashboard/orders";
import Products from "./pages/dashboard/products";
import NotFound from "./pages/errors/not-found";
// const Home = lazy(() => import('./pages/Home'));
// const SignIn = lazy(() => import('./pages'));
// const SignUp = lazy(() => import('./pages'));
// const ResetPassword = lazy(() => import('./pages/auth/ResetPassword'));

export const PrivateRoute = ({ children }: RouteProps): JSX.Element => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? (
    children
  ) : (
    <Navigate to={paths.auth.signIn} replace />
  );
};

export const PublicRoute = ({ children }: RouteProps): JSX.Element => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? (
    <Navigate to={paths.dashboard.overview} replace />
  ) : (
    children
  );
};

export const routes = [
  // { path: '/', element: <Home />, private: false,  isPublic= true },
  // { path: '/auth/sign-in', element: <SignIn />, private: false,  isPublic= true },
  // { path: '/auth/sign-up', element: <SignUp />, private: false  ,isPublic= true},
  // { path: '/auth/reset-password', element: <ResetPassword />, private: false ,isPublic= true },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    isPrivate: true,
    lazy: false,
    children: [
      { index: true, element: <Overview />, isPrivate: true },
      { path: "account", element: <Account />, isPrivate: true },
      { path: "customers", element: <Customers />, isPrivate: true },
      { path: "integrations", element: <Integrations />, isPrivate: true },
      { path: "settings", element: <Settings />, isPrivate: true },
      { path: "orders", element: <Orders />, isPrivate: true },
      { path: "products", element: <Products />, isPrivate: true },
    ],
  },
  { path: "/errors/not-found", element: <NotFound />, isPrivate: true },
];

const renderRoute = (route: any): React.ReactElement => {
  const { path, element, index, children, lazy, isPrivate, isPublic } = route;

  // let renderElement = isPrivate ? (
  //   <PrivateRoute>{element}</PrivateRoute>
  // ) : isPublic ? (
  //   <PublicRoute>{element}</PublicRoute>
  // ) : (
  //   element
  // );
  let renderElement = element;
  // if (lazy) {
  //   renderElement = (
  //     <Suspense fallback={<div>Loading...</div>}>{renderElement}</Suspense>
  //   );
  // }

  return (
    <Route key={path} path={path} element={renderElement} index={index}>
      {children && children.map(renderRoute)}
    </Route>
  );
};

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(renderRoute)}
        <Route path="*" element={<Navigate to={paths.errors.notFound} />} />
      </Routes>
    </BrowserRouter>
  );
};
