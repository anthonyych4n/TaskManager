import Sidebar from "../components/Sidebar";

function Inbox() {
  return (
    <body className="text-gray-500">
      <div className="flex flex-row">
        <div>{<Sidebar />}</div>

        {/* Add Inbox stuff in here*/}
      </div>
    </body>
  );
}

export default Inbox;
