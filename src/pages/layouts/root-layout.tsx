import Header from "@/components/header";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useGoogleAuth } from "@/hooks/useGoogleAuth";
import { Toaster } from "sonner";
import { ConfirmationModal } from "@/components/confirmation-modal";

const RootLayout = () => {
  const { user, logout } = useGoogleAuth()
  const navigate = useNavigate()
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  // Antes de salir:
  window.addEventListener("beforeunload", () => {
    localStorage.setItem("pendingLogout", "true");
  });

  // Al cargar la app:
  useEffect(() => {
    if (localStorage.getItem("pendingLogout") === "true" && user) {
      setShowLogoutModal(true);
    }
  }, [user]);

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (user) {
        // setShowLogoutModal(true);
        window.addEventListener("unload", () => {
          logout();
        });
        e.preventDefault();
        e.returnValue = "";
        return "";
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);

    };
  }, [logout, user]);

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
      {!user && <Header />}
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
