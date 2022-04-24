import React from 'react';

import ChatList from '../components/ChatList';
import Messages from '../components/Messages';
import MessageInput from '../components/MessageInput';
import Profile from '../components/Profile';

function Chat() {
  return (
    <div className="mx-auto">
      <div className="flex flex-row min-h-screen">
        <aside className="w-1/5 md:w-1/5 border-r border-gray-200 min-w-fit">
          <ChatList />
        </aside>
        <section className="w-4/5 md:w-3/5 border-r border-gray-200">
          <Messages />
          <MessageInput />
        </section>
        <aside className="w-0 overflow-hidden md:w-1/5">
          <Profile />
        </aside>
      </div>
    </div>
  );
}

export default Chat;
