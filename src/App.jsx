import "./App.css";

import { Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import MainLayout from "./layouts/MainLayout";
import Newswire from "./Pages/Newswire";
import Footer from "./layouts/Footer";
import CorporateInfo from "./Pages/CorporateInfo";
import Downloads from "./Pages/Downloads";
import Videos from "./Pages/Videos"

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newswire" element={<Newswire />}></Route>
        <Route path="/downloads" element={<Downloads />}></Route>
        <Route path="/videos" element={<Videos />}></Route>
      </Routes>
    </MainLayout>
  );
}

export default App;
