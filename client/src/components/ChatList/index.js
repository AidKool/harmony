import React, { useEffect } from 'react';

import { useChatContext } from '../../store/chatContext';

import './chatlist.css';

function ChatList({ contacts }) {
  const { activeChat, setActiveChat } = useChatContext();

  useEffect(() => {
    if (contacts.length > 0) {
      setActiveChat(contacts[0]._id);
    }
  }, [contacts, setActiveChat]);

  function handleChat(event) {
    const id = event.currentTarget.dataset.id;
    setActiveChat(id);
  }

  return (
    <div className="h-screen px-2 py-3">
      <h2 className="w-0 overflow-hidden md:w-fit font-bold text-2xl pb-5">All Chats</h2>
      <ul className="flex flex-col gap-y-1 overflow-y-auto chatlist">
        {contacts.map((person) => (
          <li
            key={person._id}
            className={`flex items-center md:space-x-2 px-1 md:px-3 py-2 cursor-pointer chatlist-element ${
              activeChat === person._id ? 'bg-blue-200' : ''
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
