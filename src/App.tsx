import { AuthProvider, useFirebaseApp } from "reactfire";
import { getAuth } from "firebase/auth";
import { RouterProvider } from "react-router-dom";
import { router } from "./config/router";

const App = () => {
  const app = useFirebaseApp();
  const auth = getAuth(app);

  return (
    <>
      <AuthProvider sdk={auth}>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  );
};

export default App;
