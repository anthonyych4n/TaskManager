import "../index.css";

function Navbar() {
  // Use Mapping for navigation links
  /*
  function NumberList(props) {
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map((number) =>
        <ListItem key={number.toString()}
                  value={number} />
      )}
    </ul>
  );
}
  */
  /*const navLinks = {
    about: "/about",
    contact: "/contact",
    login: "/login",
    startNow: "/createaccount",
  };*/

  return (
    <header className="bg-white rounded-b-md">
      <nav className="flex justify-between items-center w-[80%] mx-auto py-5">
        <div className="flex justify-between items-center">
          <img src="/icon.png" alt="" className="h-10 w-10" />
          <a className="text-black-300 text-3xl px-2.5" href="/">
            To-doify
          </a>
        </div>
        <div className="">
          <ul className="flex items-center gap-[4vw]">
            <li>
              <a
                href="/about"
                className="hover:bg-gray-100 rounded-md px-2.5 py-1.5"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:bg-gray-100 rounded-md px-2.5 py-1.5"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">
            <a href="/login">Log in</a>
          </button>
          <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">
            <a href="/createaccount">Start now</a>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
