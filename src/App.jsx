import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import CreateAccount from "./pages/CreateAccountPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import About from "./pages/AboutPage.jsx";
import Contact from "./pages/ContactPage.jsx";
import Today from "./pages/TodayPage.jsx";
import Inbox from "./pages/InboxPage.jsx";
import Upcoming from "./pages/UpcomingPage.jsx";
import Trash from "./pages/TrashPage.jsx";
import "./index.css";

export function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/home/inbox" element={<Inbox />}></Route>
          <Route path="/home/today" element={<Today />}></Route>
          <Route path="/home/upcoming" element={<Upcoming />}></Route>
          <Route path="/home/trash" element={<Trash />}></Route>
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
