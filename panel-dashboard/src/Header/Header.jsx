import "./header.css";

function Header() {
  return (
    <div className="header">
     
      <div className="middel-section">
        <img className="humberger-menu" src="icons8-hamburger-menu-32.png"></img>
        <input className="search-bar" type="text" placeholder="search"></input>
      </div>
      <div className="right-section">
        <img src="icons/icons8-male-user-32.png"></img>
        <img src="icons/icons8-comment-24.png"></img>
        <img src="icons/notification.png"></img>
      </div>
    </div>
  );
}
export default Header;
