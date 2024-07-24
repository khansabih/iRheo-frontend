// react states
import { useState } from 'react';
// database
import { auth } from '../../../Database/Firebase/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';


export const useSignup = ()=>{
    const [registering, setRegistering] = useState(false);
    const [resgisterError, setRegisterError] = useState(null);

    const registerUser = async(mail, pass)=>{
        setRegistering(true);
        createUserWithEmailAndPassword(auth, mail, pass).then((userCreds)=>{
            setRegistering(false);
            setRegisterError(null);
            return;
        }).catch((err)=>{
            setRegisterError(err.message);
            setRegistering(false);
            return;
        })
    }

    return { registering, resgisterError, setRegisterError, registerUser };
}