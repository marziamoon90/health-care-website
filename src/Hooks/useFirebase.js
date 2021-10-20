import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, getAuth, signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
import initAuthentication from '../pages/Firebase/firebase.init';

initAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState()

    const gooleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    // sign in using google 
    const signInUsingGoogle = () => {
        signInWithPopup(auth, gooleProvider)
    }

    // sign up with email and password 
    const signUpWithEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // log in with email sendPasswordResetEmail 
    const signInWithEmailPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // on auth state changed 
    useEffect(() => {
        const loginOrlogout = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else { setUser({}) }
        });
        return () => loginOrlogout;
    }, []);

    // logOut 
    const logOut = () => {
        signOut(auth).then(() => {
            setUser({})
        })

    }

    return {
        user,
        signInUsingGoogle,
        logOut,
        signUpWithEmail,
        signInWithEmailPassword
    }
};

export default useFirebase;