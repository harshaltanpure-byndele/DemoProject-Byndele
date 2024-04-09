import { Radio } from "@mui/icons-material";
import { Box, ThemeProvider } from "@mui/material";
import { IoMdRadioButtonOn } from "react-icons/io";


const Home = () => {
  return (
    <>
      <div className="right-content">
        <h1>What I can do</h1>
        <div className="card">
          <button className="newClientbtn  d-flex align-items-center" >
            <IoMdRadioButtonOn></IoMdRadioButtonOn>
            <h4>Create new client list</h4>
          </button>
        </div>
        <div className="card">
          <button className="newClientbtn  d-flex align-items-center">
            <IoMdRadioButtonOn></IoMdRadioButtonOn>
            <h4>Add new client to list</h4>
          </button>
        </div>
        <div className="card">
          <button className="newClientbtn  d-flex align-items-center">
            <IoMdRadioButtonOn></IoMdRadioButtonOn>
            <h4>Enter advise</h4>
          </button>
        </div>
      
      </div>
      
    </>
  );
};
export default Home;
