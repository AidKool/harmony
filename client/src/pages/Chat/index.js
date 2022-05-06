import React from 'react';

import { ChatProvider } from '../../store/chatContext';
import { MessageProvider } from '../../store/messageContext';
import ChatList from '../../components/ChatList';
import Messages from '../../components/Messages';
import MessageInput from '../../components/MessageInput';
import Nav from '../../components/nav/nav';

import './chat.css';

function Chat() {
  return (
    <ChatProvider>
      <Nav />
      <div className="chat-container max-height">
        <div className="flex">
          <aside className="w-fit md:w-1/5 border-gray-200 border-l max-height">
            <ChatList />
          </aside>
          <section className="w-fit md:w-4/5 border-gray-200 border-x max-height">
            <MessageProvider>
              <Messages />
              <MessageInput />
            </MessageProvider>
          </section>
        </div>
      </div>
    </ChatProvider>
  );
}

export default Chat;
