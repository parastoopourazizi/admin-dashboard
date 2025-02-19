import "./sidebar.css";
function SideBar() {
  return (
    <div className="sidebar">
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
  );
}
export default SideBar;
