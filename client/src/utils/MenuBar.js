import "../css/MenuBar.css";

function MenuBar() {
  return (
    <div className="menu-bar">
      <a className="name-tag" href="/">
        <p>Hong Seunggi</p>
      </a>
      <div className="menu-bar-detail">
        <a href="/profile">
          <p>Profile</p>
        </a>
        <a href="/project">
          <p>Project</p>
        </a>
        <a href="/about">
          <p>About</p>
        </a>
      </div>
    </div>
  );
}

export default MenuBar;
