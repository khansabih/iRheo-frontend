// styles
import { useState } from 'react';
import LoginComponent from '../LoginComponent/loginComponent';
import './loginDialog.css';
// mui components
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import SignupComponent from '../SignupComponent/signupComponent';

export default function LoginDialog({ authDialogOpen, setAuthDialogOpen }){
    
    const handleAuthDialogClose = ()=>{
        setAuthDialogOpen(false);
    }

    const [currentComponent, setCurrentComponent] = useState(0);
    const toggleAuthComponent = (index)=>{
        setCurrentComponent(index);
    }
    
    return(
        <Dialog
            open={authDialogOpen}
            onClose={handleAuthDialogClose}
            fullWidth={true}
            maxWidth={'sm'}
        >
            <DialogTitle>
                <p className='auth-dialog-heading'>Analysis of your data is ready. Login for free to access them.</p>
            </DialogTitle>
            <DialogTitle className='auth-dialog-subheading'>
                <p>Welcome to iRheo</p>
            </DialogTitle>
            <DialogContent className='auth-dialog-content'>
            {
                currentComponent === 0 && 
                <>
                    <LoginComponent/>
                    <p>Don't have an account ? 
                        <button
                            className='auth-dialog-secondary-cta'
                            onClick={()=>toggleAuthComponent(1)}
                        >
                            Sign up
                        </button>
                    </p>
                </>
            }
            {
                currentComponent === 1 &&
                <>
                    <SignupComponent/>
                    <p>Already have an account ? 
                        <button
                            className='auth-dialog-secondary-cta'
                            onClick={()=>toggleAuthComponent(0)}
                        >
                            Log in
                        </button>
                    </p>
                </>
            }
            </DialogContent>
        </Dialog>
    )
}