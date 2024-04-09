import Button from "@mui/material/Button";

//Components
import Profileinfo from "./Profileinfo";


//Icons
import { FiHome } from "react-icons/fi";
import { RxDashboard } from "react-icons/rx";
import { FaRegCircleCheck } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";


const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <Profileinfo></Profileinfo>
        <ul>
          <li>
            <Link to="/">
            <Button className="w-100" variant="extendedFab">
              <span className="icon">
                <FiHome></FiHome>
              </span>
              Home
            </Button>
            </Link>
          </li>
          <li>
            <Link to="/clientlist">
            <Button className="w-100" variant="extendedFab">
              <span className="icon">
                <RxDashboard></RxDashboard>
              </span>
              Client list
            </Button>
            </Link>
          </li>
          <li>
            <Link to="/">
            <Button className="w-100" variant="extendedFab">
              <span className="icon">
                <FaRegCircleCheck></FaRegCircleCheck>
              </span>
              Send recommendations
            </Button>
            </Link>
          </li>
          <li>
            <Link to="/">
            <Button className="w-100" variant="extendedFab">
              <span className="icon">
                <FaRegCircleCheck></FaRegCircleCheck>
              </span>
              Historical recos
            </Button>
            </Link>
          </li>
          <li>
            <Link to="/">
            <Button className="w-100">
              <span className="icon">
                <FaRegCircleCheck></FaRegCircleCheck>
              </span>
              Client portfolio status
            </Button>
            </Link>
          </li>
          <li>
            <Link to="/">
            <Button className="w-100">
              <span className="icon">
                <IoSettingsOutline></IoSettingsOutline>
              </span>
              Settings
            </Button>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Sidebar;
