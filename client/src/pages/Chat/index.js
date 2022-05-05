import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';

import { ChatProvider } from '../../store/chatContext';
import { MessageProvider } from '../../store/messageContext';
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

  const [chats, setChats] = useState([]);

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

  return (
    <ChatProvider>
      <div className="flex max-h-screen">
        <aside className="w-fit md:w-1/5 border-gray-200 max-h-screen">
          <ChatList chats={chats} />
        </aside>
        <section className="w-fit md:w-3/5 border-gray-200 border-x max-h-screen">
          <MessageProvider>
            <Messages />
            <MessageInput />
          </MessageProvider>
        </section>
        <aside className="w-0 overflow-hidden md:w-1/5">
          <ChatProfile />
        </aside>
      </div>
    </ChatProvider>
  );
}

export default Chat;
