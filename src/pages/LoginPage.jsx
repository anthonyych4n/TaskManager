import LogIn from "../components/LogIn";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function LoginPage() {
  return (
    <body className="font-[Poppins] bg-gradient-to-tr from-[#fbc2eb] to-[#a6c1ee] h-[100%]">
      <div className="">
        <div className="">{<Navbar />}</div>
        <div className="flex items-center justify-center h-screen">
          <div className="bg-white items-center rounded-xl p-10">
            {<LogIn />}
          </div>
        </div>
        <Footer />
      </div>
    </body>
  );
}

export default LoginPage;
