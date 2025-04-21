import { Button } from "./ui/button"
import { useGoogleAuth } from "@/hooks/useGoogleAuth"
import { useNavigate } from "react-router-dom"
import { ModeToggle } from "./mode-toggle"
import { useState, useEffect } from "react";

const Header = () => {
  const { user, login, logout, loading } = useGoogleAuth()
  const navigate = useNavigate()
  const [isVisible, setIsVisible] = useState(true)
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      if (currentScrollPosition > scrollPosition) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setScrollPosition(currentScrollPosition);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  const handleClickSignIn = async () => {
    await login()
    navigate("/dashboard")
  }

  const handleClickSignOut = async () => {
    await logout()
  }

  return (
    <div
      className={`fixed top-0 left-0 w-full p-5 z-50 backdrop-blur-md bg-white/10 border-b border-white/20 transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <div className="flex items-center">
        <h2 className="text-white font-semibold text-xl md:text-2xl lg:text-3xl">DocShit</h2>
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
  )
}

export default Header
