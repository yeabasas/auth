import React from 'react'
import { useNavigate } from 'react-router-dom'
import app from './Firebase'
function Home() {
    const navigate = useNavigate
  return (
    <div>
        <h1>home</h1>
        <button onClick={()=>app.auth().signOut().then(navigate("/login"))}>Sign out</button>
    </div>
  )
}

export default Home