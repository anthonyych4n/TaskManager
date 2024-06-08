import Sidebar from "../components/Sidebar";
import AddTask from "../components/Modal/AddTask";

const Home = () => {
  return (
    <body className="text-gray-500">
      <div className="flex flex-row">
        <div>{<Sidebar />}</div>

        <div>{<AddTask />}</div>
      </div>
    </body>
  );
};

export default Home;
