import { createContext, useContext, useState } from 'react';

const ChatContext = createContext();

export const useChatContext = () => useContext(ChatContext);

export const ChatProvider = ({ children }) => {
  const [activeChat, setActiveChat] = useState();

  return <ChatContext.Provider value={{ activeChat, setActiveChat }}>{children}</ChatContext.Provider>;
};
