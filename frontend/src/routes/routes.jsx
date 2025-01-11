import Home from "../views/Home";
import Register from "../views/Register";
import Login from "../views/Login";
import Cart from "../views/Cart";
import Pizza from "../views/Pizza";
import Profile from "../views/Profile";
import NotFound from "../views/NotFound";
import MainLayout from "../layouts/MainLayout";
import ProtectedRoutes from "./ProtectedRoutes";
import PublicRoutes from "./PublicRoutes";

const routes = [
  {
    path: "/",
    element: (
      <MainLayout>
        <Home />
      </MainLayout>
    ),
  },
  {
    path: "/register",
    element: (
      <PublicRoutes>
        <MainLayout>
          <Register />
        </MainLayout>
      </PublicRoutes>
    ),
  },
  {
    path: "/login",
    element: (
      <PublicRoutes>
        <MainLayout>
          <Login />
        </MainLayout>
      </PublicRoutes>
    ),
  },
  {
    path: "/cart",
    element: (
      <MainLayout>
        <Cart />
      </MainLayout>
    ),
  },
  {
    path: "/pizza/:pizzaId",
    element: (
      <MainLayout>
        <Pizza />
      </MainLayout>
    ),
  },
  {
    path: "/profile",
    element: (
      <ProtectedRoutes>
        <MainLayout>
          <Profile />
        </MainLayout>
      </ProtectedRoutes>
    ),
  },
  {
    path: "*",
    element: (
      <MainLayout>
        <NotFound />
      </MainLayout>
    ),
  },
];

export default routes;
