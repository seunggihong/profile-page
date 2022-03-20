import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import RecodePage from "./pages/RecodePage";
import ProjectPage from "./pages/ProjectPage";
import AboutPage from "./pages/AboutPage";
import MenuBar from "./utils/MenuBar";

function App() {
  return (
    <div className="App">
      <MenuBar></MenuBar>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/recode" element={<RecodePage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
