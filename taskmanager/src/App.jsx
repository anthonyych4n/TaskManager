import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import HomePage from "./pages/HomePage/Home.jsx";
import CreateAccount from "./pages/CreateAccountPage/CreateAccountPage.jsx";
import ErrorPage from "./pages/NoPage/ErrorPage.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

export function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/createaccount" element={<CreateAccount />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
