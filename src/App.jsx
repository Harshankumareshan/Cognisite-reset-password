import { Route, Routes,} from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import ForgotPassword from './components/ForgetPassword';
import Dashboard from './components/Dashboard';
import { ToastContainer } from 'react-toastify';
import ResetPassword from './components/Reset-Password';




function App() {
  return (
    <div className="App">  
     <ToastContainer theme='colored' />
    <Routes>   
      <Route exact path='/' element={ <Login/>} />
      <Route path='/dashboard' element={ <Dashboard/>} />
      <Route path='/signup' element={ <Signup/>}/>
      <Route path='/forgot/password' element={ <ForgotPassword/>}/>
      <Route path='/reset/password/:token' element={ <ResetPassword/>}/>    
    </Routes> 
    </div>
  );
}

export default App;