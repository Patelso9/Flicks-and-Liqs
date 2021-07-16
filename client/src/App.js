import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Profile from './pages/Profile/Profile';
import Nav from './components/Nav/Nav';
import Landing from './pages/Landing/Landing'

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
        <ApolloProvider client={client}>
        <Router>
          <div>
            <Nav />
            {/* <Switch> */}
              <Route path="/" component={Landing} exact/>
              {/* <Route path="/customize" component={Customize} /> */}
              <Route path="/home" component={Home} />
              <Route path="/profile" component={Profile} />
              {/* <Route path="/guest" component={} /> */}
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              {/* </Switch> */}
          </div>
          </Router>
          </ApolloProvider>
      );
}

export default App;























// // import axios from 'axios';
// // import Movie from './components/Movie/Movie';
// import React from 'react';
// import { BrowserRouter as Router , Route, Switch  } from 'react-router-dom';
// import './App.css';

// import Landing from './pages/Landing/Landing';
// import Nav from './components/Nav/Nav';
// import Customize from './pages/Customize/Customize';
// import Home from './pages/Home/Home';
// import Profile from './pages/Profile/Profile';

// // import apollo
// import{
//   ApolloClient, 
//   InMemoryCache, 
//   ApolloProvider, 
//   HttpLink,
//   from
// } from "@apollo/client"
// import{onError} from '@apollo/client/link/error'
// import Signup from './pages/Signup';
// import Login from './pages/Login';

// const errorLink = onError(({ graphqlErrors, networkError }) => {
//   if(graphqlErrors) {
//     graphqlErrors.map(({message, location, path}) => {
//       alert(`Graphql error ${message}`)
//     })
//   }
// })
// const link = from([
//   errorLink, 
//   new HttpLink({uri: "http:localhost:6969/graphql "})
// ])
// const client = new ApolloClient({
//   cache: new InMemoryCache(),
//   link: link
// })

// function App() {

//   return (
//     <ApolloProvider client={client}>
//     <Router>
//       <div>
//         <Nav />
//         <Switch>
//           <Route path="/" component={Landing} exact/>
//           <Route path="/customize" component={Customize} />
//           <Route path="/home" component={Home} />
//           <Route path="/profile" component={Profile} />
//           {/* <Route path="/guest" component={} /> */}
//           <Route path="/login" component={Login} />
//           <Route path="/signup" component={Signup} />
//         </Switch>
//       </div>
//       </Router>
//       </ApolloProvider>
//   );
// }

// export default App;
