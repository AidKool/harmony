import React, { useEffect } from 'react';
import { useQuery, useLazyQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

import { useMessageContext } from '../../store/messageContext';
import { useChatContext } from '../../store/chatContext';
import { GET_ME, GET_CHAT } from '../../utils/queries';

import './messages.css';

function Messages() {
  const { loading: userLoading, data: userRawData } = useQuery(GET_ME);
  const userData = userRawData?.me || {};

  const { activeChat, setActiveChat } = useChatContext();

  const [getChat, { loading, data }] = useLazyQuery(GET_CHAT);
  const chatData = data?.getChat || null;

  const { contact, setContact } = useMessageContext();

  useEffect(() => {
    const getChatData = async () => {
      await getChat({
        variables: {
          id: activeChat,
        },
      });
    };

    if (activeChat) {
      getChatData();

      if (chatData) {
        if (chatData.users[0]._id === userData._id) {
          setContact(chatData.users[1]);
        } else {
          setContact(chatData.users[0]);
        }
      }
    }
  }, [activeChat, chatData, contact, getChat, setContact, userData._id]);

  return (
    <div className="flex flex-col chat-height">
      <header className="px-5 py-3">
        <Link to={`/profiles/${contact._id}`} className="font-bold border-b-2 border-white hover:border-blue-600">
          {contact.username}
        </Link>
      </header>
      <div className="flex flex-col gap-y-3 overflow-y-auto h-full justify-end px-5 ">
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
