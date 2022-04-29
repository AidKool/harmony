import Home from './pages/home/Home.jsx';
import Profile from './pages/profile/Profile.js';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup.js';
import SearchResults from './pages/SearchResults';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profiles/:profileId" element={<Profile />} />
          <Route path="/search" element={<SearchResults />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
