// import axios from 'axios';
// import Movie from './components/Movie/Movie';
import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';
import './App.css';

import Landing from './pages/Landing/Landing';
import Nav from './components/Nav/Nav';
import Customize from './pages/Customize/Customize';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';

function App() {

  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Switch>
          <Route path="/" component={Landing} exact/>
          <Route path="/customize" component={Customize} />
          <Route path="/home" component={Home} />
          <Route path="/profile" component={Profile} />
          {/* <Route path="/guest" component={} />
          <Route path="/login" component={} />
          <Route path="/signup" component={} /> */}
        </Switch>
      </div>
      </BrowserRouter>
  );
}

export default App;
