import "../App.css";
import Footer from "../components/Footer";
// importing components from react-router-dom package
import { Navigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/NavbarBefore";

function LandingPage() {
  const [goToLogin, setGoToLogin] = useState(false);
  const [goToCreateAccount, setGoToCreateAccount] = useState(false);

  if (goToLogin) {
    return <Navigate to="/login" />;
  }

  if (goToCreateAccount) {
    return <Navigate to="/createaccount" />;
  }
  return (
    <body className="font-[Poppins] bg-gradient-to-tr from-[#fbc2eb] to-[#a6c1ee] h-screen">
      <div className="">
        <Navbar />
      </div>
      <div className="">
        <div className="">
          <button
            className=""
            onClick={() => {
              setGoToLogin(true);
            }}
          >
            {""}
            Login
          </button>
          <button
            className=""
            onClick={() => {
              setGoToCreateAccount(true);
            }}
          >
            {""}
            Create Account
          </button>
        </div>
      </div>
      <Footer />
    </body>
  );
}

export default LandingPage;
