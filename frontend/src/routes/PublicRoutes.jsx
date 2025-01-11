import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

const PublicRoutes = ({ children }) => {
  const { token } = useUser();

  if (token === true) {
    return <Navigate to="/" />;
  }

  return children;
};

export default PublicRoutes;
