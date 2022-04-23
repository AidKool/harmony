import React from 'react';

import ChatList from '../components/ChatList';
import Messages from '../components/Messages';
import MessageInput from '../components/MessageInput';

function Chat() {
  return (
    <div className="container mx-auto bg-red-400">
      <div className="flex flex-row min-h-screen">
        <section className="w-1/5 md:w-1/4 bg-blue-400">
          <ChatList />
        </section>
        <section className="w-4/5 md:w-3/4 bg-green-400">
          <Messages />
          <MessageInput />
        </section>
      </div>
    </div>
  );
}

export default Chat;
