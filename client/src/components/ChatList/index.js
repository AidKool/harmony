import React, { useState } from 'react';

import './chatlist.css';

// const list = [
//   {
//     id: 1,
//     picture: 'https://via.placeholder.com/60x60',
//     name: 'person 1',
//   },
//   {
//     id: 2,
//     picture: 'https://via.placeholder.com/60x60',
//     name: 'person 2',
//   },
//   {
//     id: 3,
//     picture: 'https://via.placeholder.com/60x60',
//     name: 'person 3',
//   },
//   {
//     id: 4,
//     picture: 'https://via.placeholder.com/60x60',
//     name: 'person 4',
//   },
//   {
//     id: 5,
//     picture: 'https://via.placeholder.com/60x60',
//     name: 'person 5',
//   },
//   {
//     id: 6,
//     picture: 'https://via.placeholder.com/60x60',
//     name: 'person 6',
//   },
//   {
//     id: 7,
//     picture: 'https://via.placeholder.com/60x60',
//     name: 'person 7',
//   },
//   {
//     id: 8,
//     picture: 'https://via.placeholder.com/60x60',
//     name: 'person 8',
//   },
//   {
//     id: 9,
//     picture: 'https://via.placeholder.com/60x60',
//     name: 'person 9',
//   },
//   {
//     id: 10,
//     picture: 'https://via.placeholder.com/60x60',
//     name: 'person 10',
//   },
//   {
//     id: 11,
//     picture: 'https://via.placeholder.com/60x60',
//     name: 'person 11',
//   },
//   {
//     id: 12,
//     picture: 'https://via.placeholder.com/60x60',
//     name: 'person 12',
//   },
//   {
//     id: 13,
//     picture: 'https://via.placeholder.com/60x60',
//     name: 'person 13',
//   },
// ];

function ChatList({ contacts }) {
  console.log('contacts:', contacts);
  const [active, setActive] = useState(1);

  function handleChat(event) {
    const id = event.currentTarget.dataset.id;
    console.log(id);
    setActive(id);
  }

  return (
    <div className="h-screen px-2 py-3">
      <h2 className="w-0 overflow-hidden md:w-fit font-bold text-2xl pb-5">All Chats</h2>
      <ul className="flex flex-col gap-y-1 overflow-y-auto chatlist">
        {contacts.map((person) => (
          <li
            key={person._id}
            className={`flex items-center md:space-x-2 px-1 md:px-3 py-2 cursor-pointer chatlist-element ${
              active === person._id ? 'bg-blue-200' : ''
            }`}
            data-id={person._id}
            onClick={handleChat}>
            <img src={person.picture} className="rounded-full chatlist-picture" alt={person.username} />
            <p className="w-0 overflow-hidden md:w-fit">{person.username}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChatList;
