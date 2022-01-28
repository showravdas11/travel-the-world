import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../components/Login/Firebase/firebase.init";






initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({})

    const [isLoading, setIsLoading] = useState(true)

    const [authError, setAuthError] = useState('')

    const [admin, setAdmin] = useState(false)


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            setAuthError ('');
            const newUser = {email, displayName:name}
            setUser(newUser)
            //save user to the database
            saveUser(email, name, 'POST')

            updateProfile(auth.currentUser, {
              displayName: name
            }).then(() => {
              // Profile updated!
              // ...
            }).catch((error) => {
              // An error occurred
              // ...
            });
            history.replace('/')
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

    const signInWithGoogle = ( location, history) =>{
      setIsLoading(true)
          signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        saveUser(user.email, user.displayName, 'PUT')
        setAuthError ('');
        const destination = location?.state?.from || '/'
          history.replace(destination)
      }).catch((error) => {
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

    useEffect(() => {
      fetch(`https://travel-the-world11.herokuapp.com/users/${user.email}`)
          .then(res => res.json())
          .then(data => setAdmin(data.admin))
      try {
          // test code
      } catch (error) { // if error
          console.error(error); // return error
      }

  }, [user.email])

    const logout = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally(() => setIsLoading(false));
    }
    const saveUser = (email, displayName, method) =>{
      const user = { email, displayName }
      fetch('https://travel-the-world11.herokuapp.com/users', {
        method: method,
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then()
    }

    return{
        user,
        admin,
        isLoading,
        loginUser,
        registerUser,
        logout,
        authError,
        signInWithGoogle
    }


}

export default useFirebase;