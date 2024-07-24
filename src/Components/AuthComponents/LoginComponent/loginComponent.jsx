// styles
import './loginComponent.css';
// react states
import { useState } from 'react';
// mui icons
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../Redux/Slices/userSlice';
import { signOut } from 'firebase/auth';
import { auth } from '../../../Database/Firebase/firebase';

// custom hooks
import { useLogin } from '../../../Hooks/Authentication/Login/useLogin';
import { CircularProgress } from '@mui/material';

export default function LoginComponent(){

    // To check is user is already logged in
    const currentUser = useSelector(selectUser);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event)=>{
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event)=>{
        setPassword(event.target.value);
    }
    
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = ()=>{
        if(isVisible){
            setIsVisible(false);
        }else{
            setIsVisible(true);
        }
    }

    // To signout the user.
    const signoutUser = ()=>{
        signOut(auth);
    }

    // To log user in, if they already have an account.
    const { loggingIn, loginError, setLoginError, loginUser } = useLogin();
    const handleUserLogin = ()=>{
        if(email === '' || email.length === 0){
            setLoginError('Email is required');
            return;
        }
        if(password === '' || password.length === 0){
            setLoginError('Please enter your password');
            return;
        }

        loginUser(email, password);
    }

    return(
        <div className='login-form-area'>
        {
            currentUser !== null &&
            <button className='login-cta'
                    onClick={()=>signoutUser()}
            >
                Logout
            </button>
        }
        {
            currentUser === null &&
            <>
                <div className="login-input-container">
                    <input type="text" 
                        className='login-input'
                        value={email}
                        onChange={handleEmailChange}
                        placeholder='Enter email here'
                    />
                </div>
                <div className="login-input-container">
                    <input type={isVisible ? "text" : "password"} 
                        className='login-input'
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder='Enter password here'
                    />
                    {
                        isVisible && 
                        <VisibilityIcon style={{ color:'#080808' }}
                            onClick={()=>toggleVisibility()}
                        />
                    }
                    {
                        !isVisible && 
                        <VisibilityOffIcon style={{ color:'#080808' }}
                            onClick={()=>toggleVisibility()}
                        />
                    }
                </div>
                {
                    loggingIn && <CircularProgress size={24} style={{ 'color':'var(--deep-blue)' }} />
                }
                {
                    loggingIn === false &&
                    <button className='login-cta'
                        onClick={()=>handleUserLogin()}
                    >
                        Login
                    </button>
                }
                {
                    loginError && 
                        <p className='login-form-subheading' style={{ color:'red' }}>
                            {loginError}
                        </p>
                }
            </>
        }
        </div>
    )
}