// styles
import './login.css';
// assets
import companyLogo from '../../../Assets/Logo/logo-e92da520-removebg-preview.png'
// custom components
import LoginComponent from '../../../Components/AuthComponents/LoginComponent/loginComponent';


export default function Login(){

    return(
        <div className="login-container">
            <p className='login-form-heading'>Hi! Welcome to </p>
            <div className="company-logo-container">
                <img src={companyLogo} alt=""/>
            </div>
            <LoginComponent/>
            <p className='login-form-subheading'>Don't have an account? 
                <a className='login-form-sub-subheading' href='/sign_up'>Sign up</a>
            </p>
        </div>
    )
}