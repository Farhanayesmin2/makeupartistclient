import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../../Firebase/Firebase.config'

// Export Authcontext
export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Google / Github provider.
    const providerLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }
// For  a new user 
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
// Login with mail
    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

 
   
//Log out 
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
// For check the statement
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('inside auth state change', currentUser);
            setLoading(false);
        });

        return () => {
            unsubscribe();
        }

    }, [])

    const authInfo = { 
        user, 
        loading, 
        setLoading,
        providerLogin, 
        logOut, 
        createUser, 
        logIn 
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;