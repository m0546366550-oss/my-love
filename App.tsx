
import React, { useState, useEffect, useRef } from 'react';
import { Chat } from '@google/genai';
import { Message, Role } from './types';
import { startChat } from './services/geminiService';
import Header from './components/Header';
import ChatMessage from './components/ChatMessage';
import ChatInput from './components/ChatInput';

const App: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const chatRef = useRef<Chat | null>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const initChat = () => {
    try {
      chatRef.current = startChat();
      setMessages([
        {
          role: Role.MODEL,
          text: "Hello! I'm Gemini. How can I help you today?",
        },
      ]);
      setError(null);
    } catch (e) {
      setError(
        e instanceof Error
          ? e.message
          : 'An unexpected error occurred during initialization.'
      );
      console.error(e);
    }
  };
  
  useEffect(() => {
    initChat();
  }, []);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async (prompt: string) => {
    if (!chatRef.current) {
      setError("Chat is not initialized. Please refresh the page.");
      return;
    }

    const newUserMessage: Message = { role: Role.USER, text: prompt };
    setMessages((prevMessages) => [...prevMessages, newUserMessage]);
    setIsLoading(true);
    setError(null);

    try {
      const response = await chatRef.current.sendMessage({ message: prompt });
      const modelMessage: Message = { role: Role.MODEL, text: response.text };
      setMessages((prevMessages) => [...prevMessages, modelMessage]);
    } catch (e) {
      const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred.';
      setError(`Failed to get response from Gemini: ${errorMessage}`);
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNewChat = () => {
    initChat();
  };

  const handleSaveChat = () => {
    if (messages.length === 0) return;

    const formattedConversation = messages
      .map((msg) => `${msg.role === Role.USER ? 'You' : 'Gemini'}: ${msg.text}`)
      .join('\n\n');

    const blob = new Blob([formattedConversation], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `gemini-chat-${new Date().toISOString()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const TypingIndicator: React.FC = () => (
    <div className="flex justify-start px-4 my-1">
      <div className="bg-white self-start px-4 py-3 rounded-lg shadow-sm flex items-center space-x-2">
        <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse [animation-delay:-0.3s]"></div>
        <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse [animation-delay:-0.15s]"></div>
        <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
      </div>
    </div>
  );

  return (
    <div className="h-screen w-screen flex flex-col antialiased text-gray-800">
      <div 
        className="flex-1 flex flex-col bg-repeat"
        style={{ backgroundImage: `url('https://www.toptal.com/designers/subtlepatterns/uploads/whatsapp.png')` }}
      >
        <Header onNewChat={handleNewChat} onSaveChat={handleSaveChat} />
        <main
          ref={chatContainerRef}
          className="flex-1 overflow-y-auto p-4 space-y-2"
        >
          {messages.map((msg, index) => (
            <ChatMessage key={index} message={msg} />
          ))}
          {isLoading && <TypingIndicator />}
          {error && (
             <div className="flex justify-center">
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative max-w-xl" role="alert">
                    <strong className="font-bold">Error: </strong>
                    <span className="block sm:inline">{error}</span>
                </div>
             </div>
          )}
        </main>
        <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default App;
