import { useEffect, useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import initializeAuthentication from './../Pages/Login/Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // Authentication For Email & Password Registration
    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                setUser(userCredential.user);

                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                })

                setTimeout(function () { history.replace('/'); }, 600);

                // Save user details in database
                saveUser(email, name, 'POST');
            })
            .catch((error) => {
                setAuthError(error.message)
            }).finally(() => {
                setIsLoading(false);
            });
    }

    // Authentication For Email & Password Login
    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                setTimeout(function () { history.replace(destination); }, 500);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message)
            }).finally(() => {
                setIsLoading(false);
            });
    }

    // Authentication For Google Sign In
    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const googleUser = result.user;
                setUser(googleUser)

                // Save user to the database
                saveUser(googleUser.email, googleUser.displayName, 'PUT');
                setAuthError('');

                const destination = location?.state?.from || '/';
                history.replace(destination);
            }).catch((error) => {
                setAuthError(error.message)
            }).finally(() => {
                setIsLoading(false);
            });
    }

    // observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);

            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, [auth])

    // Check Admin
    useEffect(() => {
        fetch(`https://blooming-anchorage-11174.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data.admin)
            })
    }, [user.email])

    // Logout
    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {

        }).catch((error) => {

        }).finally(() => {
            setIsLoading(false);
        });
    }

    // Save Users to Database
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName }
        fetch('https://blooming-anchorage-11174.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    return {
        user,
        admin,
        isLoading,
        authError,
        setAuthError,
        registerUser,
        signInWithGoogle,
        loginUser,
        logOut
    };
}

export default useFirebase;