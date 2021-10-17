import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    //sign in using google 
    const signInUsingGoogle = () => {

        return signInWithPopup(auth, googleProvider)

    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                //setting the user
                setUser(user);

            } else {
                //user is not signed in
            }
        });
        return unsubscribe;
    }, [])

    // logOut function 
    const logOut = () => {

        signOut(auth)
            .then(() => {
                setUser({})
                console.log("signed out successfully")
            })
            .catch(err => console.log(err))
    }

    return {
        user,
        signInUsingGoogle,
        logOut
    }

}
export default useFirebase;