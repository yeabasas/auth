import app from './firebase'
const Home = () => {
    return ( 
        <div>
            <h1>home</h1>
            <button onClick={()=>app.auth().signOut()}>Sign out</button>
        </div>
     );
}
 
export default Home;