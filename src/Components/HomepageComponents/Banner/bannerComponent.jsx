// styles
import './bannerComponent.css';
// asset(s)
import bannerImg from '../../../Assets/Images/banner.png';
import iRheoLogo from '../../../Assets/Logo/logo-e92da520-removebg-preview.png';
// react-router-dom
import { useNavigate } from 'react-router-dom';

export default function BannerComponent(){
    
    const homepageNav = useNavigate();
    const handleNavigationToModulesPage = ()=>{
        homepageNav('/modules');
    }
    
    return(
        <div className="main-banner-area">
            {/* <div className="main-banner-overlay"></div> */}
            {/* <img className='banner-bg' src={bannerImg} alt={'iRheo'} /> */}
            <div className="main-banner-content">
                <p className='banner-heading'>
                    Innovative Rheology 
                </p>
                <div className="banner-image">
                    <img className='main-banner-logo' src={iRheoLogo} alt="" />
                </div>
                <p className='banner-tagline'>Rheology anywhere, anytime with our website!</p>
                <button className="banner-cta"
                        onClick={()=>handleNavigationToModulesPage()}
                >
                    Check out our modules
                </button>
                <button className='banner-secondary-cta'>Become a sponsor</button>
            </div>
        </div>
    )
}