import React, { useState } from 'react';

import { useSearchContext } from '../../store/searchContext';
import SearchResult from '../SearchResult';
import capitalise from '../../utils/capitalise';

function ResultsFilter() {
  const { results, setResults, searchLocation, setSearchLocation } = useSearchContext();

  console.log(results);

  const [formState, setFormState] = useState({
    type: 'all',
    miles: 100,
    genre: null,
    instruments: null,
    available: null,
  });

  const handleFormChange = (event) => {
    const { name, value } = event.target;

    console.log('name:', name);
    console.log('value:', value);

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container flex flex-col gap-y-5">
      <p>
        Users found near {capitalise(searchLocation)}: {results.length} found
      </p>
      <form className="flex flex-wrap gap-5 justify-center">
        <select
          name="type"
          defaultValue={'all'}
          className="bg-white border border-gray-500 py-2 px-3"
          onChange={handleFormChange}>
          <option value="type" disabled>
            type of user
          </option>
          <option value="all">all</option>
          <option value="band">band</option>
          <option value="musician">musician</option>
        </select>
        <select
          name="miles"
          defaultValue={'miles'}
          className="bg-white border border-gray-500 py-2 px-3"
          onChange={handleFormChange}>
          <option value="miles" disabled>
            miles
          </option>
          <option value="1">1</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="500">50</option>
        </select>
        <select
          name="genre"
          defaultValue={'genre'}
          className="bg-white border border-gray-500 py-2 px-3"
          onChange={handleFormChange}>
          <option value="genre" disabled>
            genre
          </option>
          <option value="rock">rock</option>
          <option value="pop">pop</option>
        </select>
        {formState.type === 'musician' && (
          <>
            <select
              name="instruments"
              defaultValue={'instruments'}
              className="bg-white border border-gray-500 py-2 px-3"
              onChange={handleFormChange}>
              <option value="instruments" disabled>
                instruments
              </option>
              <option value="guitar">guitar</option>
              <option value="drums">drums</option>
            </select>
            <select
              name="available"
              defaultValue={'available'}
              className="bg-white border border-gray-500 py-2 px-3"
              onChange={handleFormChange}>
              <option value="available" disabled>
                available
              </option>
              <option value="available">available</option>
              <option value="true">true</option>
              <option value="false">false</option>
            </select>
          </>
        )}
      </form>
      <ul className="flex flex-wrap justify-center gap-5">
        {results.map((user) => {
          return (
            <li key={user.username} className="">
              <SearchResult {...user} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ResultsFilter;
