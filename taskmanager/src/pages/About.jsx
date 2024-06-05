import "../App.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <body className="font-[Poppins] bg-gradient-to-tr from-[#fbc2eb] to-[#a6c1ee] h-[100%]">
      <div className="">
        <div className="">
          <Navbar />
        </div>
        <div className="flex items-center justify-center h-screen">
          <div className="bg-white items-center rounded-xl p-10">
            <h1 className="flex items-center  justify-center text-lg">
              About Us{" "}
            </h1>
            <p className="flex items-center  justify-center text-sm">
              A todo task manager that will increaes your productivity.
            </p>
            <div className="flex items-center justify-center pt-5"></div>
          </div>
        </div>

        <Footer />
      </div>
    </body>
  );
};

export default About;
