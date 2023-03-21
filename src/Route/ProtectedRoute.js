import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../config/AuthProvider";


export default function ProtectedRoute({
  redirectPath = "/not-found",
  children,
}){
  const { currentUser } = useContext(AuthContext);
  if (!currentUser) return <Navigate to={redirectPath} replace />;
  return children;
};
