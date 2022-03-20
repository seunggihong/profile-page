import "../css/MenuBar.css";

function MenuBar() {
  return (
    <div className="menu-bar">
      <a className="name-tag" href="/">
        <text>Hong Seunggi</text>
      </a>
      <div className="menu-bar-detail">
        <a href="/profile">
          <text>Profile</text>
        </a>
        <a href="/project">
          <text>Project</text>
        </a>
        <a href="/about">
          <text>About</text>
        </a>
      </div>
    </div>
  );
}

export default MenuBar;
