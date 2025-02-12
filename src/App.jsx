import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./Pages.jsx/HomePage";
import "./App.css";

function App() {
  // return (
  //   <Router>
  //     <Link path="/">
  //       <HomePage />
  //     </Link>
  //   </Router>
  // );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          {/* <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
