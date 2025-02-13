function Header() {
  return (
    <div className="header">
      <div className="left-section">
        <nav>
          <ul>
            <li>
              <a href="#">Dashboard</a>
            </li>
            <li >  <a href="#">Charts</a></li>
            <li>  <a href="#">Widgets</a></li>
            <li>  <a href="#">Tables</a></li>
          </ul>
        </nav>
      </div>
      <div className="middle-section">
        <input className="search-bar" type="text" placeholder="search"></input>
      </div>
      <div className="right-section"></div>
    </div>
  );
}
export default Header;
