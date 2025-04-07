import { useGoogleAuth } from "@/hooks/useGoogleAuth"

export default function UserMenu() {
  const { user, login, logout, loading } = useGoogleAuth()

  if (loading) return <p>Cargando...</p>

  return (
    <div className="p-4">
      {user ? (
        <>
          <p>Hola, {user.displayName}</p>
          <button onClick={logout}>Salir</button>
        </>
      ) : (
        <button onClick={login}>Iniciar sesión con Google</button>
      )}
    </div>
  )
}
