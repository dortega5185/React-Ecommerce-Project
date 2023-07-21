import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="categories">Categories</Link>
        </li>
        <li></li>
        <li></li>
        <li></li>
        {/* search bar */}
        <li></li>
        <li></li>
      </ul>
    </nav>
  );
}
