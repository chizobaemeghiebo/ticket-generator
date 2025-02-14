import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import HomePage from "./Pages.jsx/HomePage";
// import FormPage from "./Pages.jsx/FormPage";
// import TicketPage from "./Pages.jsx/TicketPage";
import UserForm from "./components/UserForm";
// import Nav from "./components/Nav";
// import Upload from "./components/Upload";
import "./App.css";

function App() {
  const addFormData = (newTicket) => {
    console.log(newTicket);
  };
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route index element={<HomePage formData={addFormData} />} />
        <Route path="/get-tickets" element={<FormPage />} />
        <Route path="/ticket" element={<TicketPage />} />
        <Route path="/upload" element={<Upload />} /> */}
        <Route path="/" element={<UserForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
