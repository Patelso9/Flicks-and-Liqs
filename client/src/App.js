// import axios from 'axios';
// import Movie from './components/Movie/Movie';
import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';
import './App.css';

import Landing from './components/Landing/Landing';

function App() {

  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Switch>
          <Route path="/" component={Landing} exact/>
          {/* <Route path="/login" component={} />
          <Route path="/signup" component={} />
          <Route path="/customize" component={} />
          <Route path="/home" component={} />
          <Route path="/profile" component={} />
          <Route path="/guest" component={} /> */}
        </Switch>
      </div>
      </BrowserRouter>
  );
}

export default App;
