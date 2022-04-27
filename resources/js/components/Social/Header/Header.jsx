import "./header.scss";
import { Link } from "react-router-dom";
import ProfileDropdown from "../profile/components/profile-dropdown/ProfileDropdown";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
export default function Header() {
    return (
        <header className="social-header container">
            <div className="social-logo">
                <Link to="/">
                    <img src="/img/icon.png" alt="Logo" className="logo-img" />
                </Link>
            </div>

            <div className="social-user">
                <div className="social-user__profile">
                    <ProfileDropdown />
                </div>
                <NotificationsOutlinedIcon />
            </div>
        </header>
    );
}
