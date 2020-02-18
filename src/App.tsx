import React from "react";
import "./App.css";
import Login from "./Components/Login/Login";
import { Route, NavLink } from "react-router-dom";
import Register from "./Components/Register/Register";
import Forgot from "./Components/Forgot/Forgot";
import Profile from "./Components/Profile/Profile";
import ModalsContainer from "./Components/Modals/ModalsContainer";
import Time from "./Components/Time/Time";
import Color from "./Components/Color/Color";
import ShopTable from "./Components/ShopTable/ShopTable"
import Basket from "./Components/ShopTable/Basket";

const App = () => {
  return (
    <div className="App">
      <header className="header">
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/forgot">Forgot</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to='/modals'>Modals</NavLink>
        <NavLink to='/time'>Time</NavLink>
        <NavLink to='/color'>Color</NavLink>
        <NavLink to='/shop-table'>ShopTable</NavLink>
        <NavLink to='/basket'>Basket</NavLink>
      </header>
      <div>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/forgot" component={Forgot} />
        <Route path="/profile" component={Profile} />
        <Route path='/modals' component={ModalsContainer} />
        <Route path='/time' component={Time} />
        <Route path='/color' component={Color} />
        <Route path='/shop-table' component={ShopTable} />
        <Route path='/basket' component={Basket} />
      </div>
    </div>
  );
};

export default App;
