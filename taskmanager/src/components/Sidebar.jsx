const Sidebar = () => {
  return (
    <nav className="bg-gray-200 text-black h-screen w-64 drop-shadow-lg">
      <div>
        <img src="" alt="" />
        <img src="" alt="" />
        <a href=""> i love big black men</a>
      </div>
      <div>
        <button>
          <a href="">+</a>
        </button>
      </div>
      <div>
        <ul className="p-4">
          <li className="py-2">
            <a href="">Search</a>
          </li>
          <li className="py-2">
            <a href="">Inbox</a>
          </li>
          <li className="py-2">
            <a href="">Today</a>
          </li>
          <li className="py-2">
            <a href="">Upcoming</a>
          </li>
        </ul>
      </div>
      <div></div>
    </nav>
  );
};

export default Sidebar;
