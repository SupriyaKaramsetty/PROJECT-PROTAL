import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Signup from '../src/User/Signup/Signup';
import Profile from '../src/User/Profile/Profile';
import Home from '../src/Home/Home';
import Menu from '../src/Menu/Menu';

function App() {
  return (
    <BrowserRouter>
    <Menu />
    <Switch>
        <Route exact path="/" component={Signup}></Route>
        <Route exact path="/signup" component={Signup}></Route>
        <Route exact path="/profile" component={Profile}></Route>
        <Route exact path="/home" component={Home}></Route>
      </Switch>
    </BrowserRouter>
      
     
   
    
  );
}

export default App;
