import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
const Home = () => {
  return (
    <body>
      <div>
        <div>
          <Sidebar />
        </div>
        <div>
          <h1>Welcome to the Task Manager</h1>
          {/* Add your content here */}
        </div>

        <Footer />
      </div>
    </body>
  );
};

export default Home;
