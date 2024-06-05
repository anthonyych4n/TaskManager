import Inbox from "../../public/inbox.svg";
import Search from "../../public/search.svg";
import Calendar from "../../public/calendar.svg";
import Trash from "../../public/trash-2.svg";
import Today from "../../public/sun.svg";
import Add from "../../public/plus-circle.svg";
import Minimize from "../../public/minimize-2.svg";
import Bell from "../../public/bell.svg";
import User from "../../public/user.svg";

const Sidebar = () => {
  return (
    <nav className="bg-gray-200 text-black h-screen w-64 drop-shadow-lg text-xs">
      <div className="flex py-3 p-4 justify-between">
        <div className="flex justify-start space-x-4 items-center">
          <img src={User} alt="" className="h-5 w-5" />{" "}
          {/* Profile Image (Add Later))*/}
          <a href="">Burton Jong</a>
        </div>
        <div className="flex justify-end space-x-1 items-center">
          <img src={Bell} alt="" className="h-5 w-5" /> {/* Bell Icon*/}
          <img src={Minimize} alt="" className="h-5 w-5" />{" "}
          {/* Open Close Sidebar Icon*/}
        </div>
      </div>

      <div className="flex p-4 ">
        <button className="flex space-x-4 items-center">
          <img src={Add} alt="" className="h-5 w-5" />
          <a href="">Add Task</a>
        </button>
      </div>

      <div className="flex text-justify">
        <ul className="flex p-4 flex-col ">
          <li className="py-1.5 flex space-x-4 text-justify items-center">
            <img src={Search} alt="Search" className="h-5 w-5" />
            <a href="">Search</a>
          </li>

          <li className="py-1.5 flex space-x-4 text-justify items-center">
            <img src={Inbox} alt="Inbox" className="h-5 w-5" />
            <a href="/home/inbox">Inbox</a>
          </li>

          <li className="py-1.5 flex space-x-4 text-justify items-center">
            <img src={Today} alt="" className="h-5 w-5" />
            <a href="/home/today">Today</a>
          </li>
          <li className="py-1.5 flex space-x-4 text-justify items-center">
            <img src={Calendar} alt="Calendar" className="h-5 w-5" />
            <a href="/home/upcoming">Upcoming</a>
          </li>
          <li className="py-1.5 flex space-x-4 text-justify items-center">
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
