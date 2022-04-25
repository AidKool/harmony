import React from 'react';

import ChatList from '../../components/ChatList';
import Messages from '../../components/Messages';
import MessageInput from '../../components/MessageInput';
import Profile from '../../components/Profile';

function Chat() {
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
        <Profile />
      </aside>
    </div>
  );
}

export default Chat;
