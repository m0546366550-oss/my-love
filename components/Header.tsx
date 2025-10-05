
import React from 'react';
import { SaveIcon, NewChatIcon, GeminiIcon } from './icons';

interface HeaderProps {
  onNewChat: () => void;
  onSaveChat: () => void;
}

const Header: React.FC<HeaderProps> = ({ onNewChat, onSaveChat }) => {
  return (
    <header className="bg-[#005e54] text-white p-3 flex justify-between items-center shadow-md z-10">
      <div className="flex items-center gap-3">
        <div className="bg-white rounded-full p-1">
          <GeminiIcon className="w-8 h-8"/>
        </div>
        <h1 className="text-xl font-semibold">Gemini Chat</h1>
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={onSaveChat}
          className="p-2 rounded-full hover:bg-white/20 transition-colors"
          title="Save Conversation"
        >
          <SaveIcon className="w-6 h-6" />
        </button>
        <button
          onClick={onNewChat}
          className="p-2 rounded-full hover:bg-white/20 transition-colors"
          title="New Conversation"
        >
          <NewChatIcon className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
};

export default Header;
