import React from 'react';
import Nav from '../../components/nav/nav';
import ResultsFilter from '../../components/ResultsFilter';

function SearchResults() {
  return (
    <div className="container">
      <Nav />
      <ResultsFilter />
    </div>
  );
}

export default SearchResults;
