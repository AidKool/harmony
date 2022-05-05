import React, { useEffect } from 'react';

import { useChatContext } from '../../store/chatContext';

import './chatlist.css';

function ChatList({ chats }) {
  console.log('chats:', chats);
  const { activeChat, setActiveChat } = useChatContext();

  useEffect(() => {
    if (chats.length > 0) {
      setActiveChat(chats[0].chatId);
    }
  }, [chats, setActiveChat]);

  function handleChat(event) {
    const id = event.currentTarget.dataset.id;
    setActiveChat(id);
  }

  if (chats) {
    return (
      <div className="h-screen px-2 py-3">
        <h2 className="w-0 overflow-hidden md:w-fit font-bold text-2xl pb-5">All Chats</h2>
        <ul className="flex flex-col gap-y-1 overflow-y-auto chatlist">
          {chats.length > 0 &&
            chats.map((chat) => (
              <li
                key={chat.chatId}
                className={`flex items-center md:space-x-2 px-1 md:px-3 py-2 cursor-pointer chatlist-element ${
                  activeChat === chat.chatId ? 'bg-blue-200' : ''
                }`}
                data-id={chat.chatId}
                onClick={handleChat}>
                <img
                  src={chat.contact.picture}
                  className="rounded-full object-cover chatlist-picture"
                  alt={chat.contact.username}
                />
                <p className="w-0 overflow-hidden md:w-fit">{chat.contact.username}</p>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

export default ChatList;
