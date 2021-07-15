// import axios from 'axios';
// import Movie from './components/Movie/Movie';
import React from 'react';
import { BrowserRouter as Router , Route, Switch  } from 'react-router-dom';
import './App.css';

import Landing from './pages/Landing/Landing';
import Nav from './components/Nav/Nav';
import Customize from './pages/Customize/Customize';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';

// import apollo
import{
  ApolloClient, 
  InMemoryCache, 
  ApolloProvider, 
  HttpLink,
  from
} from "@apollo/client"
import{onError} from '@apollo/client/link/error'
import Signup from './pages/Signup';
import Login from './pages/Login';

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if(graphqlErrors) {
    graphqlErrors.map(({message, location, path}) => {
      alert(`Graphql error ${message}`)
    })
  }
})
const link = from([
  errorLink, 
  new HttpLink({uri: "http:localhost:6969/graphql "})
])
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
})

function App() {

  return (
    <ApolloProvider client={client}>
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" component={Landing} exact/>
          <Route path="/customize" component={Customize} />
          <Route path="/home" component={Home} />
          <Route path="/profile" component={Profile} />
          {/* <Route path="/guest" component={} /> */}
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </div>
      </Router>
      </ApolloProvider>
  );
}

export default App;
