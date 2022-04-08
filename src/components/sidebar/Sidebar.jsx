import "./sidebar.scss";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import InventoryIcon from '@mui/icons-material/Inventory';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import DescriptionIcon from '@mui/icons-material/Description';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">linaDev14</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
        <p className="title">PRESENTATION</p>

        <Link to="/harwareStore" style={{ textDecoration: "none" }}>
            <li>
              <MapsHomeWorkIcon className="icon" />
              <span>Hardware Store</span>
            </li>
          </Link>
          <p className="title">LISTS</p>

          <Link to="/customers" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Customers</span>
            </li>
          </Link>

          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>New Products</span>
            </li>
          </Link>

          <Link to="/suppliers" style={{ textDecoration: "none" }}>
            <li>
              <ContactMailIcon className="icon" />
              <span>Suppliers</span>
            </li>
          </Link>

          <Link to="/listProduct" style={{ textDecoration: "none" }}>
            <li>
              <InventoryIcon className="icon" />
              <span>List products</span>
            </li>
          </Link>

          <Link to="/bill" style={{ textDecoration: "none" }}>
            <li>
              <DescriptionIcon className="icon" />
              <span>Bill</span>
            </li>
          </Link>



          <p className="title">LOCATION</p>
          <Link to="/map" style={{ textDecoration: "none" }}>
            <li>
              <LocationOnIcon className="icon" />
              <span>Map</span>
            </li>
          </Link>

          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <li>
              <ExitToAppIcon  className="icon" />
              <span>Logout</span>
            </li>
          </Link>
        </ul>

      </div>
      <div className="bottom">
        <div className="colorOption" onClick={() => dispatch({type: "LIGHT"})}/>
        <div className="colorOption" onClick={() => dispatch({type: "DARK"})}/>
      </div>
    </div>
  );
};

export default Sidebar;
