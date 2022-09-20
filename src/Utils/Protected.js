import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../Context/auth";

const Protected = () => {
  const { auth } = useAuth();
  return auth?.token !== null ? <Outlet /> : <Navigate to="/login" replace />;
};

export default Protected;
