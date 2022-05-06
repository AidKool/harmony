import React, { useRef } from 'react';
import { AiOutlineSend } from 'react-icons/ai';

import { useChatContext } from '../../store/chatContext';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_MESSAGE } from '../../utils/mutations';
import { GET_ME } from '../../utils/queries';
import { useMessageContext } from '../../store/messageContext';

import './messageInput.css';

function MessageInput() {
  const { activeChat, setActiveChat } = useChatContext();
  const [addMessage, { error }] = useMutation(ADD_MESSAGE);

  const { loading: userLoading, data: userRawData } = useQuery(GET_ME);
  const userData = userRawData?.me || {};

  const { contact, setContact } = useMessageContext();

  const messageRef = useRef();

  async function handleFormSubmit(event) {
    event.preventDefault();

    const message = messageRef.current.value;

    try {
      await addMessage({
        variables: {
          sender: userData._id,
          receiver: contact._id,
          message,
          chatId: activeChat,
        },
      });
    } catch (error) {
      throw new Error(error.message);
    }
    messageRef.current.value = '';
  }

  return (
    <form className="py-4 flex justify-center" onSubmit={handleFormSubmit}>
      <input
        type="text"
        ref={messageRef}
        name="message"
        id="message"
        placeholder="Type your message"
        className="text-input rounded-3xl ml-5 px-5 bg-gray-200 focus:outline-none"
      />
      <button type="submit" className="bg-blue-600 ml-4 mr-5 p-2 rounded-full">
        <AiOutlineSend className="text-2xl text-white" />
      </button>
    </form>
  );
}

export default MessageInput;
