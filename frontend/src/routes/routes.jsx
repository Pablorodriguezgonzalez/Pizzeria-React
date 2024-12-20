import Home from "../views/Home";
import Register from "../views/Register";
import Login from "../views/Login";
import Cart from "../views/Cart";
import Pizza from "../views/Pizza";
import Profile from "../views/Profile";
import NotFound from "../views/NotFound";
import MainLayout from "../layouts/MainLayout";

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
      <MainLayout>
        <Register />
      </MainLayout>
    ),
  },
  {
    path: "/login",
    element: (
      <MainLayout>
        <Login />
      </MainLayout>
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
    path: "profile",
    element: (
      <MainLayout>
        <Profile />
      </MainLayout>
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
