import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <body className="font-[Poppins] bg-gradient-to-tr from-[#fbc2eb] to-[#a6c1ee] h-[100%]">
      <div className="">
        <div className="">
          <Navbar />
        </div>
        <div className="flex items-center justify-center h-screen">
          <div className="bg-white items-center rounded-xl p-10">
            <div>
              <h1>Contact Page</h1>
              <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="4" />

                <button type="submit">Submit</button>
              </form>
            </div>

            <div className="flex items-center justify-center pt-5"></div>
          </div>
        </div>

        <Footer />
      </div>
    </body>
  );
};

export default Contact;
