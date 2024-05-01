import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext=createContext(null);
       const auth=getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const[loading,setLoading]=useState(true);
    //create user-->
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    };
    //signIn
    const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    };
    //logOut
    const logOut=()=>{
        setLoading(true)
        return signOut(auth);
    };
    //
    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,currentUser=>{
            console.log('user in the auth state change',currentUser)
            setUser(currentUser);
            setLoading(false)
        })
        return()=>{
            unSubscribe();
        }
    },[])

    const authInfo={
        user,
        loading,
        createUser,
        logOut,
        signIn,
        

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}   
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes={
    children:PropTypes.node,
}

export default AuthProvider;