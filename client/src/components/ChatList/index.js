import React, { useState } from 'react';

import './chatlist.css';

const list = [
  {
    id: 1,
    picture: 'https://via.placeholder.com/60x60',
    name: 'person 1',
  },
  {
    id: 2,
    picture: 'https://via.placeholder.com/60x60',
    name: 'person 2',
  },
  {
    id: 3,
    picture: 'https://via.placeholder.com/60x60',
    name: 'person 3',
  },
  {
    id: 4,
    picture: 'https://via.placeholder.com/60x60',
    name: 'person 4',
  },
  {
    id: 5,
    picture: 'https://via.placeholder.com/60x60',
    name: 'person 5',
  },
];

function ChatList() {
  const [active, setActive] = useState(1);

  function handleChat(event) {
    const id = event.currentTarget.dataset.id;
    console.log(id);
    setActive(id);
  }

  return (
    <div className="h-full px-2 py-10">
      <h2 className="w-0 overflow-hidden md:w-fit font-bold text-2xl pb-5">All Chats</h2>
      <ul className="space-y-8">
        {list.map((person) => (
          <li
            key={person.id}
            className={`flex items-center md:space-x-2 px-1 md:px-3 py-2 cursor-pointer chatlist-element ${
              active === person.id ? 'bg-blue-200' : ''
            }`}
            data-id={person.id}
            onClick={handleChat}>
            <img src={person.picture} className="rounded-full min-w-fit" alt={person.name} />
            <p className="w-0 overflow-hidden md:w-fit">{person.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChatList;
