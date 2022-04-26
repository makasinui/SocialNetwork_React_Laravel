import "./navbar.scss";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NavbarItems from "./NavbarItems";
export default function Navbar() {
    return (
        <section className="navbar-section">
            <nav className="navbar-nav">
                <ul className="nav-items">
                    <NavbarItems />
                </ul>
            </nav>
        </section>
    );
}
