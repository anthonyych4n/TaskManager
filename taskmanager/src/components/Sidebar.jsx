import Inbox from "/inbox.svg";
import Search from "/search.svg";
import Calendar from "/calendar.svg";
import Trash from "/trash-2.svg";
import Today from "/sun.svg";
import Add from "/add.png";
import Minimize from "/minimize-2.svg";
import Bell from "/bell.svg";
import User from "/user.svg";

const Sidebar = () => {
  return (
    <nav className="bg-gray-50 text-black h-screen w-64 drop-shadow-lg text-base">
      <div className="flex p-4 justify-between">
        <div className="flex justify-start space-x-2 items-center">
          <img src={User} alt="" className="h-5 w-5 text-gray-100" />{" "}
          {/* Profile Image (Add Later))*/}
          <a href="">Burton Jong</a>
        </div>
        <div className="flex justify-end space-x-2 items-center">
          <img src={Bell} alt="" className="h-5 w-5" /> {/* Bell Icon*/}
          <button>
            <img src={Minimize} alt="" className="h-5 w-5" />
            {}
          </button>
          {/* Open Close Sidebar Icon*/}
        </div>
      </div>

      <div className="flex px-4 w-64 py-1">
        <button className="flex space-x-2 items-center">
          <img src={Add} alt="" className="h-5 w-5" />
          <a href="">Add Task</a>
        </button>
      </div>

      <div className="flex">
        <ul className="flex px-4 py-2 flex-col w-64">
          <li className="py-1.5 flex space-x-2 text-justify items-center">
            <img src={Search} alt="Search" className="h-5 w-5" />
            <a href="">Search</a>
          </li>

          <li className="py-1.5 flex space-x-2 text-justify items-center ">
            <img src={Inbox} alt="Inbox" className="h-5 w-5" />
            <a href="/home/inbox">Inbox</a>
          </li>

          <li className="py-1.5 flex space-x-2 text-justify items-center ">
            <img src={Today} alt="" className="h-5 w-5" />
            <a href="/home/today">Today</a>
          </li>
          <li className="py-1.5 flex space-x-2 text-justify items-center">
            <img src={Calendar} alt="Calendar" className="h-5 w-5" />
            <a href="/home/upcoming">Upcoming</a>
          </li>
          <li className="py-1.5 flex space-x-2 text-justify items-center">
            <img src={Trash} alt="" className="h-5 w-5" />
            <a href="/home/trash">Trash</a>
          </li>
        </ul>
      </div>
      <div></div>
    </nav>
  );
};

export default Sidebar;
