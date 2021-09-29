import { NavLink, Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <h3>The Dojo Blog</h3>
      <div className="links">
        <NavLink to="/">Home</NavLink>
        <Link to="/create">New Blog</Link>
      </div>
    </nav>
  );
};

export default Navbar;
