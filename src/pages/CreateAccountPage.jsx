import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export function CreateAccountPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your account creation logic here
    console.log("Creating account...");
    console.log("Username:", username);
    console.log("Password:", password);
    // Reset form fields
    setUsername("");
    setPassword("");
  };

  return (
    <body className="font-[Poppins] bg-gradient-to-tr from-[#fbc2eb] to-[#a6c1ee] h-[100%]">
      <div className="">
        <div className="">
          <Navbar />
        </div>
        <div className="flex items-center justify-center h-screen">
          <div className="bg-white items-center rounded-xl p-10">
            <h1>Create Account</h1>
            <form onSubmit={handleSubmit}>
              <label>
                Username:
                <input
                  type="text"
                  value={username}
                  onChange={handleUsernameChange}
                />
              </label>
              <br />
              <label>
                Password:
                <input
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </label>
              <br />
              <button type="submit">Create Account</button>
            </form>
            <div className="flex items-center justify-center pt-5"></div>
          </div>
        </div>

        <Footer />
      </div>
    </body>
  );
}

export default CreateAccountPage;
