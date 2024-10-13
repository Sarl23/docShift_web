import Header from "@/components/header";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <Header />
      <div className="my-5">
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
