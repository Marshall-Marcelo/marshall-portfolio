import { Outlet } from "react-router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AppLayout = () => {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
