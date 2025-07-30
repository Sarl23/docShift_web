import { Navigate, Outlet } from "react-router-dom";
import { useAuthStatus } from "@/hooks/useAuthStatus";
import { Skeleton } from "@/components/ui/skeleton"

const PrivateLayout = () => {
  const { loading, isAuthenticated } = useAuthStatus();

  if (loading) {
    return <Skeleton className="h-[20px] w-[100px] rounded-full" />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default PrivateLayout;
