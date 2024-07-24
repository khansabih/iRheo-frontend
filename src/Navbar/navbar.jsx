// styles
import './navbar.css';
// logo
import companyLogo from '../Assets/Logo/logo-e92da520.png';
// mui components
// import MailIcon from '@mui/icons-material/Mail';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// react-router-dom
import { useNavigate } from 'react-router-dom';
// react redux
import { useSelector } from 'react-redux';
import { selectUser } from '../Redux/Slices/userSlice';

export default function Navbar(){

    // To check whether user is logged in or not
    const current_user = useSelector(selectUser);

    // For the navigation from navbar to respective pages
    const navbarNav = useNavigate();
    const navigateToHome = ()=>{
        navbarNav('/');
    }

    const navigateToModules = ()=>{
        navbarNav('/modules');
    }

    const navigateToSponsors = ()=>{
        navbarNav('/sponsorship');
    }

    const navigateToAbout = ()=>{
        navbarNav('/');
    }

    const navigateToContact = ()=>{
        navbarNav('/contact');
    }

    const navigateToLogin = ()=>{
        navbarNav('/login')
    }

    return(
        <nav className='navbar'>
            <div className="company-logo-and-menu">
                <div className="company-logo-container"
                     onClick={()=>navigateToHome()}
                >
                    <img src={companyLogo} alt='iRheoWeb' />
                </div>
                <div className="nav-vertical-spacer">
                    |
                </div>
                <div className="navbar-menu-items">
                    <button className='navbar-menu-btn'
                            onClick={()=>navigateToHome()}
                    >
                        Home
                    </button>
                    <button className='navbar-menu-btn'
                            onClick={()=>navigateToModules()}
                    >
                        Modules
                    </button>
                    <button className='navbar-menu-btn'
                            onClick={()=>navigateToSponsors()}
                    >
                        Sponsors
                    </button>
                    <button className='navbar-menu-btn'
                            onClick={()=>navigateToAbout()}
                    >
                        About
                    </button>
                </div>
            </div>
            <div className="navbar-cta-area">
                <p className='navbar-text'>Have any queries?</p>
                <button className="navbar-cta"
                        onClick={()=>navigateToContact()}
                >
                    {/* <MailIcon style={{ 'marginRight':'7px' }}/> */}
                    Contact Us
                </button>
                <button className='navbar-login-cta'
                        onClick={()=>navigateToLogin()}
                >
                    <AccountCircleIcon style={{ fontSize:'36px' }}/>
                    {
                        current_user !== null && `My Profile`
                    }
                </button>
            </div>
        </nav>
    )
}