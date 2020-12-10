import React, {Component} from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';



import Signup from '../src/User/Signup/Signup';
import Profile from '../src/User/Profile/Profile';

function App() {
  return (
    <BrowserRouter>
    <Switch>
        <Route exact path="/signup" component={Signup}></Route>
        <Route exact path="/profile" component={Profile}></Route>
      </Switch>
    </BrowserRouter>
      
     
   
    
  );
}

export default App;
