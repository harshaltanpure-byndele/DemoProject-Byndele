import { Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";

import image from "./Logo.png";

const Profileinfo = () => {
  return (
    <div className="card shadow border-1 p-3 mt-3">
      <div className="myProfileWrapper">
       
         <button className="myProfile d-flex align-items-center">
         <div className="userImg">
            <span className="rounded-circle">
              <img className="Profilelogo" src={image} alt="logo"></img>
            </span>
          </div>
          <div className="userInfo">
            <h5> Workplace</h5>
            <p className="mb-0">n clients</p>
          </div>
          <div className="dropDownArrow"><RiArrowDropDownLine></RiArrowDropDownLine></div>
         </button>
        
      </div>
      {/* <ul className="subProfile">
        <li>
          <Link to="/">one</Link>
        </li>
        <Link to="/">
          <li>two</li>
        </Link>
        <Link to="/">
          <li>three</li>
        </Link>
      </ul> */}
    </div>
  );
};
export default Profileinfo;
