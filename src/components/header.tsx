import { Button } from "./ui/button"
import { useGoogleAuth } from "@/hooks/useGoogleAuth"
import { useNavigate } from "react-router-dom"
import { ModeToggle } from "./mode-toggle"
import { useState, useEffect } from "react";
import { getGlobalUSer } from "@/lib/api/user";
import { toast } from "sonner"

const Header = () => {
  const { user, login, logout, loading } = useGoogleAuth()
  const navigate = useNavigate()
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  const handleClickSignIn = async () => {
    try {
      const autUser = await login()
      if (!autUser) {
        toast.error("Error al iniciar sesión, por favor intenta nuevamente.");
        throw new Error("No se pudo iniciar sesión, usuario no autenticado.")
      }
      const validatedUser = await getGlobalUSer(autUser.uid)
      if (validatedUser) {
        toast.success("Bienvenido de vuelta, " + validatedUser.name);
        navigate("/dashboard");
      } else {
        await logout()
        toast("Usuario no encontrado, por favor contacta al administrador.")
      }
    } catch (error) {
      await logout()
      toast.error("Error durante la validación");
      console.error("Error during user validation", error);
    }
  }

  const handleClickSignOut = async () => {
    await logout()
    toast.success("Sesión cerrada correctamente");
  }

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full p-5 z-50 backdrop-blur-md bg-white/10 border-b border-white/20 transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        <div className="flex items-center">
          <h2 className="text-gray-900 font-semibold text-xl md:text-2xl lg:text-3xl dark:text-white">MediTurnos</h2>
          <nav className="ml-auto">
            {loading ? (
              <Button disabled>Loading...</Button>
            ) : user ? (
              <Button onClick={handleClickSignOut}>Sign out</Button>
            ) : (
              <Button onClick={handleClickSignIn}>
                Sign in Google Account
              </Button>
            )}
          </nav>
          <div className="ml-2">
            <ModeToggle />
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
