import { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

export const useSearchContext = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
  const [searchLocation, setSearchLocation] = useState('');
  const [results, setResults] = useState([]);

  return (
    <SearchContext.Provider value={{ results, setResults, searchLocation, setSearchLocation }}>
      {children}
    </SearchContext.Provider>
  );
};
