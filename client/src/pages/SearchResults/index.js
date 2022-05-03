import React, { useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { useLocation } from 'react-router-dom';

import Nav from '../../components/nav/nav';
import ResultsFilter from '../../components/ResultsFilter';

import { QUERY_ACOUNTS_BY_DISTANCE } from '../../utils/queries';

function SearchResults() {
  const locationStateFromURL = useLocation();
  const location = locationStateFromURL?.state?.location;

  const [search, { loading, error, data }] = useLazyQuery(QUERY_ACOUNTS_BY_DISTANCE);

  useEffect(() => {
    const miles = 50;
    if (location) {
      search({ variables: { location, miles } });
    }
  }, [location]);
  return (
    <div className="container">
      <Nav />
      {data ? <ResultsFilter data={data} searchLocation={location} /> : <p className="text-3xl">Make a new search</p>}
    </div>
  );
}

export default SearchResults;
