import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Login from './Signup-Login/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </div>
  );
}

export default App;
