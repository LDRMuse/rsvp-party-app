import React from 'react';
import './App.css';
import {Home, Navbar} from './components'
import { GuestState } from './context';


function App() {
  return (
<GuestState>
    <div>
    <Navbar />
    <Home />
      hello world
    </div>
</GuestState>
  );
}

export default App;
