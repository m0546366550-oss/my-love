import React, { useState, KeyboardEvent } from 'react';
import { SendIcon } from './icons';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, isLoading }) => {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() && !isLoading) {
      onSendMessage(input.trim());
      setInput('');
    }
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="bg-[#f0f0f0] p-4 flex items-center gap-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder={isLoading ? "Gemini is typing..." : "Type a message"}
        className="flex-grow p-3 rounded-full bg-[#202c33] text-white placeholder:text-gray-400 border-none focus:outline-none focus:ring-2 focus:ring-[#00a884]"
        disabled={isLoading}
      />
      <button
        onClick={handleSend}
        disabled={isLoading || !input.trim()}
        className="bg-[#075e54] text-white p-3 rounded-full disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-[#005e54] transition-colors"
      >
        <SendIcon className="w-6 h-6" />
      </button>
    </div>
  );
};

export default ChatInput;