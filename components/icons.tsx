
import React from 'react';

export const SendIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
  </svg>
);

export const SaveIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M19.95 21a.75.75 0 01-.75-.75V12.382a3 3 0 00-.432-1.64l-2.286-3.81a.75.75 0 00-1.29.772l2.286 3.81a1.5 1.5 0 01.216.82v7.875a.75.75 0 01-.75.75h-3a.75.75 0 01-.75-.75V12a.75.75 0 00-.75-.75H9.75a.75.75 0 00-.75.75v8.25a.75.75 0 01-.75.75h-3a.75.75 0 01-.75-.75V4.5a.75.75 0 01.75-.75h5.379a2.25 2.25 0 011.591.659l2.121 2.121a2.25 2.25 0 01.659 1.591v2.879a.75.75 0 001.5 0V9a.75.75 0 00-.22-.53l-2.121-2.121a3.75 3.75 0 00-2.652-1.1H4.5a2.25 2.25 0 00-2.25 2.25v15A2.25 2.25 0 004.5 21h15.45z"
      clipRule="evenodd"
    />
    <path d="M13.875 18.75a.75.75 0 000-1.5h-3.75a.75.75 0 000 1.5h3.75z" />
  </svg>
);

export const NewChatIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
      clipRule="evenodd"
    />
  </svg>
);

export const GeminiIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    className={className} 
    viewBox="0 0 256 256" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M128 26.54c-11.83 0-21.42 9.59-21.42 21.42s9.59 21.42 21.42 21.42a21.42 21.42 0 1 0 0-42.84zm64.29 64.28a21.42 21.42 0 1 0-42.84 0 21.42 21.42 0 0 0 42.84 0zm-21.43 85.72c-11.83 0-21.43 9.6-21.43 21.43s9.6 21.43 21.43 21.43 21.43-9.6 21.43-21.43-9.6-21.43-21.43-21.43z" fill="#4285F4"/>
    <path d="M128 26.54a21.42 21.42 0 0 1 21.42 21.42v159.9a21.42 21.42 0 1 1-42.84 0V47.96c0-11.83 9.59-21.42 21.42-21.42z" fill="#34A853"/>
  </svg>
);
