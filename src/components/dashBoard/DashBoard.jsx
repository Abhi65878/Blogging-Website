import { Link } from "react-router-dom";
import "./DashBoard.css";

const DashBoard = () => {
  return (
    <div className="dashboard">
      {/* <h2>Dashboard</h2> */}
      <ul className="dashboard-">
        <li>
          <Link to="/settings">My Profile</Link>
        </li>
        <li>
          <Link to="/blogs">My Blog List</Link>
        </li>
        <li>
          <Link to="/createBlog">Create Blog</Link>
        </li>
      </ul>
    </div>
  );
};

export default DashBoard;
