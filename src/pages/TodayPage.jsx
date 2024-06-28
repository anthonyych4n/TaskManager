import Sidebar from "../components/Sidebar";

function TodayPage() {
  return (
    <body className="text-gray-500">
      <div className="flex flex-row">
        <div>{<Sidebar />}</div>
        {/* Add Today's stuff in here*/}
      </div>
    </body>
  );
}

export default TodayPage;
