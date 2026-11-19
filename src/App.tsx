import { Routes, Route } from "react-router";
import AppLayout from "@/layouts/AppLayout";
import LandingPage from "@/pages/LandingPage";
import ProjectsPage from "@/pages/ProjectsPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
