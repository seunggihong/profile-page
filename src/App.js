import { Route, Routes } from "react-router-dom";
import "./App.css";
import Router from "./utils/Router";
import MenuBar from "./utils/MenuBar";
import BottomInfo from "./utils/BottomInfo";

function App() {
  return (
    <div className="App">
      <MenuBar />
      <Router />
      <BottomInfo />
    </div>
  );
}

export default App;
