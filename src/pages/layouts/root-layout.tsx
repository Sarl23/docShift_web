import Header from "@/components/header";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useGoogleAuth } from "@/hooks/useGoogleAuth";
import { Toaster } from "sonner";
import { ConfirmationModal } from "@/components/confirmation-modal";

const RootLayout = () => {
  const { user, logout, loading } = useGoogleAuth()
  const navigate = useNavigate()
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // Al cargar la app por primera vez, verificar si hay un pendingLogout
  useEffect(() => {
    if (isInitialLoad && localStorage.getItem("pendingLogout") === "true" && user) {
      setShowLogoutModal(true);
    }
    setIsInitialLoad(false);
  }, [user, isInitialLoad]);

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (user) {
        // Marcar que hay un logout pendiente cuando el usuario cierra/recarga la página
        localStorage.setItem("pendingLogout", "true");
        e.preventDefault();
        e.returnValue = "";
        return "";
      }
    };
    
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [user]);

  const handleConfirmLogout = async () => {
    await logout();
    localStorage.setItem("pendingLogout", "false");
    navigate("/");
    setShowLogoutModal(false);
  };

  const handleCancelLogout = () => {
    localStorage.setItem("pendingLogout", "false");
    setShowLogoutModal(false);
  };


  return (
    <div className="min-h-screen flex flex-col bg-background">
      {!loading && !user && <Header />}
      <Outlet />
      <Toaster />
      <ConfirmationModal
        isOpen={showLogoutModal}
        onConfirm={handleConfirmLogout}
        onCancel={handleCancelLogout}
        title="¿Estás con nostros?"
        description="Recueda que por seguridad, si cierras la pestaña, se cerrará tu sesión automáticamente. Quieres cerrar sesión ahora?"
      />
    </div>
  );
};

export default RootLayout;
