import React, { useState } from 'react';
import Home from './pages/home/Home.jsx'
import Profile from './pages/profile/Profile.js';
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
        <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;

  // <ApolloProvider client={client}>
  //   <Router>
  //     <div className="flex-column justify-flex-start min-100-vh">
  //       <Header />
  //       <div className="container">
  //         <Routes>
  //           <Route path="/" element={<Home />} />
  //           {/* Create a route to display a single thought's comments based on its `thoughtId` provided in the URL */}
  //           <Route path="/thoughts/:thoughtId" element={<SingleThought />} />
  //         </Routes>
  //       </div>
  //       <Footer />
  //     </div>
  //   </Router>
  // </ApolloProvider>;