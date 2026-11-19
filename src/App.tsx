import { Routes, Route } from "react-router";
import AppLayout from "@/layouts/AppLayout";
import LandingPage from "@/pages/LandingPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<LandingPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
