function Header() {
  return (
    <div>
      <div className="left-section">
        <ul>
          <li>Dashboard</li>
          <li>Charts</li>
          <li>Widgets</li>
          <li>Tables</li>
        </ul>
      </div>
      <div className="middle-section">
        <input className="search-bar" type="text" placeholder="search">
        </input>

      </div>
      <div className="right-section">

      </div>
    </div>
  );
}
export default Header;
