import "./App.css";

import { Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import MainLayout from "./layouts/MainLayout";
import Newswire from "./Pages/Newswire";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newswire" element={<Newswire/>}></Route>
      </Routes>
    </MainLayout>
  );
}

export default App;
