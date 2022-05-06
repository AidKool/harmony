import { createContext, useContext, useState } from 'react';

const MessageContext = createContext();

export const useMessageContext = () => useContext(MessageContext);

export const MessageProvider = ({ children }) => {
  const [contact, setContact] = useState({});

  return <MessageContext.Provider value={{ contact, setContact }}>{children}</MessageContext.Provider>;
};
