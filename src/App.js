import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Login from './Signup-Login/Login';
import SignUp from './Signup-Login/SignUp';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<SignUp />}/>
      </Routes>
    </div>
  );
}

export default App;
