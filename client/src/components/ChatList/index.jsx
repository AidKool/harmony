import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';

import { useChatContext } from '../../store/chatContext';
import { GET_ME, GET_USER_CHATS } from '../../utils/queries';

import './chatlist.css';

function ChatList() {
  const { loading: userLoading, data: userRawData } = useQuery(GET_ME);
  const userData = userRawData?.me || {};

  const { loading: chatLoading, data: chatRawData } = useQuery(GET_USER_CHATS);
  const chatData = chatRawData?.getUserChats || [];

  const [chats, setChats] = useState([]);
  const { activeChat, setActiveChat } = useChatContext();

  useEffect(() => {
    if (chatData.length > 0) {
      const tempChats = chatData.map((chat) => {
        if (chat.users[0].username !== userData.username) {
          return { chatId: chat._id, contact: chat.users[0] };
        }
        return { chatId: chat._id, contact: chat.users[1] };
      });
      return setChats(tempChats);
    }
  }, [chatData, userData]);

  useEffect(() => {
    if (chats.length > 0 && !activeChat) {
      setActiveChat(chats[0].chatId);
    }
  }, [activeChat, chats, setActiveChat]);

  function handleChat(event) {
    const id = event.currentTarget.dataset.id;
    setActiveChat(id);
  }

  if (chats) {
    return (
      <div className="px-2 py-3">
        <h2 className="w-0 h-0 m-0 overflow-hidden md:w-fit md:h-fit font-bold text-2xl pb-5">All Chats</h2>
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
