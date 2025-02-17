import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="left-section">
        <p className="admin">Admin</p>
        <nav>
          <ul>
            <li>
              <a href="#">Dashboard</a>
            </li>
            <li>
              {" "}
              <a href="#">Charts</a>
            </li>
            <li>
              {" "}
              <a href="#">Widgets</a>
            </li>
            <li>
              {" "}
              <a href="#">Tables</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="middel-section">
        <input className="search-bar" type="text" placeholder="search"></input>
      </div>
      <div className="right-section">
        <img src="icons/icons8-male-user-32.png"></img>
        <img src="icons/icons8-comment-24.png"></img>
        <img src="icons/icons8-notification-50.png"></img>
      </div>
    </div>
  );
}
export default Header;
