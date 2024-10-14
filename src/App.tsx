import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider, useFirebaseApp } from "reactfire";
import { getAuth } from "firebase/auth";
import { RouterProvider } from "react-router-dom";
import { router } from "./config/router";

const App = () => {
  const app = useFirebaseApp();
  const auth = getAuth(app);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AuthProvider sdk={auth}>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
