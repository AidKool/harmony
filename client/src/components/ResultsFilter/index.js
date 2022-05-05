import React, { useEffect, useState } from 'react';

import SearchResult from '../SearchResult';
import capitalise from '../../utils/capitalise';

import './filter.css';

function ResultsFilter({ data, searchLocation }) {
  const results = data.getAccountsByDistance;
  const [filteredResults, setFilteredResults] = useState([...results]);

  const [formState, setFormState] = useState({
    type: 'all',
    miles: 'all',
    genres: 'all',
    instruments: 'all',
    available: 'all',
  });

  const handleFormChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    let tempResults = [...results];
    for (const key in formState) {
      if (formState[key] !== 'all') {
        if (key === 'type') {
          tempResults = tempResults.filter((result) => result[key] === formState[key]);
        }
        if (key === 'genres') {
          tempResults = tempResults.filter((result) => result[key].includes(formState[key]));
        }
        if (key === 'miles') {
          tempResults = tempResults.filter((result) => parseInt(result[key]) <= parseInt(formState[key]));
        }
        if (formState.type === 'Musician') {
          if (key === 'instruments') {
            tempResults = tempResults.filter((result) => result.musicianId[key].includes(formState[key]));
          }
          if (key === 'available') {
            tempResults = tempResults.filter((result) => {
              if (formState[key] === 'true') {
                return result.musicianId.available;
              }
              return !result.musicianId.available;
            });
          }
        }
      }
    }
    setFilteredResults(tempResults);
  }, [formState, results, setFilteredResults]);

  return (
    <div className="container text-center flex flex-col gap-y-5 results-container-margin ">
      {filteredResults.length > 0 ? (
        <>
          <p>Users found near {capitalise(searchLocation)}</p>
          <form className="flex flex-wrap gap-5 justify-center filter-form">
            <div>
              <label htmlFor="type">type of user</label>
              <select
                name="type"
                defaultValue={'all'}
                className="bg-white border border-gray-500 py-2 px-3"
                onChange={handleFormChange}>
                <option value="all">all</option>
                <option value="Band">band</option>
                <option value="Musician">musician</option>
              </select>
            </div>
            <div>
              <label htmlFor="miles">Distance</label>
              <select
                name="miles"
                defaultValue={'all'}
                className="bg-white border border-gray-500 py-2 px-3"
                onChange={handleFormChange}>
                <option value="all">all</option>
                <option value="1">1</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
              </select>
            </div>
            <div>
              <label htmlFor="genres">genres</label>
              <select
                name="genres"
                defaultValue={'all'}
                className="bg-white border border-gray-500 py-2 px-3"
                onChange={handleFormChange}>
                <option value="all">all</option>
                <option value="rock">rock</option>
                <option value="pop">pop</option>
                <option value="jazz">jazz</option>
                <option value="classical">classical</option>
              </select>
            </div>
            {formState.type === 'Musician' && (
              <>
                <div>
                  <label htmlFor="instruments">instruments</label>
                  <select
                    name="instruments"
                    defaultValue={'all'}
                    className="bg-white border border-gray-500 py-2 px-3"
                    onChange={handleFormChange}>
                    <option value="all">all</option>
                    <option value="guitar">guitar</option>
                    <option value="drums">drums</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="available">available</label>
                  <select
                    name="available"
                    defaultValue={'all'}
                    className="bg-white border border-gray-500 py-2 px-3"
                    onChange={handleFormChange}>
                    <option value="all">all</option>
                    <option value="true">true</option>
                    <option value="false">false</option>
                  </select>
                </div>
              </>
            )}
          </form>
          <ul className="flex flex-wrap justify-center gap-5">
            {filteredResults.map((user) => {
              return (
                <li key={user.username}>
                  <SearchResult {...user} />
                </li>
              );
            })}
          </ul>
        </>
      ) : (
        <p className="text-3xl">No matches found</p>
      )}
    </div>
  );
}

export default ResultsFilter;
