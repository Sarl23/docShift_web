// components/Header.tsx
import { Button } from "./ui/button"
import { useGoogleAuth } from "@/hooks/useGoogleAuth"
import { useNavigate } from "react-router-dom"
import { ModeToggle } from "./mode-toggle"

const Header = () => {
  const { user, login, logout, loading } = useGoogleAuth()
  const navigate = useNavigate()

  const handleClickSignIn = async () => {
    await login()
    navigate("/dashboard")
  }

  const handleClickSignOut = async () => {
    await logout()
  }

  return (
    <div className="fixed top-0 left-0 w-full bg-gray-700 p-5 z-50">
      <div className="flex items-center">
        <h2 className="text-white">ReactDocShift</h2>
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
