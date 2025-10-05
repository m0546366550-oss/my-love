
import React from 'react';
import { Role, Message } from '../types';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.role === Role.USER;

  const bubbleClasses = isUser
    ? 'bg-[#dcf8c6] self-end'
    : 'bg-white self-start';
  
  const containerClasses = isUser ? 'justify-end' : 'justify-start';

  return (
    <div className={`flex w-full px-4 my-1 ${containerClasses}`}>
      <div
        className={`max-w-xl md:max-w-2xl px-4 py-2 rounded-lg shadow-sm ${bubbleClasses}`}
      >
        <p className="text-gray-800 whitespace-pre-wrap">{message.text}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
