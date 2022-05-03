import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home.jsx';
import Profile from './pages/profile/Profile.js';
import ProfileEdit from './pages/profileEdit/profileEdit.jsx';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup.js';
import Feed from './pages/Feed/feed.jsx';
import AddPost from './pages/addPost/addPost';
import UpdatePost from './pages/updatePost/updatePost';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/scroll-to-top/scroll-to-top.js';
import SearchResults from './pages/SearchResults';
import { setContext } from '@apollo/client/link/context';
import SearchProviderWrapper from './components/SearchProviderWrapper/';
import ScrollToTop from './components/scroll-to-top/scroll-to-top.js';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<SearchProviderWrapper />}>
            <Route index element={<Home />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/profiles/:profileId" element={<Profile />} />
            <Route path="/profiles/:profileId/edit" element={<ProfileEdit />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/add-post" element={<AddPost />} />
          <Route path="/update-post/:postId" element={<UpdatePost />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
