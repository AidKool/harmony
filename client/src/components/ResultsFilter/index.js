import React, { useState } from 'react';

function ResultsFilter() {
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
    <div>
      <p>Users found in Manchester: 10 found</p>
      <form>
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
          <option value="2">2</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
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
              defaultValue={'genre'}
              className="bg-white border border-gray-500 py-2 px-3"
              onChange={handleFormChange}>
              <option value="available" disabled>
                available
              </option>
              <option value="true">true</option>
              <option value="false">false</option>
            </select>
          </>
        )}
      </form>
    </div>
  );
}

export default ResultsFilter;
