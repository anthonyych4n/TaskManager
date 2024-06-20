import Sidebar from "../components/Sidebar";

import AddTaskElement from "../components/AddTaskElement";

const Home = () => {
  return (
    <body className="text-gray-500">
      <div className="flex flex-row">
        <div>{<Sidebar />}</div>
        <div>{<AddTaskElement />}</div>
      </div>
    </body>
  );
};

export default Home;
