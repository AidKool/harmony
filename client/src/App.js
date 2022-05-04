import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';
import Home from './pages/home/Home.jsx';
import Profile from './pages/profile/Profile.js';
import ProfileEdit from './pages/profileEdit/profileEdit.jsx';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup.js';
import Feed from './pages/Feed/feed.jsx';
import MyPosts from './pages/myPosts/myPosts';
import Success from './pages/success/success.jsx';
import SuccessSilver from './pages/successSilver/successSilver.jsx';
import SuccessBronze from './pages/successBronze/successBronze.jsx';
import Hosting from './pages/Hosting/hosting.jsx';
import About from './pages/About/About.jsx';
import ScrollToTop from './components/scroll-to-top/scroll-to-top.js';
import AddPost from './pages/addPost/addPost';
import UpdatePost from './pages/updatePost/updatePost';
import SearchResults from './pages/SearchResults';
import SearchProviderWrapper from './components/SearchProviderWrapper/';

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
          <Route path="my-posts" element={<MyPosts />} />
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
