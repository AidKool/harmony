import React from 'react';
import { Outlet } from 'react-router-dom';

import { SearchProvider } from '../../store/searchContext';

function SearchProviderWrapper() {
  return (
    <SearchProvider>
      <Outlet />
    </SearchProvider>
  );
}

export default SearchProviderWrapper;
