import { app} from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React ,{ useEffect, useState } from "react";
export const AuthContext = React.createContext();

export const Auth = ({Children}) => {
    const [currentUser,setCurrentUser] = useState(null)
    useEffect(()=>{
        app.auth().onAuthStateChanged(()=>{
            setCurrentUser(currentUser)
        });
    },[])
  return (
    <AuthContext.Provider value={{currentUser}}>
        {Children}
    </AuthContext.Provider>
    
  );
};

export default Auth;