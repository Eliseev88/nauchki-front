import { Navigate, Outlet, useLocation } from 'react-router-dom';


export const PrivateRoute = ({ authed }) => {
    const location = useLocation();
    return authed ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />;
}
