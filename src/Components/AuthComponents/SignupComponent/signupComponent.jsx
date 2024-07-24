// styles
import './signupComponent.css';
// react states
import { useState } from 'react';
// mui icons
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
// custom hooks
import { useSignup } from '../../../Hooks/Authentication/Signup/useSignup';
import { CircularProgress } from '@mui/material';
// react redux
import { useSelector } from 'react-redux';
import { selectUser } from '../../../Redux/Slices/userSlice';
// Database
import { signOut } from 'firebase/auth';
import { auth } from '../../../Database/Firebase/firebase';

export default function SignupComponent(){

    // To check whether user is already signed in or not.
    const currentUser = useSelector(selectUser);


    const [useremail, setUserEmail] = useState('');
    const [userpass, setUserPassword] = useState('');

    const handleUserEmailChange = (event)=>{
        setUserEmail(event.target.value);
    }

    const handleUserPasswordChange = (event)=>{
        setUserPassword(event.target.value);
    }
    
    const [isPassVisible, setIsVisible] = useState(false);
    const toggleVisibility = ()=>{
        if(isPassVisible){
            setIsVisible(false);
        }else{
            setIsVisible(true);
        }
    }

    // custom hook initialization to sign user up
    const { registering, registerUser, resgisterError, setRegisterError } = useSignup();
    const handleSignup = ()=>{
        if(useremail === '' || useremail.length === 0){
            setRegisterError('Email is required');
            return;
        }
        if(userpass === '' || userpass.length === 0){
            setRegisterError('Please create a password for your account protection');
            return;
        }

        registerUser(useremail, userpass);
    }

    // To signout the user.
    const signoutUser = ()=>{
        signOut(auth);
    }
    
    return(
        <>
        {
            currentUser !== null && 
            <button className='signup-cta'
                    onClick={()=>signoutUser()}
            >
                Logout
            </button>
        }
        {
            currentUser === null && 
            <div className='signup-form-area'>
                <div className="signup-input-container">
                    <input type="text" 
                        className='signup-input'
                        value={useremail}
                        onChange={handleUserEmailChange}
                        placeholder='Enter email here'
                    />
                </div>
                <div className="signup-input-container">
                    <input type={isPassVisible ? "text" : "password"} 
                        className='signup-input'
                        value={userpass}
                        onChange={handleUserPasswordChange}
                        placeholder='Enter password here'
                    />
                    {
                        isPassVisible && 
                        <VisibilityIcon style={{ color:'#080808' }}
                            onClick={()=>toggleVisibility()}
                        />
                    }
                    {
                        !isPassVisible && 
                        <VisibilityOffIcon style={{ color:'#080808' }}
                            onClick={()=>toggleVisibility()}
                        />
                    }
                </div>
                {
                    registering === false && 
                    <button className='signup-cta'
                            onClick={()=>handleSignup()}
                    >
                        Register
                    </button>
                }
                {
                    registering === true &&
                    <CircularProgress size={18} style={{ color:'var(--deep-blue)' }}/>
                }
                {
                    resgisterError && <p className='signup-form-subheading' style={{ 'color':'red' }}>{resgisterError}</p>
                }
            </div>
        }
        </>
    )
}