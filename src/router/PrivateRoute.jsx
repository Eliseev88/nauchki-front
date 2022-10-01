import { Navigate, Outlet } from "react-router";

export const PrivateRoute = ({ authed }) => authed ? <Outlet /> : <Navigate to="/login" replace />;
