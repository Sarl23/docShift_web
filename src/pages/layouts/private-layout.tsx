// src/pages/layouts/private-layout.tsx
import { Navigate, Outlet } from "react-router-dom";
import { useAuthStatus } from "@/hooks/useAuthStatus";

const PrivateLayout = () => {
  const { loading, isAuthenticated } = useAuthStatus();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default PrivateLayout;
