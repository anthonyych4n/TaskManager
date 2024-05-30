import "../App.css";

function NavbarBefore() {
  return (
    <nav className="">
      <a className="text-red-200">Shibal To-do</a>
      <ul>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        {/*{<li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/createaccount">Register</a>
          </li>}*/}
      </ul>
    </nav>
  );
}

export default NavbarBefore;
