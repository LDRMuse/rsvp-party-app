import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home, Navbar, Register, Login, PrivateRoute } from './components'
import { GuestState } from './context';
import { AuthState } from './context/authContext'


function App() {
  return (
    <AuthState>
      <GuestState>
        <Router>
          <div>
            <Navbar />
            <Switch>
              <PrivateRoute exact path='/' component={Home} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
            </Switch>
          </div>
        </Router>
      </GuestState>
    </AuthState>
  );
}

export default App;
