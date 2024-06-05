import Sidebar from "../components/Sidebar";
import AddTask from "../components/AddTask";
const Home = () => {
  return (
    <body>
      <div className="flex">
        <div>
          <Sidebar />
        </div>
        <div>
          <AddTask />
        </div>
      </div>
    </body>
  );
};

export default Home;
