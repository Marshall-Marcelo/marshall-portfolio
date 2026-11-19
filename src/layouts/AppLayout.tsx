import { Outlet } from "react-router";
import Header from "@/components/Header";

const AppLayout = () => {
  return (
    <div className="flex flex-col items-center min-h-dvh">
      <Header className="w-[calc(100%-50px)]" />
      <main className="flex-1 max-w-200">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
