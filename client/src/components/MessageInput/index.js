import React from 'react';

import './messageInput.css';

function index() {
  return (
    <form className="py-4 flex justify-center">
      <input
        type="text"
        name="message"
        id="message"
        placeholder="Type your message"
        className="text-input w-full rounded-3xl px-7 bg-gray-200 focus:outline-none"
      />
    </form>
  );
}

export default index;
