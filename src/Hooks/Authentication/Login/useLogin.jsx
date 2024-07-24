// react states
import { useState } from 'react';

// database
import { auth } from '../../../Database/Firebase/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export const useLogin = ()=>{
    const [loggingIn, setLoggingIn] = useState(false);
    const [loginError, setLoginError] = useState(null);

    const loginUser = (mail, password)=>{
        setLoggingIn(true);
        signInWithEmailAndPassword(auth, mail, password).then((_)=>{
            setLoggingIn(false);
            setLoginError(null);
            return;
        }).catch((err)=>{
            setLoginError(err.message);
            setLoggingIn(false);
            return;
        })
    }

    return { loggingIn, setLoginError, loginError, loginUser };
}