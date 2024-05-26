import "./LandingPage.css";
import Footer from "../../components/Footer/Footer";
// importing components from react-router-dom package
import { Navigate } from "react-router-dom";
import { useState } from "react";
import Nav from "../../components/Navbar/NavbarBefore";

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
    <div>
      <Nav />
      <div className="body">
        <div className="buttons">
          <button
            className="login-button"
            onClick={() => {
              setGoToLogin(true);
            }}
          >
            {""}
            Login
          </button>
          <button
            className="create-account-button"
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
    </div>
  );
}

export default LandingPage;
