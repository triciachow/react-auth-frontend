// Implemented with react-router-v6
import { Navigate } from "react-router-dom";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export default function ProtectedRoutes({ children }) {
  const token = cookies.get("TOKEN");

  return token ? children : <Navigate to="/" />;
}
