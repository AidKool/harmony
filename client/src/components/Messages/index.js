import React, { useEffect, useState } from 'react';
import { useChatContext } from '../../store/chatContext';
import { useQuery, useLazyQuery } from '@apollo/client';

import { GET_ME, GET_CHAT } from '../../utils/queries';

import './messages.css';

const messages = [
  {
    id: 100,
    sender: 'A',
    receiver: 'B',
    date: new Date('2022-03-15T03:24:00'),
    message: 'hi there!',
  },
  {
    id: 101,
    sender: 'B',
    receiver: 'A',
    date: new Date('2022-03-15T03:24:20'),
    message: "yoyoyo what's up?",
  },
  // {
  //   id: 103,
  //   sender: 'A',
  //   receiver: 'B',
  //   date: new Date('2022-03-15T03:24:50'),
  //   message: 'have you heard? JavaScript is being discontinued!',
  // },
  // {
  //   id: 104,
  //   sender: 'B',
  //   receiver: 'A',
  //   date: new Date('2022-03-15T03:25:24'),
  //   message: 'are you kidding me?',
  // },
  // {
  //   id: 105,
  //   sender: 'B',
  //   receiver: 'A',
  //   date: new Date('2022-03-15T03:25:24'),
  //   message: 'what are we going to do now??',
  // },
  // {
  //   id: 106,
  //   sender: 'A',
  //   receiver: 'B',
  //   date: new Date('2022-03-15T03:25:54'),
  //   message: 'first cry',
  // },
  // {
  //   id: 107,
  //   sender: 'A',
  //   receiver: 'B',
  //   date: new Date('2022-03-15T03:26:14'),
  //   message: 'then I think we should learn PHP',
  // },
  // {
  //   id: 108,
  //   sender: 'A',
  //   receiver: 'B',
  //   date: new Date('2022-03-15T03:26:44'),
  //   message: "also apparently they're going to rewrite JQuery to use PHP instead. we should learn that!",
  // },
  // {
  //   id: 109,
  //   sender: 'B',
  //   receiver: 'A',
  //   date: new Date('2022-03-15T03:27:24'),
  //   message: 'sounds like a plan!',
  // },
  // {
  //   id: 110,
  //   sender: 'B',
  //   receiver: 'A',
  //   date: new Date('2022-03-15T03:27:44'),
  //   message: 'we should make a course to teach the new and upgraded JQuery and sell it online',
  // },
  // {
  //   id: 111,
  //   sender: 'A',
  //   receiver: 'B',
  //   date: new Date('2022-03-15T03:28:24'),
  //   message: 'great idea!',
  // },
  // {
  //   id: 112,
  //   sender: 'A',
  //   receiver: 'B',
  //   date: new Date('2022-04-23T13:28:24'),
  //   message: 'look at the number of sales!',
  // },
  // {
  //   id: 113,
  //   sender: 'B',
  //   receiver: 'A',
  //   date: new Date('2022-04-23T13:29:24'),
  //   message: 'I told you everybody would love PHQuery!',
  // },
  // {
  //   id: 114,
  //   sender: 'A',
  //   receiver: 'B',
  //   date: new Date(),
  //   message: 'we are millionaires!',
  // },
  // {
  //   id: 115,
  //   sender: 'B',
  //   receiver: 'A',
  //   date: new Date('2022-03-15T03:27:44'),
  //   message: 'we should make a course to teach the new and upgraded JQuery and sell it online',
  // },
  // {
  //   id: 116,
  //   sender: 'A',
  //   receiver: 'B',
  //   date: new Date('2022-03-15T03:28:24'),
  //   message: 'great idea!',
  // },
  // {
  //   id: 117,
  //   sender: 'A',
  //   receiver: 'B',
  //   date: new Date('2022-04-23T13:28:24'),
  //   message: 'look at the number of sales!',
  // },
  // {
  //   id: 118,
  //   sender: 'B',
  //   receiver: 'A',
  //   date: new Date('2022-04-23T13:29:24'),
  //   message: 'I told you everybody would love PHQuery!',
  // },
  // {
  //   id: 119,
  //   sender: 'A',
  //   receiver: 'B',
  //   date: new Date(),
  //   message: 'we are millionaires!',
  // },
];

const user = 'A';

function Messages() {
  const { loading: userLoading, data: userRawData } = useQuery(GET_ME);
  const userData = userRawData?.me || {};
  console.log('me:', userData);

  const { activeChat, setActiveChat } = useChatContext();

  const [getChat, { loading, data }] = useLazyQuery(GET_CHAT);
  const chatData = data?.getChat || [];

  const [contact, setContact] = useState({});

  console.log('chatData:', chatData);

  useEffect(() => {
    getChat({
      variables: {
        id: activeChat,
      },
    });
    setContact(() => {
      if (chatData && chatData.length > 0 && chatData.users[0]._id === userData._id) {
        return chatData.users[1];
      }
      return chatData.users[0];
    });
  }, [activeChat, getChat]);

  return (
    <div className="px-5 flex flex-col chat-height">
      <header className="py-3">
        <h2>Person 1</h2>
      </header>
      <div className="flex flex-col gap-y-3 overflow-y-auto h-full justify-end">
        {chatData.messages &&
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
