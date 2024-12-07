import { useAuth } from "react-oidc-context";
import { Navigate } from 'react-router-dom';

type PrivateRouteProps = {
    children: React.ReactNode;
};

const PrivateRoute = ({ children }: PrivateRouteProps) => {
    const auth = useAuth();
    return auth.isAuthenticated ? children : <Navigate to="/signin" />;
};

export default PrivateRoute;