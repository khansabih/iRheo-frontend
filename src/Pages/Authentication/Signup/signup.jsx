// styles
import './signup.css';
// assets
import companyLogo from '../../../Assets/Logo/logo-e92da520-removebg-preview.png'
// custom components
import SignupComponent from '../../../Components/AuthComponents/SignupComponent/signupComponent';


export default function Signup(){
    return(
        <div className="signup-container">
            <p className='signup-form-heading'>Hi! Welcome to </p>
            <div className="signup-logo-container">
                <img src={companyLogo} alt=""/>
            </div>
            <SignupComponent/>
            <p className='signup-form-subheading'>Already have an account? 
                <a className='signup-form-sub-subheading' href='/login'>Log in</a>
            </p>
        </div>
    )
}