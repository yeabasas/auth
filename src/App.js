import './App.css';
import { BrowserRouter as  Router,Routes,Route  } from 'react-router-dom';
// import Home from './Home';
import { Login } from './Login';
import { Signup } from './Signup';
import { Auth } from './Auth';
// import PrivateRoute from './privateRoute';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
      </Router>
  );
}

export default App;
