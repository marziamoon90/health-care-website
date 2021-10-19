import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import initAuthentication from '../pages/Firebase/firebase.init';
initAuthentication();

const useFirebase = () => {
    const gooleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    // sign in using google 
    const signInUsingGoolge = () => {
        signInWithPopup(auth, gooleProvider)
    }

    return {
        signInUsingGoolge
    }
};

export default useFirebase;