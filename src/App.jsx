import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./Pages.jsx/HomePage";
import FormPage from "./Pages.jsx/FormPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/get-tickets" element={<FormPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
