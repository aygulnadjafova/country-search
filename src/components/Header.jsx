import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="logo">
            <Link to="/">Logo</Link>
          </div>
          <nav className="navBar">
            <ul className="navList">
              <li className="navItem">
                <Link to="/">Home</Link>
              </li>
              <li className="navItem">
                <Link to="/search">Search</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
