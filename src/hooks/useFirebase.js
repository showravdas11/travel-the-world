import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../components/Login/Firebase/firebase.init";






initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({})

    const [isLoading, setIsLoading] = useState(true)

    const [authError, setAuthError] = useState('')


    const auth = getAuth();

    const registerUser = (email, password) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            setAuthError ('');
          })
          .catch((error) => {
            setAuthError (error.message);
          })
          .finally(() => setIsLoading(false));

    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const destination = location?.state?.from || '/'
          history.replace(destination)
            setAuthError ('');

          })
          .catch((error) => {
            setAuthError (error.message);
          })
          .finally(() => setIsLoading(false));
    }



    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
    }, [])

    const logout = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally(() => setIsLoading(false));
    }

    return{
        user,
        isLoading,
        loginUser,
        registerUser,
        logout,
        authError
    }


}

export default useFirebase;