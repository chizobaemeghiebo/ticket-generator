import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./Pages.jsx/HomePage";
import FormPage from "./Pages.jsx/FormPage";
import TicketPage from "./Pages.jsx/TicketPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/get-tickets" element={<FormPage />} />
        <Route path="/ticket" element={<TicketPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
