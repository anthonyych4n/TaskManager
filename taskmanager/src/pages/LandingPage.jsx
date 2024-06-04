import "../App.css";
import Footer from "../components/Footer";
// importing components from react-router-dom package
import { Navigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";

function LandingPage() {
  const [goToCreateAccount, setGoToCreateAccount] = useState(false);

  if (goToCreateAccount) {
    return <Navigate to="/createaccount" />;
  }
  return (
    <body className="font-[Poppins] bg-gradient-to-tr from-[#fbc2eb] to-[#a6c1ee] h-[100%]">
      <div className="">
        <div className="">
          <Navbar />
        </div>
        <div className="flex items-center justify-center h-screen">
          <div className="bg-white items-center rounded-md p-10">
            <h1 className="flex items-center  justify-center text-lg">
              Oragnize your life and work, finally.{" "}
            </h1>
            <p className="flex items-center  justify-center text-sm">
              Become focused, organized, and calm with Shibal To-do.
            </p>
            <div className="flex items-center justify-center pt-5">
              <button
                className="flex items-center justify-center bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]"
                onClick={() => {
                  setGoToCreateAccount(true);
                }}
              >
                {""}
                Start now
              </button>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </body>
  );
}

export default LandingPage;
