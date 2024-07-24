// styles
import './footer.css';
// react router dom
import { useNavigate } from 'react-router-dom';

export default function Footer(){

    const footerNav = useNavigate();
    const handleNavigateToSponsorPage = ()=>{
        footerNav('/sponsorship')
    }

    return(
        <footer className='footer-container'>
            <p className='footer-txt'>Copyright © 2024, i-Rheo Web. All rights reserved.</p>
            <div className="footer-links">
                <button className='footer-btns'>
                    Publications
                </button>
                <button className='footer-btns'>
                    About
                </button>
                <button className='footer-btns'
                        onClick={()=>handleNavigateToSponsorPage()}
                >
                    Sponsors
                </button>            
            </div>
        </footer>
    )
}