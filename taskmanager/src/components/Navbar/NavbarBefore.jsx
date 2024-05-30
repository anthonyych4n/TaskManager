import "../../index.css";

function NavbarBefore() {
  return (
    <nav className="navbar">
      <a className="site-title">Shibal To-do</a>
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
