import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser, clearUser } from '../../Redux/Slices/userSlice';
import { auth } from '../../Database/Firebase/firebase';


const useAuth = ()=>{
    const dispatch = useDispatch();

    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged((user)=>{
            if (user) {
                dispatch(setUser({
                    'uid':user.uid,
                    'email': user.email
                }));
            } else {
                dispatch(clearUser());
            }
        })

        return ()=>unsubscribe();
    },[dispatch])
}

export default useAuth;