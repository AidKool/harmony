import React, { useEffect, useState } from 'react';
import { useLazyQuery, useQuery } from '@apollo/client';

import ChatList from '../../components/ChatList';
import Messages from '../../components/Messages';
import MessageInput from '../../components/MessageInput';
import ChatProfile from '../../components/ChatProfile';

import { GET_ME, GET_USER_CHATS } from '../../utils/queries';

function Chat() {
  const { loading, data } = useQuery(GET_ME);
  const userData = data?.me || [];
  if (data) {
    console.log(userData);
  } else {
    console.log('no data found');
  }

  return (
    <div className="flex max-h-screen">
      <aside className="w-fit md:w-1/5 border-gray-200 max-h-screen">
        <ChatList />
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
