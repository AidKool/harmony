import React from 'react';

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
  return (
    <div className="h-full px-5 py-10">
      <h2 className="font-bold text-2xl pb-5">All Chats</h2>
      <ul className="space-y-8">
        {list.map((person) => (
          <li key={person.id} className="flex items-center space-x-2">
            <img src={person.picture} className="rounded-full" alt={person.name} />
            <p className="">{person.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChatList;
