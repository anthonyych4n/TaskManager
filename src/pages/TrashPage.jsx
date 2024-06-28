import Sidebar from "../components/Sidebar";

function Trash() {
  return (
    <body className="text-gray-500">
      <div className="flex flex-row">
        <div>{<Sidebar />}</div>
      </div>
    </body>
  );
}

export default Trash;
