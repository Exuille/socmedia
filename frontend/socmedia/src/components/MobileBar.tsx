import { FaRegUserCircle } from "react-icons/fa";
import { MdDynamicFeed } from "react-icons/md";
import { FaMessage } from "react-icons/fa6";
import { GiThreeFriends } from "react-icons/gi";
import { IoSettings } from "react-icons/io5";
import { Link } from "react-router-dom";

import "../styles/MobileBar.css";

const MobileBar = () => {
  return (
    <div className="top-part">
      <h2>Feeds</h2>
      <ul>
        <Link
          style={{
            color: "#fd2d01",
          }}
          to="/user"
        >
          <FaRegUserCircle />
        </Link>
        <Link
          style={{
            color: "#fd2d01",
          }}
          to="/feed"
        >
          <MdDynamicFeed />
        </Link>
        <Link
          style={{
            color: "#fd2d01",
          }}
          to="/messages"
        >
          <FaMessage />
        </Link>
        <Link
          style={{
            color: "#fd2d01",
          }}
          to="/friends"
        >
          <GiThreeFriends />
        </Link>
        <Link
          style={{
            color: "#fd2d01",
          }}
          to="/settings"
        >
          <IoSettings />
        </Link>
      </ul>
      <input type="text" placeholder="Search accounts " />
    </div>
  );
};

export default MobileBar;
