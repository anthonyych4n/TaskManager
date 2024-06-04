import "../index.css";

function Navbar() {
  return (
    <header className="bg-white rounded-b-md">
      <nav className="flex justify-between items-center w-[80%] mx-auto py-5">
        <div className="">
          <a className="text-black-300 text-3xl">Shibal To-do</a>
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
          <button
            href="/login"
            className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]"
          >
            Log in
          </button>
          <button
            href="/createaccount"
            className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]"
          >
            Start now
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
