import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import RecodePage from "../pages/RecodePage";
import ProjectPage from "../pages/ProjectPage";
import AboutPage from "../pages/AboutPage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/recode" element={<RecodePage />} />
      <Route path="/project" element={<ProjectPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
}

export default Router;
