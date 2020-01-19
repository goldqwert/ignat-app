import React from 'react';
import './App.css';
import Login from './Components/Login'
import { Route } from 'react-router-dom';
import Register from './Components/Register/Register';
import Forgot from './Components/Forgot';
import Profile from './Components/Profile';


interface IProps {

}

const App = (props: IProps) => {
  return (
    <div className="App">
      <header className='header'>
        <a href='/login'>Login</a>
        <a href='/register'>Register</a>
        <a href='/forgot'>Forgot</a>
        <a href='/profile'>Profile</a>
      </header>
      <div>
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/forgot' component={Forgot} />
        <Route path='/profile' component={Profile} />
      </div>

    </div>
  );
}

export default App;
