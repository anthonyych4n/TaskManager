import "./NavbarBefore.css";

function NavbarBefore() {
  return (
    <nav className="navbar">
      <a href="/" className="site-title">
        Shibal To-do
      </a>
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
