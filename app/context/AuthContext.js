'use client'
import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged} from 'firebase/auth'
import { app } from '../firebase';

const auth = getAuth(app)
export const AuthContext = createContext()
const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState("Jamal")
    const [loading, setLoading] = useState(true)

    const signUp = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
   
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>unsubscribe()
    }, [])
    const authInfo = {
        user, setUser, signUp
    }
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthContextProvider;