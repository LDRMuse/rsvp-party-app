import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {Home, Navbar, Register, Login} from './components'
import { GuestState } from './context';


function App() {
  return (
<GuestState>
<Router>
    <div>
    <Navbar />
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/register' component={Register}/>
      <Route exact path='/login' component={Login}/>
    </Switch>
    </div>
    </Router>
</GuestState>
  );
}

export default App;
