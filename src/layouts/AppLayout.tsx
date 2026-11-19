import { Outlet } from "react-router";
import Header from "@/components/Header";

const AppLayout = () => {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
