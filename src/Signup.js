import React, { useState } from "react";
import {auth} from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp =({ history })=> {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
console.log(auth?.currentUser?.email)
  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
        history.push('/')
    } catch (err) {
      console.error(err);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth).then(alert("signed out"))
      history.push('/login')
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <input
        placeholder="Email..."
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Password..."
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={signIn}> Sign In</button>
      <button onClick={logout}> Logout </button>
    </div>
  );
};

export default SignUp;

