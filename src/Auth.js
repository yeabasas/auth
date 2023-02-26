import app from './Firebase';
import React,{ useState,useEffect } from 'react';

export const AuthContext =React.createContext();
function Auth() {
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
  )
}

export default Auth