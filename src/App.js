import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './Home/Home';
import Login from './Signup-Login/Login';
import SignUp from './Signup-Login/SignUp';
import HomeNav from './Home/HomeNav';

function App() {
  const location = useLocation()
  return (
    <div className="App">
      {location.pathname === '/'? <HomeNav/>:null}
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<SignUp />}/>
      </Routes>
    </div>
  );
}

export default App;
