import "./NavbarBefore.css";

function NavbarBefore() {
  return (
    <nav className="navbar">
      <h1 className="site-title">Shibal To-do</h1>
      <ul>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="">Contact</a>
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
