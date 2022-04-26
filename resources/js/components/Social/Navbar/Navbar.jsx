import "./navbar.scss";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
export default function Navbar() {
    return (
        <section className="navbar-section">
            <nav className="navbar-nav">
                <ul className="nav-items">
                    <li className="nav-item">
                        <HomeOutlinedIcon className='navbar__icon'/>
                        <span className="nav-text">Новости</span>
                    </li>
                    <li className="nav-item">
                        <AccountCircleOutlinedIcon className='navbar__icon'/>
                        <span className="nav-text">Профиль</span>
                    </li>
                    <li className="nav-item">
                        <EmailOutlinedIcon className='navbar__icon'/>
                        <span className="nav-text">Сообщения</span>
                    </li>

                    <li className="nav-item">
                        <GroupOutlinedIcon className='navbar__icon'/>
                        <span className="nav-text">Друзья</span>
                    </li>
                    <li className="nav-item" >
                        <SettingsOutlinedIcon className='navbar__icon'/>
                        <span className="nav-text">Настройки</span>
                    </li>
                    <li className="nav-item">
                        <SettingsOutlinedIcon className='navbar__icon'/>
                        <span className="nav-text">Что я блять накодил?</span>
                    </li>
                </ul>
            </nav>
        </section>
    );
}
