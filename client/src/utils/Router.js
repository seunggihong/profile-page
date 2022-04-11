import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import ProfilePage from "../pages/ProfilePage";
import ProjectPage from "../pages/ProjectPage";
import AboutPage from "../pages/AboutPage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/project" element={<ProjectPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
}

export default Router;
