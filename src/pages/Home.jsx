import Sidebar from "../components/Sidebar";
import AddTask from "../components/Modal/AddTask";

const Home = () => {
  return (
    <body>
      <div className="flex flex-row">
        <div>{<Sidebar />}</div>

        <div>{<AddTask />}</div>
      </div>
    </body>
  );
};

export default Home;
