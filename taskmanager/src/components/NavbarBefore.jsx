import "../index.css";

function NavbarBefore() {
  return (
    <header className="bg-white">
      <nav className="">
        <div className="">
          <a className="text-black-300 w-100 ">Shibal To-do</a>
        </div>
        <div className="">
          <ul className="flex items-center gap-4">
            <li>
              <a href="/about" className="hover:text-gray-500">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-500">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default NavbarBefore;
