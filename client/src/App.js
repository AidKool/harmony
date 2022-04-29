import Home from './pages/home/Home.jsx';
import Profile from './pages/profile/Profile.js';
import ProfileEdit from './pages/profileEdit/profileEdit.jsx';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup.js';
import Feed from './pages/Feed/feed.jsx';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/scroll-to-top/scroll-to-top.js';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profiles/:profileId" element={<Profile />} />
          <Route path="/profiles/:profileId/edit" element={<ProfileEdit />} />
          <Route path="/feed" element={<Feed />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
