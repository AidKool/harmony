import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';

import About from './pages/About';
import AddPost from './pages/AddPost';
import Chat from './pages/Chat';
import Feed from './pages/Feed';
import Home from './pages/Home';
import Hosting from './pages/Hosting';
import Login from './pages/Login';
import MyPosts from './pages/MyPosts';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import SearchResults from './pages/SearchResults';
import Signup from './pages/Signup';
import Success from './pages/Success';
import SuccessBronze from './pages/SuccessBronze';
import SuccessSilver from './pages/SuccessSilver';
import UpdatePost from './pages/UpdatePost';
import ScrollToTop from './components/Scroll-to-top';
import SearchProviderWrapper from './components/SearchProviderWrapper';

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
            <Route path="/messages" element={<Chat />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/my-posts" element={<MyPosts />} />
          <Route path="/hosting" element={<Hosting />} />
          <Route path="/about" element={<About />} />
          <Route path="/success/xA2b4A6xY3lTgBKUyxV5jnttpZU1ka" element={<Success />} />
          <Route path="/success/dhsjakdhj34g3dgsah2376213dsasa" element={<SuccessSilver />} />
          <Route path="/success/dsaiuody87ty8763218gdsahdgsadg" element={<SuccessBronze />} />
          <Route path="/add-post" element={<AddPost />} />
          <Route path="/update-post/:postId" element={<UpdatePost />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
