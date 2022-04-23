import React from 'react';

function index() {
  return (
    <form className="p-4">
      <input
        type="text"
        name="message"
        id="message"
        placeholder="Type your message"
        className="w-full h-10 rounded-3xl px-7 focus:outline-none"
      />
    </form>
  );
}

export default index;
