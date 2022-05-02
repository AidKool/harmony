import React from 'react';
import { Link } from 'react-router-dom';

import capitalise from '../../utils/capitalise';

function SearchResult(props) {
  const { _id, username, miles, picture, genres, type, location } = props;
  let instruments = [];
  let available = false;

  if (type === 'Musician') {
    instruments = [...props.musicianId.instruments];
    available = props.musicianId.available;
  }

  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 p-5">
      <div className="flex flex-col items-center">
        <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src={picture} alt={username} />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{username}</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">{type}</span>
        <p>Location: {capitalise(location.name)}</p>
        <p>Distance: {miles} miles</p>
        Genres:
        <ul>
          {genres.map((genre) => {
            return <li key={genre}>{genre}</li>;
          })}
        </ul>
        {type === 'Musician' ? (
          <>
            Instruments:
            <ul>
              {instruments.map((instrument) => {
                return <li key={instrument}>{instrument}</li>;
              })}
            </ul>
            <p>{available ? 'Ready for a new challenge' : 'Not available'}</p>
          </>
        ) : (
          ''
        )}
        <div className="flex mt-4 space-x-3 lg:mt-6">
          <Link
            to={`/profiles/${_id}`}
            className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            View Profile
          </Link>
          <a
            href="#"
            className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">
            Message
          </a>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
