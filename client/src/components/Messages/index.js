import React, { useEffect, useState } from 'react';
import { useQuery, useLazyQuery } from '@apollo/client';

import { useMessageContext } from '../../store/messageContext';
import { useChatContext } from '../../store/chatContext';

import { GET_ME, GET_CHAT } from '../../utils/queries';

import './messages.css';

function Messages() {
  const { loading: userLoading, data: userRawData } = useQuery(GET_ME);
  const userData = userRawData?.me || {};
  console.log('me:', userData);

  const { activeChat, setActiveChat } = useChatContext();

  const [getChat, { loading, data }] = useLazyQuery(GET_CHAT);
  const chatData = data?.getChat || null;

  // const [contact, setContact] = useState({});

  const { contact, setContact } = useMessageContext();

  console.log('chatData:', chatData);

  useEffect(() => {
    const getChatData = async () => {
      await getChat({
        variables: {
          id: activeChat,
        },
      });
    };

    if (activeChat) {
      console.log('active chat:', activeChat);
      getChatData();

      if (chatData) {
        console.log('users:', chatData.users);
        if (chatData.users[0]._id === userData._id) {
          setContact(chatData.users[1]);
        } else {
          setContact(chatData.users[0]);
        }
      }
      console.log('contact:', contact);
    }
  }, [activeChat, chatData, contact, getChat, userData._id]);

  return (
    <div className="px-5 flex flex-col chat-height">
      <header className="py-3">
        <h2>Person 1</h2>
      </header>
      <div className="flex flex-col gap-y-3 overflow-y-auto h-full justify-end">
        {chatData?.messages &&
          chatData.messages.length > 0 &&
          chatData.messages.map((message) => {
            return (
              <div
                key={message._id}
                className={`flex items-start gap-x-2 ${
                  message.sender.username === userData.username ? 'flex-row-reverse' : ''
                }`}>
                <img
                  src={message.sender.username === userData.username ? userData.picture : contact.picture}
                  className="rounded-full object-cover message-picture"
                  alt="profile"
                />
                <span
                  className={`${
                    message.sender.username === userData.username
                      ? 'float-right bg-blue-600 text-white'
                      : 'float-left bg-gray-300'
                  } clear-both max-w-md px-5 py-2 rounded-3xl`}>
                  {message.message}
                </span>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Messages;
