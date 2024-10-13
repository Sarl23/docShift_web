import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { Button } from "./ui/button";
import { useAuth, useSigninCheck } from "reactfire";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const { status, data: signInCheckResult } = useSigninCheck();

  const handleClickSignIn = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
    navigate("/dashboard");
  };

  const handleClickSignOut = async () => {
    await signOut(auth);
  };

  return (
    <div className="bg-gray-700 p-5">
      <div className="flex items-center">
        <h2 className="text-white ">ReactDocShit</h2>
        <nav className="ml-auto">
          {status === "loading" ? (
            <Button disabled>Loading...</Button>
          ) : signInCheckResult.signedIn ? (
            <Button onClick={() => handleClickSignOut()}>Sign out</Button>
          ) : (
            <Button onClick={() => handleClickSignIn()}>
              Sign in google account
            </Button>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Header;
