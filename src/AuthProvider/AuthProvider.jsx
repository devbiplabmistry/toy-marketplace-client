/* eslint-disable no-unused-vars */
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";
import { getAuth,signInWithPopup,GoogleAuthProvider ,signOut, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext()
const provider = new GoogleAuthProvider();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    const registerWithEmail = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginWithEmail = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
      return  signOut(auth);
    }
    const SignInWithGoogle =()=>{
        return signInWithPopup(auth, provider)
    }

    const AuthInfo = {
        user,
        registerWithEmail,
        loginWithEmail,
        logOut,
        SignInWithGoogle,
    }
    // console.log(singleToy);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                setLoading(false)
            }
        });
        return () => {
            unsubscribe();
        }

    }, [])

    return (
        <AuthContext.Provider value={AuthInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;