import React, { useEffect, useState } from 'react';
import { useLazyQuery, useQuery } from '@apollo/client';

import ChatList from '../../components/ChatList';
import Messages from '../../components/Messages';
import MessageInput from '../../components/MessageInput';
import ChatProfile from '../../components/ChatProfile';

import { GET_ME, GET_USER_CHATS } from '../../utils/queries';

function Chat() {
  const { loading: userLoading, data: userRawData } = useQuery(GET_ME);
  const userData = userRawData?.me || {};

  const { loading: chatLoading, data: chatRawData } = useQuery(GET_USER_CHATS);
  const chatData = chatRawData?.getUserChats || [];

  if (chatRawData && userData) {
    console.log(userData);
    console.log(chatData);
  } else {
    console.log('no data found');
  }

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    if (chatData) {
      const tempContacts = chatData.map((chat) => {
        if (chat.users[0].username !== userData.username) {
          return chat.users[0];
        }
        return chat.users[1];
        // return chat.users.filter((user) => user.username !== userData.username);
      });
      return setContacts(tempContacts);
    }
  }, [chatData, userData]);

  return (
    <div className="flex max-h-screen">
      <aside className="w-fit md:w-1/5 border-gray-200 max-h-screen">
        <ChatList contacts={contacts} />
      </aside>
      <section className="w-fit md:w-3/5 border-gray-200 border-x max-h-screen">
        <Messages />
        <MessageInput />
      </section>
      <aside className="w-0 overflow-hidden md:w-1/5">
        <ChatProfile />
      </aside>
    </div>
  );
}

export default Chat;
